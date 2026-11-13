# T59: Figma 解决方案英文版本重新执行

状态：done  
日期：2026-09-02

## 背景

用户要求“重新执行这一步”，承接 T58 的 Figma 解决方案英文版本新增任务。当前理解为：基于原繁體中文解决方案页面节点 `447:8876` 重新克隆并生成英文版本，避免只在旧英文稿上局部修补。

## 目标

在 Figma 文件 `BMXIuVRzSUUt9YNhVAQA6K` 中：

- 保留原繁體中文解决方案页面 `447:8876 / 解决方案` 不被覆盖。
- 保留 T58 旧英文稿作为历史版本，不删除用户可见画板。
- 新增一个重做版英文解决方案页面，命名为 `Solutions / Desktop 1440 / EN / Revision 2`。
- 英文可见文案继承 T57 英文首页的表达节奏，避免直译腔。
- 避免使用未确认的 `Finance Center` 可见展示词，默认使用 `financial reconciliation`。
- 完成 Figma 读回 QA、domain-copy QA、截图和本地任务记录。

## 输出语言

- 用户汇报和任务文档：简体中文。
- Figma 重做版可见页面文案：英文。
- 产品名、URL、Frame 名、节点 ID、代码标识保留英文或技术原文。

## 验收

- 新增 Revision 2 英文 Frame 存在。
- 原繁體中文源 Frame 未被覆盖。
- T58 旧英文 Frame 未被删除。
- 正文、导航、CTA 和 UI Label 不出现繁體中文残留，语言切换器除外。
- `Finance Center / Business Center / Data Center` 不出现在可见文案。
- `iDMS`、`SaaS`、`OMS`、`DMS`、`CDBI` 等术语大小写保持正确。
- 文本无 1440 Frame 溢出。

## 完成记录

2026-09-02 已完成。新增 Figma 节点 `842:2 / Solutions / Desktop 1440 / EN / Revision 2`，原繁體中文节点 `447:8876 / 解决方案` 与 T58 旧英文节点 `812:2 / Solutions / Desktop 1440 / EN` 均保留。Figma 读回 QA pass：可编辑文本中文残留仅语言切换器 `繁中 / EN`，`Finance Center / Business Center / Data Center` 为 `0`，大小写敏感术语风险 `0`，文本溢出 `0`，父级容器溢出 `0`，按钮重叠 `0`。domain-copy QA `76/76 pass`。截图、英文映射和执行报告已保存到 `output/`。
