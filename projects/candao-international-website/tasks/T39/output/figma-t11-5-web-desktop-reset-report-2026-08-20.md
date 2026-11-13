# Figma T11.5 Web Desktop-first 范围重置报告

日期：2026-08-20  
任务：T39  
Figma 文件：`BMXIuVRzSUUt9YNhVAQA6K`  
Figma 文件名：`Candao International Website Visual Prototype T11.5`

## 1. 用户最新决策

- `04`、`05`、`06`、`07`、`08`、`09`、`10` 内容均不符合，不保留。
- `00`、`01`、`02` 需要相应更新。
- 当前连基本 Web 端还没有确定，其他响应式不需要先做。

## 2. 处理原则

本轮不删除历史节点，而是通过页面重命名和可见 Banner 将其降级为历史痕迹。原因是：

- 旧内容仍可作为反例、历史探索和审计证据；
- 但不得作为后续 Figma、Stitch、React、T12 或 T13 的当前输入；
- 当前应先确认 Desktop Web 的故事路径、内容深度、产品展示、可信证据和 CTA。

## 3. Figma 已执行更新

### 00 Cover

新增：

- `CURRENT BASELINE / Web Desktop First Reset / 2026-08-20`

核心内容：

- 当前只处理 Web Desktop 1440 的内容、结构、视觉语气和产品展示；
- `03 Desktop Pages / Bilingual Validation` 仅可作为素材与历史探索参考，不能视为已确认输出；
- `04-10` 不再作为当前输入；
- 桌面 Web 内容确认前，不做响应式、不做移动稿、不做动效生产页；
- 该板不代表 Web Desktop 已通过最终业务验收，也不代表任何页面文案已 `approved_and_locked`。

### 01 Design Tokens

新增：

- `WEB DESKTOP TOKENS / Current Baseline / 2026-08-20`

核心内容：

- T35 Figma Home MCP token 可用于桌面 Web 风格约束；
- 不代表 Mobile、Responsive Rules、Motion 或最终前端设计已确认；
- 固化 `#528dff`、暗色 Hero、深色平台段、产品工作台、边框和浅底分隔等当前可用 token；
- 明确 `letter-spacing: 0`、不使用 `text-transform`；
- `iDMS`、`SaaS`、`AMS / Connector` 等大小写敏感术语不可被样式层改写。

### 02 Components

新增：

- `WEB DESKTOP COMPONENTS / Current Baseline / 2026-08-20`

当前纳入讨论的桌面组件：

- `Header / Desktop 1440`
- `Hero + Product Workbench`
- `Platform Capability Map`
- `Evidence / Customer Cards`
- `Resources / Support Routing`
- `Demo Intent Form`

当前不做：

- Mobile nav / drawer；
- 390 layout；
- responsive breakpoints；
- Motion Storyboard；
- 生产审查流程页；
- 04-10 旧稿衍生元件。

## 4. 04-10 页面处置

已重命名：

| 原页面 | 新页面名 | 处置 |
| --- | --- | --- |
| `04 Mobile Pages / Bilingual Validation` | `04 不保留 / Mobile Pages / Bilingual Validation` | 不作为当前输入 |
| `05 Motion Storyboards` | `05 不保留 / Motion Storyboards` | 不作为当前输入 |
| `06 Prototype Flow` | `06 不保留 / Prototype Flow` | 不作为当前输入 |
| `07 Visual Review` | `07 不保留 / Visual Review` | 不作为当前输入 |
| `08 Desktop Pages / TC Production` | `08 不保留 / Desktop Pages / TC Production` | 不作为当前输入 |
| `09 Mobile Pages / TC Production` | `09 不保留 / Mobile Pages / TC Production` | 不作为当前输入 |
| `10 TC Production Review` | `10 不保留 / TC Production Review` | 不作为当前输入 |

每个页面均已新增：

- `NOT RETAINED / Scope Reset Banner / 2026-08-20`

## 5. 关键修正

- 旧 `08 Desktop Pages / TC Production` 不再代表当前 Web 端基础稿。
- 旧 `09 Mobile Pages / TC Production` 不再代表响应式或移动端已进入当前范围。
- 旧 `10 TC Production Review` 不再作为 T12 / T13 审查入口。
- 当前阶段先确认 Desktop Web，不推进 Mobile、Responsive 或 Motion。

## 6. Figma QA 结果

Figma MCP 复核结果：`pass`

已验证：

- 00/01/02 新基线板均存在；
- 04-10 页面名均包含“不保留”；
- 04-10 每页均存在不保留 Banner；
- 新写入文本未出现大小写敏感术语的错误写法；
- 新写入文本未出现中文 / 繁體中文默认品牌显示 `Candao`；
- 新写入文本未出现英文占位或缺失标记。

domain-copy QA 结果：`pass`

- 输入：`qa-input-figma-web-desktop-reset-copy-2026-08-20.json`
- 输出：`qa-figma-web-desktop-reset-copy-2026-08-20.json`
- 结果：4 / 4 通过，未发现泛化表达、品牌显示错误、大小写敏感术语错误、未定义指标或缺失必需信息。

## 7. 仍需人工确认

- Web Desktop 的具体页面故事路径是否通过。
- Home / Platform / Customers / About / Demo 哪些模块可以进入下一轮高保真。
- 哪些页面或模块可以进入 `approved_and_locked`。
- 是否需要物理删除 04-10 历史页面。本轮仅做不保留标记，未删除历史节点。
