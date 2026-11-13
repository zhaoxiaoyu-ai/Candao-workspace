# Website Generation Prompt

任务：T11.5-C Stitch / AI Web Generator 网页生成流程  
项目：餐道国际官网重构  
日期：2026-08-03  
输出语言：内部说明使用简体中文；Prompt 控制语可保留英文；网页正文默认繁體中文单一 Locale。

## 1. C01 Prompt Agent

本轮已使用 Agent-PD design-only 生成 `AI Website Generation Prompt Agent`，L1 确定性校验通过。

Agent-PD 输出副本：

```text
tasks/T11.5/output/ai-website-generation-prompt-agent-spec-2026-08-03.json
```

### Agent 目标

把以下输入转换成适合 Stitch / AI Web Generator 的页面生成 Prompt：

- T07 Final Website Copy；
- T08 Website UX Specification；
- T10 Website Visual Direction；
- T11 High Fidelity Visual Design；
- Website Production Localization Guideline。

### Agent 输出

每个页面输出：

- 可直接粘贴到 Stitch / AI Web Generator 的 Prompt；
- 页面结构；
- 可见文案；
- 摄影 / 视频方向；
- UI Overlay 或 Product UI Demo 说明；
- Motion 要求；
- 禁止事项；
- 生成后 QA 检查；
- 失败修正 Prompt。

### Agent 硬性规则

```text
Generate a Traditional Chinese first international SaaS website.

Language:
Traditional Chinese.

Do not display bilingual content.

Include language switch:
繁中 / EN

Visual style:
Premium SaaS
Large Editorial Photography
Semi-real SaaS UI
Product Motion
```

不得生成：

- 同屏繁體中文 + English 正文；
- English subtitle 作为装饰；
- 简体中文网页正文；
- 未确认客户 Logo、真实客户照片、真实运营数据、认证、SLA、价格；
- 抽象 AI 背景、粒子线网、3D 科技球体、商务握手、办公室会议图；
- 密集后台截图墙或内部产品说明书式页面。

## 2. 全局生成 Prompt

以下全局 Prompt 必须放在每个页面 Prompt 的最前面。

```text
Generate a Traditional Chinese first international SaaS website page for Candao.

Language:
Traditional Chinese only for all visible website body copy, navigation, CTA, cards, labels and form text.
Do not display bilingual content.
The only English allowed in the visible page is the brand name "Candao" and the language switch label "繁中 / EN".

Header:
Candao logo on the left.
Navigation in Traditional Chinese: 解決方案, 平台, 訂單管理, 配送管理, 集成, 客戶, 關於.
Primary CTA: 預約產品演示.
Language switch: 繁中 / EN.

Visual style:
Premium international B2B SaaS.
Real restaurant operations photography.
Large editorial composition.
Semi-real SaaS UI overlay.
Structured product sections.
Purposeful product motion.
Clear conversion path.

Design rules:
Use a 12-column desktop grid.
Use generous negative space.
Keep cards at 8px radius or smaller.
Use restrained shadows.
Use neutral backgrounds, Candao brand primary color for CTA, signal green for success states, service amber for peak or warning states, system blue for data flow and controlled red for exceptions.
Avoid card-in-card layouts.
Avoid abstract tech, AI, particle, globe or office visuals.
All product UI data must be anonymized and fictional.

Responsive:
Desktop 1440 first.
Mobile 390 must degrade to a single-column layout.
Capability maps become vertical cards on mobile.
Complex demos become swipeable or stepped cards on mobile.
Respect reduced motion with static equivalent states.
```

## 3. C02 Home 页面 Prompt

目标：生成 `Home / Desktop 1440 / TC` 与移动端降级版本，重点验证 Hero、摄影、UI Overlay、Product Showcase。

```text
Use the global generation prompt.

Page:
Home / Desktop 1440 / TC

Page goal:
In 5 seconds, make visitors understand that Candao is an international SaaS platform for complex restaurant operations, and guide them toward booking a demo or exploring the platform.

Hero visible copy:
Headline: 為複雜餐飲營運建立清晰連接
Description: Candao 協助成長中的餐飲品牌連接跨渠道訂單、多門店流程、配送履約與營運數據，讓總部看得更清楚，讓門店更專注服務。
Primary CTA: 預約產品演示
Secondary CTA: 探索平台能力

Hero composition:
Use a large real restaurant operation scene, not a software screenshot background.
Composition ratio: 70% real restaurant operation scene, 30% SaaS UI layer, 40% readable negative space for text.
Place the headline and CTA in the left or center-left area.
Place semi-real SaaS UI overlay on the right or center-right area without hiding restaurant operation actions.

Photography:
Show a peak-hour restaurant workflow with front counter order intake, kitchen preparation, store team coordination and delivery handoff.
The people should be working naturally, not posing for the camera.
The image should feel premium, editorial and practical.

Hero UI overlay:
Create a semi-real operational UI with anonymized data:
- 統一訂單隊列
- 門店狀態
- 配送時間線
- 營運摘要
- 系統連接狀態
Use status chips such as 新訂單, 準備中, 配送中, 已完成, 需跟進.
Use calm data-flow motion to show orders entering, statuses changing and data returning to headquarters.

Sections after hero:
1. Trust module
Headline: 為多門店、多渠道餐飲營運建立可信基礎
Use five capability trust cues: 行業理解, 系統連接, 服務準備, 區域營運理解, 導入支援.
Do not use client logos or numbers.

2. Problem switcher
Headline: 多平台營運不應讓每一家門店承受更多切換
Cards: 訂單分散, 菜單重複維護, 配送高峰難協調, 數據割裂.
Default selected card: 訂單分散.

3. Product showcase
Headline: 一個平台，串連每日餐飲營運流程
Show a capability flow:
訂單進入 → 菜單與門店狀態同步 → 配送狀態更新 → 數據回到總部視圖 → 系統持續連接
Use a central capability flow with five clickable capability cards:
訂單管理, 菜單與門店, 配送管理, 數據智能, 系統集成.

4. Solutions preview
Headline: 從你的營運場景開始
Use scenario cards for 連鎖營運, 多渠道訂單, 配送履約, 自有點餐, 數據化營運.

5. Integrations snapshot
Headline: 連接你已經使用的餐飲系統
Show system categories only: 訂單渠道, POS, 支付, 會員, 配送, 營運數據.
Do not show real platform logos unless confirmed.

6. Case highlight template
Headline: 用營運挑戰，而不只是品牌標誌，呈現客戶故事
Use a template-style case card with 挑戰, 導入能力, 業務結果, 授權素材待確認.

7. Final CTA
Headline: 準備讓餐飲營運更清晰、更可控？
Description: 與 Candao 團隊討論你的門店、渠道、配送流程與系統連接需求。
CTA: 預約產品演示

Motion:
Hero UI overlay uses slow data flow and status change.
Product showcase uses scroll-triggered capability activation.
Problem switcher uses simple fade.
No decorative motion.

Mobile 390:
Hero uses static photography cover with compact UI overlay.
Problem switcher becomes accordion.
Product showcase becomes swipeable capability cards.
CTA remains visible near hero and final section.

QA:
The page must not show bilingual body text.
The page must not look like a generic tech startup homepage.
The product showcase must explain product value, not list features.
```

### Home 失败修正 Prompt

```text
Revise the Home page to follow Candao T10 visual direction.
Make the hero more like an international restaurant SaaS website:
use real restaurant operations photography, preserve readable negative space, keep only Traditional Chinese visible copy, strengthen semi-real SaaS UI overlay and make Product Showcase explain the operational flow instead of listing features.
Remove abstract technology backgrounds, client logos, numbers, English subtitles and oversized decorative cards.
```

## 4. C03 Platform 页面 Prompt

目标：生成 `Platform / Desktop 1440 / TC` 与移动端降级版本，重点验证 Capability Map、UI Demo、Product Cards。

```text
Use the global generation prompt.

Page:
Platform / Desktop 1440 / TC

Page goal:
Explain Candao as a connected restaurant SaaS platform, not a product catalog.
Visitors should understand how orders, menus, delivery, data and integrations form one manageable operating layer.

Hero visible copy:
Headline: 一個餐飲 SaaS 平台，支撐訂單、菜單、配送、數據與系統連接
Description: Candao 將餐飲品牌每天使用的渠道、門店和系統連接起來，讓關鍵營運流程可以在同一個平台中被管理和追蹤。
Primary CTA: 探索平台能力
Secondary CTA: 預約產品演示

Hero visual:
Use a calm platform UI composition with light restaurant operation context in the background.
Avoid making the page look like a backend screenshot gallery.

Core section 1: Capability Map
Headline: 把分散工作流整合成可管理的營運系統
Description: 從多渠道接單、菜單維護，到配送協調和數據分析，Candao 讓不同營運環節可以相互連接，而不是各自孤立運作。
Structure:
Center node: Candao 營運平台
Left nodes: 訂單渠道, POS, 支付, 會員
Right nodes: 門店, 配送, 數據視圖
Bottom node: 總部可視
Capability nodes: 訂單管理, 菜單與門店, 配送管理, 自有點餐, 數據智能, 系統集成.
Use subtle animated lines to show data and workflow connection.
Do not create a complex sci-fi network.

Core section 2: Platform UI Demo
Use a 3-step scroll or stepper demo:
Step 1: 多個營運系統連接到 Candao 營運平台.
Step 2: 訂單觸發菜單、配送和數據狀態更新.
Step 3: 總部看見門店健康狀態、渠道摘要和異常提示.
The UI should include anonymized dashboard cards, store status, channel summary and exception summary.

Core section 3: Product Cards
Headline: 從平台能力進入具體工作流
Cards:
- 訂單管理: 集中處理跨渠道訂單與狀態。
- 菜單與門店: 維護菜單、門店資料和狀態資訊。
- 配送管理: 協調自有配送與外部運力。
- 自有點餐: 建立品牌自己的點餐入口。
- 數據智能: 整理營運、渠道和財務資料。
- 系統集成: 連接既有餐飲技術生態。
Each card should have a subtle arrow link, not a large repeated button.

Business outcome section:
Headline: 讓總部更可視，讓門店更專注
Description: 統一的營運平台能減少門店切換系統的負擔，讓總部更快掌握異常、渠道表現和配送狀態。
CTA: 預約產品演示

Motion:
Capability Map nodes reveal in order.
Connection lines flow slowly.
Stepper transitions last 300ms to 500ms.
Product card hover highlights a single connection path.

Mobile 390:
Capability Map becomes grouped vertical cards.
UI Demo becomes three swipeable steps.
Product cards become a single-column list with compact arrows.

QA:
The page must feel like a capability layer, not a module directory.
Order Management and Delivery Management must be visually emphasized as first-stage product capabilities.
No real integrations logos or unconfirmed platform names.
```

### Platform 失败修正 Prompt

```text
Revise the Platform page so the Capability Map becomes the visual center.
Remove dense feature lists and abstract network visuals.
Show Candao as a connected restaurant operating layer with clear nodes, slow connection lines, semi-real SaaS UI and Traditional Chinese-only page copy.
Make Order Management and Delivery Management clear entry points without using unconfirmed logos or real data.
```

## 5. C04 Order Management 页面 Prompt

目标：生成 `Order Management / Desktop 1440 / TC` 与移动端降级版本，重点验证产品展示、Workflow、Motion 表达。

```text
Use the global generation prompt.

Page:
Order Management / Desktop 1440 / TC

Page goal:
Show how multi-channel orders enter one clear workflow and return visibility to headquarters.
Avoid an internal OMS manual.

Hero visible copy:
Headline: 讓多渠道訂單進入同一個清晰流程
Description: 當外賣平台、自有點餐和門店系統同時產生訂單，Candao 協助門店集中接收、處理和追蹤狀態，讓總部也能掌握異常與渠道表現。
Primary CTA: 了解訂單管理
Secondary CTA: 預約產品演示

Hero visual:
Use restaurant front counter order intake or store staff managing orders as the real scene.
Overlay a semi-real order workflow UI with anonymized order cards.

Section 1: Business Problem
Headline: 訂單越分散，門店越容易被迫切換
Description: 多個設備、多個後台和多種狀態會增加漏單、錯單和延誤風險，也讓總部難以及時理解問題發生在哪裡。
Show a before/after layout:
Before: 多設備, 多後台, 多狀態.
After: 統一訂單隊列, 狀態清楚, 總部可見.

Section 2: Unified Order Workflow
Create a 4-step guided UI demo:
Step 1: 多個渠道同時產生訂單.
Visual: channel chips and incoming order cards.
Business result: 訂單來源分散被看見.

Step 2: Candao 匯總到統一訂單隊列.
Visual: unified order queue, channel tags, store assignment.
Business result: 集中可見.

Step 3: 門店處理訂單狀態.
Visual: status timeline with 新訂單, 已接單, 準備中, 可取餐, 需跟進.
Business result: 門店減少切換.

Step 4: 數據回流總部視圖.
Visual: headquarters summary panel with channel performance, store status and exception summary.
Business result: 總部可管理.

Section 3: Product Capability
Headline: 讓訂單狀態、門店資訊和系統連接保持同步
Description: 訂單管理能力可與菜單、門店狀態、POS 和配送流程配合，支援從接單到分析的連貫流程。
Capability chips: 渠道訂單, 門店歸屬, 狀態追蹤, 例外提示, 總部摘要.

Section 4: Business Outcome
Headline: 減少切換，提升訂單處理可視性
Description: 當訂單流程更集中，門店能更快處理狀態，總部也能更容易發現渠道、門店或時段中的營運問題。
CTA: 預約產品演示

Motion:
Use scroll-triggered or stepper storyboard.
Order cards move from source chips into unified queue.
Status chips update one step at a time.
Exception summary updates when 需跟進 appears.
Keep motion calm, readable and easy to implement.

Mobile 390:
The 4-step demo becomes swipeable cards.
Unified order queue can scroll horizontally.
Headquarters summary appears in step four.

QA:
The page must include both store execution and headquarters visibility.
Do not show real order numbers, customer names, prices, delivery platform logos or actual customer data.
```

### Order Management 失败修正 Prompt

```text
Revise the Order Management page so the central story is a clear 4-step workflow:
multi-channel orders enter, Candao unifies the queue, store status changes, headquarters receives visibility.
Remove dense feature tables, real customer/order data, platform logos and generic dashboard screenshots.
Keep all visible page text in Traditional Chinese.
```

## 6. C04 Delivery Management 页面 Prompt

目标：生成 `Delivery Management / Desktop 1440 / TC` 与移动端降级版本，重点验证产品展示、Workflow、Motion 表达。

```text
Use the global generation prompt.

Page:
Delivery Management / Desktop 1440 / TC

Page goal:
Show how delivery peaks, capacity choice, tracking and exceptions become visible and manageable.
Avoid showing only a rider app.

Hero visible copy:
Headline: 讓配送高峰不再只靠人工臨場協調
Description: Candao 協助餐飲品牌在同一流程中協調自有配送與外部運力，追蹤履約狀態，並更快處理高峰期和異常情況。
Primary CTA: 了解配送管理
Secondary CTA: 預約產品演示

Hero visual:
Use restaurant delivery handoff, kitchen pickup workflow or peak-hour delivery coordination photography.
Overlay a semi-real delivery operations UI with map, queue, dispatch options and exception panel.

Section 1: Business Problem
Headline: 訂單量上升時，配送壓力會很快回到門店
Description: 當運力不足、配送成本波動或取餐延誤發生時，門店和營運團隊需要更清楚地知道可以如何調整履約方式。
Show pressure cues with controlled amber status, not alarmist red.

Section 2: Delivery Workflow
Create a 4-step guided UI demo:
Step 1: 高峰期配送需求上升.
Visual: demand heatmap, store queue and delivery pressure signal.
Business result: 運力壓力出現.

Step 2: 系統分配配送方式.
Visual: fulfillment option selector with 自有配送, 外部運力, 人工覆核.
Business result: 履約方式可選.

Step 3: 配送過程追蹤.
Visual: map view, rider status and delivery timeline.
Business result: 狀態可追蹤.

Step 4: 異常回到營運視圖.
Visual: exception panel with 延遲, 取餐失敗, 顧客通知.
Business result: 異常可處理.

Section 3: Product Capability
Headline: 讓派單、追蹤和異常處理更可見
Description: 配送管理能力可支援派單、騎手工作流、即時配送追蹤、顧客通知和配送交易記錄，讓履約狀態更清晰。
Capability chips: 派單, 運力選擇, 配送追蹤, 顧客通知, 例外處理.

Section 4: Business Outcome
Headline: 讓配送更可控，讓門店少一點被動
Description: 更清晰的配送流程有助營運團隊掌握運力、追蹤異常，並在高峰期更快調整履約方式。
CTA: 預約產品演示

Motion:
Heatmap softly highlights demand.
Dispatch option selector changes selected state.
Delivery timeline progresses in readable steps.
Exception panel appears as a controlled operational state.
Do not create complex route simulation.

Mobile 390:
Map becomes status cards.
Dispatch option selector becomes segmented control.
Timeline becomes vertical steps.
Demo becomes swipeable 4-step cards.

QA:
The page must show operations view, not only rider view.
Do not use real maps, customer addresses, delivery platform logos, real order data, prices or SLA claims.
```

### Delivery Management 失败修正 Prompt

```text
Revise the Delivery Management page so the main product story is a 4-step operations workflow:
peak delivery demand, fulfillment option selection, delivery tracking and exception return.
Reduce decorative map motion, remove real map/address/logo/data elements, and keep all visible copy Traditional Chinese only.
```

## 7. 生成后检查清单

每次 Stitch / AI Web Generator 输出后，必须检查：

| 检查项 | 通过标准 |
| --- | --- |
| Locale | 页面正文、导航、CTA 和 UI Label 只显示繁體中文 |
| Language Switch | Header 有 `繁中 / EN` |
| 国际感 | 首屏像国际 B2B SaaS，而不是国内软件官网或说明书 |
| 餐饮现场 | Hero 或关键视觉能看到真实餐饮运营动作 |
| SaaS 感 | UI Overlay / UI Demo 精细、克制、结构清晰 |
| 产品解释 | UI 能解释订单、门店、配送、数据和系统连接 |
| Motion | 动效服务流程理解，有静态等价状态 |
| 可开发性 | 页面结构可拆成 Header、Hero、Capability、Demo、Cards、CTA 等组件 |
| 风险 | 不出现未确认客户、Logo、数据、认证、SLA、价格和真实订单 |

结论规则：

- 如果 Locale 或未确认事实不通过，必须重生成。
- 如果 Hero 摄影不真实或 UI 过于抽象，应使用失败修正 Prompt 精修。
- 如果页面结构通过但视觉细节不足，可进入设计师二次精修。
