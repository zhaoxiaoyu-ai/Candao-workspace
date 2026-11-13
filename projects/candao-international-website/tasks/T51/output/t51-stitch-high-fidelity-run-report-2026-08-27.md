# T51 Stitch 高保真执行报告

状态：blocked  
日期：2026-08-27  
任务：将 T50「接入評估中心｜餐道」内容放到 Stitch 设计为高保真候选。

## 执行边界

- 用户请求：把当前 T50 内容放到 Stitch 上设计为高保真。
- 本轮没有把浏览器 ambient state 当作指令，只将其作为当前查看上下文。
- 设计输入以 T50 公开视频合同、HTML、截图和 Stitch brief 为准。
- 可见页面必须为繁體中文，品牌显示「餐道」；不得出现 `Finance Center`、`Candao`、内部执行说明、假备案、未授权指标、图标字体 ligature 文本。

## Stitch 执行记录

Project：`10888304674441209287`  
Design System：`assets/a99f770bf474445d98b287cf983bc147`  
Device：`DESKTOP`  
Model：`GEMINI_3_PRO`

1. 初次生成
   - Screen：`5a392fddd4c04634bc21c9e1926fffe8`
   - 本地 HTML：`output/stitch-output/t51-stitch-screen-5a392fddd4c04634bc21c9e1926fffe8.html`
   - QA：fail
   - 默认内容缺失：`47/58`
   - 交互联合内容缺失：`86/99`
   - 可见禁用词：`Candao`、`All Rights Reserved`、`全球領先`
   - 图标 / ligature 风险：`10`
   - 未授权指标风险：`3`

2. 第一轮 edit
   - Screen：`6159caff0a1c43c8ba7f3b504d26fe73`
   - 本地 HTML：`output/stitch-output/t51-stitch-screen-6159caff0a1c43c8ba7f3b504d26fe73-edited.html`
   - QA：fail
   - 默认内容缺失：`13/58`
   - 交互联合内容缺失：`81/99`
   - 可见禁用词：`Candao`、`All Rights Reserved`
   - 图标 / ligature 风险：`0`
   - 未授权指标风险：`0`

3. 第二轮 edit
   - Screen：`f8b664b70bdc4d55a2674dfed40a2b2c`
   - 本地 HTML：`output/stitch-output/t51-stitch-screen-f8b664b70bdc4d55a2674dfed40a2b2c-final.html`
   - QA：fail
   - 默认内容缺失：`2/58`
   - 交互联合内容缺失：`71/99`
   - 可见禁用词：`0`
   - 图标 / ligature 风险：`0`
   - 未授权指标风险：`0`

4. 第三轮内容覆盖 edit
   - Screen：`5d13339cb5a44dc6a73169adf3eec6d3`
   - 本地 HTML：`output/stitch-output/t51-stitch-screen-5d13339cb5a44dc6a73169adf3eec6d3-final.html`
   - 1440 截图：`output/screenshots/t51-stitch-screen-5d13339cb5a44dc6a73169adf3eec6d3-1440-full.png`
   - QA：fail
   - 默认内容缺失：`3/58`
   - 交互联合内容缺失：`44/99`
   - 可见禁用词：`0`
   - 图标 / ligature 风险：`0`
   - 未授权指标风险：`0`
   - 横向溢出：`0`
   - `domain-copy`：`6/6 pass`

## 结论

Stitch 已实际生成并多轮修正，但第三轮仍没有达到用户要求的 `100%` 内容覆盖。主要问题是 Stitch 会持续压缩、改写或省略五个场景的精确文案、状态说明、支援查询和案例 / 资源 / 演示路由内容。

因此，本轮不能把 Stitch screen `5d13339cb5a44dc6a73169adf3eec6d3` 登记为正式高保真通过稿。它只能作为“最接近的 Stitch 候选稿 / 失败证据”保留。

当前真正可作为页面落地依据的版本仍是 T50：

- `tasks/T50/output/prototype/index.html`
- `tasks/T50/output/screenshots/t50-public-hifi-1440-full.png`
- `tasks/T50/output/contracts/t50-public-hifi-contract.json`

## 后续建议

- 若继续使用 Stitch：需要使用更可控的导入 / 上传路径，而不是继续用文本生成和 edit 让 Stitch 自行保留长内容。
- 若目标是可直接输出页面：建议从 T50 HTML 进入本地前端实现或可控静态高保真交付，再用截图 / HTML 包作为设计同步资产。
- 若仍要保留 Stitch 画布：可把 `5d13339cb5a44dc6a73169adf3eec6d3` 作为视觉候选参考，但不得作为内容完整通过稿。
