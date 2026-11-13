---
name: "餐道国际官网设计输入系统"
version: "2026-08-20"
primary_color: "#528dff"
page_width: "1440px"
content_width: "1200px"
locale: "zh-Hant"
status: "design-handoff"
---

# Visual Theme & Atmosphere

餐道国际官网应呈现成熟、可信、国际化的企业级餐饮 O2O SaaS 气质。视觉语言以深夜海军蓝、真实餐饮场景、真实产品截图、清晰数据连线和克制动效构成，但页面内容不应变成连续的深色卡片墙。

全站统一的是设计 DNA：主色、字体、截图框、光影、间距、动效节奏和真实素材原则。每个页面的表达语法必须变化：Home 是电影感 Hero 与连接中枢，Solutions 是场景叙事，Platform 是真实产品截图切换器，Integrations 是系统网络，Customers 是案例轮播，Resources 是支持路径，About 是时间线和地点，Demo 是多步骤表单。

## 2026-08-20 Homepage MCP Update

本设计系统已按 Figma 首页节点 `336:7645` 增量更新。首页新版风格可作为后续高保真统一基准，但它不是可无条件照搬的事实源：MCP 中的视觉结构、比例、光影和页面节奏可继承；未授权指标、模拟 Logo、简体残留、假平台徽标和临时 AI 图像不得作为正式官网事实。

Homepage MCP 的核心判断：

- 暗色餐饮运营场景建立第一眼行业感和权威感。
- 主标题中心化，第二行用 `#528dff` 强调业务转折。
- Hero 下方允许产品截图舞台跨出 1440 画布，制造高保真官网纵深。
- 平台段使用深色渐变、连接中枢和产品工作台，而不是普通卖点卡片。
- 白底案例段使用编辑式引导 + 横向案例卡。
- 深色数据带只展示授权指标。
- Final CTA 回到白底销售转化，并用运营场景图片拼贴承接真实业务。

# Color Palette & Roles

- Primary: `#528dff`，用于主按钮、激活态、关键连线、焦点边框。
- Primary hover / active: `#3b82f6`，用于产品工作台内激活导航、Tab 底线、深色面板强调。
- Primary soft: `#eef5ff`，用于浅底弱强调、标签和轻量选中态。
- Blue glow border: `#79b3ff`，仅用于深色产品面板或系统中枢边框。
- Dark text: `#16233d`，按 95% / 65% / 45% 透明度表达正文层级。
- Dark-muted text: `#838e9c`，用于暗色 Hero、深色数据带和 Footer 辅助文案。
- Light page: `#f6f8fc`，用于设计执行版低保真和可读性强的信息区。
- Navy canvas: `#0e1526` / `#10192c` / `#0f172a` / `#000d2b`，用于 Hero、连接中枢、产品舞台和数据带。
- Product panel: `#141e30`，sidebar `#0f1829`，active sidebar `#1e3a5f`。
- Surface: `#ffffff` / `#eef5ff`，用于表单、列表、案例、FAQ 和状态面板。
- Line: `rgba(22, 35, 61, 0.12)` / `#e2e8f0`，用于分隔线和卡片边界。
- Dark line: `rgba(255,255,255,0.07)`，用于深色产品面板内部边界。
- Footer: `#141414`，Footer link `#c7d5e6`。

不要使用彩虹霓虹、赛博朋克、游戏 HUD、加密货币视觉、过度玻璃拟态或无业务目的的发光图形。

# Typography Rules

- 繁體中文生产视觉使用 `Noto Sans TC` 或同类现代无衬线字体。
- 英文和技术词使用 `Inter` 或同类中性无衬线字体。
- 字距固定为 `0`，不使用负字距。
- 不使用 `text-transform`、全大写、全小写或自动首字母大写处理产品名。
- `iDMS`、`SaaS`、`AMS / Connector`、客户名和产品名必须按术语表显示。

## Homepage MCP Type Scale

- Hero title: 64px / 80px，Bold 或 Medium 视觉重量，只用于首屏或强转折句。
- Section title: 36px / 40px，用于主要模块标题。
- Subsection title: 24px / 33px，用于产品工作台标题、分组标题和卡组标题。
- Body large: 18px / 28px，用于 Hero 说明和暗色模块说明。
- Body tight: 18px / 24px，用于白底案例说明、CTA 文案。
- Body medium: 16px / 24px，用于案例卡正文和模块摘要。
- Body small: 14px / 20px，用于链接、标签说明、面板说明。
- UI small: 12px / 16.5px，用于产品工作台内部列表、Tab 和状态。
- Stat number: 64px / 80px，数字可使用 Inter Medium，只有授权指标可用。

MCP 参考代码中部分标题带负字距；正式 token 仍保持 `letter-spacing: 0`，通过行高、留白和字体重量还原紧凑感。

# Component Stylings

- Button: 主按钮使用 `#528dff` 填充；次按钮为浅底或透明边框；按钮文本必须是明确动作。
- Button shadow: `0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.10)`；CTA 大按钮可使用 `0 10px 7.5px rgba(0,0,0,0.10), 0 4px 3px rgba(0,0,0,0.10)`。
- Card: 只用于重复项、案例、表单和状态面板；默认圆角 8px 或 16px。首页继承案例卡可使用 14px，标签可使用 4px，紧凑 Logo mark 可使用 6px。
- Product Screenshot Stage: 真实截图放入深色或浅色截图框；蓝色光影只在外框和标注层，不改变产品 UI。
- Product Workbench: 深色面板 `#141e30`，侧栏 `#0f1829`，激活侧栏 `#1e3a5f`，边框 `rgba(59,130,246,0.25)`，弱阴影 `0 0 40px rgba(59,130,246,0.08)`。
- Tabs / Rails: 用于同级能力切换；必须有默认、hover、active、mobile 替代。
- Accordion: 用于 FAQ、移动端 Sticky 内容和阶段选择。
- Carousel: 用于产品视频、主案例和 Logo 带；不得生成假 Logo 或假视频封面。
- Forms: Demo 使用多步骤表单和实时摘要，不做装饰性卡片堆叠。

# Layout Principles

- 页面容器宽度：1440px。
- 实际内容宽度：1200px。
- 首页 MCP 中允许使用 1280px 宽容器、104px 左右边距和跨画布产品截图舞台；其他页面应谨慎使用，只在 Hero / 产品展示 / 案例轮播里制造视觉纵深。
- Hero 可采用约 998px 高度，顶部留白约 240px，底部保留 160px 以上承接产品截图舞台。
- 桌面端采用 12 栏网格。
- 移动端基准为 390px；不能只是统一压成单列，应按组件类型改成 Accordion、Stepper、横向滚动截图或精简网络。
- 同一页面不得连续出现两个以上相同的三列或四列卡片网格。
- Hero、产品舞台、连接中枢、案例和表单必须有明显层级差异。

# Homepage MCP Pattern Library

| Pattern | 结构 | 适用页面 | 禁止 |
|---|---|---|---|
| Cinematic Hero | 暗色场景图、中心标题、双 CTA、Logo band、产品截图舞台 | Home、Solutions 顶部、About 顶部 | 假 Logo、未授权客户名、泛化主张 |
| Operational Hub | 深色渐变、左叙事、右连接中枢图、下方产品工作台 | Home、Platform、Integrations | 把产品、功能、财务、供应链混成一张无依据地图 |
| Product Workbench | 深色容器、侧栏、搜索、状态 Tab、订单/门店/配送状态列表 | Platform、Demo、Integrations | 虚构真实产品 UI、未授权状态数量 |
| Editorial Cases | 左侧引导，右侧横向案例卡、标签和链接 | Customers、Home | 模拟客户 Logo 当真、简体残留 |
| Proof Band | 深色餐饮场景背景、5 个授权规模指标 | Home、Customers | 未授权百分比、SLA、100% 可用 |
| Media Mosaic CTA | 白底转化文案 + 场景图片拼贴 | Home、Demo、About | 纯装饰图、与页面任务无关的氛围图 |
| Footer | 深色 Footer、品牌 Logo、四列链接、社媒图标 | 全站 | 导航缺页、大小写被 text-transform 改写 |
| Product Video Entry | 产品名 + 视频入口 + 素材缺失态 | Platform、Resources | 假视频封面、假播放数据 |

# Homepage MCP Fact Guard

可继承为正式页面事实的内容：

- `5000+` 合作品牌数量、`500M+` 日处理订单数、`400+` 覆盖城市数、`200K+` 门店数量、`4.5B+` 月度交付订单 GMV，来源为 PPT Slide 11。
- Home Hero 下方可以使用用户授权 SVG Logo。
- 客户案例可使用实名客户案例，但客户 Logo、客户现场图、客户引用语仍按素材授权状态处理。

只可作为视觉占位 / 风格参考，不得写成正式事实：

- MCP Platform Overview 中 `-80%`、`-95%`、`+60%`、`100%`。
- MCP Customer Card 中的模拟 Logo 方块。
- MCP 中的简体中文标签和临时 AI 生成图片。
- 未在素材清单确认的产品截图、产品视频、客户现场照片和公司照片。

# Stitch Generation Notes

Stitch 生成时不要直接上传 T25 内部低保真作为页面。应使用：

1. `GLOBAL-CONTEXT.md`
2. 对应页面 Prompt
3. `module-manifest.yaml`
4. `asset-manifest.yaml`
5. `motion-manifest.yaml`
6. 真实产品截图和客户素材

访客页面不得显示 PPT 页码、OLD 编号、内部警告、待确认说明、组件英文名称或设计备注。信息不足时保留结构并标记素材缺失，不编造事实。外部 Stitch 写入或上传前需要先提交准备摘要。

## Stitch Generation Addendum from Homepage MCP

在 Stitch 继续生成剩余页面时，必须额外读取：

1. `tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
2. `tasks/T35/output/stitch-input/homepage-mcp-stitch-guardrails-2026-08-20.md`
3. `tasks/T17/output/design-handoff/design-tokens.json`

生成 prompt 只描述布局、内容和结构；如果当前 Stitch 项目已有设计系统，不在 prompt 中重复写色值、字体和主题。

剩余页面推荐顺序：

1. Solutions / Desktop / TC
2. Integrations / Desktop / TC
3. Customers / Desktop / TC
4. Resources / Desktop / TC
5. About / Desktop / TC
6. Demo / Desktop / TC

Home 与 Platform 已有正式高保真输出。Customers 旧失败 screen 不得复用为正式稿。
