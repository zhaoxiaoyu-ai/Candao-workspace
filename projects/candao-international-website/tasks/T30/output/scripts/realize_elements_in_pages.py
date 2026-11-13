#!/usr/bin/env python3
from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[4]
PROTO = ROOT / "tasks" / "T27" / "output" / "stitch-ready-low-fidelity"
CSS_PATH = PROTO / "assets" / "stitch-ready.css"

PAGES = [
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


def remove_t29_instruction_blocks(html: str) -> str:
    html = re.sub(
        r"\n\s*<!-- element-overview:start -->.*?<!-- element-overview:end -->",
        "",
        html,
        flags=re.S,
    )
    html = re.sub(
        r"\n\s*<!-- element-reference:start -->.*?<!-- element-reference:end -->",
        "",
        html,
        flags=re.S,
    )
    return html


def replace_required(text: str, old: str, new: str, label: str) -> str:
    if old not in text:
        raise RuntimeError(f"Replacement anchor not found: {label}")
    return text.replace(old, new, 1)


def update_index(html: str) -> str:
    replacements = {
        '<a class="card" href="home.html"><h3>首頁</h3><p>快速理解餐道如何連接訂單、門店、配送、數據和接入。</p></a>':
        '''<a class="card page-card-realized" href="home.html">
          <h3>首頁</h3>
          <p>用訂單、門店、配送、數據和客戶證明建立第一層信任。</p>
          <div class="page-preview preview-home" aria-hidden="true">
            <span>品牌證明</span><span>全鏈路拓撲</span><span>實名案例</span>
          </div>
        </a>''',
        '<a class="card" href="solutions.html"><h3>解決方案</h3><p>按多平台外賣、自有點餐、配送、對賬、會員和門店餐單找到相似場景。</p></a>':
        '''<a class="card page-card-realized" href="solutions.html">
          <h3>解決方案</h3>
          <p>把痛點放回場景，從問題、承接能力到營運結果連續展示。</p>
          <div class="page-preview preview-flow" aria-hidden="true">
            <span>多渠道訂單</span><span>門店履約</span><span>總部管理</span>
          </div>
        </a>''',
        '<a class="card" href="platform.html"><h3>平台</h3><p>查看 OMS、Menu Center、DMS / iDMS、CDBI 和 AMS / Connector 如何支撐營運。</p></a>':
        '''<a class="card page-card-realized" href="platform.html">
          <h3>平台</h3>
          <p>用產品工作台、狀態流和視頻入口呈現 OMS、DMS、iDMS、CDBI 等能力。</p>
          <div class="page-preview preview-platform" aria-hidden="true">
            <span>OMS</span><span>DMS / iDMS</span><span>CDBI</span>
          </div>
        </a>''',
        '<a class="card" href="integrations.html"><h3>整合能力</h3><p>了解外賣平台、POS / KDS、CRM、支付、ERP 和配送 API 如何接回餐道流程。</p></a>':
        '''<a class="card page-card-realized" href="integrations.html">
          <h3>整合能力</h3>
          <p>用 AMS / Connector 拓撲和資料流向說清外部系統如何接入餐道。</p>
          <div class="page-preview preview-connector" aria-hidden="true">
            <span>外部系統</span><span>AMS / Connector</span><span>資料</span>
          </div>
        </a>''',
        '<a class="card" href="customers.html"><h3>客戶案例</h3><p>用服務規模、實名案例和業態成果建立可信。</p></a>':
        '''<a class="card page-card-realized" href="customers.html">
          <h3>客戶案例</h3>
          <p>把 Pizza-Box、JIA Group、Jardine Group 等案例放成可銷售轉化的證據鏈。</p>
          <div class="page-preview preview-proof" aria-hidden="true">
            <span>實名案例</span><span>前後對比</span><span>服務規模</span>
          </div>
        </a>''',
        '<a class="card" href="resources.html"><h3>資源</h3><p>把評估、導入、營運和技術問題分流到正確入口。</p></a>':
        '''<a class="card page-card-realized" href="resources.html">
          <h3>資源</h3>
          <p>以角色、問題、資料權限和後續動作組織白皮書、FAQ、視頻與表單。</p>
          <div class="page-preview preview-resource" aria-hidden="true">
            <span>角色入口</span><span>FAQ</span><span>資料申請</span>
          </div>
        </a>''',
        '<a class="card" href="about.html"><h3>關於餐道</h3><p>說明公司背景、產品演進、服務交付、質量與可信。</p></a>':
        '''<a class="card page-card-realized" href="about.html">
          <h3>關於餐道</h3>
          <p>從 2014 年外送經驗、跨城服務網絡到平台治理能力建立公司專業度。</p>
          <div class="page-preview preview-about" aria-hidden="true">
            <span>2014</span><span>廣州 / 香港</span><span>企業服務</span>
          </div>
        </a>''',
        '<a class="card" href="demo.html"><h3>預約產品演示</h3><p>根據業態、門店規模、現有系統和主要問題安排演示模組。</p></a>':
        '''<a class="card page-card-realized" href="demo.html">
          <h3>預約產品演示</h3>
          <p>把線索表單做成可分流的診斷入口，便於銷售承接需求。</p>
          <div class="page-preview preview-demo" aria-hidden="true">
            <span>品牌資料</span><span>接入現況</span><span>演示主題</span>
          </div>
        </a>''',
    }
    for old, new in replacements.items():
        html = replace_required(html, old, new, f"index card {old[:40]}")
    return html


def update_home(html: str) -> str:
    old = '''          </div>
        </div>
      </section>'''
    new = '''          </div>
        </div>
        <div class="container logo-strip" aria-label="餐道服務過的品牌與集團">
          <span class="logo-pill">Pizza-Box</span>
          <span class="logo-pill">JIA Group</span>
          <span class="logo-pill">Jardine Group</span>
          <span class="logo-pill">KFC</span>
          <span class="logo-pill">Pizza Hut</span>
          <span class="logo-pill">PHD</span>
        </div>
      </section>'''
    html = replace_required(html, old, new, "home hero logo strip")

    old = '''          <div class="detail-media">
            <h3>營運中樞示意</h3>
            <p>訂單渠道、門店、會員、支付、配送和財務資料在餐道中被整理成可追蹤的營運流程。</p>
          </div>'''
    new = '''          <div class="topology-map" aria-label="餐道全鏈路營運拓撲">
            <div class="topology-center">
              <strong>餐道營運中樞</strong>
              <span>OMS 統一承接訂單，將菜單、門店、配送、財務與數據狀態串成同一條鏈路。</span>
            </div>
            <div class="topology-node"><span>入口</span><strong>外賣平台 / 自有點餐</strong></div>
            <div class="topology-node"><span>門店</span><strong>POS / KDS / 店員操作</strong></div>
            <div class="topology-node"><span>履約</span><strong>DMS / iDMS / 第三方配送</strong></div>
            <div class="topology-node"><span>交易</span><strong>支付 / Finance Center</strong></div>
            <div class="topology-node"><span>營運</span><strong>CDBI / Data Asset</strong></div>
            <div class="topology-node"><span>接入</span><strong>AMS / Connector</strong></div>
          </div>'''
    html = replace_required(html, old, new, "home topology map")

    old = '''            <div class="detail-media">
              <h3 id="home-media-title">營運狀態總覽</h3>
              <p id="home-media-body">呈現訂單、門店、配送和對賬狀態如何在同一流程中被追蹤。</p>
            </div>'''
    new = '''          <div class="product-snapshot">
            <div class="snapshot-header">
              <h3 id="home-media-title">營運狀態總覽</h3>
              <span>OMS 工作台</span>
            </div>
            <p id="home-media-body">呈現訂單、門店、配送和對賬狀態如何在同一流程中被追蹤。</p>
            <div class="mini-table" aria-label="首頁能力示例">
              <div class="mini-table-row"><span>訂單入口</span><strong>平台外賣 / 自有點餐 / 門店</strong></div>
              <div class="mini-table-row"><span>處理狀態</span><strong>待接單 / 製作中 / 配送中 / 退款中</strong></div>
              <div class="mini-table-row"><span>下一步</span><strong>門店確認、缺貨處理、客服跟進</strong></div>
            </div>
          </div>'''
    html = replace_required(html, old, new, "home product snapshot")

    old = '''          <div class="detail-panel">
            <h3>案例摘要</h3>'''
    new = '''          <div class="detail-panel">
            <h3>案例摘要</h3>
            <div class="customer-name-wall" aria-label="實名客戶案例">
              <span>Pizza-Box｜9 年合作，OMS + 自有點餐</span>
              <span>JIA Group｜多品牌、多門店營運</span>
              <span>Jardine Group｜DMS / iDMS 配送履約</span>
            </div>'''
    html = replace_required(html, old, new, "home customer name wall")
    return html


def update_solutions(html: str) -> str:
    old = '''          <div class="detail-media"><h3>營運場景地圖</h3><p>從訂單來源、門店處理、配送履約到財務對賬，快速定位目前最需要改善的流程段落。</p></div>'''
    new = '''          <div class="flow-board">
            <div class="flow-board-header">
              <h3>場景鏈路</h3>
              <span>從問題到承接能力</span>
            </div>
            <div class="flow-grid">
              <div class="flow-step"><span>01</span><strong>多入口產生訂單</strong><p>外賣平台、自有小程序與門店渠道同時進入營運流程。</p></div>
              <div class="flow-step"><span>02</span><strong>OMS 統一處理</strong><p>把接單、門店狀態、缺貨、取消與退款放在同一工作台。</p></div>
              <div class="flow-step"><span>03</span><strong>履約與對賬回流</strong><p>DMS / iDMS、Finance Center 與 CDBI 將履約和數據回到總部判斷。</p></div>
            </div>
          </div>'''
    html = replace_required(html, old, new, "solutions hero flow board")

    old = '''          <div class="card-grid">
            <article class="card"><h3>多平台訂單履約</h3><p>集中處理外賣平台與自有入口訂單，讓門店接單、打印、退款、取消和異常提醒回到 OMS 流程。</p></article>
            <article class="card"><h3>門店與餐單營運</h3><p>總部可維護門店資料、營業時間、餐單、售罄和區域菜單，減少多平台重複更新。</p></article>
            <article class="card"><h3>配送營運與對賬</h3><p>DMS / iDMS 承接自有騎手、第三方配送、派單、超時和狀態回傳，Finance Center 追蹤對賬差異。</p></article>
          </div>'''
    new = '''          <div class="card-grid">
            <article class="card">
              <h3>多平台訂單履約</h3>
              <p>集中處理外賣平台與自有入口訂單，讓門店接單、打印、退款、取消和異常提醒回到 OMS 流程。</p>
              <div class="problem-signal"><span>外賣平台</span><span>自有入口</span><span>OMS</span></div>
            </article>
            <article class="card">
              <h3>門店與餐單營運</h3>
              <p>總部可維護門店資料、營業時間、餐單、售罄和區域菜單，減少多平台重複更新。</p>
              <div class="problem-signal"><span>門店資料</span><span>餐單版本</span><span>售罄狀態</span></div>
            </article>
            <article class="card">
              <h3>配送營運與對賬</h3>
              <p>DMS / iDMS 承接自有騎手、第三方配送、派單、超時和狀態回傳，Finance Center 追蹤對賬差異。</p>
              <div class="problem-signal"><span>DMS / iDMS</span><span>配送異常</span><span>Finance Center</span></div>
            </article>
          </div>'''
    html = replace_required(html, old, new, "solutions problem cards")

    old = '''            <div class="detail-media"><h3 id="scenario-media-title">場景鏈路</h3><p id="scenario-media-body">對照問題、承接能力與營運結果，判斷 Demo 應聚焦哪一段流程。</p></div>'''
    new = '''          <div class="flow-board compact">
            <div class="flow-board-header">
              <h3 id="scenario-media-title">高峰訂單處理鏈路</h3>
              <span>場景拆解</span>
            </div>
            <p id="scenario-media-body">展示從第三方平台、自有入口到門店接單、製作、配送和客服補救的鏈路。</p>
            <div class="flow-grid">
              <div class="flow-step"><span>問題</span><strong>訂單高峰</strong><p>入口多、門店壓力高，異常需要及時暴露。</p></div>
              <div class="flow-step"><span>能力</span><strong>OMS + DMS</strong><p>統一接單與履約狀態，減少人工切換。</p></div>
              <div class="flow-step"><span>結果</span><strong>數據回流</strong><p>總部按渠道、門店、時段追蹤營運表現。</p></div>
            </div>
          </div>'''
    html = replace_required(html, old, new, "solutions scenario flow")
    return html


def update_platform(html: str) -> str:
    old = '''            <div class="screen main">
              <div class="ui-line"></div>
              <div class="status-row"><span>OMS 訂單隊列</span><span class="status-pill">待接單</span></div>
              <div class="status-row"><span>Menu Center 售罄</span><span class="status-pill">同步</span></div>
              <div class="status-row"><span>DMS 派單</span><span class="status-pill">配送中</span></div>
            </div>'''
    new = '''            <div class="screen main">
              <div class="ui-line"></div>
              <div class="status-row"><span>OMS 訂單隊列</span><span class="status-pill">待接單</span></div>
              <div class="status-row"><span>Menu Center 售罄</span><span class="status-pill">同步</span></div>
              <div class="status-row"><span>DMS 派單</span><span class="status-pill">配送中</span></div>
              <div class="status-row"><span>Finance Center 對賬</span><span class="status-pill">差異追蹤</span></div>
            </div>
            <div class="screen side desktop-only">
              <div class="ui-line short"></div>
              <div class="status-row"><span>CDBI 看板</span><span class="status-pill">分析</span></div>
              <div class="status-row"><span>AMS / Connector</span><span class="status-pill">接入</span></div>
            </div>'''
    html = replace_required(html, old, new, "platform hero stage")

    old = '''            <div class="detail-media">
              <h3>產品畫面</h3>
              <p>在同一個工作流中查看訂單狀態、門店動作、配送進度和對賬提醒。</p>
            </div>'''
    new = '''          <div class="product-snapshot">
            <div class="snapshot-header">
              <h3>平台工作台示意</h3>
              <span>統一營運</span>
            </div>
            <div class="mini-table" aria-label="平台能力工作台">
              <div class="mini-table-row"><span>訂單</span><strong>OMS 匯入、分派、取消、退款</strong></div>
              <div class="mini-table-row"><span>門店</span><strong>營業狀態、菜單版本、缺貨提示</strong></div>
              <div class="mini-table-row"><span>配送</span><strong>DMS / iDMS 狀態、第三方配送協同</strong></div>
              <div class="mini-table-row"><span>數據</span><strong>CDBI 報表、Finance Center 對賬</strong></div>
            </div>
          </div>'''
    html = replace_required(html, old, new, "platform product snapshot")

    old = '''          <div class="card-grid demo-card-grid">
            <article class="card"><h3>OMS</h3><p>多渠道訂單與門店接單。</p></article>
            <article class="card"><h3>Menu / Store</h3><p>餐單、售罄與門店狀態。</p></article>
            <article class="card"><h3>DMS / iDMS</h3><p>派單、騎手和第三方配送。</p></article>
            <article class="card"><h3>CDBI / Finance</h3><p>報表、看板和對賬差異。</p></article>
          </div>'''
    new = '''          <div class="card-grid demo-card-grid">
            <article class="card video-entry-card">
              <h3>OMS</h3>
              <p>訂單整合、門店處理、異常追蹤和客服協同。</p>
              <div class="video-strip"><span>產品視頻</span><strong>接單 / 退款 / 缺貨</strong></div>
            </article>
            <article class="card video-entry-card">
              <h3>Menu Center / Store</h3>
              <p>菜單、價格、營業時間、門店資料和品牌規則同步。</p>
              <div class="video-strip"><span>產品視頻</span><strong>菜單版本 / 門店狀態</strong></div>
            </article>
            <article class="card video-entry-card">
              <h3>DMS / iDMS</h3>
              <p>配送任務、騎手或車隊資源、第三方配送協同。</p>
              <div class="video-strip"><span>產品視頻</span><strong>派單 / 取餐 / 異常</strong></div>
            </article>
            <article class="card video-entry-card">
              <h3>CDBI / Finance Center</h3>
              <p>營運數據、渠道分析、對賬和營收視角。</p>
              <div class="video-strip"><span>產品視頻</span><strong>渠道報表 / 對賬</strong></div>
            </article>
          </div>'''
    html = replace_required(html, old, new, "platform video cards")
    return html


def update_integrations(html: str) -> str:
    old = '''          <div class="detail-media"><h3>Connector 網絡</h3><p>訂單、餐單、會員、支付、配送和財務資料經由 Connector 進入可追蹤的營運流程。</p></div>'''
    new = '''          <div class="connector-flow" aria-label="餐道接入拓撲">
            <div class="connector-lane external">
              <span>外部系統</span>
              <strong>外賣平台 / POS / ERP / 支付 / 會員 / 配送</strong>
            </div>
            <div class="connector-lane hub">
              <span>AMS / Connector</span>
              <strong>接口管理、資料校驗、同步監控、異常回報</strong>
            </div>
            <div class="connector-lane internal">
              <span>餐道平台</span>
              <strong>OMS、Menu Center、DMS / iDMS、Finance Center、CDBI</strong>
            </div>
          </div>'''
    html = replace_required(html, old, new, "integrations connector hero")

    old = '''            <div class="detail-list">
              <div id="integration-object"><strong>資料對象：</strong>餐單、訂單、用戶、基礎資料。</div>
              <div id="integration-next"><strong>適合情境：</strong>需要把多平台訂單、餐單更新、用戶資料和對賬差異接回餐道流程。</div>
            </div>'''
    new = '''            <div class="detail-list">
              <div id="integration-object"><strong>資料對象：</strong>餐單、訂單、用戶、基礎資料。</div>
              <div id="integration-next"><strong>適合情境：</strong>需要把多平台訂單、餐單更新、用戶資料和對賬差異接回餐道流程。</div>
            </div>
            <div class="connection-tags" aria-label="常見資料對象">
              <span>訂單</span><span>菜單</span><span>門店</span><span>庫存</span><span>會員</span><span>支付</span><span>配送</span><span>對賬</span>
            </div>'''
    html = replace_required(html, old, new, "integrations data object tags")

    old = '''      <footer class="site-footer">
        <div class="container footer-inner">
          <div class="footer-brand"><img src="assets/candao-blue-logo.svg" alt="餐道" class="brand-logo"><p>餐飲與零售 O2O 營運中樞｜SaaS、iDMS、AMS / Connector</p></div>
          <nav class="footer-links" aria-label="頁尾導航"><a href="home.html">首頁</a><a href="solutions.html">解決方案</a><a href="platform.html">平台</a><a href="integrations.html">整合能力</a><a href="customers.html">客戶案例</a><a href="resources.html">資源</a><a href="about.html">關於餐道</a><a href="demo.html">預約演示</a></nav>
        </div>
      </footer>'''
    new = '''      <section class="section data-flow-section">
        <div class="container grid-2">
          <div>
            <p class="eyebrow">資料流向</p>
            <h2>接入不是單點開接口，而是讓資料在營運鏈路中可校驗、可追蹤。</h2>
            <p>本頁以資料對象、同步方向和異常回報位置呈現接入邊界，後續可替換為真實產品截圖或動效。</p>
          </div>
          <div class="flow-board compact">
            <div class="flow-grid">
              <div class="flow-step"><span>資料來源</span><strong>平台 / POS / ERP</strong><p>訂單、菜單、門店、會員與交易資料進入接口層。</p></div>
              <div class="flow-step"><span>校驗同步</span><strong>AMS / Connector</strong><p>映射字段、監控同步狀態，將異常回報給對應角色。</p></div>
              <div class="flow-step"><span>營運使用</span><strong>OMS / Finance / CDBI</strong><p>支撐履約、對賬、報表與跨系統決策。</p></div>
            </div>
          </div>
        </div>
      </section>
      <footer class="site-footer">
        <div class="container footer-inner">
          <div class="footer-brand"><img src="assets/candao-blue-logo.svg" alt="餐道" class="brand-logo"><p>餐飲與零售 O2O 營運中樞｜SaaS、iDMS、AMS / Connector</p></div>
          <nav class="footer-links" aria-label="頁尾導航"><a href="home.html">首頁</a><a href="solutions.html">解決方案</a><a href="platform.html">平台</a><a href="integrations.html">整合能力</a><a href="customers.html">客戶案例</a><a href="resources.html">資源</a><a href="about.html">關於餐道</a><a href="demo.html">預約演示</a></nav>
        </div>
      </footer>'''
    html = replace_required(html, old, new, "integrations data flow section")
    return html


def update_customers(html: str) -> str:
    old = '''      <section class="hero">
        <div class="container">
          <p class="eyebrow">客戶案例</p>
          <h1>從不同餐飲業態看餐道如何改善訂單、配送與數據營運</h1>
          <p class="lead">不只看品牌使用了哪些產品，更看導入餐道後，分散的訂單、門店、餐單、配送、會員和對賬資料如何回到可追蹤的營運流程。</p>
        </div>
      </section>'''
    new = '''      <section class="hero">
        <div class="container grid-2">
          <div>
            <p class="eyebrow">客戶案例</p>
            <h1>從不同餐飲業態看餐道如何改善訂單、配送與數據營運</h1>
            <p class="lead">不只看品牌使用了哪些產品，更看導入餐道後，分散的訂單、門店、餐單、配送、會員和對賬資料如何回到可追蹤的營運流程。</p>
          </div>
          <div class="case-proof-card">
            <span>案例證據</span>
            <h3>Pizza-Box、JIA Group、Jardine Group</h3>
            <p>用品牌場景、上線前後對比與可追溯數據支撐銷售轉化，而不是只羅列客戶名稱。</p>
            <div class="proof-mini-grid">
              <strong>效率</strong><strong>評分</strong><strong>規模</strong>
            </div>
          </div>
        </div>
      </section>'''
    html = replace_required(html, old, new, "customers hero proof")

    old = '''            <div class="rail compact-rail"><button class="is-active" data-case="pizza-box">Pizza-Box</button><button data-case="jia-group">JIA Group</button><button data-case="jardine">Jardine Group</button></div>'''
    new = '''          <div>
            <div class="customer-name-wall stacked" aria-label="客戶案例名單">
              <span>Pizza-Box</span>
              <span>JIA Group</span>
              <span>Jardine Group</span>
            </div>
            <div class="rail compact-rail"><button class="is-active" data-case="pizza-box">Pizza-Box</button><button data-case="jia-group">JIA Group</button><button data-case="jardine">Jardine Group</button></div>
          </div>'''
    html = replace_required(html, old, new, "customers name wall open")
    return html


def update_resources(html: str) -> str:
    old = '''            <p class="lead">採購、IT、營運、門店、配送和財務團隊可以在這裡找到接入準備、常見問題、支援查詢、案例資源和產品演示入口，減少評估與導入前的不確定。</p>'''
    new = '''            <p class="lead">採購、IT、營運、門店、配送和財務團隊可以在這裡找到接入準備、常見問題、支援查詢、案例資源和產品演示入口，減少評估與導入前的不確定。</p>
            <div class="resource-signal-row" aria-label="資源中心入口">
              <span>售前方案</span>
              <span>導入資料</span>
              <span>技術對接</span>
              <span>品牌案例</span>
            </div>'''
    html = replace_required(html, old, new, "resources hero signal row")
    return html


def update_about(html: str) -> str:
    old = '''            <p class="lead">餐道成立於 2014 年，總部位於廣州，並在北京、上海、香港設有分支及成都營運中心。團隊以多年餐飲系統研發與外送業務經驗，支援品牌處理訂單、門店、配送、數據和持續營運。</p>
            <a class="button primary" href="demo.html">聯絡餐道</a>'''
    new = '''            <p class="lead">餐道成立於 2014 年，總部位於廣州，並在北京、上海、香港設有分支及成都營運中心。團隊以多年餐飲系統研發與外送業務經驗，支援品牌處理訂單、門店、配送、數據和持續營運。</p>
          <div class="signal-strip" aria-label="餐道公司信息">
            <span><strong>2014</strong> 成立</span>
            <span><strong>廣州</strong> 總部</span>
            <span><strong>香港 / 北京 / 上海 / 成都</strong> 服務網絡</span>
          </div>
            <a class="button primary" href="demo.html">聯絡餐道</a>'''
    html = replace_required(html, old, new, "about company signal strip")
    return html


def update_demo(html: str) -> str:
    old = '''          <div class="detail-panel">
            <h3>演示需求摘要</h3>
            <div class="list-row"><strong>意圖：</strong><span id="intent-summary">產品演示</span></div>
            <div class="list-row"><strong>推薦模組：</strong>OMS、DMS / iDMS、CDBI、AMS / Connector</div>
            <div class="list-row"><strong>下一步：</strong>提交後由團隊按場景安排演示。</div>
          </div>'''
    new = '''          <div class="demo-summary-card">
            <p class="eyebrow">演示準備</p>
            <h2>演示需求摘要</h2>
            <div class="demo-summary-grid">
              <div><span>意圖</span><strong id="intent-summary">產品演示</strong></div>
              <div><span>推薦模組</span><strong>OMS、DMS / iDMS、CDBI、AMS / Connector</strong></div>
              <div><span>下一步</span><strong>提交後由團隊按場景安排演示。</strong></div>
            </div>
            <div class="flow-board compact demo-flow">
              <div class="flow-grid">
                <div class="flow-step"><span>01</span><strong>提交線索</strong><p>品牌決策者或營運負責人補充現況。</p></div>
                <div class="flow-step"><span>02</span><strong>需求分流</strong><p>銷售、方案或技術團隊按問題類型承接。</p></div>
                <div class="flow-step"><span>03</span><strong>安排演示</strong><p>以 OMS、DMS / iDMS、CDBI 或接入方案為主線。</p></div>
              </div>
            </div>
          </div>'''
    html = replace_required(html, old, new, "demo summary card")
    return html


REALIZED_CSS = r'''
/* T30 real-content restoration */
.page-card-realized {
  display: grid;
  gap: 12px;
}

.page-preview {
  border: 1px solid var(--line);
  border-radius: var(--r8);
  background: #ffffff;
  padding: 10px;
  display: grid;
  gap: 8px;
}

.page-preview span {
  min-height: 24px;
  border-radius: 6px;
  background: #eef3f8;
  color: var(--ink);
  font-size: 12px;
  font-weight: 800;
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.preview-proof,
.preview-platform,
.preview-about {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.preview-proof span,
.preview-platform span,
.preview-about span {
  justify-content: center;
  text-align: center;
  padding: 0 6px;
}

.logo-strip {
  margin-top: -44px;
  position: relative;
  z-index: 2;
  border: 1px solid rgba(255,255,255,.22);
  border-radius: var(--r8);
  background: rgba(255,255,255,.08);
  backdrop-filter: blur(10px);
  padding: 14px;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 10px;
}

.hero .logo-strip {
  padding: 14px;
}

.logo-pill,
.customer-name-wall span,
.connection-tags span,
.resource-signal-row span {
  border: 1px solid var(--line);
  border-radius: var(--r8);
  background: #ffffff;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10px;
  font-weight: 800;
  color: var(--ink);
}

.hero .logo-pill,
.hero .connector-flow,
.hero .case-proof-card,
.dark .topology-map,
.dark .flow-board,
.dark .product-snapshot,
.dark .video-entry-card {
  color: var(--text-95);
}

.hero .connector-lane:not(.hub) strong,
.hero .case-proof-card h3,
.dark .topology-node strong,
.dark .flow-step strong,
.dark .video-entry-card h3,
.dark .video-entry-card strong {
  color: var(--text-95);
}

.hero .connector-lane:not(.hub) span,
.dark .topology-node span,
.dark .flow-step span,
.dark .video-entry-card p,
.dark .video-strip span {
  color: var(--muted);
}

.dark .topology-center,
.dark .topology-center strong,
.hero .connector-lane.hub,
.hero .connector-lane.hub strong {
  color: #ffffff;
}

.dark .topology-center span,
.hero .connector-lane.hub span {
  color: rgba(255, 255, 255, .72);
}

.topology-map,
.flow-board,
.product-snapshot,
.connector-flow,
.case-proof-card,
.demo-summary-card {
  border: 1px solid var(--line);
  border-radius: var(--r8);
  background: #ffffff;
  box-shadow: var(--shadow);
  padding: 22px;
}

.topology-map {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.topology-center {
  grid-column: 1 / -1;
  border-radius: var(--r8);
  background: var(--ink);
  color: #ffffff;
  padding: 18px;
  display: grid;
  gap: 8px;
}

.topology-center strong,
.topology-node strong {
  font-size: 17px;
}

.topology-center span,
.topology-node span,
.flow-board-header span,
.snapshot-header span,
.connector-lane span,
.case-proof-card > span,
.flow-step span,
.video-strip span,
.mini-table-row span,
.demo-summary-grid span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 800;
}

.topology-node {
  border: 1px solid var(--line);
  border-radius: var(--r8);
  background: #f7fafc;
  min-height: 96px;
  padding: 14px;
  display: grid;
  align-content: center;
  gap: 8px;
}

.flow-board {
  display: grid;
  gap: 16px;
}

.flow-board.compact {
  box-shadow: none;
}

.flow-board-header,
.snapshot-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;
}

.flow-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.flow-step {
  border: 1px solid var(--line);
  border-radius: var(--r8);
  background: #f7fafc;
  padding: 14px;
  display: grid;
  gap: 8px;
}

.flow-step strong {
  font-size: 16px;
}

.flow-step p,
.case-proof-card p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

.problem-signal,
.video-strip,
.resource-signal-row,
.connection-tags,
.customer-name-wall,
.signal-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.problem-signal span,
.video-strip,
.signal-strip span,
.proof-mini-grid strong {
  border: 1px solid var(--line);
  border-radius: var(--r8);
  background: #f7fafc;
  color: var(--ink);
  font-size: 12px;
  font-weight: 800;
  padding: 8px 10px;
}

.product-snapshot {
  display: grid;
  gap: 16px;
}

.mini-table,
.demo-summary-grid {
  display: grid;
  gap: 8px;
}

.mini-table-row,
.demo-summary-grid div,
.connector-lane {
  border: 1px solid var(--line);
  border-radius: var(--r8);
  background: #f7fafc;
  padding: 12px;
  display: grid;
  gap: 6px;
}

.connector-flow {
  display: grid;
  gap: 12px;
}

.connector-lane.hub {
  background: var(--ink);
  color: #ffffff;
}

.connector-lane.hub span {
  color: rgba(255,255,255,.68);
}

.connection-tags {
  margin-top: 16px;
}

.connection-tags span,
.resource-signal-row span {
  min-height: 34px;
  font-size: 12px;
}

.data-flow-section {
  background: #f5f8fb;
}

.case-proof-card {
  display: grid;
  gap: 14px;
}

.proof-mini-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.proof-mini-grid strong {
  text-align: center;
}

.customer-name-wall {
  margin: 10px 0 18px;
}

.customer-name-wall.stacked {
  margin-top: 0;
  flex-direction: column;
}

.video-entry-card {
  align-content: start;
}

.video-strip {
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.resource-signal-row {
  margin-top: 20px;
}

.signal-strip {
  margin: 20px 0;
}

.demo-summary-card {
  display: grid;
  gap: 18px;
}

.demo-flow {
  padding: 0;
  border: 0;
}

@media (max-width: 900px) {
  .logo-strip,
  .topology-map,
  .flow-grid,
  .preview-proof,
  .preview-platform,
  .preview-about,
  .proof-mini-grid {
    grid-template-columns: 1fr;
  }

  .logo-strip {
    margin-top: 24px;
  }
}
'''


def update_css(css: str) -> str:
    css = re.sub(
        r"\n\.element-guide \{.*?\n@media \(max-width: 900px\) \{",
        "\n@media (max-width: 900px) {",
        css,
        flags=re.S,
    )
    css = css.replace(",\n  .element-page-grid,\n  .element-module-grid", "")
    css = css.replace('''\n\n  .element-guide-header {
    grid-template-columns: 1fr;
    align-items: start;
  }''', "")
    css = css.replace(
        '''  .hero .container,
  .section {
    padding: 56px 0;
  }''',
        '''  .hero .container,
  .section {
    padding: 56px 0;
  }

  .hero .logo-strip {
    padding: 14px;
  }''',
    )
    css = css.replace(
        '''  .stage {
    min-height: 320px;
  }''',
        '''  .stage {
    min-height: 390px;
  }''',
    )
    css = re.sub(
        r"\n/\* T30 real-content restoration \*/.*?\n@media \(max-width: 900px\) \{\n  \.logo-strip,.*?\n\}\n",
        "\n",
        css,
        flags=re.S,
    )
    marker = "\n@media (max-width: 900px) {"
    if marker not in css:
        raise RuntimeError("CSS media marker not found")
    return css.replace(marker, "\n" + REALIZED_CSS + marker, 1)


UPDATERS = {
    "index.html": update_index,
    "home.html": update_home,
    "solutions.html": update_solutions,
    "platform.html": update_platform,
    "integrations.html": update_integrations,
    "customers.html": update_customers,
    "resources.html": update_resources,
    "about.html": update_about,
    "demo.html": update_demo,
}


def main() -> None:
    updates: dict[Path, str] = {}
    for page in PAGES:
        path = PROTO / page
        html = path.read_text(encoding="utf-8")
        html = remove_t29_instruction_blocks(html)
        if page in UPDATERS:
            html = UPDATERS[page](html)
        updates[path] = html

    css = CSS_PATH.read_text(encoding="utf-8")
    css = update_css(css)
    updates[CSS_PATH] = css

    for path, content in updates.items():
        path.write_text(content, encoding="utf-8")

    print(f"Updated {len(updates)} files in {PROTO}")


if __name__ == "__main__":
    main()
