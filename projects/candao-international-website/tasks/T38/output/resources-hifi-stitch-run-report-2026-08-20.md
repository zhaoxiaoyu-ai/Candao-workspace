# T38 Resources 高保真 Stitch 运行报告

日期：2026-08-20  
状态：blocked  
页面：Resources / Desktop / TC

## 1. 执行目标

本任务继续长期目标二：使用 T35 提取的 Figma 首页 MCP 新版风格、T17 design-handoff 设计系统和 `domain-copy/` 业务文案规则，为 `Resources / Desktop / TC` 生成单页 Stitch 高保真输出。

Resources 被选为本轮目标，是因为该页主要承载接入准备、营运 FAQ、支援中心、案例资源导流、公司资料和产品演示分流，不依赖真实客户照片或 Logo 上传；理论上可以在不虚构内容库、假新闻、假下载资源的前提下完成高保真结构表达。

## 2. 已使用输入

- `tasks/T35/output/figma-homepage-mcp-style-guide-2026-08-20.md`
- `tasks/T35/output/stitch-input/homepage-mcp-stitch-guardrails-2026-08-20.md`
- `tasks/T17/output/design-handoff/stitch/GLOBAL-CONTEXT.md`
- `tasks/T17/output/design-handoff/stitch/RESOURCES.md`
- `tasks/T17/output/design-handoff/.stitch/DESIGN.md`
- `tasks/T17/output/design-handoff/design-tokens.json`
- `tasks/T17/output/design-handoff/module-manifest.yaml`
- `tasks/T17/output/design-handoff/asset-manifest.yaml`
- `tasks/T27/output/stitch-ready-low-fidelity/resources.html`
- `tasks/T27/output/stitch-ready-low-fidelity/stitch-ready-page-map.json`
- `tasks/T27/output/stitch-ready-low-fidelity/element-placement-map.json`
- `domain-copy/business-context.md`
- `domain-copy/glossary.yaml`
- `domain-copy/copy-rules.md`

生成 Prompt 已保存为：

- `tasks/T38/output/stitch-input/resources-hifi-generate-prompt-2026-08-20.md`

## 3. Stitch 执行记录

按“同一页面只允许一个目标输出”规则，本轮只对 Resources 调用了一次 `generate_screen_from_text`：

- Project ID：`10888304674441209287`
- Design System：`assets/a99f770bf474445d98b287cf983bc147`
- Device Type：`DESKTOP`
- Model：`GEMINI_3_PRO`
- Session ID：`15280406076998791054`
- Returned screen ID：无
- Output components：空

随后按 30 秒间隔轮询 `list_screens` 10 次，未发现新的 Resources screen。恢复后追加复核当前 Stitch screen 列表，仍只看到历史 Resources screen，没有 T38 新产物。

## 4. 为什么不能采用历史 Resources screen

当前 Stitch 项目里存在历史 Resources screen：

| Screen ID | 标题 | 不采用原因 |
| --- | --- | --- |
| `d2b440264f1d435e99052f430177c868` | `C v3 / 資源 - Candao International / Desktop TC / 模組化修正版` | 历史 C v3 输出，不是 T38 Prompt 生成。标题里的 `Candao` 属于可修正命名问题，不是主阻塞。 |
| `068558a8cbbc4e85b368a7ae8d6f8225` | `C v3 / 資源 - Candao International / Desktop TC` | 历史 C v3 输出，不是 T38 Prompt 生成。标题里的 `Candao` 属于可修正命名问题，不是主阻塞。 |
| `efd66e8cb18442fb843910ab6ffb863f` | `C v3 / 資源 - Candao International / Desktop TC / Fixed` | 历史 C v3 输出，不是 T38 Prompt 生成。标题里的 `Candao` 属于可修正命名问题，不是主阻塞。 |

修正说明：不能采用历史 Resources screen 的主因不是 `Candao` 这个词本身，而是它们不是 T38 当前 Prompt 产物，无法证明符合 T35 首页 MCP 风格和 T38 内容约束。若只是内部 screen 标题、文件名、路径或英文语境出现 `Candao`，不应阻塞；若繁體中文页面正文、导航、CTA 或品牌可见位置出现 `Candao`，应作为可修复 QA 项处理，优先通过本地 HTML 修正、Stitch edit 或正式输出重命名解决。

## 5. 正式输出状态

本轮没有可下载的新 HTML，也没有可生成的正式目标图，因此未执行以下步骤：

- 下载 T38 Resources HTML；
- 渲染 T38 Resources 1440 宽完整截图；
- 运行 domain-copy QA；
- 运行静态 HTML 检查；
- 运行浏览器视觉检查；
- 更新 `tasks/T17/output/design-handoff/.stitch/metadata.json`；
- 写入正式 `tasks/T17/output/design-handoff/.stitch/designs/`。

当前正式高保真仍只有 Home 和 Platform。

## 6. 结论

T38 不是内容或 Prompt 失败，而是 Stitch 外部生成链路未把 session 写回为可检查 screen。由于 T36、T37、T38 连续出现同类 Stitch 写回失败，后续不应继续按相同方式重复调用生成。

建议下一步改为以下任一路径：

1. 等 Stitch 写回能力恢复后，再从 T38 session 或新任务继续检查是否出现可用 screen。
2. 暂停 Stitch 直接生成，改用本地高保真静态 HTML / React 页面实现剩余页面，再导出图片或上传给 Stitch。
3. 若必须继续 Stitch，先用已批准的页面图片或本地 HTML 走上传链路，而不是再次纯文本生成。
