# T26 设计输入层重构补丁

日期：2026-08-17  
状态：done

## 结论

本轮需要到“设计输入层重构”的程度，但不是推翻 T25 业务内容，也不是重做低保真页面。

真正需要重构的是给 Stitch / Figma / Remotion / 前端的交付协议：原 `module-manifest.yaml` 中仍存在 `S01-S06`、`D01-D06` 等合并项，会让后续工具或 Agent 自行拆分页面模块，容易再次出现泛化表达、重复页面结构和产品说明书式堆叠。

## 已完成补丁

- 将 `tasks/T17/output/design-handoff/module-manifest.yaml` 重写为 47 个独立模块：
  - Home：H01-H06
  - Solutions：S01-S06
  - Platform：P01-P06
  - Integrations：I01-I05
  - Customers：C01-C06
  - Resources：R01-R05
  - About：A01-A07
  - Demo：D01-D06
- 每个模块均补齐：
  - `id`
  - `page`
  - `role`
  - `visitor_goal`
  - `public_content`
  - `presentation_pattern`
  - `layout_desktop`
  - `layout_mobile`
  - `default_state`
  - `hover_state`
  - `click_state`
  - `scroll_state`
  - `primary_asset`
  - `secondary_asset`
  - `motion_type`
  - `motion_purpose`
  - `stitch_keywords`
  - `negative_keywords`
  - `source_refs`
  - `status`
- 将四个 `motion-storyboards/*/storyboard.md` 补成统一 Composition Contract，包含 `purpose / duration / fps / aspect_ratio / sequence / elements / assets / loop_behavior / poster / reduced_motion_fallback / stitch_keyframes`。
- 新增 Manifest 级 domain-copy QA：
  - `tasks/T26/output/module-manifest-copy-qa-input-2026-08-17.json`
  - `tasks/T26/output/module-manifest-copy-qa-result-2026-08-17.json`

## 自动检查结果

```text
module_count: 47
expected_count: 47
unique_ids: 47
aggregated_ids: []
missing_field_entries: []
status: pass
```

domain-copy QA：

```text
47 / 47 passed
```

Motion storyboard 字段检查：

```text
4 / 4 passed
```

禁用项扫描：

```text
未发现合并模块 ID、旧主色、旧容器宽度、旧圆角口径、错误大小写术语、强制大小写样式或泛化禁用词。
```

## 仍需人工确认

- H3-01：低保真业务验收是否通过。
- H3-02：哪些文案进入 `approved_and_locked`。
- 是否允许外部 Stitch / Figma 写入。
- 首页视觉母版、真实产品截图、产品视频、客户 Logo、案例图片和公司图片仍需补齐或确认。
