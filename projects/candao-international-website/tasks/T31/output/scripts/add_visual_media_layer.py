#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path


ROOT = Path(__file__).resolve().parents[4]
PROTO = ROOT / "tasks" / "T27" / "output" / "stitch-ready-low-fidelity"
CSS = PROTO / "assets" / "stitch-ready.css"


T31_CSS = r'''

/* T31 visual media layer */
:root {
  --ink: var(--text-95);
  --muted: var(--text-65);
  --shadow: 0 22px 60px rgba(22, 35, 61, 0.1);
  --signal-green: #18a66a;
  --signal-amber: #c87812;
  --signal-cyan: #00a7c8;
}

.hero-visual-column,
.media-stack,
.case-media-grid,
.snapshot-media,
.route-media-grid {
  display: grid;
  gap: 14px;
}

.case-media-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.visual-pair {
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(0, 0.96fr);
  gap: 14px;
}

.stage.has-motion {
  min-height: 456px;
}

.stage.has-motion .screen.main {
  bottom: 100px;
}

.stage-motion {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 18px;
}

.photo-scene,
.product-shot-frame,
.concept-illustration,
.motion-strip,
.video-thumb,
.metric-chart,
.comparison-board,
.cert-tile {
  border: 1px solid var(--line);
  border-radius: var(--r8);
}

.photo-scene {
  position: relative;
  min-height: 236px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0)),
    linear-gradient(135deg, #e9f2ff, #f7fbff 44%, #eaf7f2);
}

.photo-scene::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 32%;
  background: linear-gradient(90deg, rgba(82, 141, 255, 0.22), rgba(24, 166, 106, 0.16));
}

.photo-scene::after {
  content: "";
  position: absolute;
  right: 12%;
  top: 18%;
  width: 34%;
  height: 32%;
  border-radius: var(--r8);
  border: 1px solid rgba(82, 141, 255, 0.22);
  background:
    linear-gradient(90deg, rgba(82, 141, 255, 0.28) 0 18%, transparent 18% 100%),
    repeating-linear-gradient(0deg, rgba(22, 35, 61, 0.08) 0 2px, transparent 2px 14px),
    #ffffff;
  box-shadow: 0 18px 42px rgba(22, 35, 61, 0.12);
}

.scene-tag {
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 2;
  border-radius: var(--r8);
  background: rgba(255, 255, 255, 0.9);
  color: var(--ink);
  padding: 8px 10px;
  font-size: 12px;
  font-weight: 800;
  box-shadow: 0 12px 30px rgba(22, 35, 61, 0.1);
}

.scene-counter,
.scene-pass,
.scene-person,
.scene-rider {
  position: absolute;
  z-index: 1;
  display: block;
}

.scene-counter {
  left: 9%;
  right: 38%;
  bottom: 27%;
  height: 16%;
  border-radius: var(--r8);
  background: linear-gradient(90deg, #ffffff, #dfeaff);
  box-shadow: 0 16px 34px rgba(22, 35, 61, 0.13);
}

.scene-pass {
  left: 48%;
  bottom: 22%;
  width: 18%;
  height: 8%;
  border-radius: 999px;
  background: rgba(82, 141, 255, 0.36);
}

.scene-person,
.scene-rider {
  width: 22px;
  height: 68px;
  bottom: 31%;
  border-radius: 999px 999px 8px 8px;
  background: var(--brand-blue);
}

.scene-person::before,
.scene-rider::before {
  content: "";
  position: absolute;
  left: 2px;
  top: -18px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #16233d;
}

.scene-person.p1 {
  left: 18%;
}

.scene-person.p2 {
  left: 32%;
  height: 58px;
  background: var(--signal-green);
}

.scene-rider {
  right: 18%;
  bottom: 24%;
  background: var(--signal-amber);
}

.product-shot-frame {
  overflow: hidden;
  background: #0f172a;
  color: #ffffff;
  box-shadow: 0 20px 46px rgba(22, 35, 61, 0.15);
}

.product-shot-frame.light {
  background: #ffffff;
  color: var(--ink);
  box-shadow: 0 18px 42px rgba(22, 35, 61, 0.08);
}

.shot-topbar {
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.product-shot-frame.light .shot-topbar {
  border-bottom-color: var(--line);
}

.shot-dots {
  display: flex;
  gap: 5px;
}

.shot-dots span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.38);
}

.product-shot-frame.light .shot-dots span {
  background: rgba(82, 141, 255, 0.32);
}

.shot-topbar strong {
  font-size: 12px;
  color: inherit;
}

.shot-body {
  display: grid;
  grid-template-columns: 104px 1fr;
  min-height: 190px;
}

.shot-sidebar {
  display: grid;
  align-content: start;
  gap: 8px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.08);
}

.product-shot-frame.light .shot-sidebar {
  background: #f4f7fb;
}

.shot-sidebar span {
  min-height: 24px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.12);
}

.product-shot-frame.light .shot-sidebar span {
  background: rgba(82, 141, 255, 0.16);
}

.shot-table {
  display: grid;
  align-content: start;
  gap: 8px;
  padding: 12px;
}

.shot-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;
  min-height: 34px;
  border-radius: 6px;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.78);
  font-size: 12px;
}

.product-shot-frame.light .shot-row {
  background: #f7fafc;
  color: var(--muted);
}

.shot-row strong {
  color: var(--brand-blue);
  font-size: 12px;
}

.shot-row.alert strong {
  color: var(--signal-amber);
}

.shot-row.success strong {
  color: var(--signal-green);
}

.concept-illustration {
  position: relative;
  min-height: 178px;
  padding: 16px;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(82, 141, 255, 0.11) 1px, transparent 1px),
    linear-gradient(0deg, rgba(82, 141, 255, 0.11) 1px, transparent 1px),
    #f8fbff;
  background-size: 34px 34px;
}

.concept-node {
  position: absolute;
  min-width: 88px;
  min-height: 42px;
  border: 1px solid var(--line);
  border-radius: var(--r8);
  display: grid;
  place-items: center;
  padding: 8px 10px;
  background: #ffffff;
  color: var(--ink);
  font-size: 12px;
  font-weight: 800;
  text-align: center;
  box-shadow: 0 12px 30px rgba(22, 35, 61, 0.09);
}

.concept-node.hub {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-height: 64px;
  background: var(--brand-blue);
  color: #ffffff;
}

.concept-node.n1 { left: 7%; top: 16%; }
.concept-node.n2 { right: 8%; top: 15%; }
.concept-node.n3 { left: 10%; bottom: 14%; }
.concept-node.n4 { right: 9%; bottom: 13%; }

.concept-line {
  position: absolute;
  left: 16%;
  right: 16%;
  top: 50%;
  height: 1px;
  background: rgba(82, 141, 255, 0.44);
}

.concept-line.vertical {
  left: 50%;
  right: auto;
  top: 18%;
  bottom: 18%;
  width: 1px;
  height: auto;
}

.motion-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  padding: 8px;
  background: #f7fafc;
}

.motion-strip.compact-motion {
  padding: 0;
  border: 0;
  background: transparent;
}

.motion-frame {
  position: relative;
  min-height: 70px;
  border: 1px solid var(--line);
  border-radius: var(--r8);
  background: #ffffff;
  padding: 10px;
  display: grid;
  align-content: space-between;
  gap: 8px;
  overflow: hidden;
}

.motion-frame::after {
  content: "";
  position: absolute;
  left: 10px;
  bottom: 8px;
  width: 22px;
  height: 3px;
  border-radius: 999px;
  background: var(--brand-blue);
  animation: t31-progress 2600ms ease-in-out infinite;
}

.motion-frame:nth-child(2)::after {
  animation-delay: 180ms;
}

.motion-frame:nth-child(3)::after {
  animation-delay: 360ms;
}

.motion-frame span {
  color: var(--brand-blue);
  font-size: 11px;
  font-weight: 900;
}

.motion-frame strong {
  color: var(--ink);
  font-size: 12px;
  line-height: 1.25;
}

.stage-motion .motion-frame {
  background: rgba(255, 255, 255, 0.92);
}

@keyframes t31-progress {
  0%, 100% { width: 20%; opacity: 0.55; }
  50% { width: calc(100% - 20px); opacity: 1; }
}

.video-thumb {
  position: relative;
  min-height: 120px;
  margin: 12px 0;
  padding: 14px;
  overflow: hidden;
  background:
    radial-gradient(circle at 78% 20%, rgba(82, 141, 255, 0.2), transparent 34%),
    linear-gradient(135deg, #f7fbff, #eef5ff);
}

.video-thumb::after {
  content: "";
  position: absolute;
  right: 18px;
  bottom: 18px;
  width: 74px;
  height: 44px;
  border-radius: 6px;
  background:
    repeating-linear-gradient(0deg, rgba(22, 35, 61, 0.08) 0 2px, transparent 2px 12px),
    #ffffff;
  border: 1px solid var(--line);
}

.play-mark {
  position: absolute;
  left: 16px;
  bottom: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--brand-blue);
}

.play-mark::after {
  content: "";
  position: absolute;
  left: 14px;
  top: 10px;
  border-left: 12px solid #ffffff;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

.video-thumb strong {
  position: relative;
  z-index: 1;
  color: var(--ink);
  font-size: 13px;
}

.metric {
  display: grid;
  align-content: start;
  gap: 10px;
}

.metric-chart {
  min-height: 56px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  align-items: end;
  padding: 10px;
  background: #f8fbff;
}

.metric-chart span {
  display: block;
  min-height: 12px;
  margin: 0;
  border-radius: 4px 4px 0 0;
  background: var(--brand-blue);
}

.metric-chart span:nth-child(2) {
  background: var(--signal-cyan);
}

.metric-chart span:nth-child(3) {
  background: var(--signal-green);
}

.metric-chart span:nth-child(4) {
  background: var(--signal-amber);
}

.comparison-board {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  overflow: hidden;
  background: var(--line);
}

.comparison-board div {
  min-height: 122px;
  padding: 16px;
  background: #ffffff;
  display: grid;
  align-content: space-between;
  gap: 12px;
}

.comparison-board div:last-child {
  background: var(--surface-blue);
}

.comparison-board strong {
  color: var(--ink);
}

.comparison-board span {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.46;
}

.route-media-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.cert-tile {
  min-height: 110px;
  padding: 16px;
  display: grid;
  align-content: center;
  gap: 8px;
  background:
    linear-gradient(135deg, rgba(82, 141, 255, 0.1), rgba(24, 166, 106, 0.08)),
    #ffffff;
}

.cert-tile strong {
  color: var(--brand-blue);
}

.cert-tile span {
  color: var(--muted);
  font-size: 13px;
}

.page-preview {
  position: relative;
  overflow: hidden;
}

.page-preview::after {
  content: "";
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 38%;
  height: 22px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(82, 141, 255, 0.7), rgba(24, 166, 106, 0.62));
  opacity: 0.22;
}

@media (prefers-reduced-motion: reduce) {
  .motion-frame::after {
    animation: none;
    width: calc(100% - 20px);
  }
}
'''


def read(name: str) -> str:
    return (PROTO / name).read_text(encoding="utf-8")


def write(name: str, text: str) -> None:
    (PROTO / name).write_text(text, encoding="utf-8")


def replace_once(text: str, old: str, new: str, name: str) -> str:
    if new in text:
        return text
    if old not in text:
        raise RuntimeError(f"{name}: expected snippet not found")
    return text.replace(old, new, 1)


def insert_css() -> None:
    css = CSS.read_text(encoding="utf-8")
    if "/* T31 visual media layer */" not in css:
        marker = "@media (max-width: 900px) {\n  .logo-strip,"
        css = css.replace(marker, T31_CSS + "\n" + marker, 1)
    css = css.replace(
        ".demo-card-grid {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}",
        ".demo-card-grid {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}",
    )
    css = css.replace(
        "  .logo-strip,\n  .topology-map,\n  .flow-grid,\n  .preview-proof,",
        "  .logo-strip,\n  .topology-map,\n  .flow-grid,\n  .case-media-grid,\n  .route-media-grid,\n  .preview-proof,",
    )
    CSS.write_text(css, encoding="utf-8")


def enhance_index() -> None:
    text = read("index.html")
    text = replace_once(
        text,
        '<div class="stage" aria-label="餐道平台概覽">',
        '<div class="stage has-motion" aria-label="餐道平台概覽">',
        "index stage",
    )
    text = replace_once(
        text,
        '''              <div class="status-row"><span>Finance Center 對賬</span><span class="status-pill">差異追蹤</span></div>
            </div>
          </div>''',
        '''              <div class="status-row"><span>Finance Center 對賬</span><span class="status-pill">差異追蹤</span></div>
            </div>
            <div class="stage-motion motion-strip compact-motion" aria-label="頁面敘事動效關鍵幀">
              <div class="motion-frame"><span>01</span><strong>建立認知</strong></div>
              <div class="motion-frame"><span>02</span><strong>驗證能力</strong></div>
              <div class="motion-frame"><span>03</span><strong>預約演示</strong></div>
            </div>
          </div>''',
        "index stage motion",
    )
    write("index.html", text)


def enhance_home() -> None:
    text = read("home.html")
    text = replace_once(text, '<div class="stage">', '<div class="stage has-motion">', "home stage class")
    text = replace_once(
        text,
        '''            <div class="screen side desktop-only">
              <div class="ui-line short"></div>
              <div class="status-row"><span>CDBI 看板</span><span class="status-pill">分析</span></div>
              <div class="status-row"><span>AMS / Connector</span><span class="status-pill">接入</span></div>
            </div>
          </div>''',
        '''            <div class="screen side desktop-only">
              <div class="ui-line short"></div>
              <div class="status-row"><span>CDBI 看板</span><span class="status-pill">分析</span></div>
              <div class="status-row"><span>AMS / Connector</span><span class="status-pill">接入</span></div>
            </div>
            <div class="stage-motion motion-strip compact-motion" aria-label="首頁產品舞台動效關鍵幀">
              <div class="motion-frame"><span>入口</span><strong>外賣與自有點餐進入</strong></div>
              <div class="motion-frame"><span>處理</span><strong>OMS 分派到門店</strong></div>
              <div class="motion-frame"><span>回流</span><strong>履約與對賬回到總部</strong></div>
            </div>
          </div>''',
        "home stage motion",
    )
    text = replace_once(
        text,
        '''            <div class="mini-table" aria-label="首頁能力示例">
              <div class="mini-table-row"><span>訂單入口</span><strong>平台外賣 / 自有點餐 / 門店</strong></div>
              <div class="mini-table-row"><span>處理狀態</span><strong>待接單 / 製作中 / 配送中 / 退款中</strong></div>
              <div class="mini-table-row"><span>下一步</span><strong>門店確認、缺貨處理、客服跟進</strong></div>
            </div>''',
        '''            <div class="snapshot-media">
              <div class="product-shot-frame light" aria-label="首頁 OMS 產品畫面">
                <div class="shot-topbar"><div class="shot-dots"><span></span><span></span><span></span></div><strong>OMS 營運狀態</strong></div>
                <div class="shot-body">
                  <div class="shot-sidebar"><span></span><span></span><span></span><span></span></div>
                  <div class="shot-table">
                    <div class="shot-row"><span>外賣平台訂單</span><strong>待接單</strong></div>
                    <div class="shot-row success"><span>門店接單與打印</span><strong>製作中</strong></div>
                    <div class="shot-row"><span>DMS / iDMS 配送</span><strong>配送中</strong></div>
                    <div class="shot-row alert"><span>Finance Center 對賬</span><strong>差異追蹤</strong></div>
                  </div>
                </div>
              </div>
              <div class="motion-strip" aria-label="能力探索器動效關鍵幀">
                <div class="motion-frame"><span>01</span><strong>渠道匯入</strong></div>
                <div class="motion-frame"><span>02</span><strong>狀態更新</strong></div>
                <div class="motion-frame"><span>03</span><strong>數據回流</strong></div>
              </div>
            </div>''',
        "home product shot",
    )
    text = replace_once(
        text,
        '''            <div class="customer-name-wall" aria-label="實名客戶案例">
              <span>Pizza-Box</span>
              <span>JIA Group</span>
              <span>Jardine Group</span>
            </div>''',
        '''            <div class="customer-name-wall" aria-label="實名客戶案例">
              <span>Pizza-Box</span>
              <span>JIA Group</span>
              <span>Jardine Group</span>
            </div>
            <div class="case-media-grid">
              <div class="photo-scene" aria-label="客戶門店營運場景攝影">
                <span class="scene-tag">門店出餐與外送交接</span>
                <span class="scene-counter"></span><span class="scene-pass"></span><span class="scene-person p1"></span><span class="scene-person p2"></span><span class="scene-rider"></span>
              </div>
              <div class="comparison-board" aria-label="案例前後對比">
                <div><strong>導入前</strong><span>訂單、配送、營銷與客服分散處理。</span></div>
                <div><strong>導入後</strong><span>品牌用同一流程追蹤門店履約和服務狀態。</span></div>
              </div>
            </div>''',
        "home case media",
    )
    write("home.html", text)


def enhance_solutions() -> None:
    text = read("solutions.html")
    text = replace_once(
        text,
        '''            <div class="flow-board-header">
              <h3>場景鏈路</h3>
              <span>從問題到承接能力</span>
            </div>''',
        '''            <div class="flow-board-header">
              <h3>場景鏈路</h3>
              <span>從問題到承接能力</span>
            </div>
            <div class="concept-illustration" aria-label="解決方案場景概念圖">
              <span class="concept-line"></span><span class="concept-line vertical"></span>
              <span class="concept-node n1">外賣平台</span><span class="concept-node n2">門店接單</span>
              <span class="concept-node hub">餐道 OMS</span>
              <span class="concept-node n3">配送履約</span><span class="concept-node n4">對賬分析</span>
            </div>''',
        "solutions hero concept",
    )
    text = replace_once(
        text,
        '''            <p id="scenario-media-body">展示從第三方平台、自有入口到門店接單、製作、配送和客服補救的鏈路。</p>
            <div class="flow-grid">''',
        '''            <p id="scenario-media-body">展示從第三方平台、自有入口到門店接單、製作、配送和客服補救的鏈路。</p>
            <div class="motion-strip" aria-label="場景切換動效關鍵幀">
              <div class="motion-frame"><span>問題</span><strong>漏單與重複維護</strong></div>
              <div class="motion-frame"><span>能力</span><strong>OMS / DMS 承接</strong></div>
              <div class="motion-frame"><span>結果</span><strong>總部追蹤狀態</strong></div>
            </div>
            <div class="flow-grid">''',
        "solutions scenario motion",
    )
    write("solutions.html", text)


def enhance_platform() -> None:
    text = read("platform.html")
    text = replace_once(text, '<div class="stage">', '<div class="stage has-motion">', "platform stage class")
    text = replace_once(
        text,
        '''            <div class="screen side desktop-only">
              <div class="ui-line short"></div>
              <div class="status-row"><span>CDBI 看板</span><span class="status-pill">分析</span></div>
              <div class="status-row"><span>AMS / Connector</span><span class="status-pill">接入</span></div>
            </div>
          </div>''',
        '''            <div class="screen side desktop-only">
              <div class="ui-line short"></div>
              <div class="status-row"><span>CDBI 看板</span><span class="status-pill">分析</span></div>
              <div class="status-row"><span>AMS / Connector</span><span class="status-pill">接入</span></div>
            </div>
            <div class="stage-motion motion-strip compact-motion" aria-label="平台產品切換動效關鍵幀">
              <div class="motion-frame"><span>OMS</span><strong>訂單隊列切換</strong></div>
              <div class="motion-frame"><span>DMS</span><strong>配送狀態推進</strong></div>
              <div class="motion-frame"><span>CDBI</span><strong>對賬差異回流</strong></div>
            </div>
          </div>''',
        "platform stage motion",
    )
    text = replace_once(
        text,
        '''            <div class="mini-table" aria-label="平台能力工作台">
              <div class="mini-table-row"><span>訂單</span><strong>OMS 匯入、分派、取消、退款</strong></div>
              <div class="mini-table-row"><span>門店</span><strong>營業狀態、菜單版本、缺貨提示</strong></div>
              <div class="mini-table-row"><span>配送</span><strong>DMS / iDMS 狀態、第三方配送協同</strong></div>
              <div class="mini-table-row"><span>數據</span><strong>CDBI 報表、Finance Center 對賬</strong></div>
            </div>''',
        '''            <div class="product-shot-frame light" aria-label="平台工作台產品畫面">
              <div class="shot-topbar"><div class="shot-dots"><span></span><span></span><span></span></div><strong>平台工作台</strong></div>
              <div class="shot-body">
                <div class="shot-sidebar"><span></span><span></span><span></span><span></span><span></span></div>
                <div class="shot-table">
                  <div class="shot-row"><span>訂單｜OMS 匯入、分派、取消、退款</span><strong>待接單</strong></div>
                  <div class="shot-row success"><span>門店｜營業狀態、菜單版本、缺貨提示</span><strong>同步</strong></div>
                  <div class="shot-row"><span>配送｜DMS / iDMS 狀態、第三方協同</span><strong>配送中</strong></div>
                  <div class="shot-row alert"><span>數據｜CDBI 報表、Finance Center 對賬</span><strong>差異追蹤</strong></div>
                </div>
              </div>
            </div>''',
        "platform product shot",
    )
    video_map = {
        "<h3>OMS</h3>": '<h3>OMS</h3>\n              <div class="video-thumb" aria-label="OMS 產品視頻畫面"><span class="play-mark"></span><strong>訂單隊列與異常處理</strong></div>',
        "<h3>Menu Center / Store</h3>": '<h3>Menu Center / Store</h3>\n              <div class="video-thumb" aria-label="Menu Center 產品視頻畫面"><span class="play-mark"></span><strong>餐單版本與門店狀態</strong></div>',
        "<h3>DMS / iDMS</h3>": '<h3>DMS / iDMS</h3>\n              <div class="video-thumb" aria-label="DMS 與 iDMS 產品視頻畫面"><span class="play-mark"></span><strong>派單、取餐與異常</strong></div>',
        "<h3>CDBI / Finance Center</h3>": '<h3>CDBI / Finance Center</h3>\n              <div class="video-thumb" aria-label="CDBI 與 Finance Center 產品視頻畫面"><span class="play-mark"></span><strong>渠道報表與對賬差異</strong></div>',
    }
    for old, new in video_map.items():
        text = replace_once(text, old, new, f"platform video {old}")
    write("platform.html", text)


def enhance_integrations() -> None:
    text = read("integrations.html")
    text = replace_once(
        text,
        '''            <div class="connector-lane internal">
              <span>餐道平台</span>
              <strong>OMS、Menu Center、DMS / iDMS、Finance Center、CDBI</strong>
            </div>
          </div>''',
        '''            <div class="connector-lane internal">
              <span>餐道平台</span>
              <strong>OMS、Menu Center、DMS / iDMS、Finance Center、CDBI</strong>
            </div>
            <div class="concept-illustration" aria-label="AMS / Connector 接入概念圖">
              <span class="concept-line"></span><span class="concept-line vertical"></span>
              <span class="concept-node n1">POS / KDS</span><span class="concept-node n2">支付 / ERP</span>
              <span class="concept-node hub">AMS / Connector</span>
              <span class="concept-node n3">配送 API</span><span class="concept-node n4">OMS / CDBI</span>
            </div>
          </div>''',
        "integrations concept",
    )
    text = replace_once(
        text,
        '''          <div class="flow-board compact">
            <div class="flow-grid">''',
        '''          <div class="flow-board compact">
            <div class="motion-strip" aria-label="資料同步動效關鍵幀">
              <div class="motion-frame"><span>來源</span><strong>平台 / POS / ERP</strong></div>
              <div class="motion-frame"><span>校驗</span><strong>AMS / Connector</strong></div>
              <div class="motion-frame"><span>使用</span><strong>OMS / Finance / CDBI</strong></div>
            </div>
            <div class="flow-grid">''',
        "integrations motion",
    )
    write("integrations.html", text)


def enhance_customers() -> None:
    text = read("customers.html")
    text = replace_once(
        text,
        '''            <div class="proof-mini-grid">
              <strong>效率</strong><strong>評分</strong><strong>規模</strong>
            </div>''',
        '''            <div class="case-media-grid">
              <div class="photo-scene" aria-label="客戶門店與品牌場景攝影">
                <span class="scene-tag">品牌門店與外送高峰</span>
                <span class="scene-counter"></span><span class="scene-pass"></span><span class="scene-person p1"></span><span class="scene-person p2"></span><span class="scene-rider"></span>
              </div>
              <div class="product-shot-frame light" aria-label="案例數據看板">
                <div class="shot-topbar"><div class="shot-dots"><span></span><span></span><span></span></div><strong>案例數據看板</strong></div>
                <div class="shot-body">
                  <div class="shot-sidebar"><span></span><span></span><span></span></div>
                  <div class="shot-table">
                    <div class="shot-row success"><span>品牌數量</span><strong>5000+</strong></div>
                    <div class="shot-row"><span>每日處理訂單</span><strong>500M+</strong></div>
                    <div class="shot-row alert"><span>效率變化</span><strong>30% up</strong></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="motion-strip" aria-label="案例導入前後動效關鍵幀">
              <div class="motion-frame"><span>導入前</span><strong>工具分散</strong></div>
              <div class="motion-frame"><span>接入中</span><strong>OMS / DMS 匯入</strong></div>
              <div class="motion-frame"><span>導入後</span><strong>數據與服務回流</strong></div>
            </div>''',
        "customers hero media",
    )
    metric_old_new = [
        ('<div class="metric"><strong>5000+</strong><span>品牌數量</span></div>', '<div class="metric"><strong>5000+</strong><span>品牌數量</span><div class="metric-chart" aria-hidden="true"><span style="height: 32%"></span><span style="height: 46%"></span><span style="height: 70%"></span><span style="height: 88%"></span></div></div>'),
        ('<div class="metric"><strong>500M+</strong><span>每日處理訂單</span></div>', '<div class="metric"><strong>500M+</strong><span>每日處理訂單</span><div class="metric-chart" aria-hidden="true"><span style="height: 38%"></span><span style="height: 60%"></span><span style="height: 76%"></span><span style="height: 96%"></span></div></div>'),
        ('<div class="metric"><strong>400+</strong><span>覆蓋城市</span></div>', '<div class="metric"><strong>400+</strong><span>覆蓋城市</span><div class="metric-chart" aria-hidden="true"><span style="height: 48%"></span><span style="height: 56%"></span><span style="height: 72%"></span><span style="height: 84%"></span></div></div>'),
        ('<div class="metric"><strong>200K+</strong><span>門店數量</span></div>', '<div class="metric"><strong>200K+</strong><span>門店數量</span><div class="metric-chart" aria-hidden="true"><span style="height: 42%"></span><span style="height: 62%"></span><span style="height: 82%"></span><span style="height: 94%"></span></div></div>'),
        ('<div class="metric"><strong>4.5B+</strong><span>每月配送訂單 GMV</span></div>', '<div class="metric"><strong>4.5B+</strong><span>每月配送訂單 GMV</span><div class="metric-chart" aria-hidden="true"><span style="height: 36%"></span><span style="height: 50%"></span><span style="height: 76%"></span><span style="height: 90%"></span></div></div>'),
        ('<div class="metric"><strong>30% up</strong><span>客戶效率提升</span></div>', '<div class="metric"><strong>30% up</strong><span>客戶效率提升</span><div class="metric-chart" aria-hidden="true"><span style="height: 34%"></span><span style="height: 44%"></span><span style="height: 64%"></span><span style="height: 78%"></span></div></div>'),
    ]
    for old, new in metric_old_new:
        text = replace_once(text, old, new, "customers metric chart")
    text = replace_once(
        text,
        '''          <div class="detail-panel">
            <h3 id="case-title">Pizza-Box</h3>''',
        '''          <div class="detail-panel">
            <div class="product-shot-frame light" aria-label="客戶案例產品畫面">
              <div class="shot-topbar"><div class="shot-dots"><span></span><span></span><span></span></div><strong>案例營運視圖</strong></div>
              <div class="shot-body">
                <div class="shot-sidebar"><span></span><span></span><span></span></div>
                <div class="shot-table">
                  <div class="shot-row"><span>訂單整合</span><strong>OMS</strong></div>
                  <div class="shot-row success"><span>配送履約</span><strong>DMS / iDMS</strong></div>
                  <div class="shot-row alert"><span>數據與服務</span><strong>CDBI</strong></div>
                </div>
              </div>
            </div>
            <h3 id="case-title">Pizza-Box</h3>''',
        "customers case dashboard",
    )
    write("customers.html", text)


def enhance_resources() -> None:
    text = read("resources.html")
    text = replace_once(
        text,
        '''          <div class="resource-router">
            <h3>資源路徑</h3>''',
        '''          <div class="resource-router">
            <h3>資源路徑</h3>
            <div class="motion-strip" aria-label="資源路徑動效關鍵幀">
              <div class="motion-frame"><span>評估</span><strong>確認問題</strong></div>
              <div class="motion-frame"><span>導入</span><strong>整理系統</strong></div>
              <div class="motion-frame"><span>營運</span><strong>提交支援</strong></div>
            </div>''',
        "resources router motion",
    )
    text = replace_once(
        text,
        '''          <div class="access-board">
            <div class="system-column"><strong>渠道與入口</strong><span>外賣平台</span><span>H5 / Web / APP / QR</span></div>''',
        '''          <div class="access-board">
            <div class="system-column"><strong>渠道與入口</strong><span>外賣平台</span><span>H5 / Web / APP / QR</span><div class="metric-chart" aria-hidden="true"><span style="height: 40%"></span><span style="height: 62%"></span><span style="height: 76%"></span><span style="height: 88%"></span></div></div>''',
        "resources access visual",
    )
    text = replace_once(
        text,
        '''          <div class="routing-canvas">
            <div><strong>業態</strong><span>Pizza / 餐飲集團 / 甜品 / 咖啡 / 鮮食零售</span></div>''',
        '''          <div class="route-media-grid">
            <div class="photo-scene" aria-label="資源案例攝影構圖">
              <span class="scene-tag">相似業態案例</span>
              <span class="scene-counter"></span><span class="scene-person p1"></span><span class="scene-person p2"></span><span class="scene-rider"></span>
            </div>
            <div class="product-shot-frame light" aria-label="演示分流產品畫面">
              <div class="shot-topbar"><div class="shot-dots"><span></span><span></span><span></span></div><strong>演示分流</strong></div>
              <div class="shot-body"><div class="shot-sidebar"><span></span><span></span><span></span></div><div class="shot-table"><div class="shot-row"><span>現有系統</span><strong>POS / KDS</strong></div><div class="shot-row"><span>主要問題</span><strong>漏單</strong></div><div class="shot-row success"><span>推薦模組</span><strong>OMS</strong></div></div></div>
            </div>
            <div class="motion-strip" aria-label="演示分流動效關鍵幀">
              <div class="motion-frame"><span>01</span><strong>填寫現況</strong></div><div class="motion-frame"><span>02</span><strong>匹配模組</strong></div><div class="motion-frame"><span>03</span><strong>安排演示</strong></div>
            </div>
          </div>
          <div class="routing-canvas">
            <div><strong>業態</strong><span>Pizza / 餐飲集團 / 甜品 / 咖啡 / 鮮食零售</span></div>''',
        "resources demo media",
    )
    write("resources.html", text)


def enhance_about() -> None:
    text = read("about.html")
    text = replace_once(
        text,
        '''            <div class="network-map">
              <span class="node-main">廣州總部</span>
              <span>香港</span>
              <span>北京</span>
              <span>上海</span>
              <span>成都營運中心</span>
            </div>''',
        '''            <div class="network-map">
              <span class="node-main">廣州總部</span>
              <span>香港</span>
              <span>北京</span>
              <span>上海</span>
              <span>成都營運中心</span>
            </div>
            <div class="photo-scene" aria-label="餐道服務團隊與客戶導入場景">
              <span class="scene-tag">導入、培訓與營運支援</span>
              <span class="scene-counter"></span><span class="scene-pass"></span><span class="scene-person p1"></span><span class="scene-person p2"></span><span class="scene-rider"></span>
            </div>''',
        "about office photo",
    )
    text = replace_once(
        text,
        '''          <div class="trust-band">
            <div><strong>ISO 27001</strong><span>資訊安全管理</span></div>''',
        '''          <div class="route-media-grid">
            <div class="cert-tile"><strong>ISO 27001</strong><span>資訊安全管理</span></div>
            <div class="cert-tile"><strong>ISO 20000</strong><span>IT 服務管理</span></div>
            <div class="cert-tile"><strong>DMS</strong><span>吞吐量與可用性看板</span></div>
          </div>
          <div class="trust-band">
            <div><strong>ISO 27001</strong><span>資訊安全管理</span></div>''',
        "about trust visuals",
    )
    write("about.html", text)


def enhance_demo() -> None:
    text = read("demo.html")
    text = replace_once(
        text,
        '''            <div class="demo-summary-grid">
              <div><span>意圖</span><strong id="intent-summary">產品演示</strong></div>
              <div><span>推薦模組</span><strong>OMS、DMS / iDMS、CDBI、AMS / Connector</strong></div>
              <div><span>下一步</span><strong>提交後由團隊按場景安排演示。</strong></div>
            </div>''',
        '''            <div class="demo-summary-grid">
              <div><span>意圖</span><strong id="intent-summary">產品演示</strong></div>
              <div><span>推薦模組</span><strong>OMS、DMS / iDMS、CDBI、AMS / Connector</strong></div>
              <div><span>下一步</span><strong>提交後由團隊按場景安排演示。</strong></div>
            </div>
            <div class="product-shot-frame light" aria-label="演示摘要產品畫面">
              <div class="shot-topbar"><div class="shot-dots"><span></span><span></span><span></span></div><strong>需求分流視圖</strong></div>
              <div class="shot-body">
                <div class="shot-sidebar"><span></span><span></span><span></span></div>
                <div class="shot-table">
                  <div class="shot-row"><span>業態與地區</span><strong>由表單填入</strong></div>
                  <div class="shot-row"><span>現有系統</span><strong>POS / ERP</strong></div>
                  <div class="shot-row success"><span>推薦演示</span><strong>OMS / iDMS</strong></div>
                </div>
              </div>
            </div>''',
        "demo product shot",
    )
    text = replace_once(
        text,
        '''            <div class="detail-list">
              <div>多平台訂單：OMS / COMS / SOMS。</div>''',
        '''            <div class="motion-strip" aria-label="演示安排動效關鍵幀">
              <div class="motion-frame"><span>01</span><strong>提交現況</strong></div>
              <div class="motion-frame"><span>02</span><strong>判斷模組</strong></div>
              <div class="motion-frame"><span>03</span><strong>安排演示</strong></div>
            </div>
            <div class="detail-list">
              <div>多平台訂單：OMS / COMS / SOMS。</div>''',
        "demo aside motion",
    )
    write("demo.html", text)


def main() -> None:
    insert_css()
    enhance_index()
    enhance_home()
    enhance_solutions()
    enhance_platform()
    enhance_integrations()
    enhance_customers()
    enhance_resources()
    enhance_about()
    enhance_demo()
    print("PASS: T31 visual media layer applied to stitch-ready low-fidelity pages")


if __name__ == "__main__":
    main()
