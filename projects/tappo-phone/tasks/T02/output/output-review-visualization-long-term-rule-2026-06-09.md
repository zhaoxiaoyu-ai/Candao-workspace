# Tappo App 产出审核与可视化长期规范 - 2026-06-09

## 背景

用户明确要求：后续所有产出都必须能在当前对话中直接点击打开，并且能快速看到真正需要审核的内容；历史版本不能继续堆在当前目录中影响判断。

## 已写入长期规范

- `projects/tappo-phone/RULES.md`
- `projects/tappo-phone/tappo-design.md`
- `C:/Users/Admin/.agents/skills/tappo-design/SKILL.md`

## 审核要求

每次产出必须明确：

- 评审入口。
- 评审对象。
- 变更范围。
- 通过标准。
- 下一步动作。

视觉、UI、Figma、图标、插画、资产类产出必须提供可直接打开的可视化载体，不能只给说明、提示词、裸路径或零散文件。

## 可视化方式

视觉资产默认使用固定目录结构：

```text
tasks/T02/output/assets-review/current-review.html
tasks/T02/output/assets-review/current/index.html
tasks/T02/output/assets-review/current/preview.html
tasks/T02/output/assets-review/current/preview.png
```

说明：

- `current-review.html`：唯一稳定入口。
- `current/index.html`：当前评审页。
- `current/preview.html`：图片预览包装页，优先用于点击查看。
- `current/preview.png`：原始静态图备份，不作为唯一入口。

## 历史归档方式

旧版本、被替代版本和对照版本必须移入：

```text
tasks/T02/output/assets-review/_archive/<date>-<reason>/
```

顶层目录不再平铺多个版本，避免人工评审时误打开旧版。

## 对话交付方式

最终回复必须同时提供：

- 可点击 Markdown 文件链接。
- 可复制的相对路径代码块。

图片预览必须优先链接 `preview.html`，如果提供原始 PNG，只能作为备用入口。
