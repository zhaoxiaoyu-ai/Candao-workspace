#!/usr/bin/env python3
from __future__ import annotations

import html
import json
from pathlib import Path


PROJECT_ROOT = Path("/Users/victorwong/Documents/Codex/Candao-workspace/projects/candao-international-website")
PACKAGE_ROOT = PROJECT_ROOT / "tasks/T27/output/stitch-ready-low-fidelity"
ELEMENT_MAP = PACKAGE_ROOT / "element-placement-map.json"

INDEX_START = "<!-- element-overview:start -->"
INDEX_END = "<!-- element-overview:end -->"
PAGE_START = "<!-- element-reference:start -->"
PAGE_END = "<!-- element-reference:end -->"

ELEMENT_LABELS = {
    "logo": "Logo",
    "primary_navigation": "主導航",
    "language_switch": "繁中 / EN",
    "demo_cta": "預約演示",
    "headline_block": "標題文案",
    "dual_cta": "雙 CTA",
    "product_stage": "產品舞台",
    "status_rows": "狀態列",
    "operational_topology": "營運拓撲",
    "central_platform_node": "餐道中心節點",
    "business_object_nodes": "業務對象節點",
    "five_item_rail": "五項切換 rail",
    "detail_media": "右側媒體區",
    "two_business_points": "兩條業務要點",
    "platform_cta": "平台 CTA",
    "metric_cards": "授權指標卡",
    "featured_case_card": "主案例卡",
    "named_customer_text": "實名客戶文字",
    "case_cta": "案例 CTA",
    "dark_conversion_band": "深色轉化帶",
    "scenario_map": "場景地圖",
    "converging_flow": "匯聚流程",
    "three_problem_cards": "問題卡",
    "business_object_icons": "業務圖標",
    "six_item_rail": "六項切換 rail",
    "scenario_detail_panel": "場景詳情",
    "problem_capability_result_flow": "問題-能力-結果",
    "customer_case_cta": "客戶案例 CTA",
    "scenario_to_case_hint": "場景案例提示",
    "product_media_slot": "產品媒體區",
    "business_object_list": "業務對象列表",
    "status_action_list": "狀態 / 操作列表",
    "product_mapping": "產品對應",
    "video_or_screenshot_cards": "視頻 / 截圖卡",
    "integration_cta": "整合 CTA",
    "customer_cta": "客戶案例 CTA",
    "connector_network": "Connector 網絡",
    "data_object_list": "資料對象列表",
    "suitable_context": "適合情境",
    "assessment_cta": "接入評估 CTA",
    "external_system_node": "外部系統節點",
    "connector_node": "AMS / Connector 節點",
    "destination_nodes": "目的系統節點",
    "case_story_intro": "案例開場",
    "customer_rail": "客戶切換",
    "case_detail_card": "案例詳情卡",
    "case_scope": "合作範圍",
    "case_next_step": "下一步",
    "industry_result_cards": "業態成果卡",
    "authorized_metrics": "授權指標",
    "resource_router": "資源路徑",
    "stage_cards": "階段卡",
    "stage_rail": "階段切換",
    "qa_panel": "問答面板",
    "support_cta": "支援 CTA",
    "system_object_board": "系統對象看板",
    "operation_question_cards": "營運問題卡",
    "industry_map": "業態地圖",
    "support_ticket_board": "支援查詢板",
    "media_shelf": "資料架",
    "routing_canvas": "分流畫布",
    "company_network_map": "公司網絡圖",
    "contact_cta": "聯絡 CTA",
    "timeline": "時間軸",
    "three_item_stage_switcher": "三項切換",
    "service_detail_list": "服務詳情",
    "independent_capability_sections": "獨立能力板塊",
    "low_fidelity_ui_panels": "低保真介面示意",
    "four_step_lifecycle": "四段服務流程",
    "certification_metric_band": "認證與穩定性指標",
    "resources_cta": "資源入口 CTA",
    "demo_summary_card": "演示摘要卡",
    "three_choice_cards": "三項選擇卡",
    "field_grid": "欄位網格",
    "submit_cta": "提交 CTA",
    "module_summary_panel": "模組摘要面板",
}

STATUS_LABELS = {
    "logo_ready": "Logo 已就緒",
    "product_screenshot_missing": "需真實產品截圖",
    "abstract_allowed": "可抽象表達",
    "source_backed_metrics": "授權指標",
    "customer_logo_needs_cleanup": "需整理客戶 Logo",
    "ready": "可直接表達",
    "scenario_visual_missing": "需場景素材",
    "product_video_missing": "需產品視頻",
    "company_photography_missing": "需公司圖片",
    "source_backed": "已有來源",
}

OVERVIEW_CHIPS = {
    "home": ["產品舞台", "營運拓撲", "能力 rail", "授權指標", "實名案例", "轉化 CTA"],
    "solutions": ["場景地圖", "問題卡", "場景 rail", "問題-能力-結果", "案例入口"],
    "platform": ["產品舞台", "能力 rail", "業務對象", "狀態 / 操作", "視頻 / 截圖卡", "分流 CTA"],
    "integrations": ["Connector 網絡", "系統 rail", "資料對象", "資料流向", "接入評估"],
    "customers": ["指標帶", "客戶切換", "案例卡", "業態成果", "素材位"],
    "resources": ["資源路徑", "階段問答", "接入清單", "FAQ", "支援查詢", "分流畫布"],
    "about": ["公司網絡", "時間軸", "能力分區", "服務流程", "可信指標"],
    "demo": ["演示摘要", "意圖選擇", "表單欄位", "模組摘要", "支援入口"],
}

TC_REPLACEMENTS = [
    ("建立餐道认知", "建立餐道認知"),
    ("并", "並"),
    ("访客", "訪客"),
    ("导向", "導向"),
    ("预约", "預約"),
    ("Demo、Integrations、Customers", "預約產品演示、整合能力、客戶案例"),
    ("Demo", "預約產品演示"),
    ("Integrations", "整合能力"),
    ("Customers", "客戶案例"),
    ("业务", "業務"),
    ("团队", "團隊"),
    ("餐饮", "餐飲"),
    ("营运", "營運"),
    ("运营", "營運"),
    ("说明", "說明"),
    ("让", "讓"),
    ("确认", "確認"),
    ("页", "頁"),
    ("问题", "問題"),
    ("阅读", "閱讀"),
    ("产品", "產品"),
    ("书", "書"),
    ("验证", "驗證"),
    ("对象", "對象"),
    ("资料", "資料"),
    ("边界", "邊界"),
    ("落地", "落地"),
    ("证据", "證據"),
    ("降低", "降低"),
    ("疑问", "疑問"),
    ("可信", "可信"),
    ("转化", "轉化"),
    ("转", "轉"),
    ("分流", "分流"),
    ("顶部", "頂部"),
    ("横向", "橫向"),
    ("左侧", "左側"),
    ("右侧", "右側"),
    ("双", "雙"),
    ("订单", "訂單"),
    ("门店", "門店"),
    ("对账", "對賬"),
    ("异常", "異常"),
    ("中心为", "中心為"),
    ("外围为", "外圍為"),
    ("外卖", "外賣"),
    ("自有点餐", "自有點餐"),
    ("会员", "會員"),
    ("财务", "財務"),
    ("选择", "選擇"),
    ("当前", "當前"),
    ("媒体", "媒體"),
    ("两个", "兩個"),
    ("六个", "六個"),
    ("六项", "六項"),
    ("五项", "五項"),
    ("两列", "兩列"),
    ("客户", "客戶"),
    ("缺失", "缺失"),
    ("名称", "名稱"),
    ("文字", "文字"),
    ("底部", "底部"),
    ("按钮", "按鈕"),
    ("渠道", "渠道"),
    ("汇聚", "匯聚"),
    ("流程图", "流程圖"),
    ("三张", "三張"),
    ("分别", "分別"),
    ("场景", "場景"),
    ("链路", "鏈路"),
    ("承接", "承接"),
    ("下一步", "下一步"),
    ("完整案例", "完整案例"),
    ("队列", "隊列"),
    ("售罄", "售罄"),
    ("派单", "派單"),
    ("画面", "畫面"),
    ("视频", "視頻"),
    ("封面", "封面"),
    ("系统", "系統"),
    ("网络", "網絡"),
    ("连接", "連接"),
    ("自建", "自建"),
    ("支付", "支付"),
    ("显示", "顯示"),
    ("适合情境", "適合情境"),
    ("接入评估", "接入評估"),
    ("评估", "評估"),
    ("表达", "表達"),
    ("已有", "已有"),
    ("来源", "來源"),
    ("图", "圖"),
    ("图片", "圖片"),
    ("真实", "真實"),
    ("截图", "截圖"),
    ("虚构", "虛構"),
    ("编号", "編號"),
    ("金额", "金額"),
    ("后台", "後台"),
    ("数据", "數據"),
    ("节点", "節點"),
    ("连线", "連線"),
    ("状态", "狀態"),
    ("区域", "區域"),
    ("进入", "進入"),
    ("现有", "現有"),
    ("授权", "授權"),
    ("规模", "規模"),
    ("实名", "實名"),
    ("业态", "業態"),
    ("导入", "導入"),
    ("技术", "技術"),
    ("查询", "查詢"),
    ("演进", "演進"),
    ("服务", "服務"),
    ("长期", "長期"),
    ("对应", "對應"),
    ("标题", "標題"),
    ("画", "畫"),
    ("与", "與"),
    ("问题", "問題"),
    ("能力", "能力"),
    ("结果", "結果"),
    ("不生成", "不生成"),
    ("不出现", "不出現"),
    ("不适用", "不適用"),
    ("低保真状态面板", "示意狀態面板"),
    ("低保真狀態面板", "示意狀態面板"),
    ("低保真流向图", "示意流向圖"),
    ("低保真流向圖", "示意流向圖"),
    ("低保真結構", "示意結構"),
    ("不重画真实产品 UI", "不仿造真實產品 UI"),
    ("不重畫真實產品 UI", "不仿造真實產品 UI"),
    ("假產品影片", "未授權產品影片"),
    ("无", "無"),
    ("使用", "使用"),
    ("保留", "保留"),
    ("替代", "替代"),
    ("简洁", "簡潔"),
]


def to_tc(text: str) -> str:
    result = text
    for source, target in TC_REPLACEMENTS:
        result = result.replace(source, target)
    return result


def e(text: str) -> str:
    return html.escape(text, quote=True)


def chip_list(values: list[str]) -> str:
    return "\n".join(f"                  <span>{e(value)}</span>" for value in values)


def element_names(module: dict) -> list[str]:
    return [ELEMENT_LABELS.get(item, item.replace("_", " ")) for item in module["required_elements"]]


def status_class(status: str) -> str:
    return status.replace("_", "-")


def insert_or_replace(source: str, start: str, end: str, block: str, before: str) -> str:
    wrapped = f"{start}\n{block}\n      {end}"
    if start in source and end in source:
        prefix, rest = source.split(start, 1)
        _, suffix = rest.split(end, 1)
        return prefix + wrapped + suffix
    if before not in source:
        raise ValueError(f"Cannot find insertion point: {before}")
    return source.replace(before, wrapped + "\n      " + before, 1)


def build_index_section(pages: list[dict]) -> str:
    cards = []
    for page in pages:
        chips = OVERVIEW_CHIPS.get(page["id"], [])
        cards.append(
            f"""            <article class=\"element-page-card\">
              <h3>{e(page['title'])}</h3>
              <p>{e(to_tc(page['story_role']))}</p>
              <div class=\"element-chip-grid\">
{chip_list(chips)}
              </div>
              <a class=\"button\" href=\"{e(page['file'])}\">查看本頁元素</a>
            </article>"""
        )
    return f"""      <section class=\"section element-guide\" aria-label=\"頁面元素配置總覽\">
        <div class=\"container\">
          <div class=\"element-guide-header\">
            <div>
              <p class=\"eyebrow\">元素配置總覽</p>
              <h2>每個頁面都標出下一階段應放置的元素</h2>
              <p class=\"lead\">這一層把頁面故事路徑轉成可執行的視覺元素：產品舞台、營運拓撲、場景地圖、Connector 網絡、授權指標、實名案例、資源路徑和表單分流。真實素材未到位時，只保留素材位與低保真表達，不生成看似真實的截圖、Logo 或數據。</p>
            </div>
            <a class=\"button primary\" href=\"home.html\">從首頁開始</a>
          </div>
          <div class=\"element-page-grid\">
{chr(10).join(cards)}
          </div>
        </div>
      </section>"""


def build_page_section(page: dict) -> str:
    cards = []
    for module in page["modules"]:
        names = element_names(module)
        status = module.get("asset_status", "ready")
        status_label = STATUS_LABELS.get(status, to_tc(status.replace("_", " ")))
        fallback = to_tc(module.get("fallback", "無"))
        if fallback == "無":
            fallback = "素材處理：可直接按低保真結構表達。"
        elif fallback == "不適用。":
            fallback = "素材處理：使用已授權資料，不需要替代內容。"
        else:
            fallback = f"素材處理：{fallback}"
        allowed_values = module.get("allowed_values", [])
        allowed_html = ""
        if allowed_values:
            allowed_html = (
                "              <p class=\"element-note\">授權值："
                + e(" / ".join(allowed_values))
                + "</p>\n"
            )
        cards.append(
            f"""            <article class=\"element-module-card\" id=\"{e(module['id'])}\">
              <div class=\"element-card-top\">
                <span class=\"element-status {e(status_class(status))}\">{e(status_label)}</span>
                <h3>{e(to_tc(module['section']))}</h3>
              </div>
              <p>{e(to_tc(module['placement']))}</p>
              <div class=\"element-list\">
{chip_list(names)}
              </div>
{allowed_html}              <p class=\"element-note\">{e(fallback)}</p>
            </article>"""
        )
    return f"""      <section class=\"section element-guide\" aria-label=\"{e(page['title'])}頁面元素配置\">
        <div class=\"container\">
          <div class=\"element-guide-header\">
            <div>
              <p class=\"eyebrow\">頁面元素配置</p>
              <h2>{e(page['title'])}應承載的元素</h2>
              <p class=\"lead\">{e(to_tc(page['story_role']))}下列卡片說明元素和素材處理方式；原有業務文案、產品名、授權數據和頁面敘事不得被改寫。</p>
            </div>
            <a class=\"button\" href=\"index.html\">返回總覽</a>
          </div>
          <div class=\"element-module-grid\">
{chr(10).join(cards)}
          </div>
        </div>
      </section>"""


def main() -> None:
    data = json.loads(ELEMENT_MAP.read_text(encoding="utf-8"))
    pages = data["pages"]

    index_path = PACKAGE_ROOT / "index.html"
    index_html = index_path.read_text(encoding="utf-8")
    index_html = insert_or_replace(
        index_html,
        INDEX_START,
        INDEX_END,
        build_index_section(pages),
        '<footer class="site-footer">',
    )
    index_path.write_text(index_html, encoding="utf-8")

    for page in pages:
        page_path = PACKAGE_ROOT / page["file"]
        page_html = page_path.read_text(encoding="utf-8")
        page_html = insert_or_replace(
            page_html,
            PAGE_START,
            PAGE_END,
            build_page_section(page),
            '<footer class="site-footer">',
        )
        page_path.write_text(page_html, encoding="utf-8")

    total_modules = sum(len(page["modules"]) for page in pages)
    print(json.dumps({"pages": len(pages), "modules": total_modules}, ensure_ascii=False))


if __name__ == "__main__":
    main()
