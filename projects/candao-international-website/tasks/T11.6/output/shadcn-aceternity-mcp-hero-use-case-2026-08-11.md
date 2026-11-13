# shadcn MCP + Aceternity Hero 首个试用方案

日期：2026-08-11

## 1. 安装状态

已在用户级 Codex 配置中加入 shadcn MCP：

```toml
[mcp_servers.shadcn]
command = "/Users/victorwong/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback/pnpm"
args = ["dlx", "shadcn@latest", "mcp", "--cwd", "/Users/victorwong/Documents/Codex/Candao-workspace/projects/candao-international-website/source/react-next-capability-prototype"]

[mcp_servers.shadcn.env]
PATH = "/Users/victorwong/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/victorwong/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback:/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
```

验证结果：

- `pnpm dlx shadcn@latest mcp --help` 已正常返回帮助信息。
- 已验证 Aceternity registry 可读取：`background-beams`、`text-generate-effect`、`moving-border`、`container-scroll-animation`。
- Codex 需要重启后才能加载新增或更新后的 MCP server 配置。2026-08-11 后续已把 `--cwd` 指向 React / Next 原型工程，以便 shadcn MCP 能读取该工程的 `components.json`。

## 2. 第一个使用案例

案例名称：

```text
HomeHeroAceternityTC
```

使用位置：

```text
餐道国际官网 / Home / Hero / Desktop + Mobile / TC
```

目标：

- 用 Aceternity 增强 Hero 的高级感、动效与产品感。
- 不改变 Candao 现有定位：`Operational Clarity for Global Restaurant SaaS`。
- 让首屏 5 秒内说明 Candao 是面向复杂餐饮运营的 SaaS 平台。
- 默认展示繁體中文真实官网版本，不双语混排。

## 3. 推荐 Aceternity 组件

| 组件 | 用法 | 使用边界 |
| --- | --- | --- |
| `BackgroundBeams` | 叠在深色 Hero 背景和餐饮运营摄影上，制造轻量“数据流 / 营运流”感觉 | 透明度控制在 0.16-0.28，不能盖过真实餐饮场景 |
| `TextGenerateEffect` | 用于 H1 首次进入时的轻量文字浮现 | 只用于首屏标题，不用于正文长段落 |
| `MovingBorder` | 用于主 CTA `預約產品演示` 的边缘高亮 | 圆角改为 8-10px，符合 Candao 组件规则 |
| `ContainerScroll` | 不放在 Hero 内，建议用于 Hero 下方 Product Workflow / Product Showcase | 避免首屏过重，移动端需降级为静态 UI |

暂不建议首轮使用：

- `Sparkles`：容易变成泛 AI 气氛。
- `3D Globe`：与餐饮运营平台理解关系弱。
- `Hero Parallax`：图片素材要求高，首轮容易牺牲信息清晰度。
- `Lamp Effect`：偏模板化，和 Candao 真实运营场景不够贴合。

## 4. Hero 视觉设计

### 4.1 桌面布局

画布：

- 宽度：1440
- 首屏高度：760-840
- Header：72px sticky，白色半透明背景
- Hero：full-bleed 餐饮运营摄影作为背景，不把首屏做成左右卡片拼贴

结构：

```text
Header
  Candao Logo
  首页 / 解決方案 / 平台 / 整合能力 / 客戶案例 / 資源 / 關於 Candao
  繁中 / EN
  預約產品演示

Hero
  Background image: restaurant operations
  Dark blue overlay
  BackgroundBeams: low-opacity data flow layer

  Left content
    Eyebrow
    H1 with TextGenerateEffect
    Supporting copy
    CTA row with MovingBorder primary CTA
    Secondary CTA

  Right product proof
    Semi-real SaaS UI overlay
    Order flow
    Store status
    Delivery state
    Data feedback
```

### 4.2 首屏文案

生产视觉稿默认只显示繁體中文：

```text
Eyebrow:
全球餐飲智能營運 SaaS 平台

H1:
讓餐飲營運，從多平台混亂走向一個清晰系統

Description:
Candao 連接訂單、菜單、門店、配送與數據，協助餐飲品牌在多市場、多門店中穩定營運與持續成長。

Primary CTA:
預約產品演示

Secondary CTA:
探索平台能力
```

English 独立 Locale 后续可用：

```text
Eyebrow:
Intelligent SaaS Platform for Global Restaurant Operations

H1:
Bring complex restaurant operations back into one clear system

Description:
Candao connects orders, menus, stores, delivery and data, helping restaurant brands operate steadily across markets and locations.

Primary CTA:
Book a Demo

Secondary CTA:
Explore Platform
```

## 5. 产品证明层设计

右侧不是普通插图，而是半真实 SaaS 产品画面：

```text
顶部状态：
今日營運流程

主 UI：
订单队列 + 门店状态 + 配送状态

流程节点：
接單 -> 分流 -> 履約 -> 配送 -> 數據回饋

状态文案：
訂單、門店、配送與數據已形成閉環
```

视觉处理：

- UI 面板背景使用 `rgba(255,255,255,0.92)`。
- 主色 `#528dff` 只用于关键状态、CTA、连接线和激活节点。
- 圆角控制在 8-10px。
- 不使用未确认数字、客户 Logo、认证、价格、SLA 或 `24/7`。

## 6. React / Next.js 实现落点

建议文件结构：

```text
app/(site)/page.tsx
components/marketing/home-hero.tsx
components/marketing/hero-operation-console.tsx
components/ui/background-beams.tsx
components/ui/text-generate-effect.tsx
components/ui/moving-border.tsx
public/images/candao/home-hero-restaurant-ops.png
```

项目初始化后添加 Aceternity registry：

```json
{
  "registries": {
    "@aceternity": "https://ui.aceternity.com/registry/{name}.json"
  }
}
```

推荐安装命令：

```bash
pnpm dlx shadcn@latest add @aceternity/background-beams
pnpm dlx shadcn@latest add @aceternity/text-generate-effect
pnpm dlx shadcn@latest add @aceternity/moving-border
```

若 registry namespace 尚未配置，也可直接安装：

```bash
pnpm dlx shadcn@latest add https://ui.aceternity.com/registry/background-beams.json
pnpm dlx shadcn@latest add https://ui.aceternity.com/registry/text-generate-effect.json
pnpm dlx shadcn@latest add https://ui.aceternity.com/registry/moving-border.json
```

## 7. 示例组件草图

```tsx
"use client";

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { HeroOperationConsole } from "@/components/marketing/hero-operation-console";

export function HomeHero() {
  return (
    <section className="relative min-h-[780px] overflow-hidden bg-[#07111f] text-white">
      <Image
        src="/images/candao/home-hero-restaurant-ops.png"
        alt="餐飲門店營運場景"
        fill
        priority
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,.95),rgba(7,17,31,.72)_42%,rgba(7,17,31,.28))]" />
      <BackgroundBeams className="opacity-25 mix-blend-screen" />

      <div className="relative z-10 mx-auto grid min-h-[780px] max-w-[1320px] grid-cols-[0.95fr_1.05fr] items-center gap-16 px-8 py-24">
        <div>
          <p className="mb-6 inline-flex rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white/85">
            全球餐飲智能營運 SaaS 平台
          </p>
          <TextGenerateEffect
            words="讓餐飲營運，從多平台混亂走向一個清晰系統"
            className="max-w-[760px] text-[68px] leading-[1.05] tracking-normal text-white"
          />
          <p className="mt-6 max-w-[660px] text-[20px] leading-[1.7] text-white/82">
            Candao 連接訂單、菜單、門店、配送與數據，協助餐飲品牌在多市場、多門店中穩定營運與持續成長。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <MovingBorderButton
              borderRadius="10px"
              containerClassName="h-12 w-auto"
              className="border-white/10 bg-[#528dff] px-6 text-[15px] font-semibold"
            >
              預約產品演示
            </MovingBorderButton>
            <button className="h-12 rounded-lg border border-white/18 bg-white/10 px-6 text-[15px] text-white">
              探索平台能力
            </button>
          </div>
        </div>

        <HeroOperationConsole />
      </div>
    </section>
  );
}
```

## 8. 验收标准

- 5 秒内能理解 Candao 是餐饮运营 SaaS 平台。
- 首屏默认只显示繁體中文正文和 CTA；只允许 `Candao`、`SaaS`、`EN` 等必要词。
- `預約產品演示` 在桌面和移动端都可见。
- Hero 使用真实餐饮运营图像，不使用抽象 AI 背景替代业务场景。
- Product UI Overlay 必须出现订单、门店、配送、数据回馈的闭环。
- 不出现未确认客户 Logo、具体经营数字、认证、SLA、价格或绝对化承诺。
- 移动端改为：文案在上，产品 UI 面板在下，背景动效降透明或关闭。
