# Tappo App 评审工作流整理 - 2026-06-09

## 背景

用户反馈两个问题：

- 每次变更后无法直观快速看到内容并进行人工复核。
- 历史每次变动都保留在同一层目录，导致文件堆积、文件变大，也更难定位真正可用内容。

## 已落地调整

- `assets-review/current-review.html` 作为唯一稳定评审入口。
- `assets-review/current/` 只保留当前可评审内容。
- `assets-review/_archive/2026-06-09-before-review-system/` 存放旧版本、对照版本和已被替代版本。
- 顶层目录不再平铺历史 SVG、HTML、PNG，减少误打开旧版的概率。
- `RULES.md` 已加入长期约束：视觉资产产出必须区分当前内容与历史归档。
- `assets-review/README.md` 已重写为当前评审入口说明、样张清单、通过标准和归档位置。

## 当前可评审内容

```text
tasks/T02/output/assets-review/current-review.html
tasks/T02/output/assets-review/current/index.html
tasks/T02/output/assets-review/current/preview.png
```

当前评审对象：`I01-I22 v03`。

## 归档位置

```text
tasks/T02/output/assets-review/_archive/2026-06-09-before-review-system/
```

归档内容包括：`D01-D04` 多轮方向样张、`I01-I12 v01`、`I01-I22 v02`、旧评审板和旧 PNG。

## 后续执行规则

- 每轮视觉资产结束时只保留一个当前评审入口。
- 新一轮开始前，先把上一轮 `current/` 移入 `_archive/<date>-<reason>/`，再写入新的 `current/`。
- 如果需要对比历史版本，通过 README 标注归档路径，而不是把旧版继续放在顶层。
- 不删除历史版本，除非用户明确要求压缩或清理。
