# T26 设计输入包与设计执行版低保真报告

日期：2026-08-16  
状态：done

## 1. 是否需要到“重构”的程度

需要，但本轮重构的对象是交付结构，不是推翻业务内容。

T25 已经完成低保真叙事局部重构；本轮在此基础上，把“内部内容核对版”拆成可执行的设计输入层：内容分层、设计系统、模块 manifest、素材 manifest、Motion storyboard、Stitch Prompt Pack 和设计执行版低保真。

## 2. 新增和修改的文件

新增：

- `tasks/T26/task.md`
- `tasks/T26/output/design-handoff-package-report-2026-08-16.md`
- `tasks/T26/output/design-ready-copy-qa-input-2026-08-16.json`
- `tasks/T26/output/design-ready-copy-qa-result-2026-08-16.json`
- `tasks/T26/output/design-ready-browser-check-2026-08-16.json`
- `tasks/T26/output/design-ready-interaction-copy-qa-input-2026-08-16.json`
- `tasks/T26/output/design-ready-interaction-copy-qa-result-2026-08-16.json`
- `tasks/T26/output/design-ready-interaction-browser-check-2026-08-16.json`
- `tasks/T26/output/module-manifest-copy-qa-input-2026-08-17.json`
- `tasks/T26/output/module-manifest-copy-qa-result-2026-08-17.json`
- `tasks/T26/output/design-input-layer-restructure-patch-2026-08-17.md`
- `tasks/T26/output/design-input-layer-final-verification-2026-08-17.json`
- `tasks/T26/output/objective-completion-audit-2026-08-17.md`
- `tasks/T26/output/requirement-completion-audit-2026-08-16.md`
- `tasks/T26/output/external-generation-readiness-summary-2026-08-16.md`
- `tasks/T17/output/design-handoff/`
- `tasks/T17/output/design-ready-wireframe/`

修改：

- `TASKS.md`
- `STATE.md`
- `HANDOFF.md`

## 3. 文件之间的调用关系

```text
T25 内容核对版低保真
  -> design-handoff/content/content-public.yaml
  -> design-handoff/module-manifest.yaml
  -> design-handoff/design-tokens.json
  -> design-handoff/.stitch/DESIGN.md
  -> design-handoff/stitch/*.md
  -> design-ready-wireframe/*.html
  -> QA 报告和截图
```

`content-source.yaml` 负责追溯来源；`content-public.yaml` 负责访客文案；`content-internal.yaml` 和 `content-missing.yaml` 负责把内部编号、约束和缺口从访客页面移出。`module-manifest.yaml` 负责告诉设计工具每个模块的角色、状态、交互和素材。`asset-manifest.yaml` 和 `missing-assets.md` 负责防止假截图、假 Logo 和假视频进入高保真。

补充：`content/content-classification-inventory.json` 已逐条拆分 T17 低保真 HTML 的 592 条可见文本；后续高保真、Stitch、Figma 或前端实现只有 `public_copy` 可进入访客页面。`stitch/*.md` 每页已补“参考图与素材文件”，必须读取 `reference-map.yaml` 和 `asset-manifest.yaml`，不得在参考图或真实素材缺失时自行生成假图、假 Logo、假视频或假产品 UI。

2026-08-17 补充：`module-manifest.yaml` 已从粗粒度合并项重构为 47 个独立模块；每个模块均有完整字段、独立交互状态、移动端替代方式、素材状态和 Stitch 正负关键词。四个 `motion-storyboards/*/storyboard.md` 也已补齐 Composition Contract。

## 4. 一次完整生成流程

1. 读取项目规则、domain-copy、人工关卡和 T25 报告。
2. 预检低保真 HTML、参考图、截图、Logo、视频、Remotion 和 Stitch 能力。
3. 将内容分为公开文案、内部说明、证据来源、约束和缺失项。
4. 逐条分类 T17 HTML 可见文本，生成 `content-classification-inventory.json`。
5. 建立设计系统和组件样式映射。
6. 建立模块 manifest，定义默认、hover、click、scroll、mobile 状态。
7. 建立素材和 Motion manifest。
8. 生成 Stitch Prompt Pack，并逐页绑定参考图编号和素材状态。
9. 生成设计执行版低保真页面。
10. 补齐代表性交互状态和移动端导航抽屉。
11. 运行 domain-copy 基线 QA 和交互状态文案 QA。
12. 用 Chrome + Playwright 渲染 Home、Platform、Demo、交互状态和 Demo Mobile。
13. 将模块 manifest 拆成 47 个独立模块，检查无合并 ID、无缺字段。
14. 将四个 motion storyboard 补成统一 Composition Contract。
15. 对 47 个模块说明运行 Manifest 级 domain-copy QA。

## 5. 自动质检示例

首次 QA 失败 2 项：

- Home Hero 缺少“下一步”。
- Platform Connector 检查文本缺少 `AMS / Connector`。

修正后重跑：

```text
11 / 11 passed
```

结果文件：

- `tasks/T26/output/design-ready-copy-qa-result-2026-08-16.json`
- `tasks/T26/output/design-ready-interaction-copy-qa-result-2026-08-16.json`
- `tasks/T26/output/module-manifest-copy-qa-result-2026-08-17.json`
- `tasks/T26/output/design-input-layer-final-verification-2026-08-17.json`
- `tasks/T26/output/objective-completion-audit-2026-08-17.md`

## 6. 修改回写示例

本轮没有用户新的人工文案修改，因此未新增 `copy-feedback-log.md` 条目。若后续用户把某段文案改短或改术语，应按以下路径回写：

```text
用户修改
  -> 对应页面 / 模块内容
  -> domain-copy/copy-feedback-log.md
  -> 若具备普遍性，再更新 glossary.yaml、copy-rules.md 或 copy-qa-cases.md
```

本轮仅将自动 QA 发现的缺口写回 QA 输入和最终文案检查结果，不升级为永久规则。

## 7. 回归测试结果

domain-copy QA：

```text
11 / 11 passed
Manifest 级 QA：47 / 47 passed
```

浏览器检查：

- Home 1440：通过。
- Platform 1440：通过。
- Demo 1440：通过。
- Platform 六项能力切换：通过。
- Demo 390 意图切换：通过。
- Home 能力切换：通过。
- Solutions 场景切换：通过。
- Integrations 接入对象切换：通过。
- Customers 主案例切换：通过。
- Resources 阶段切换：通过。
- About 时间线切换：通过。
- Home 390 移动导航抽屉：通过。
- 可见文本未发现内部编号、错误品牌名、`IDMS`、`SAAS`、`Saas`、`一站式`、`賦能`。

结构检查：

- `design-tokens.json` 和 `.stitch/DESIGN.md` 使用 `#528dff`、`#16233d`、`1440px`、`1200px`、`8px`、`16px`。
- `asset-manifest.yaml` 每个素材都有 `content_description`。
- 8 个页面 prompt 均有“参考图与素材文件”区。
- `content-classification-inventory.json` 共 592 条文本，包含非公开类别，后续可防止内部备注和来源编号误入页面。
- `module-manifest.yaml` 共 47 个模块、47 个唯一 ID、无合并 ID、无缺字段。
- 四个 motion storyboard 均包含 `purpose / duration / fps / aspect_ratio / sequence / elements / assets / loop_behavior / poster / reduced_motion_fallback / stitch_keyframes`。

截图：

- `tasks/T17/output/design-ready-wireframe/screenshots/t26-home-1440.png`
- `tasks/T17/output/design-ready-wireframe/screenshots/t26-platform-1440.png`
- `tasks/T17/output/design-ready-wireframe/screenshots/t26-demo-1440.png`
- `tasks/T17/output/design-ready-wireframe/screenshots/t26-demo-390.png`
- `tasks/T17/output/design-ready-wireframe/screenshots/t26-solutions-finance-1440.png`
- `tasks/T17/output/design-ready-wireframe/screenshots/t26-integrations-pos-1440.png`
- `tasks/T17/output/design-ready-wireframe/screenshots/t26-home-mobile-nav-open-390.png`

## 8. 仍需人工确认的内容

- H3-01：低保真业务验收是否通过。
- H3-02：哪些文案正式进入 `approved_and_locked`。
- Home 是否最终保留 Slide 11 指标，或只保留 Logo + Customers 导流。
- 首页视觉母版 `home-style-reference.png`。
- 真实产品截图、产品视频、客户 Logo、案例图片、公司图片。
- Demo 表单字段、隐私说明、资料用途和接收团队。
- 是否允许外部 Stitch / Figma 写入；外部写入前准备摘要见 `tasks/T26/output/external-generation-readiness-summary-2026-08-16.md`。

## 9. 结论

本轮已经把低保真推进到“设计执行型低保真与设计输入包”阶段。下一步不应直接批量生成八页高保真；建议先让用户查看 Home、Platform、Demo Mobile 三个代表页，再确认是否进入 Stitch / Figma / Remotion 的第一轮外部生成。
