# Tappo App 图片预览链接修复 - 2026-06-09

## 问题

用户反馈“图片预览那个不可点击”。原因是部分 IDE/对话客户端不会把本地 PNG 文件直链识别为可点击链接，或者无法直接以图片文件方式打开。

## 修复

- 新增 `tasks/T02/output/assets-review/current/preview.html`，用 HTML 包装 `preview.png`。
- 更新 `tasks/T02/output/assets-review/current-review.html`，不再自动跳转，而是提供三个明确入口：评审页、图片预览页、原始 PNG。
- 更新 `tasks/T02/output/assets-review/README.md`，把图片预览优先入口改为 `current/preview.html`。
- 更新 `RULES.md`、`tappo-design.md` 和 `tappo-design` skill 副本：后续对话交付图片预览时，必须优先给 `preview.html`，不能只给 PNG 直链。

## 当前可点击入口

```text
projects/tappo-phone/tasks/T02/output/assets-review/current-review.html
projects/tappo-phone/tasks/T02/output/assets-review/current/index.html
projects/tappo-phone/tasks/T02/output/assets-review/current/preview.html
projects/tappo-phone/tasks/T02/output/assets-review/current/preview.png
```

## 后续规则

如果需要交付静态图片预览，必须提供 HTML 包装页：

```text
assets-review/current/preview.html
```

原始图片文件可以作为备用路径提供，但不作为唯一入口。
