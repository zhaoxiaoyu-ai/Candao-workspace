# Website Production Localization Second Check

任务：TFIX-LOCALIZATION 二次检查  
项目：餐道国际官网重构  
日期：2026-08-03  
输出语言：简体中文。

## 1. 检查目标

根据用户附件《Codex 修正指示》重新核对整个官网生产链路中的 Locale / Language / Visual Production 规则是否仍有错误或遗漏。

重点检查：

- Global Rule 是否建立；
- T05 / T07 / T08 / T09 / T10 / T11 / T11.5 是否按 Fix-01 到 Fix-07 补齐；
- Website Localization Review Report 是否存在旧状态残留；
- T11.5 Figma 是否已经从双语验证稿补齐为 `/TC` 生产视觉稿；
- T12 是否会审核正确的视觉输入。

## 2. 发现的问题

本次没有发现会阻断 T12 的核心错误。

发现 7 处状态口径残留，均已修正：

| 位置 | 问题 | 处理 |
| --- | --- | --- |
| `STATE.md` | 仍写着“下一视觉阶段应生成 /TC 版本” | 改为“已补充 /TC 版本” |
| `tasks/T09/output/website-prototype-validation-v1.2.md` | 仍写着下一视觉阶段必须输出 `/TC` | 改为 T12 应审核已补充 `/TC` Frame |
| `tasks/T11/output/website-high-fidelity-visual-design-v1.2.md` | 仍写着下一阶段生产稿必须生成 `/TC` | 改为当前已补充 `/TC` 单语言生产视觉稿 |
| `tasks/T11.5/output/t11.5-stitch-ai-web-generation-localization-v1.2.md` | 仍写着下一阶段应修正为繁中单语言 | 改为当前已补充 `/TC Production` 页面 |
| `tasks/TFIX-LOCALIZATION/output/Website Localization Review Report.md` | 仍建议新增 `TC Production Visual Prototype` | 改为已新增，后续以 `/TC Production` 页面审核 |
| `tasks/TFIX-LOCALIZATION/output/Website Production Localization Guideline.md` | 仍写着若用于生产需生成 `/TC` | 改为已补充 `/TC` 单语言生产视觉稿 |
| `tasks/TFIX-LOCALIZATION/output/website-production-localization-reviewer-agent-spec-2026-08-03.json` | 仍保留“进入下一视觉阶段建议”章节名 | 改为 `TC Production 审核建议` |

同时修正：

- `tasks/T12/task.md` 中旧的条件式描述，改为审核当前 `/TC Production` 是否合格。

## 3. 本地文档核对结论

### Fix-00 Global Rule

已完成。

位置：

```text
RULES.md
tasks/TFIX-LOCALIZATION/output/Website Production Localization Guideline.md
```

结论：

- Internal Document = 简体中文；
- Website Content = 繁體中文 + English 内容库；
- Visual / Prototype / Figma / Stitch 默认 = Traditional Chinese；
- 禁止双语混排；
- Header 预留 `繁中 / EN`；
- `/TC`、`/EN` 命名规则已写入。

### Fix-01 T05 Sitemap

已完成。

位置：

```text
tasks/T05/output/website-sitemap-v1.2.md
```

已包含：

- Navigation Language Rule；
- Primary Locale Name；
- Secondary Locale Name；
- URL Locale Rule。

### Fix-02 T07 Final Copy

已完成。

位置：

```text
tasks/T07/output/final-website-copy-v1.1.md
```

已明确：

- 双语 Copy 是内容库；
- Not Visual Layout；
- 默认视觉生产使用繁體中文；
- English 独立生成。

### Fix-03 T08 UX

已完成。

位置：

```text
tasks/T08/output/website-ux-specification-v1.2.md
```

已包含：

- Prototype Locale Rule；
- Core Page Prototype Locale = TC；
- Language Switch UX。

### Fix-04 T09 Prototype Validation

已完成，并已修正状态残留。

位置：

```text
tasks/T09/output/website-prototype-validation-v1.2.md
```

已包含：

- Prototype Language Validation；
- 禁止双语标题、内部说明、英文辅助说明进入视觉稿；
- 当前 T11.5 已补充 `/TC` Frame，应进入 T12 审核。

### Fix-05 T10 Visual Direction

已完成。

位置：

```text
tasks/T10/output/website-visual-direction-v1.2.md
```

已包含：

- Visual Production Locale；
- Language Check；
- 默认视觉探索选择 TC。

### Fix-06 T11 High Fidelity

已完成，并已修正状态残留。

位置：

```text
tasks/T11/output/website-high-fidelity-visual-design-v1.2.md
```

已包含：

- High Fidelity Locale；
- Desktop / Mobile `/TC` Frame Naming；
- English 独立版本规则；
- 当前已补充 `/TC Production` 页面。

### Fix-07 T11.5 Stitch / AI Web Generation

已完成，并已修正状态残留。

位置：

```text
tasks/T11.5/output/t11.5-stitch-ai-web-generation-localization-v1.2.md
```

已包含：

- Mandatory Prompt；
- Traditional Chinese first；
- Do not display bilingual content；
- Include language switch: `繁中 / EN`；
- 后续 Web Prototype 应以 `/TC Production` 页面为视觉输入。

### Fix-08 Localization Review Agent

已完成。

位置：

```text
tasks/TFIX-LOCALIZATION/output/website-production-localization-reviewer-agent-spec-2026-08-03.json
tasks/TFIX-LOCALIZATION/output/Website Localization Review Report.md
```

已修正为：

- `TC Production Visual Prototype` 已完成；
- 后续审核以 `/TC Production` 页面为主；
- 原双语页只作为历史验证参考。

## 4. Figma 核对结论

Figma 文件：

```text
https://www.figma.com/design/BMXIuVRzSUUt9YNhVAQA6K
```

### 页面存在性

必须存在的页面均存在：

```text
03 Desktop Pages / Bilingual Validation
04 Mobile Pages / Bilingual Validation
08 Desktop Pages / TC Production
09 Mobile Pages / TC Production
10 TC Production Review
```

### Desktop `/TC`

页面：

```text
08 Desktop Pages / TC Production
```

Frame：

```text
Home / Desktop 1440 / TC
Platform / Desktop 1440 / TC
Order Management / Desktop 1440 / TC
Delivery Management / Desktop 1440 / TC
Contact / Desktop 1440 / TC
```

检查结果：

- Frame 数：5；
- 缺失 Frame：0；
- 英文正文 / CTA / UI Label 残留：0；
- 所有 Frame 均有 `繁中 / EN`；
- 明显简体字命中：0。

### Mobile `/TC`

页面：

```text
09 Mobile Pages / TC Production
```

Frame：

```text
Home / Mobile 390 / TC
Platform / Mobile 390 / TC
Order Management / Mobile 390 / TC
Contact / Mobile 390 / TC
```

检查结果：

- Frame 数：4；
- 缺失 Frame：0；
- 英文正文 / CTA / UI Label 残留：0；
- 所有 Frame 均有 `繁中 / EN`；
- 明显简体字命中：0。

## 5. 仍需注意

以下不是错误，但 T12 应继续标记为待确认：

- 餐饮运营摄影仍为占位；
- 餐厅高峰运营视频仍为占位；
- 半真实产品 UI 仍非最终真实界面；
- 客户案例、Logo、认证、规模数据仍未授权；
- English `/EN` 版本尚未生成，应作为后续独立 Locale 扩展，不影响当前 T12。

## 6. 最终结论

当前没有发现阻断 T12 的错误。

T11.5 已具备可审核的 `TC Production Visual Prototype`。

T12 应以以下内容为视觉主输入：

```text
08 Desktop Pages / TC Production
09 Mobile Pages / TC Production
10 TC Production Review
```

原双语页面只作为历史验证参考，不应作为生产视觉稿判断依据。
