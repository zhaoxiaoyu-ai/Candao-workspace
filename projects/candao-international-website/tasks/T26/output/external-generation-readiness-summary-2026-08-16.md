# 外部 Stitch / Figma 生成前准备摘要

日期：2026-08-16  
状态：ready_for_human_confirmation

补充状态：2026-08-17 已将 `module-manifest.yaml` 补强为 47 个独立模块，并将四个 motion storyboard 补齐 Composition Contract。外部生成时应使用当前版本，不再使用合并模块口径。

## 1. 可以作为外部生成输入的文件

- `tasks/T17/output/design-handoff/.stitch/DESIGN.md`
- `tasks/T17/output/design-handoff/design-tokens.json`
- `tasks/T17/output/design-handoff/visual-direction.md`
- `tasks/T17/output/design-handoff/component-style-map.yaml`
- `tasks/T17/output/design-handoff/module-manifest.yaml`
- `tasks/T17/output/design-handoff/content/content-public.yaml`
- `tasks/T17/output/design-handoff/content/content-source.yaml`
- `tasks/T17/output/design-handoff/content/content-classification-inventory.json`
- `tasks/T17/output/design-handoff/asset-manifest.yaml`
- `tasks/T17/output/design-handoff/motion-manifest.yaml`
- `tasks/T17/output/design-handoff/motion-storyboards/home-connector/storyboard.md`
- `tasks/T17/output/design-handoff/motion-storyboards/solution-scenarios/storyboard.md`
- `tasks/T17/output/design-handoff/motion-storyboards/platform-overlays/storyboard.md`
- `tasks/T17/output/design-handoff/motion-storyboards/integration-network/storyboard.md`
- `tasks/T17/output/design-handoff/stitch/GLOBAL-CONTEXT.md`
- `tasks/T17/output/design-handoff/stitch/HOME.md`
- `tasks/T17/output/design-handoff/stitch/PLATFORM.md`
- `tasks/T17/output/design-handoff/stitch/DEMO.md`
- `tasks/T17/output/design-ready-wireframe/home.html`
- `tasks/T17/output/design-ready-wireframe/platform.html`
- `tasks/T17/output/design-ready-wireframe/demo.html`

## 2. 第一轮只建议生成的页面

1. Home：验证电影感餐饮场景、产品截图舞台、Logo 带和连接中枢。
2. Platform：验证真实产品截图切换器、六项能力、视频入口和状态标注层。
3. Demo Mobile：验证 390px 下多步骤表单、动态摘要和支援分流。

未确认前不批量生成 Solutions、Integrations、Customers、Resources、About 的高保真版本。

## 3. 不应上传或不应让模型生成的内容

- 不上传 `tasks/T17/output/low-fidelity-wireframe-prototype/index.html` 作为直接美化对象。
- 不上传内部来源编号、PPT 页码、OLD 编号、内部警告或待确认说明作为访客页面内容。
- 不让模型生成产品真实 UI、客户 Logo、客户业务数据、认证证书、新闻标题与日期、合作方名称、真实办公室地址或产品性能数字。
- 不用历史 Stitch / Figma 截图替代缺失的 `ref-00-home-master.png`。

## 4. 当前缺失但可继续占位的素材

- 首页视觉母版 `tasks/T17/input/references/home-style-reference.png`
- 真实产品截图：OMS、Menu / Store、DMS / iDMS、CDBI / Finance
- 产品视频：OMS、Menu / Store、DMS / iDMS、CDBI / Finance
- 客户 Logo 整理包
- 客户案例图片
- 公司 / 办公室 / 服务交付图片

以上缺失项已经写入：

- `tasks/T17/output/design-handoff/references/reference-map.yaml`
- `tasks/T17/output/design-handoff/asset-manifest.yaml`
- `tasks/T17/output/design-handoff/missing-assets.md`

## 5. 写入前需要人工确认

- 是否允许我连接 / 写入外部 Stitch 或 Figma 项目。
- 是否以现有 T26 输入包生成第一轮 Home、Platform、Demo Mobile。
- 是否先补首页视觉母版和真实产品截图，再进入外部生成。
- 是否把任何页面文案标记为 `approved_and_locked`。当前 H3-02 仍为 `reserved`。
