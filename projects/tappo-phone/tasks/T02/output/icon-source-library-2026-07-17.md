# Icon 素材来源库（2026-07-17）

## 推荐优先级

1. 先用项目或 MOS / Tappo 现有组件库，保持设计系统一致。
2. 通用 UI icon 优先使用开源 SVG icon 库，便于导入 Figma、绑定 Token、进入代码。
3. 品牌 logo / 支付 logo 优先使用品牌官方素材或明确品牌图标库，不建议随意使用 UGC 素材。
4. 插画、3D、营销类 icon 可使用商业素材库，但必须记录授权来源。

## 通用 UI Icon

| 来源 | 适合场景 | 授权/注意点 |
| --- | --- | --- |
| Iconify | 全局搜索、多 icon set 汇总、Figma 快速导入 | 聚合大量开源 icon set，使用时看每个 set 的 license |
| Lucide | SaaS、后台、POS、设置页线性图标 | ISC，风格干净，适合作为默认线性 icon 库 |
| Remix Icon | 中性系统 icon、后台操作、移动端工具栏 | 官方说明个人/商业可用，适合管理后台 |
| Material Symbols | 标准系统动作、状态、导航 icon | Apache 2.0，可调粗细、填充、光学尺寸 |
| Phosphor Icons | 更柔和、现代、多字重 icon | MIT，多 weight，适合产品 UI 和演示图 |
| Tabler Icons | 大量 24px 线性图标、仪表盘、后台 | MIT，数量多，统一 24px 网格 |
| Fluent UI System Icons | 微软系、企业工具、状态和命令栏 | MIT，尺寸和 filled/regular 体系完整 |
| IconPark | 多色/线性/填充、运营类和中文语境 | Apache 2.0，有 Figma、React、Vue、SVG 支持 |
| Bootstrap Icons / Heroicons | 简洁组件、Web 原型、Tailwind 生态 | MIT，数量相对更少但稳定 |

## 品牌 Logo / 支付 Logo

| 来源 | 适合场景 | 授权/注意点 |
| --- | --- | --- |
| Simple Icons | 常见品牌单色 SVG、技术品牌、SaaS logo | CC0 项目，但仍需看品牌商标/免责声明 |
| Brandfetch | 自动获取品牌 logo、颜色、字体、品牌资料 | API 场景更合适，需看套餐和使用条款 |
| Logo.dev | 公司 logo API、交易/商户列表 logo | 可按域名/股票/加密符号取 logo，免费层通常有归因要求 |
| Worldvectorlogo / Brands of the World | 查找品牌矢量 logo | 适合参考和寻找来源，实际商用仍需确认商标/品牌授权 |
| 品牌官方 Brand Assets | 支付方式、金融、合作伙伴 logo | 最推荐；微信支付、支付宝、八达通、PayMe 等尽量走官方或项目授权素材 |

## 高质感 / 插画 / 3D Icon

| 来源 | 适合场景 | 授权/注意点 |
| --- | --- | --- |
| Hugeicons | 更精致的现代 UI icon，多风格，Figma/代码/MCP 支持 | 免费 stroke rounded 可商用；Pro 需购买 |
| Streamline | 高质量大套系 icon、插画、emoji | 免费素材可商用但不是完全开源；高级素材需订阅 |
| Icons8 | 多风格 icon、插画、照片、动效 | 免费可用通常需要归因；无归因需付费或使用指定 no-attribution 集 |
| IconScout | 3D icon、Lottie、插画、贴纸 | 资产市场型，逐项看 license；适合营销/官网/视觉稿 |
| Noun Project | 大量人工创作 icon、概念 icon | 免费使用一般需要归因；付费可去归因 |

## Iconfont 使用规则

- 可以作为中文语境和快速搜索来源，尤其适合找通用业务 icon 灵感。
- 不建议直接把 Iconfont 上的 UGC 支付 logo 或品牌 logo 用到商业项目。
- 若要商用，需要逐个确认作者授权、官方库限制和商用说明。
- 下载后优先导入 SVG，而不是直接使用 iconfont 字体文件，便于 Figma 编辑和代码按需加载。

## 项目接入建议

- Figma：优先 Iconify Figma 插件、IconPark / Hugeicons 插件或直接导入 SVG。
- 代码：优先 npm 包或本地 SVG sprite，避免整包 icon font 造成冗余。
- 归档：每次选用外部 icon，记录来源 URL、license、下载日期、是否改色/改形。
- 统一：进入设计稿前先统一尺寸、网格、线宽、圆角和 Token 颜色，不混用多个风格。
