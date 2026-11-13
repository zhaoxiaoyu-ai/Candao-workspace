# T56 Figma 顶部原始组件路径文字超链接修正报告

日期：2026-09-01  
Figma 文件：`BMXIuVRzSUUt9YNhVAQA6K`  
页面：`03 Desktop Pages / Bilingual Validation` / `3:5`

## 用户澄清

用户明确指出：需要的是“原来写的文字”，只是原来的文字无法直接导航到截图组件的真实路径，因此要把它转换成超链接。

本轮修正后的口径：

- 保留原来写在顶部参考区的 Aceternity 组件来源文字。
- 不再把这些文字替换成官网最终层级 / sitemap 文案。
- 不新增新的说明面板。
- 不删除、不隐藏原来的顶部截图。
- 只将原文字本身设置为对应 Aceternity 真实组件 URL hyperlink。

## 已执行操作

- 删除状态复核：T54 新增面板 `623:2` 当前不存在。
- 截图复核：顶部原始截图节点 `12/12` 可见。
- 文本修正：将顶部 `12` 个文字节点恢复为原始 Aceternity 组件来源文字。
- Hyperlink 修正：将每个文字节点的完整文本范围设置为 `URL` 类型 hyperlink。
- URL 校验：12 个目标 Aceternity URL 均返回 HTTP `200`。

## 文字与链接映射

| Figma text node | 保留的原始文字 | Hyperlink |
| --- | --- | --- |
| `93:4676` | `https://ui.aceternity.com/blocks/logo-clouds/Logo Cloud Marquee` | `https://ui.aceternity.com/blocks/logo-clouds/logo-cloud-marquee` |
| `93:4681` | `Blocks / Hero Sections / Hero Section With Images Grid and Navbar` | `https://ui.aceternity.com/blocks/hero-sections/hero-section-with-images-grid-and-navbar` |
| `93:4683` | `Blocks / Bento Grids / Three Columns With Images` | `https://ui.aceternity.com/blocks/bento-grids/three-column-with-images` |
| `94:4687` | `Blocks / Bento Grids / Symmetric Bento Grid` | `https://ui.aceternity.com/blocks/bento-grids/symmetric-bento-grid` |
| `94:4691` | `Blocks / CTA Sections / CTA With Masonry Images` | `https://ui.aceternity.com/blocks/cta-sections/cta-with-masonry-images` |
| `94:4695` | `Blocks / Empty States / Empty State Vertical Grid` | `https://ui.aceternity.com/blocks/empty-states/empty-state-vertical-grid` |
| `95:4699` | `Blocks / Feature Sections / Features Bento Grid With Skeletons` | `https://ui.aceternity.com/blocks/feature-sections/bento-grid` |
| `95:4703` | `Blocks / Footers / Simple Footer With Four Grids` | `https://ui.aceternity.com/blocks/footers/simple-footer-with-four-grids` |
| `95:4707` | `Blocks / Contact Sections / Contact Form Grid With Details` | `https://ui.aceternity.com/blocks/contact-sections/contact-form-grid-with-details` |
| `95:4714` | `Blocks / Blog Sections / Blog With Search` | `https://ui.aceternity.com/blocks/blog-sections/blog-with-search` |
| `95:4718` | `Blocks / Frequently asked questions / FAQs With Grid` | `https://ui.aceternity.com/blocks/faqs/faqs-with-grid` |
| `95:4722` | `Blocks / Stats Sections / Stats With Gradient` | `https://ui.aceternity.com/blocks/stats-sections/stats-with-gradient` |

注：Figma 中保留原始换行；上表为了阅读压缩为单行。

## QA 结果

- 顶部文本节点：`12/12` 存在。
- 原始文字匹配：`12/12` pass。
- URL hyperlink 匹配：`12/12` pass。
- URL HTTP 状态：`12/12` 为 `200`。
- 顶部截图节点：`12/12` 可见。
- T54 面板 `623:2`：不存在。
- `T54 archived /` 前缀节点：`0`。

QA JSON：`tasks/T56/output/qa/t56-figma-original-path-link-readback-qa.json`

## 截图

- `tasks/T56/output/screenshots/t56-figma-original-path-links-restored.png`
- 截图尺寸：`4096 x 1969`

## 结论

T56 已纠正 T55 的剩余误解。当前 Figma 顶部参考区以 T56 为准：原始 Aceternity 组件来源文字被保留，并已变成能跳转到真实组件 URL 的 hyperlink；原截图没有被替换或删除。
