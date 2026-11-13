#!/usr/bin/env python3
from __future__ import annotations

import json
import re
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[4]
PROTO = ROOT / "tasks" / "T27" / "output" / "stitch-ready-low-fidelity"
REPORT = ROOT / "tasks" / "T31" / "output" / "qa" / "static-visual-media-low-fidelity-report.json"

HTML_PAGES = [
    "index.html",
    "home.html",
    "solutions.html",
    "platform.html",
    "integrations.html",
    "customers.html",
    "resources.html",
    "about.html",
    "demo.html",
]

FORBIDDEN = [
    "元素配置",
    "應承載",
    "素材處理",
    "低保真階段",
    "高保真階段",
    "placeholder",
    "Lorem",
    "Candao",
    "CANDAO",
    "IDMS",
    "SAAS",
    "text-transform",
]

REQUIRED_VISUALS = {
    "index.html": ["stage-motion", "page-preview"],
    "home.html": ["stage-motion", "product-shot-frame", "photo-scene", "motion-strip"],
    "solutions.html": ["concept-illustration", "motion-strip", "flow-board"],
    "platform.html": ["product-shot-frame", "video-thumb", "stage-motion"],
    "integrations.html": ["concept-illustration", "motion-strip", "connector-flow"],
    "customers.html": ["photo-scene", "product-shot-frame", "motion-strip", "metric-chart"],
    "resources.html": ["motion-strip", "photo-scene", "product-shot-frame", "route-media-grid"],
    "about.html": ["photo-scene", "cert-tile", "office-network"],
    "demo.html": ["product-shot-frame", "motion-strip", "demo-summary-card"],
}


class Parser(HTMLParser):
    pass


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def check_page(page: str) -> dict:
    html = read(PROTO / page)
    Parser().feed(html)
    failures: list[str] = []

    for token in FORBIDDEN:
        if token in html:
            failures.append(f"forbidden token: {token}")

    if re.search(r"\bIDMS\b|\bIdms\b|\bSAAS\b|\bSaas\b|\bsaas\b", html):
        failures.append("case-sensitive term is malformed")

    for term in ["餐道", "OMS"]:
        if term not in html:
            failures.append(f"missing standard term: {term}")

    for class_name in REQUIRED_VISUALS[page]:
        if class_name not in html:
            failures.append(f"missing visual class: {class_name}")

    if page != "index.html" and 'href="demo.html"' not in html:
        failures.append("missing demo path")

    return {
        "page": page,
        "status": "fail" if failures else "pass",
        "failures": failures,
        "visuals_checked": REQUIRED_VISUALS[page],
    }


def main() -> None:
    css = read(PROTO / "assets" / "stitch-ready.css")
    failures: list[str] = []
    if "/* T31 visual media layer */" not in css:
        failures.append("missing T31 CSS marker")
    if "text-transform" in css:
        failures.append("CSS contains text-transform")

    results = [check_page(page) for page in HTML_PAGES]
    failed = [item for item in results if item["status"] == "fail"]
    status = "fail" if failures or failed else "pass"
    report = {
        "suite": "T31 visual media low-fidelity static QA",
        "status": status,
        "css_failures": failures,
        "total": len(results),
        "passed": len(results) - len(failed),
        "failed": len(failed),
        "results": results,
    }
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))
    if status != "pass":
        raise SystemExit(2)


if __name__ == "__main__":
    main()
