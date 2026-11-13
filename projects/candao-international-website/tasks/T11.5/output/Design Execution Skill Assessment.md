# Design Execution Skill Assessment

任务：T11.5-A / Task A01  
日期：2026-08-05  
输出语言：简体中文  

## 1. 结论

当前 Codex 环境已经具备把 T07 Copy、T08 UX、T09 Prototype Validation、T10 Visual Direction 转换为可查看高保真设计产物的主要能力，但默认能力分散在 Figma、Product Design、Image Generation、Stitch 与前端原型技能中。缺口不是单点工具缺失，而是缺少一个 Candao 官网专用的执行工作流 Skill，把页面生成、Design Token、组件、Motion Storyboard、视觉审查和项目回写串成稳定流程。

本轮已补充并配置：

```text
/Users/victorwong/.codex/skills/candao-website-high-fidelity-design/
```

该 Skill 用于后续 Candao 国际官网高保真 Figma 执行和审查。

## 2. 已安装能力盘点

| 能力类别 | 当前可用 Skill / Tool | 可覆盖内容 | 评价 |
| --- | --- | --- | --- |
| Figma 设计执行 | `figma:figma-use`、Figma MCP `use_figma` | 创建页面 Frame、节点、变量、样式、组件、截图和结构检查 | 可用，需严格遵守字体加载、返回节点 ID、顺序写入规则 |
| Design System Builder | `figma:figma-generate-library` | Variables、Text Styles、Effect Styles、组件库和 Design System 文档页 | 可用，适合建立 Candao token 与组件规范 |
| Motion Storyboard | `figma:figma-use-motion` | Motion API 说明、分镜、时间轴导出思路 | 可用；本轮采用静态高保真分镜，避免真实 Motion API feature flag 风险 |
| UI / Web 视觉审查 | `product-design:audit`、Visual Director 产物 | 截图审查、国际 SaaS 感、产品感、可开发性判断 | 可用，已在 T11.5-B 沉淀规则 |
| Image Generation | `imagegen` | 生成 Home Hero 餐饮营运摄影资产 | 可用，本轮已生成蓝色系餐饮营运 Hero 图 |
| Stitch / AI Web Generator | `stitch-design:*`、`stitch-build:*`、Stitch MCP | 生成 AI 网页版本、抽取设计系统、交互评审网页 | 可用，已完成 T11.5-C/D |
| Frontend Prototype | 本地 HTML / Playwright | 整合 Stitch HTML 为可交互网页并验证 | 可用，已输出 `source/stitch-interactive-prototype/index.html` |
| Agent 设计 | `agent-pd:agent-pd` | 生成 Agent 规格、能力边界、评审规则 | `doctor` 可用，`run` 当前受依赖错误阻塞；需兜底手工固化规格 |

## 3. 缺失能力与补齐方式

| 缺口 | 风险 | 本轮补齐 |
| --- | --- | --- |
| Candao 官网专用 Figma 执行流程 | 通用 Figma Skill 不知道 T07-T10 的品牌、语言、页面边界 | 新建 `candao-website-high-fidelity-design` Skill |
| 统一 Design Token 规则 | 容易继续沿用旧绿色或泛蓝，不稳定 | 明确 `#528dff` 为主操作 / 连接色，并固化变量 |
| 高保真页面命名规则 | Figma 历史页、双语验证页和生产页容易混淆 | 固化 `/TC` 生产帧命名 |
| Motion Storyboard 输出标准 | 页面可能停留在静态卡片，动效不可开发 | 输出 Platform UI 与 Product Motion 两类分镜 |
| 视觉质量审核闭环 | Stitch / Figma / 文档评价分散 | 以 A09 `High Fidelity Design Review Report.md` 统一审查 |

## 4. 后续执行方案

1. 使用 `candao-website-high-fidelity-design` 作为 Candao 官网 Figma 高保真执行入口。
2. 每次 Figma 写入前先检查页面、组件、变量和样式。
3. 默认生产视觉稿只做繁體中文单一 Locale，保留 `繁中 / EN` 语言切换。
4. 所有图片、Logo、客户、数字、认证、SLA 和集成状态不得虚构。
5. Home 和 Platform 优先高保真；Order / Delivery 优先产品 Motion Storyboard；其他页面按 T10 的视觉优先级推进。
6. 每次完成后必须回写 `TASKS.md`、`STATE.md`、`HANDOFF.md` 和 `tasks/T11.5/output/`。

