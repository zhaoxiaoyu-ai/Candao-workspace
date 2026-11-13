# T11.5 Stitch C v4 首页生成记录

日期：2026-08-13

## 本轮目标

根据用户对首页 12 条反馈，先将首页修改关键词放入 Stitch，生成最新首页画面。

重点约束：

- 前台品牌名统一为「餐道」；
- LOGO 云替换为餐道实际服务品牌文字标；
- PPT 数字区保留；
- 「一个平台连接关键流程」改为餐饮营运中枢表达；
- 微型 Dashboard 保留并具备交互预览感；
- 「从实时订单到营运决策」补充五步产品工作流；
- 四个价值点升级为 Bento 模块；
- 首页空白产品卡片改为系统截图位；
- Final CTA 使用产品预览轮播方向；
- 页脚目录保留。

## Stitch 项目

- Project：`Candao International Website T11.5-C`
- Project ID：`10888304674441209287`
- Design System：`Candao International SaaS Blue #528dff`
- Design System ID：`assets/12141666305108771015`

## 参考输入

本轮没有把用户三张本地截图上传到 Stitch。原因是 `upload-to-stitch` 技能要求上传本地文件前必须列出文件清单并等待用户明确确认。

本轮使用的参考方式：

1. 以 Stitch 已有 C v3 首页 Screen 作为视觉基准：
   - `C v3 / 首頁 - Candao International / Desktop TC`
   - Screen ID：`fcd3288dfd7747019419cca1424babb3`

2. 将用户上传的三张首页反馈图转译为 Prompt 约束：
   - 「一个平台连接关键流程」不能只是六宫格，需要表达为营运中枢；
   - 「从即时订单到营运决策」需要保留深色工作流步进感，并绑定真实产品功能；
   - 四个价值点不能只是图标行，需要升级为带 UI 证据的 Bento 模块。

## 生成版本

### 版本 1：短页版

- Screen title：`C v4 / 首頁 - 餐道國際 / Desktop TC / 營運中樞修正版`
- Screen ID：`99b1cad57a804f529ea01c92b7259f47`
- 结果：只生成 Hero、品牌云、数字区和 Footer。
- 结论：缺少营运中枢、微型 Dashboard、工作流、Bento 价值、产品截图区和 Final CTA，不作为评审版。

### 版本 2：完整长页版

- Screen title：`C v4 / 首頁 - 餐道國際 / Desktop TC / 完整長頁修正版`
- Screen ID：`7b459e9c35b04bd9aa38b6fcbfd38555`
- 结果：补齐 Hero、品牌云、数字区、微型 Dashboard、产品截图区和 CTA。
- 结论：仍缺完整营运中枢、五步工作流和四个价值 Bento；顶部和页脚有 `Candao` 可见残留，不作为最终候选。

### 版本 3：完整 QA 候选版

- Screen title：`C v4 / 首頁 - 餐道國際 / Desktop TC / 營運中樞完整版 (QA)`
- Screen ID：`9b20c9a3865b4c799f473ee1b2679487`
- 结果：完成本轮首页结构补齐。
- 结论：作为当前 Stitch 首页 C v4 候选评审版。

本地备份：

- `.stitch/designs/cv4-home/home-operations-hub-complete-qa.html`
- `.stitch/designs/cv4-home/home-operations-hub-complete-qa.png`
- `tasks/T11.5/output/stitch-cv4-home/home-operations-hub-complete-qa.html`
- `tasks/T11.5/output/stitch-cv4-home/home-operations-hub-complete-qa.png`
- `tasks/T11.5/output/stitch-cv4-home/home-operations-hub-complete-qa-full-1440.png`

## QA 结论

当前候选版已完成：

- Header / Footer 可见品牌名修正为「餐道」；
- 页脚版权修正为「© 餐道國際。版權所有。」；
- Hero 使用真实餐饮运营氛围图 + 半真实订单 UI；
- LOGO 云替换为餐饮品牌文字标；
- PPT 数字区保留；
- 新增「一個平台，連接餐飲營運的關鍵流程」营运中枢区；
- 保留并强化微型 Dashboard；
- 新增「從即時訂單，到可行動的營運決策」五步工作流；
- 新增「四個價值，對應真實營運能力」2x2 Bento；
- 保留产品截图区，并填入系统截图；
- Final CTA 使用产品预览视觉；
- `rg` 扫描未发现 `Candao / candao / Can Dao`、Airbnb、HubSpot、Google、Microsoft、Walmart、FedEx、SLA、24/7、99.9 等风险词残留。

仍需人工评审：

- 营运中枢已经从六宫格升级为中心辐射结构，但视觉质感仍偏抽象图，可继续强化 2.5D / 动态数据流；
- 产品工作流已有五步结构，但右侧 UI 面板仍可继续补真实截图细节；
- 产品截图区已非空，但后续应替换为真实系统截图；
- LOGO 云当前是文字标，正式稿需替换授权 Logo 文件；
- Stitch 小预览图比例极窄，评审应优先看本地 1440 全页截图或 Stitch 画布里的完整 Screen。

## Stitch 返回建议

Stitch 本轮返回的后续建议：

- 更新总览索引页，标记此版本为候选；
- 调整 Bento 模块的视觉比重；
- 强化工作流中的 UI 截图细节。

