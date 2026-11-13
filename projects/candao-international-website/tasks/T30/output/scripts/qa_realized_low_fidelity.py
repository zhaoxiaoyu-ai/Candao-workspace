#!/usr/bin/env python3
from __future__ import annotations

import re
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[4]
PROTO = ROOT / "tasks" / "T27" / "output" / "stitch-ready-low-fidelity"

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

FORBIDDEN_RAW = [
    "element-guide",
    "element-reference",
    "element-overview",
    "element-module",
    "element-page",
    "元素配置",
    "應承載",
    "素材處理",
    "低保真階段",
    "高保真階段",
    "Case Evidence",
    "External Systems",
    "餐道 Platform",
    "Unified Operations",
    "OMS Workbench",
    "placeholder",
    "Lorem",
    "text-transform",
]

FORBIDDEN_TERM_PATTERNS = [
    r"\bIDMS\b",
    r"\bIdms\b",
    r"\bSAAS\b",
    r"\bSaaS\b(?!)",  # explicit no-op placeholder keeps standard term visible below
]

REQUIRED_TERMS = {
    "iDMS": "platform.html",
    "SaaS": "index.html",
    "AMS / Connector": "integrations.html",
    "OMS": "home.html",
    "CDBI": "platform.html",
}

REQUIRED_SELECTORS = {
    "index.html": ["page-preview preview-home", "page-preview preview-demo"],
    "home.html": ["logo-strip", "topology-map", "product-snapshot", "customer-name-wall"],
    "solutions.html": ["flow-board", "problem-signal"],
    "platform.html": ["product-snapshot", "video-entry-card"],
    "integrations.html": ["connector-flow", "connection-tags", "data-flow-section"],
    "customers.html": ["case-proof-card", "customer-name-wall"],
    "resources.html": ["resource-router", "resource-signal-row", "access-board", "ticket-board", "routing-canvas"],
    "about.html": ["office-network", "signal-strip", "order-workbench", "dispatch-map", "trust-band"],
    "demo.html": ["demo-summary-card", "demo-summary-grid", "field-grid"],
}


class StrictishHTMLParser(HTMLParser):
    pass


def fail(message: str) -> None:
    raise SystemExit(f"FAIL: {message}")


def text_for(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def check_parse(page: str, html: str) -> None:
    parser = StrictishHTMLParser()
    parser.feed(html)


def check_forbidden(page: str, html: str) -> None:
    for token in FORBIDDEN_RAW:
        if token in html:
            fail(f"{page} contains forbidden token: {token}")
    for pattern in [r"\bIDMS\b", r"\bIdms\b", r"\bSAAS\b", r"\bSaA\S*\b"]:
        if re.search(pattern, html):
            fail(f"{page} contains forbidden term pattern: {pattern}")
    if "Candao" in html or "CANDAO" in html:
        fail(f"{page} contains visible/internal English brand spelling")


def check_required_classes(page: str, html: str) -> None:
    for class_name in REQUIRED_SELECTORS[page]:
        if class_name not in html:
            fail(f"{page} missing realized page element: {class_name}")


def check_navigation(page: str, html: str) -> None:
    for label in ["首頁", "解決方案", "平台", "整合能力", "客戶案例", "資源", "關於餐道"]:
        if label not in html:
            fail(f"{page} missing nav label: {label}")
    if 'href="demo.html"' not in html:
        fail(f"{page} missing demo CTA/link")


def main() -> None:
    css = text_for(PROTO / "assets" / "stitch-ready.css")
    if "text-transform" in css:
        fail("CSS contains text-transform")
    if "element-guide" in css or "element-module" in css or "element-page" in css:
        fail("CSS still contains T29 element-guide styles")

    combined = []
    for page in HTML_PAGES:
        html = text_for(PROTO / page)
        combined.append(html)
        check_parse(page, html)
        check_forbidden(page, html)
        check_required_classes(page, html)
        check_navigation(page, html)

    all_html = "\n".join(combined)
    for term, page_hint in REQUIRED_TERMS.items():
        if term not in all_html:
            fail(f"Required term {term} not found; expected in or near {page_hint}")

    if all_html.count("page-preview") < 8:
        fail("index page does not expose all 8 realized previews")

    print("PASS: realized low-fidelity pages meet T30 static QA")


if __name__ == "__main__":
    main()
