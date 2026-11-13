# T17 Codex 任务更新与 Stitch 单图输出收口报告

日期：2026-08-17  
范围：餐道国际官网 T17 低保真后续整理、设计交接、首页 Stitch 高保真收口  
状态：已收口

## 1. 本轮整理结论

本轮不再继续在对话中反复生成 Stitch 页面，而是回到 Codex 项目文件中完成任务记录、输出整理和交付收口。

T17 原任务仍保留为低保真线框任务；2026-08-17 的工作作为用户确认后的追加范围写入 `tasks/T17/task.md`。

## 2. 已整理的修改

### 2.1 Design-ready wireframe

位置：`tasks/T17/output/design-ready-wireframe/`

已整理页面：

- `home.html`：保留当前首页结构，作为 Stitch 首页高保真输入基准。
- `solutions.html`：从产品清单改为客户场景叙事。
- `platform.html`：从解决方案叙事改为产品工作方式展示。
- `integrations.html`：从泛接入描述改为系统对象、接口和数据流表达。
- `customers.html`：补充客户使用餐道后的变化、行业案例和已确认数据。
- `resources.html`：按资源内容属性拆成独立模块，不再用同质化卡片。
- `about.html`：按公司旅程、服务体系、产品能力和地点信息拆分模块。
- `assets/design-ready.css` / `assets/design-ready.js`：同步支持上述模块和公开访客文案。

### 2.2 Design handoff

位置：`tasks/T17/output/design-handoff/`

已整理资料：

- `visual-direction.md`
- `component-style-map.yaml`
- `module-manifest.yaml`
- `asset-manifest.yaml`
- `motion-manifest.yaml`
- `stitch/GLOBAL-CONTEXT.md`
- `stitch/HOME.md`
- `.stitch/DESIGN.md`
- `.stitch/metadata.json`

关键规则已经写入 `stitch/GLOBAL-CONTEXT.md`：同一页面只允许一个目标输出；不得在 Stitch 中为同一页面连续生成多个重复 screen 作为交付物。

2026-08-17 追加规则：Stitch 后续尽可能一次生成目标稿；细节问题先记录到 QA / issue log，只有影响对外交付的硬性问题才对同一个 screen 做一次定向修正。

## 3. Stitch 首页最终输出

Stitch 项目：

- Project：`Candao International Website T11.5-C`
- Project ID：`10888304674441209287`
- Final screen ID：`d792eb1c55b14ee284b9e111474614dd`
- Stitch screen：`projects/10888304674441209287/screens/d792eb1c55b14ee284b9e111474614dd`

Codex 正式输出仅保留一组最终文件：

- HTML：`tasks/T17/output/design-handoff/.stitch/designs/candao-home-hifi-final-d792eb1c55b14ee284b9e111474614dd.html`
- 目标长图：`tasks/T17/output/design-handoff/.stitch/designs/candao-home-hifi-final-d792eb1c55b14ee284b9e111474614dd-full.png`

长图尺寸：

- `2560 x 8616`

旧 Stitch 中间版本已经移出 T17 正式输出目录，归档到本轮 Codex 临时工作目录：

- `/Users/victorwong/Documents/Codex/2026-08-17/new-chat/work/stitch-duplicate-archive/T17-home/`

T17 正式输出目录 `design-handoff/.stitch/designs/` 当前只保留最终 HTML 和一张目标图。

## 4. QA 结果

文案 QA：

- 输入：`tasks/T17/output/design-handoff/qa/stitch-home-hifi-copy-input-2026-08-17.json`
- 输出：`tasks/T17/output/design-handoff/qa/stitch-home-hifi-copy-qa-result-2026-08-17.json`
- 结果：`10/10 pass`

人工/自动检查项：

- 导航已补回「資源」。
- Footer 已改为核心站点导航，不保留未确认的法律/联系入口。
- Pizza-Box 和 JIA Group 案例摘要已恢复为当前 wireframe 文案。
- Hero 状态浮层已删除未授权数量，只保留「待接單 / 製作中 / 配送中」。
- 页面未出现 PPT 页码、OLD 编号、missing、placeholder、内部提示、假客户 Logo 或未确认 SLA。
- 已移除会破坏 `iDMS` 等产品名大小写的 `uppercase / lowercase / capitalize / text-transform`。

## 5. 后续 Codex 执行命令

以下命令用于后续在 Codex 中继续执行同类页面，不再让 Stitch 生成重复稿：

```text
请在 /Users/victorwong/Documents/Codex/Candao-workspace/projects/candao-international-website 中继续执行餐道国际官网设计任务。

读取并遵守：
1. tasks/T17/task.md
2. tasks/T17/output/design-handoff/stitch/GLOBAL-CONTEXT.md
3. tasks/T17/output/design-handoff/.stitch/metadata.json
4. domain-copy/business-context.md
5. domain-copy/glossary.yaml
6. domain-copy/copy-rules.md

执行规则：
- 先在 Codex 中整理页面结构、关键词、素材状态、禁用项和已确认文案。
- 对 Stitch：同一页面只允许一个目标输出。
- 首次生成只调用一次 generate_screen_from_text。
- 若结果只有局部细节问题，先记录到 QA / issue log，不立即 edit。
- 只有硬性问题才允许对同一个 screen 使用一次 edit_screens 定向修正；硬性问题包括页面错误、导航/核心文案缺失、出现内部说明、placeholder、假 Logo、未授权指标或状态数量、受保护产品名大小写错误。
- 不得为同一页面重复生成 3-5 个 screen。
- 正式输出目录只保留一个 HTML 和一张目标图；中间版本必须移出 output。
- 输出前必须检查：导航完整、文案完整、无内部词、无 placeholder、无假 Logo、无未授权数字、无 text-transform 破坏 iDMS / SaaS / AMS / Connector。
- 最后运行 domain-copy QA，并更新对应 task.md、.stitch/metadata.json 和 output 报告。

本次 Home 最终稿不得被新的 Home 重复稿覆盖，除非用户明确要求重新设计首页。
```

## 6. 对后续 Stitch Prompt 的要求

后续页面生成前必须一次性明确：

- 页面目标；
- 目标访客；
- 模块顺序；
- 各模块视觉表达；
- 可见文案；
- 允许素材；
- 缺失素材处理方式；
- 禁止出现内容；
- 输出文件名；
- QA 检查项。

禁止使用模糊 prompt 反复试错，例如：

- “再生成一版首页”
- “做得更高级”
- “多出几个版本看看”
- “继续优化这个页面”

必须使用页面级精确 prompt，并且只输出对应目标页的一张最终图。

细节类问题处理方式：

- 先记录到 `tasks/T17/output/design-handoff/qa/stitch-detail-issue-log-2026-08-17.md`。
- 不因为局部间距、图标偏好、视觉精修、动效细节或素材替换建议而重新生成 Stitch screen。
- 等用户进入集中视觉评审或提供真实素材后，再统一处理这些细节。
