# Stitch 全局上下文

生成繁體中文优先的餐道国际官网设计。不要显示双语正文。Header 可显示语言切换「繁中 / EN」。

## 目标用户

餐饮品牌决策者、总部运营、IT / 集成团队、配送主管、财务和销售转化对象。

## 视觉规则

- 主色：`#528dff`。
- 深色文字：`#16233d`，95% / 65% / 45% 透明度。
- 页面容器：1440px。
- 实际内容：1200px。
- 圆角：只用 8px 和 16px。
- 繁體中文使用现代无衬线；英文字母和技术词使用 Inter 类字体。
- 不使用 `text-transform` 改写 `iDMS`、`SaaS`、`AMS / Connector`。

## 内容规则

只使用提供的访客文案。不要显示 PPT 页码、OLD 编号、内部警告、待确认说明、组件英文名称或设计备注。不要创造客户、Logo、数字、认证、视频、地址、新闻、SLA 或产品 UI。

## Stitch 执行规则

- 同一页面只允许一个目标输出；不得为同一页面连续生成 3-5 个重复 screen 作为交付物。
- 生成前必须先整理关键词、页面结构、素材状态、禁用项和已确认文案，确保 prompt 一次准确。
- 首次生成只调用一次 `generate_screen_from_text`。若结果存在局部问题，先记录到 QA / issue log；只有硬性问题才允许基于同一个 screen 使用一次定向 `edit_screens`，不得重新生成新 screen 堆叠版本。
- 硬性问题包括：页面错误、导航/核心文案缺失、出现内部说明、placeholder、假 Logo、未授权指标或状态数量、受保护产品名大小写错误。
- 非硬性问题包括：局部间距、个别图形精度、轻微视觉偏好、图标选择、动效细节和模块精修建议。此类问题先记录，不生成新 screen，也不立即 edit。
- Codex 正式输出目录只保留最终 screen 对应的一个 HTML 和一张目标图；中间版本不得留在 `.stitch/designs/`。
- 每次输出前必须检查：导航完整性、文案完整性、无内部词、无 placeholder、无假客户 Logo、无未授权指标或状态数量、无 `text-transform` 破坏 `iDMS` / `SaaS` / `AMS / Connector` 等大小写敏感术语。

## 页面语法

- Home：电影感 Hero + 产品截图舞台 + 3D 连接中枢。
- Solutions：Sticky Scroll 场景叙事。
- Platform：真实产品截图切换器。
- Integrations：交互式系统网络与 API 数据流。
- Customers：编辑式案例轮播和行业筛选。
- Resources：内容分类、FAQ 和支持路径。
- About：公司时间线、服务体系和地点地图。
- Demo：多步骤表单和动态需求摘要。

## 参考图

`ref-00` 到 `ref-06` 当前缺失，不能使用替代图。可先按 DESIGN.md 生成结构；遇到产品截图、客户 Logo、视频或公司图片时保留真实素材位。

每个页面 prompt 必须显式读取：

- `../references/reference-map.yaml`：确认 `ref-*` 编号、缺失状态和不可替代规则。
- `../asset-manifest.yaml`：确认真实素材文件名、用途、公开授权和缺失状态。

如果页面 prompt 中列出的素材状态为 `missing`、`needs-cleanup` 或 `blocked_by_missing_master`，只能保留素材位和内部交接说明，不得生成假截图、假 Logo、假视频、假客户图、假证书或假合作方标识。
