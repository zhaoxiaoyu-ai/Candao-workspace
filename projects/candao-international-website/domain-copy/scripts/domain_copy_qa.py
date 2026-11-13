#!/usr/bin/env python3
import argparse
import json
import re
from pathlib import Path


METRIC_RE = re.compile(
    r"(?<![A-Za-z0-9])(?:\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?)(?:\s?(?:%|K\+?|M\+?|B\+?|\+|万元|萬|元|Order/second|order/second)|%|K\+?|M\+?|B\+?)?(?:\s?up)?",
    re.IGNORECASE,
)


def load_json(path):
    return json.loads(Path(path).read_text(encoding="utf-8"))


def flatten_allowed_metrics(glossary):
    allowed = set()
    for metric in glossary.get("allowed_metrics", []):
        for value in metric.get("values", []):
            allowed.add(str(value))
            allowed.add(str(value).replace(" ", ""))
    return allowed


def collect_terms(glossary):
    protected = set(glossary.get("protected_terms", []))
    forbidden_replacements = []
    for term in glossary.get("standard_terms", []):
        protected.add(term.get("term", ""))
        forbidden_replacements.extend(term.get("forbidden_replacements", []))
    return protected, [x for x in forbidden_replacements if x]


def contains_any(text, phrases):
    return [phrase for phrase in phrases if phrase and phrase in text]


def case_sensitive_term_issues(item, glossary):
    text = item.get("text", "")
    rendered_text = item.get("rendered_text", "")
    css_text = item.get("css_text", "")
    issues = []

    for term_rule in glossary.get("case_sensitive_terms", []):
        term = term_rule.get("term", "")
        forbidden_forms = [x for x in term_rule.get("forbidden_forms", []) if x]

        for forbidden in forbidden_forms:
            if forbidden in text:
                issues.append({
                    "code": "case_sensitive_term_mismatch",
                    "message": f"产品名或术语大小写错误：应使用 `{term}`，不应使用 `{forbidden}`。"
                })
            if rendered_text and forbidden in rendered_text:
                issues.append({
                    "code": "case_sensitive_render_mismatch",
                    "message": f"渲染结果中的产品名或术语大小写错误：应显示 `{term}`，不应显示 `{forbidden}`。"
                })

    risky_transform = re.search(r"text-transform\s*:\s*(uppercase|lowercase|capitalize)", css_text, re.IGNORECASE)
    if risky_transform:
        has_case_sensitive_term = item.get("checks_style_case_sensitive_terms") or any(
            term_rule.get("term", "") in text
            for term_rule in glossary.get("case_sensitive_terms", [])
        )
        if has_case_sensitive_term:
            issues.append({
                "code": "case_sensitive_style_transform",
                "message": f"样式层使用 `{risky_transform.group(0)}`，可能改写大小写敏感产品名。"
            })

    return issues


def brand_display_issues(item, glossary):
    text = item.get("text", "")
    locale = item.get("locale", "")
    if item.get("allow_english_brand") or str(locale).lower().startswith("en"):
        return []

    policy = glossary.get("brand_display_policy", {})
    default_zh = policy.get("default_zh_display", "餐道")
    scrubbed = text
    for allowed in policy.get("allowed_candao_contexts", []):
        scrubbed = scrubbed.replace(allowed, "")

    issues = []
    for phrase in ["Candao", "candao", "CANDAO", "Can Dao"]:
        if phrase in scrubbed:
            issues.append({
                "code": "brand_display_mismatch",
                "message": f"中文 / 繁體中文默认品牌显示应使用「{default_zh}」，不应使用：{phrase}"
            })
    return issues


def localized_display_term_issues(item, glossary):
    locale = str(item.get("locale", "")).lower()
    if item.get("allow_english_term") or item.get("allow_source_quote") or item.get("allow_evidence_quote"):
        return []
    if locale.startswith("en"):
        return []

    issues = []
    texts = [
        ("text", item.get("text", "")),
        ("rendered_text", item.get("rendered_text", "")),
    ]
    for rule in glossary.get("localized_display_terms", []):
        source_term = rule.get("source_term", "")
        if not source_term:
            continue
        replacement = rule.get("zh_hant") or rule.get("zh_hans") or ""
        for field, value in texts:
            if value and source_term in value:
                issues.append({
                    "code": "localized_display_term_mismatch",
                    "message": f"中文 / 繁體中文生产稿应使用「{replacement}」，不应直接展示 `{source_term}`。",
                    "field": field
                })
    return issues


def metric_is_allowed(metric, allowed):
    compact = metric.replace(" ", "")
    if metric in allowed or compact in allowed:
        return True
    if metric.isdigit() and len(metric) <= 4:
        return True
    return False


def autofix_text(text, glossary):
    fixed = text
    changes = []
    for item in glossary.get("discouraged_words", []):
        word = item.get("word")
        replacement = item.get("replacement")
        if word and replacement and word in fixed:
            fixed = fixed.replace(word, replacement)
            changes.append({"from": word, "to": replacement})
    return fixed, changes


def qa_item(item, glossary):
    text = item.get("text", "")
    issues = []
    warnings = []
    protected, forbidden_replacements = collect_terms(glossary)
    allowed_metrics = flatten_allowed_metrics(glossary)

    if not item.get("role"):
        issues.append({"code": "missing_role", "message": "缺少目标用户角色。"})

    if not item.get("page_task"):
        issues.append({"code": "missing_page_task", "message": "缺少页面任务。"})

    generic_hits = contains_any(text, glossary.get("generic_phrases", []))
    for phrase in generic_hits:
        issues.append({"code": "generic_expression", "message": f"命中 AI 泛化表达：{phrase}"})

    discouraged_hits = contains_any(text, [x.get("word", "") for x in glossary.get("discouraged_words", [])])
    for phrase in discouraged_hits:
        issues.append({"code": "discouraged_word", "message": f"命中不推荐用词：{phrase}"})

    forbidden_hits = contains_any(text, forbidden_replacements + glossary.get("forbidden_unconfirmed_claims", []))
    for phrase in forbidden_hits:
        issues.append({"code": "forbidden_expression", "message": f"命中禁止或未确认表达：{phrase}"})

    issues.extend(case_sensitive_term_issues(item, glossary))
    issues.extend(brand_display_issues(item, glossary))
    issues.extend(localized_display_term_issues(item, glossary))

    for metric in METRIC_RE.findall(text):
        metric = metric.strip()
        if metric and re.search(r"[%KMB+]|万元|萬|Order/second|order/second", metric, re.IGNORECASE):
            if not metric_is_allowed(metric, allowed_metrics):
                issues.append({"code": "undefined_metric", "message": f"使用未定义指标或数值：{metric}"})

    for required in item.get("must_include", []):
        if required not in text:
            issues.append({"code": "missing_required_info", "message": f"缺少必须信息：{required}"})

    if item.get("approved_and_locked"):
        locked_text = item.get("locked_text", "")
        if text != locked_text:
            issues.append({"code": "locked_copy_changed", "message": "approved_and_locked 文案被改写。"})

    source_text = item.get("source_text")
    if source_text:
        source_len = len(source_text)
        current_len = len(text)
        if current_len < int(source_len * 0.75):
            warnings.append({
                "code": "possible_prototype_reduction",
                "message": "当前文本比来源文本短超过 25%，需要确认是否删减业务对象、状态或条件。"
            })

    role = item.get("role", "")
    if role not in ["决策者", "总部运营", "门店经理", "门店", "IT", "配送主管", "财务", "管理层", "市场", "顾客", "采购方", "销售", "支持"]:
        warnings.append({"code": "unknown_role", "message": f"角色未在业务上下文中显式定义：{role}"})

    return {
        "id": item.get("id", ""),
        "component_type": item.get("component_type", ""),
        "status": "pass" if not issues else "fail",
        "issues": issues,
        "warnings": warnings,
    }


def main():
    parser = argparse.ArgumentParser(description="Run domain-copy QA against project glossary and task copy.")
    parser.add_argument("--context", required=True, help="Path to domain-copy directory.")
    parser.add_argument("--input", required=True, help="JSON input with items[].")
    parser.add_argument("--output", required=True, help="Path for JSON QA report.")
    parser.add_argument("--autofix-output", help="Optional JSON output with one-pass term replacements.")
    args = parser.parse_args()

    context = Path(args.context)
    glossary = load_json(context / "glossary.yaml")
    payload = load_json(args.input)
    items = payload.get("items", [])

    results = [qa_item(item, glossary) for item in items]
    failed = sum(1 for result in results if result["status"] == "fail")
    report = {
        "suite": payload.get("suite", ""),
        "total": len(results),
        "passed": len(results) - failed,
        "failed": failed,
        "status": "pass" if failed == 0 else "fail",
        "results": results,
    }

    Path(args.output).parent.mkdir(parents=True, exist_ok=True)
    Path(args.output).write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

    if args.autofix_output:
        fixed_items = []
        for item in items:
            fixed_text, changes = autofix_text(item.get("text", ""), glossary)
            fixed_item = dict(item)
            fixed_item["text"] = fixed_text
            fixed_item["autofix_changes"] = changes
            fixed_items.append(fixed_item)
        fixed_payload = dict(payload)
        fixed_payload["items"] = fixed_items
        Path(args.autofix_output).write_text(json.dumps(fixed_payload, ensure_ascii=False, indent=2), encoding="utf-8")

    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0 if failed == 0 else 2


if __name__ == "__main__":
    raise SystemExit(main())
