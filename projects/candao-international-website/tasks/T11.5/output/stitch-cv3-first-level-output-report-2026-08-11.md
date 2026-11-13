# Stitch C v3 一级目录输出报告

任务：T11.5-C / Stitch 页面补齐  
日期：2026-08-11  
输出语言：本文档为内部说明，使用简体中文；官网页面画面为繁體中文单一 Locale。

## 1. 本轮结论

本轮已按用户确认方向，在现有 Stitch 项目中推进 C v3，而不是只修改本地原型。

Stitch 项目：

- Project：`Candao International Website T11.5-C`
- Project ID：`10888304674441209287`
- Design System：`Candao International SaaS Blue #528dff`
- Design System ID：`assets/12141666305108771015`

本轮重点不是推翻 C v2，而是基于现有链路补齐：

- 恢复 `資源` 为一级目录主页；
- 将 `解決方案` 从产品功能页改为业务场景页；
- 将 `平台` 明确为产品能力、Capability Map、UI Demo 和数据流页面；
- 将 `資源` 从左侧目录 + 单一 FAQ 面板，修正为六个独立资源模块；
- 将 `關於 Candao` 从沿用 C v2 的薄页，补齐为公司可信度、服务方式、里程碑、加入我们和联络分流的完整一级主页；
- 建立 C v3 Stitch 画布索引，减少多版本混乱；
- 下载 Stitch HTML / PNG，并生成 1440 全页面截图。

## 2. 当前 Stitch C v3 评审基准

| 一级目录 | 当前评审版本 | Screen ID | 状态 | 说明 |
|---|---|---|---|---|
| 首页 | `Candao Home - Desktop TC (Fixed)` | `d38f6ed9fe2c42b29849f2ab5776ef90` | 沿用 C v2 | Home 本轮尝试编辑时 Stitch 返回 `service unavailable`，未重复提交；下一轮优先补 `資源` 导航、场景命名和 Product Showcase。 |
| 解決方案 | `C v3 / 解決方案 - Candao International / Desktop TC` | `4188f2a7f3f84566b5644b19efdedadd` | C v3 已生成 | 已改为场景选择、业务问题、角色压力和推荐能力，不再作为产品功能目录。 |
| 平台 | `C v3 / 平台 - Candao International / Desktop TC / Fixed QA` | `0386a1f4c8a34c438d596d2cda0c4022` | C v3 Fixed QA | 已补齐 `資源` 导航，去除 `dashboard` 英文和金额型假数据。 |
| 整合能力 | `整合能力 - Candao International (Fixed)` | `621fecf4ef6945f58faa162d9f8af3b3` | 沿用 C v2 | 下一轮补齐 `資源` 导航和 v3 页脚一致性。 |
| 客戶案例 | `客戶案例 - Candao International` | `cae782557534431fa34ce1305f6ea348` | 沿用 C v2 | 下一轮需审查匿名案例、指标和未确认数据风险。 |
| 資源 | `C v3 / 資源 - Candao International / Desktop TC / 模組化修正版` | `d2b440264f1d435e99052f430177c868` | C v3 模块化修正 | 已改为支援中心、常见问题、媒体与新闻、案例资源、了解更多、查询表单六个独立模块，不再使用左侧目录统一承载所有内容。 |
| 關於 Candao | `C v3 / 關於 Candao - Candao International / Desktop TC / 模組化展開版 / QA 修正版` | `06f4fee9e4264d5c82415e97c2a7eb67` | C v3 QA 修正版 | 已补齐關於我們、服務方式、里程碑、安全與服務、加入我們、聯絡我們和最终 CTA，并移除未确认承诺型文案。 |
| 預約產品演示 | `預約產品演示 - Candao International (Fixed)` | `07cf801156f94a2681cf94c5e1102703` | 沿用 C v2 | 下一轮补齐 `資源` 导航与查询分流一致性。 |

Stitch 画布索引：

- `00 Candao C v3 保留版索引 / 2026-08-11`
- Screen ID：`9de35f83d35d4584802ec4f9af450d20`

肉眼定位版索引：

- `00 从这里开始看 / Candao C v3 当前评审版`
- 作用：给用户在 Stitch 画布中按可见标题和大卡片定位当前评审版，不要求用户查看 Screen ID。
- 备注：该定位页未在本次 About / Resources 补齐后重新生成，避免继续增加重复 `00` 索引 Screen；新增页请按可见标题 `C v3 / 資源 - Candao International / Desktop TC / 模組化修正版` 和 `C v3 / 關於 Candao - Candao International / Desktop TC / 模組化展開版 / QA 修正版` 查找。
- 本地备份：`tasks/T11.5/output/stitch-cv3-first-level/00-start-here-cv3-review.html`
- 本地截图：`tasks/T11.5/output/stitch-cv3-first-level/00-start-here-cv3-review.png`

## 3. 本地备份

Stitch HTML / PNG 备份：

- `.stitch/designs/cv3-first-level/`
- `tasks/T11.5/output/stitch-cv3-first-level/`

当前应优先查看：

- `tasks/T11.5/output/stitch-cv3-first-level/00-start-here-cv3-review.html`
- `tasks/T11.5/output/stitch-cv3-first-level/solutions-cv3-desktop-tc.html`
- `tasks/T11.5/output/stitch-cv3-first-level/platform-cv3-desktop-tc-fixed-qa.html`
- `tasks/T11.5/output/stitch-cv3-first-level/resources-cv3-desktop-tc-modular.html`
- `tasks/T11.5/output/stitch-cv3-first-level/about-cv3-desktop-tc-modular-qa.html`
- `tasks/T11.5/output/stitch-cv3-first-level/00-candao-cv3-index.html`

1440 全页面截图：

- `tasks/T11.5/output/stitch-cv3-first-level-fullsize-screenshots/solutions-desktop-1440-full.png`
- `tasks/T11.5/output/stitch-cv3-first-level-fullsize-screenshots/platform-desktop-1440-full.png`
- `tasks/T11.5/output/stitch-cv3-first-level-fullsize-screenshots/resources-desktop-1440-full.png`
- `tasks/T11.5/output/stitch-cv3-first-level-fullsize-screenshots/resources-cv3-modular-desktop-1440-full.png`
- `tasks/T11.5/output/stitch-cv3-first-level-fullsize-screenshots/about-cv3-modular-qa-desktop-1440-full.png`

## 4. QA 结果

已对 `解決方案`、`平台 Fixed QA`、`資源 模組化修正版`、`關於 Candao QA 修正版` 的 HTML 进行文本扫描和 1440 视口全页面渲染。

| 检查项 | 结果 |
|---|---|
| 是否包含 `資源` 一级导航 | 通过 |
| 是否包含 `繁中 / EN` 语言切换 | 通过 |
| 是否存在英文版权 `All rights reserved / Copyright` | 未发现 |
| 是否残留 `dashboard` 英文标签 | 未发现 |
| 是否存在金额型假数据 | 未发现 |
| 是否把产品能力提升为一级导航 | 未发现 |
| 是否生成全页面截图 | 已完成 |
| `資源` 是否改为独立模块表达 | 通过：支援中心、常见问题、媒体与新闻、案例资源、了解更多、查询表单均独立呈现 |
| `關於 Candao` 是否补齐内容展开 | 通过：關於我們、服務方式、里程碑、安全與服務、加入我們、聯絡我們、Final CTA 均已出现 |
| `關於 Candao` 是否存在未确认服务承诺 | 已修正：移除 `24/7`、`SLA`、灾备、认证、真实年份、具体数字等风险表达 |

遗留细节：

- Stitch HTML 中仍可读到图标字形 token，例如 `arrow_forward`、`search`、`arrow_downward`。视觉上通常会由图标字体渲染为图标，但进入开发实现时必须替换为真实 icon component。
- `解決方案` 页面底部链接仍偏产品能力导向，下一轮可同步为 v3 统一页脚结构。
- C v2 沿用页面的顶部导航多数尚未包含 `資源`，需要下一轮 Stitch 编辑或 Figma / 前端实现时统一。

## 5. 本轮边界

本轮没有声称完成全部一级页面的 C v3 高保真统一，但已补齐用户指出的 `資源` 模块表达问题和 `關於 Candao` 内容展开缺口。

已完成的是：

- 在 Stitch 中真实生成 / 修正 4 个关键 C v3 页面；
- 在 Stitch 中生成 C v3 画布索引；
- 明确 8 个一级目录的当前评审基准；
- 固化哪些页沿用 C v2、哪些页进入 C v3。

未完成的是：

- Home C v3 需要重新纳入当前评审基准并补齐 v3 导航 / 场景命名 / Product Showcase；
- Integrations / Customers / Contact 的 C v3 一致性编辑；
- 图标字形 token 的真实组件替换；
- Mobile 独立 Stitch 页面。

## 6. 下一轮建议

优先顺序：

1. 补 `Home C v3`：新增 `資源` 导航、更新场景命名、强化 Hero / Product Showcase。
2. 补 `Integrations / Customers / Contact` 的 v3 一致性：导航、页脚、未确认事实风险。
3. 使用 B Visual Director 对 C v3 当前页面进行复审。
4. 再决定是否进入 Figma / 前端高保真生产。
