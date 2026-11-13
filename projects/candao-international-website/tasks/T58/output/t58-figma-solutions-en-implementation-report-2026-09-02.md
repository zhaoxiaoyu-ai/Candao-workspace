# T58 Figma 解决方案英文版本新增报告

状态：完成  
日期：2026-09-02

## 用户请求

基于 Figma 节点 `447:8876` 实现设计，并为解决方案页面新增英文版本。

## 执行结果

- 已保留原繁體中文解决方案页面 `447:8876 / 解决方案`，未覆盖源稿。
- 已在同一 Figma 文件中新增独立英文页面 `812:2 / Solutions / Desktop 1440 / EN`。
- 新英文 Frame 位于当前桌面页面队列右侧，位置为 `x=16474, y=7521`，尺寸为 `1440 x 3719`。
- 英文页面继承现有首页已确定的风格：深色摄影 Hero、蓝色主视觉、浅灰内容区、业务问题卡片、产品界面展示、场景导流和深色页脚。

## 英文处理口径

- Google Translate 相关接口在当前本机网络下超时，访问失败证据已保存为 `tasks/T58/output/translations/t58-google-translate-access-check-2026-09-02.json`；本轮不声称已取得 Google Translate 机器翻译底稿。
- 英文文案按繁體中文源稿、T57 英文首页语气和项目词库进行人工官网表达适配，避免逐字硬译。
- `Finance Center` 未进入英文页面可见文案，对应表达收敛为 `financial reconciliation`。

## QA 结果

- Figma 读回：`pass`
- 可编辑文本节点：`84`
- 唯一可见文本：`76`
- 中文残留：仅语言切换器 `繁中 / EN`
- `Finance Center / Business Center / Data Center`：`0`
- 品牌大小写错误：`0`
- 未确认指标或百分比承诺：`0`
- 1440 Frame 文本溢出：`0`
- domain-copy QA：`76/76 pass`

## 输出文件

- 英文文案映射：`tasks/T58/output/translations/t58-solutions-en-copy-map-2026-09-02.json`
- Google Translate 访问记录：`tasks/T58/output/translations/t58-google-translate-access-check-2026-09-02.json`
- Figma 读回 QA：`tasks/T58/output/qa/t58-figma-solutions-en-readback-qa.json`
- domain-copy QA 输入：`tasks/T58/output/qa/t58-solutions-en-copy-qa-input.json`
- domain-copy QA 结果：`tasks/T58/output/qa/t58-solutions-en-copy-qa-result.json`
- Figma 截图：`tasks/T58/output/screenshots/t58-solutions-en-figma-812-2.png`

## 边界

- 本轮只处理 Figma 中可编辑文本，不重绘图片、Logo、矢量或截图里的内嵌文字。
- 图片和品牌 Logo 仍按原设计资产保留。
- 后续若要继续英文版其他页面，可沿用 T57 / T58 的英文处理口径和读回 QA 方式。
