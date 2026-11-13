# T57 Figma 首页英文版本新增报告

日期：2026-09-01  
Figma 文件：`BMXIuVRzSUUt9YNhVAQA6K`  
来源节点：`336:7645` / `首頁`  
新增节点：`656:2` / `Home / Desktop 1440 / EN`

## 执行结果

- 已在 `03 Desktop Pages / Bilingual Validation` 页面中新增英文首页版本，位置为 `x=14685, y=7521`。
- 原繁體中文首页 `336:7645` 保留，未覆盖、未删除、未回退。
- 英文页继承原首页视觉风格、布局、图片、Logo、产品工作台、客户案例、指标带、CTA 与页尾结构。
- 共处理 Figma 可编辑文本节点 `190` 个，覆盖 `149` 条唯一可见文本。

## 英文文案处理

- 生成并保存英文映射表：`translations/t57-home-en-copy-map-2026-09-01.json`。
- 英文文案按官网表达重写，不采用逐字直译。
- 为适配英文版式，局部文案做了短句化处理，例如：
  - `讓餐飲營運，從多平台混亂 / 走向一個清晰系統` -> `Bring Order to / Unified Operations`
  - `一個平台，連接餐飲營運的關鍵流程` -> `One Platform, Core Workflows`
  - 问题卡标题改为 `Scattered Orders`、`Missed Orders`、`Fragmented Data` 等短标签。
- 源 Figma 中未确认效果数字 `-80%`、`+60%`、`-95%`、`100%` 已在英文页改为定性表达 `Faster`、`Smoother`、`Fewer`、`One View`。
- `合作超過 9 年` 未在当前 allowed metrics 中确认，英文页改为 `Long-term partner`。

## Google Translate 说明

用户要求使用 Google Translate 作为底稿。执行中已尝试访问：

- `translate.googleapis.com`
- `translate.google.com`
- `www.google.com`
- `clients5.google.com`
- `translation.googleapis.com`

上述翻译相关域名在当前本机网络中均超时，已保存访问检查：`translations/t57-google-translate-access-check-2026-09-01.json`。因此本轮不声称已成功取得 Google Translate 原始底稿；英文页实际采用人工英文官网适配，并按用户要求避免直译腔。

## 布局修正

- Hero 英文替换后自动布局曾把 H1 和副标题撑宽 / 收窄，已恢复：
  - H1 文本组：`752px`
  - Hero 副标题：`540px`
  - CTA 按钮组重新居中
- 平台概览左列因英文标题自动扩宽曾出现左侧裁切，已恢复到源稿版心内。
- 部分 Aceternity 复刻区文本使用不可加载的 `Helvetica` 字体，已在英文副本中替换为 `Inter`，避免后续文本编辑失败。

## QA

- Figma 读回 QA：`qa/t57-figma-home-en-readback-qa.json`
  - `status: pass`
  - 可编辑文本节点：`190`
  - 语言切换器以外中文残留：`0`
  - `Finance Center / Business Center / Data Center`：`0`
  - 大小写错误术语：`0`
  - 未确认效果百分比残留：`0`
  - `Helvetica` 残留：`0`
- domain-copy QA：`qa/t57-home-en-copy-qa-result.json`
  - `149 / 149 pass`
  - `0 fail`
  - `1 warning`：`CRM` 比来源中文短，属于页尾标准缩写，不影响通过。
- 截图检查：`qa/t57-home-en-screenshot-check-2026-09-01.json`
  - 最终截图：`screenshots/t57-home-desktop-en-figma-1440-full.png`
  - 尺寸：`1444 x 5788`

## 边界

本轮处理的是 Figma 可编辑文本和英文版式。源 Figma 中以图片、矢量或品牌 Logo 形式嵌入的文字未重绘，例如客户 Logo、产品截图或概念图中不可编辑的中文标签。如后续需要完全英文视觉资产，需要单独进行图片 / 矢量素材英文化重绘。
