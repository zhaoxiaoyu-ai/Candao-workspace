# Tappo App 对话交付可点击链接规则 - 2026-06-09

## 背景

用户希望产出的内容在当前对话中可以直接点击打开，而不是只提供裸路径、相对路径或让用户自己到目录中查找。

## 已写入规则

- `RULES.md` 已新增：视觉、UI、图标、插画或资产评审结果交付时，最终回复必须提供可点击的 Markdown 文件链接。
- `tappo-design.md` 已同步：视觉资产交付必须提供当前评审入口、当前 HTML 评审页和 PNG 预览链接。
- `C:/Users/Admin/.agents/skills/tappo-design/SKILL.md` 已同步同样规则。

## 后续回复格式

后续视觉资产交付应优先包含这三类链接：

- 当前稳定入口：`assets-review/current-review.html`
- 当前评审页：`assets-review/current/index.html`
- 当前图片预览页：`assets-review/current/preview.html`
- 当前原始 PNG：`assets-review/current/preview.png`

同时保留可复制路径：

```text
projects/tappo-phone/tasks/T02/output/assets-review/current-review.html
projects/tappo-phone/tasks/T02/output/assets-review/current/index.html
projects/tappo-phone/tasks/T02/output/assets-review/current/preview.html
projects/tappo-phone/tasks/T02/output/assets-review/current/preview.png
```

## 当前可点击目标

当前评审对象仍为 `I01-I22 v03`。如果后续生成新版本，必须先归档旧 `current/`，再把新评审内容写入 `current/`，这样对话中的稳定入口始终可用。
