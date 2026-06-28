#!/usr/bin/env python3
from __future__ import annotations

import argparse
import asyncio
import base64
import os
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any
from urllib.parse import parse_qs, unquote, urlparse

import httpx


if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

BASE_URL = "https://lanhuapp.com"
DEFAULT_TIMEOUT_SECONDS = 30.0
UNGROUPED_DIR = "_ungrouped"


@dataclass(frozen=True)
class ProjectRef:
    url: str
    project_id: str
    team_id: str | None


@dataclass(frozen=True)
class LanhuUrlRef:
    url: str
    project_id: str | None
    team_id: str | None


@dataclass(frozen=True)
class Sector:
    id: str
    parent_id: str | None
    name: str
    path: tuple[str, ...]
    order: int


@dataclass(frozen=True)
class DesignImage:
    id: str
    name: str
    url: str
    sector_paths: tuple[tuple[str, ...], ...]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Download Lanhu design images into project/group folders."
    )
    parser.add_argument(
        "--url",
        action="append",
        default=[],
        help="Lanhu project URL. Can be passed multiple times.",
    )
    parser.add_argument(
        "--urls-file",
        help="Text file containing one Lanhu project URL per line.",
    )
    parser.add_argument(
        "--output",
        default="downloads",
        help="Output root directory. Default: ./downloads",
    )
    parser.add_argument(
        "--cookie",
        help="Lanhu Cookie header. Prefer LANHU_COOKIE or --cookie-file to avoid shell history.",
    )
    parser.add_argument(
        "--cookie-file",
        help="Path to a text file containing the Lanhu Cookie header.",
    )
    parser.add_argument(
        "--email",
        help="Lanhu account email. Prefer LANHU_EMAIL to avoid shell history.",
    )
    parser.add_argument(
        "--password",
        help="Lanhu account password. Prefer LANHU_PASSWORD to avoid shell history.",
    )
    parser.add_argument(
        "--concurrency",
        type=int,
        default=4,
        help="Maximum parallel image downloads. Default: 4",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print planned downloads without creating folders or downloading files.",
    )
    parser.add_argument(
        "--timeout",
        type=float,
        default=DEFAULT_TIMEOUT_SECONDS,
        help=f"HTTP timeout in seconds. Default: {DEFAULT_TIMEOUT_SECONDS}",
    )
    return parser.parse_args()


def read_project_urls(args: argparse.Namespace) -> list[str]:
    urls: list[str] = [url.strip() for url in args.url if url.strip()]
    if args.urls_file:
        urls_file = Path(args.urls_file)
        if not urls_file.exists():
            raise FileNotFoundError(f"URLs file not found: {urls_file}")
        for line in urls_file.read_text(encoding="utf-8").splitlines():
            value = line.strip()
            if value and not value.startswith("#"):
                urls.append(value)
    if not urls:
        raise ValueError("Pass at least one --url or --urls-file.")
    return urls


def read_cookie(args: argparse.Namespace) -> str:
    if args.cookie:
        return args.cookie.strip()
    if args.cookie_file:
        cookie_file = Path(args.cookie_file)
        if not cookie_file.exists():
            raise FileNotFoundError(f"Cookie file not found: {cookie_file}")
        return cookie_file.read_text(encoding="utf-8").strip()
    return os.getenv("LANHU_COOKIE", "").strip()


def read_login(args: argparse.Namespace) -> tuple[str, str]:
    email = (args.email or os.getenv("LANHU_EMAIL", "")).strip()
    password = (args.password or os.getenv("LANHU_PASSWORD", "")).strip()
    return email, password


def parse_lanhu_url_ref(url: str) -> LanhuUrlRef:
    parsed = urlparse(url)
    query_text = parsed.query

    if parsed.fragment:
        fragment = parsed.fragment
        if "?" in fragment:
            query_text = fragment.split("?", 1)[1]
        elif "=" in fragment:
            query_text = fragment

    params = parse_qs(query_text, keep_blank_values=True)
    project_id = first_param(params, "pid") or first_param(params, "project_id")
    team_id = first_param(params, "tid") or first_param(params, "team_id")

    return LanhuUrlRef(url=url, project_id=project_id, team_id=team_id)


def parse_project_ref(url: str) -> ProjectRef:
    ref = parse_lanhu_url_ref(url)
    project_id = ref.project_id

    if not project_id:
        raise ValueError(f"Could not parse project id from Lanhu URL: {url}")

    return ProjectRef(url=url, project_id=project_id, team_id=ref.team_id)


def first_param(params: dict[str, list[str]], name: str) -> str | None:
    values = params.get(name)
    if not values:
        return None
    value = values[0].strip()
    return value or None


def safe_path_part(value: str | None, fallback: str) -> str:
    raw = (value or fallback).strip() or fallback
    raw = unquote(raw)
    raw = re.sub(r'[<>:"/\\|?*\x00-\x1f]', "_", raw)
    raw = re.sub(r"\s+", " ", raw).strip()
    raw = raw.rstrip(". ")
    if raw in {"", ".", ".."}:
        return fallback
    reserved = {
        "CON",
        "PRN",
        "AUX",
        "NUL",
        "COM1",
        "COM2",
        "COM3",
        "COM4",
        "COM5",
        "COM6",
        "COM7",
        "COM8",
        "COM9",
        "LPT1",
        "LPT2",
        "LPT3",
        "LPT4",
        "LPT5",
        "LPT6",
        "LPT7",
        "LPT8",
        "LPT9",
    }
    if raw.upper() in reserved:
        return f"_{raw}"
    return raw[:150]


def extension_from_url(url: str) -> str:
    path = urlparse(url.split("?", 1)[0]).path.lower()
    for ext in (".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"):
        if path.endswith(ext):
            return ext
    return ".png"


def extension_from_content_type(content_type: str | None, fallback: str) -> str:
    if not content_type:
        return fallback
    content_type = content_type.split(";", 1)[0].strip().lower()
    return {
        "image/png": ".png",
        "image/jpeg": ".jpg",
        "image/webp": ".webp",
        "image/gif": ".gif",
        "image/svg+xml": ".svg",
    }.get(content_type, fallback)


def normalize_api_success(payload: dict[str, Any]) -> bool:
    return str(payload.get("code")) in {"0", "00000"}


def build_sector_maps(sectors_payload: list[dict[str, Any]]) -> dict[str, tuple[str, ...]]:
    sector_by_id = {
        str(sector["id"]): sector
        for sector in sectors_payload
        if sector.get("id")
    }
    path_cache: dict[str, tuple[str, ...]] = {}

    def build_path(sector_id: str, trail: frozenset[str] = frozenset()) -> tuple[str, ...]:
        if sector_id in path_cache:
            return path_cache[sector_id]
        sector = sector_by_id.get(sector_id)
        if not sector:
            return tuple()
        if sector_id in trail:
            return (safe_path_part(str(sector.get("name") or sector_id), sector_id),)

        current_name = safe_path_part(str(sector.get("name") or sector_id), sector_id)
        parent_id = str(sector.get("parent_id") or "")
        if parent_id and parent_id in sector_by_id:
            path = build_path(parent_id, trail | {sector_id}) + (current_name,)
        else:
            path = (current_name,)
        path_cache[sector_id] = path
        return path

    image_to_paths: dict[str, list[tuple[str, ...]]] = {}
    for sector in sectors_payload:
        sector_id = str(sector.get("id") or "")
        if not sector_id:
            continue
        sector_path = build_path(sector_id)
        for image_id in sector.get("images") or []:
            if image_id:
                image_to_paths.setdefault(str(image_id), []).append(sector_path)

    return {
        image_id: tuple(paths[0])
        for image_id, paths in image_to_paths.items()
        if paths
    }


class LanhuClient:
    def __init__(self, cookie: str, timeout: float) -> None:
        headers = {
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0 Safari/537.36"
            ),
            "Referer": f"{BASE_URL}/web/",
            "Accept": "application/json, text/plain, */*",
            "request-from": "web",
            "real-path": "/item/project/stage",
        }
        if cookie:
            headers["Cookie"] = cookie
        self.client = httpx.AsyncClient(
            timeout=timeout,
            headers=headers,
            follow_redirects=True,
        )

    async def close(self) -> None:
        await self.client.aclose()

    async def login(self, email: str, password: str) -> None:
        response = await self.client.post(
            f"{BASE_URL}/api/account/login",
            json={"email": email, "password": password},
        )
        response.raise_for_status()
        payload = response.json()
        token = extract_login_token(payload)
        if not token:
            message = payload.get("msg") if isinstance(payload, dict) else None
            raise RuntimeError(f"Lanhu login failed: {message or payload}")
        auth_value = base64.b64encode(f"{token}:".encode("utf-8")).decode("ascii")
        self.client.headers["Authorization"] = f"Basic {auth_value}"

    async def get_team_project_refs(self, team_id: str) -> list[ProjectRef]:
        refs: list[ProjectRef] = []
        seen: set[str] = set()
        page = 1
        page_size = 100

        while True:
            response = await self.client.get(
                f"{BASE_URL}/api/account/user_projects",
                params={
                    "team_id": team_id,
                    "pageNo": page,
                    "pageSize": page_size,
                },
            )
            response.raise_for_status()
            payload = response.json()
            if not normalize_api_success(payload) and "result" not in payload:
                raise RuntimeError(
                    f"Lanhu team projects API error: {payload.get('msg') or payload}"
                )

            projects = payload.get("result")
            if projects is None and isinstance(payload.get("data"), dict):
                projects = payload["data"].get("result")
            if not isinstance(projects, list):
                projects = []

            for project in projects:
                project_id = str(project.get("id") or project.get("project_id") or "")
                if not project_id or project_id in seen:
                    continue
                seen.add(project_id)
                refs.append(
                    ProjectRef(
                        url=(
                            f"{BASE_URL}/web/#/item/project/stage"
                            f"?tid={team_id}&pid={project_id}"
                        ),
                        project_id=project_id,
                        team_id=team_id,
                    )
                )

            has_next = bool(payload.get("has_next"))
            if isinstance(payload.get("data"), dict):
                has_next = has_next or bool(payload["data"].get("has_next"))
            if not has_next:
                break
            page += 1

        return refs

    async def get_project_images(self, ref: ProjectRef) -> tuple[str, list[DesignImage]]:
        sector_paths = await self.get_sector_paths(ref)
        params = {
            "project_id": ref.project_id,
            "dds_status": "1",
            "position": "1",
            "show_cb_src": "1",
            "comment": "1",
        }
        if ref.team_id:
            params["team_id"] = ref.team_id

        response = await self.client.get(f"{BASE_URL}/api/project/images", params=params)
        response.raise_for_status()
        payload = response.json()
        if not normalize_api_success(payload):
            raise RuntimeError(f"Lanhu images API error: {payload.get('msg') or payload}")

        data = payload.get("data") or {}
        project_name = str(data.get("name") or ref.project_id)
        designs: list[DesignImage] = []
        for item in data.get("images") or []:
            image_id = str(item.get("id") or "")
            image_name = str(item.get("name") or image_id)
            image_url = str(item.get("url") or "")
            if not image_id or not image_name or not image_url:
                continue
            sector_path = sector_paths.get(image_id, (UNGROUPED_DIR,))
            designs.append(
                DesignImage(
                    id=image_id,
                    name=image_name,
                    url=image_url,
                    sector_paths=(sector_path,),
                )
            )
        return project_name, designs

    async def get_sector_paths(self, ref: ProjectRef) -> dict[str, tuple[str, ...]]:
        params = {"project_id": ref.project_id}
        if ref.team_id:
            params["team_id"] = ref.team_id
        response = await self.client.get(
            f"{BASE_URL}/api/project/project_sectors",
            params=params,
        )
        response.raise_for_status()
        payload = response.json()
        if not normalize_api_success(payload):
            return {}
        sectors = (payload.get("data") or {}).get("sectors") or []
        return build_sector_maps(sectors)


def build_target_path(output_root: Path, project_name: str, design: DesignImage) -> Path:
    project_dir = safe_path_part(project_name, "project")
    sector_path = design.sector_paths[0] if design.sector_paths else (UNGROUPED_DIR,)
    safe_sectors = [safe_path_part(part, UNGROUPED_DIR) for part in sector_path]
    filename = safe_path_part(design.name, design.id) + extension_from_url(design.url)
    return output_root / project_dir / Path(*safe_sectors) / filename


def extract_login_token(payload: dict[str, Any]) -> str | None:
    candidates: list[Any] = [payload]
    for key in ("data", "result"):
        value = payload.get(key)
        if isinstance(value, dict):
            candidates.append(value)

    for candidate in candidates:
        token = candidate.get("token") if isinstance(candidate, dict) else None
        if token:
            return str(token)
    return None


async def resolve_project_refs(client: LanhuClient, urls: list[str]) -> list[ProjectRef]:
    refs: list[ProjectRef] = []
    seen: set[str] = set()

    for url in urls:
        parsed = parse_lanhu_url_ref(url)
        if parsed.project_id:
            project_ref = ProjectRef(
                url=url,
                project_id=parsed.project_id,
                team_id=parsed.team_id,
            )
            if project_ref.project_id not in seen:
                refs.append(project_ref)
                seen.add(project_ref.project_id)
            continue

        if not parsed.team_id:
            raise ValueError(f"Could not parse team id or project id from Lanhu URL: {url}")

        team_refs = await client.get_team_project_refs(parsed.team_id)
        if not team_refs:
            raise RuntimeError(f"No projects found for Lanhu team id: {parsed.team_id}")
        for project_ref in team_refs:
            if project_ref.project_id not in seen:
                refs.append(project_ref)
                seen.add(project_ref.project_id)

    return refs


async def download_one(
    client: httpx.AsyncClient,
    design: DesignImage,
    target_path: Path,
    dry_run: bool,
) -> str:
    if target_path.exists():
        return f"SKIP existing: {target_path}"
    if dry_run:
        return f"PLAN {target_path}"

    target_path.parent.mkdir(parents=True, exist_ok=True)
    source_url = design.url.split("?", 1)[0]
    async with client.stream("GET", source_url) as response:
        response.raise_for_status()
        content_type_ext = extension_from_content_type(
            response.headers.get("content-type"),
            target_path.suffix,
        )
        if content_type_ext != target_path.suffix:
            target_path = target_path.with_suffix(content_type_ext)
            if target_path.exists():
                return f"SKIP existing: {target_path}"
        try:
            with target_path.open("xb") as file:
                async for chunk in response.aiter_bytes():
                    file.write(chunk)
        except FileExistsError:
            return f"SKIP existing: {target_path}"
    return f"DOWNLOADED {target_path}"


async def run() -> int:
    args = parse_args()
    urls = read_project_urls(args)
    cookie = read_cookie(args)
    email, password = read_login(args)
    if not cookie and not (email and password):
        raise ValueError(
            "Missing Lanhu auth. Set LANHU_COOKIE, pass --cookie-file, "
            "or set LANHU_EMAIL and LANHU_PASSWORD."
        )
    if args.concurrency < 1:
        raise ValueError("--concurrency must be at least 1.")

    output_root = Path(args.output).expanduser().resolve()
    client = LanhuClient(cookie=cookie, timeout=args.timeout)
    semaphore = asyncio.Semaphore(args.concurrency)

    try:
        if not cookie:
            await client.login(email, password)

        project_refs = await resolve_project_refs(client, urls)
        for ref in project_refs:
            try:
                project_name, designs = await client.get_project_images(ref)
            except Exception as exc:
                print(
                    f"ERROR project {ref.project_id}: {exc}",
                    file=sys.stderr,
                )
                continue
            print(f"PROJECT {project_name} ({len(designs)} images)")

            async def guarded_download(design: DesignImage) -> str:
                target_path = build_target_path(output_root, project_name, design)
                async with semaphore:
                    return await download_one(
                        client.client,
                        design,
                        target_path,
                        args.dry_run,
                    )

            results = await asyncio.gather(
                *(guarded_download(design) for design in designs),
                return_exceptions=True,
            )
            for result in results:
                if isinstance(result, Exception):
                    print(f"ERROR {result}", file=sys.stderr)
                else:
                    print(result)
    finally:
        await client.close()
    return 0


def main() -> int:
    try:
        return asyncio.run(run())
    except KeyboardInterrupt:
        print("Interrupted.", file=sys.stderr)
        return 130
    except Exception as exc:
        print(f"ERROR {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
