# React / Next.js 官网能力全景原型交付说明

日期：2026-08-11

## 1. 工程入口

已创建独立 React / Next.js + Tailwind 原型工程：

```text
projects/candao-international-website/source/react-next-capability-prototype/
```

本地开发入口：

```bash
cd projects/candao-international-website/source/react-next-capability-prototype
PATH="/Users/victorwong/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/victorwong/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback:$PATH" pnpm dev --port 4186
```

浏览器访问：

```text
http://localhost:4186
```

注意：Next 16 dev server 对 `127.0.0.1` 的 dev resource 会触发 cross-origin 警告；本轮验证使用 `localhost`。

## 2. 当前定位

本原型定位为：

```text
能力暴露与交互验证台
```

不是最终官网内容定稿。用户已补充：最准确的内容设计将在 Figma 上实现。因此本工程重点是：

- 暴露官网所有一级能力与模块；
- 验证导航、筛选、场景选择、平台能力切换、整合分类、资源入口和 Demo 分流；
- 为后续 Figma 精准内容设计与前端实现提供结构骨架。

## 3. 已接入技术

- Next.js `16.3.0`
- React `19.2.8`
- Tailwind CSS v4
- shadcn/ui `base-nova`
- Aceternity registry components:
  - `BackgroundBeams`
  - `TextGenerateEffect`
  - `MovingBorder`
- `lucide-react`
- `motion`

Aceternity 原始组件已做本地修正：

- 修正 React 19 lint / ref 问题；
- 移除不必要 `any`；
- 避免 `Math.random()` 造成 hydration 不稳定；
- 将光效颜色收敛到 Candao 蓝绿系；
- 让 `TextGenerateEffect` 可放入真实 `h1`。

## 4. 已暴露官网能力

页面包含 9 个主要 section：

1. Home Hero
2. 营运流程入口
3. Solutions / 解決方案
4. Platform / 平台
5. Integrations / 整合能力
6. Customers / 客戶案例
7. Resources / 資源
8. About Candao / 關於 Candao
9. Demo / 預約產品演示

交互能力：

- 移动端导航开合；
- 桌面导航 Hover Mega Menu；
- Solutions 场景切换；
- Platform 能力分组筛选；
- Platform 能力详情切换；
- Integrations 分类切换；
- Demo 意图分流。

## 5. 文件结构

核心文件：

```text
src/app/page.tsx
src/app/layout.tsx
src/app/globals.css
src/components/candao/capability-prototype.tsx
src/lib/candao-content.ts
src/components/ui/background-beams.tsx
src/components/ui/text-generate-effect.tsx
src/components/ui/moving-border.tsx
src/components/ui/button.tsx
src/lib/utils.ts
```

临时视觉素材：

```text
public/images/candao/
```

这些素材来自既有 Stitch / Image2 原型资产，仅用于原型验证。正式上线前仍需以 Figma 内容设计、授权素材或真实产品截图替换。

## 6. 验证结果

已执行：

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

结果：

- ESLint PASS
- TypeScript PASS
- Next production build PASS
- `/` 静态预渲染 PASS

Playwright + 本机 Chrome 截图验证：

```text
Desktop: 1440 x 1100
Mobile: 390 x 1100
```

截图目录：

```text
tasks/T11.6/output/react-next-capability-prototype-screenshots/
```

截图文件：

```text
desktop-1440.png
mobile-390.png
```

DOM 检查：

- `h1` 存在；
- `預約產品演示` 可见；
- `資源` 入口可见；
- 9 个主要 section 均存在；
- 必需模块文本无缺失：`解決方案`、`平台`、`整合能力`、`客戶案例`、`資源`、`關於 Candao`、`提交需求`。

## 7. shadcn MCP 配置更新

已把用户级 Codex 配置中的 shadcn MCP cwd 指向本工程：

```toml
[mcp_servers.shadcn]
command = "/Users/victorwong/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback/pnpm"
args = ["dlx", "shadcn@latest", "mcp", "--cwd", "/Users/victorwong/Documents/Codex/Candao-workspace/projects/candao-international-website/source/react-next-capability-prototype"]
```

该配置需要下次重启 Codex 后生效。

## 8. 已知边界

- 内容文案不是最终定稿，后续以 Figma 内容设计为准。
- 客户案例为匿名结构，不使用未确认 Logo、具体数字或认证。
- 图片为原型素材，正式上线前需替换为授权素材或真实产品截图。
- 当前只实现单页能力全景；还未拆分为多路由页面。
- shadcn MCP 当前会在下次重启 Codex 后以本工程为 cwd。

