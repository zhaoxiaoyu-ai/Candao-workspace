# Final Website Copy V1.1

任务：T07 Copy 生产语言修正  
项目：餐道国际官网重构  
日期：2026-08-03  
输出语言：简体中文说明；官网 Copy 保持繁體中文 + English。

## 1. 修正范围

本文件是 `final-website-copy-v1.0-2026-08-03.md` 和 `t07-v1.1-final-copy-supplement-note-2026-08-03.md` 的生产语言补丁。

不重写 Copy，不调整页面内容，不重新生成文案。仅明确 Copy 文档的 Locale 定义和视觉使用方式。

## 2. Website Locale

Primary Website Version:

```text
繁體中文
```

Secondary Website Version:

```text
English
```

Usage:

繁體中文用于第一版官网视觉设计和审核。

English 用于国际化版本扩展。

Do not display both languages in one page layout.

## 3. Copy Usage

T07 的双语结构是内容库结构，不是视觉布局结构。

每个页面继续保持：

```text
繁體中文：

Headline / 標題
Description / 說明
CTA

English:

Headline
Description
CTA
```

但必须增加以下理解：

```text
Content Reference:
Not Visual Layout
```

含义：

- Copy 文档提供两个 Locale 的内容源；
- Figma / Prototype / Stitch / Web Prototype 必须选择一个 Locale 显示；
- 默认视觉生产使用繁體中文；
- English 应作为独立 Locale 版本，而不是与繁體中文同时出现在一个页面。

## 4. Production Copy Rule

### 繁體中文视觉稿

使用：

- 繁體中文导航；
- 繁體中文标题；
- 繁體中文说明；
- 繁體中文 CTA；
- 繁體中文 UI Label。

### English 视觉稿

使用：

- English navigation；
- English headline；
- English description；
- English CTA；
- English UI labels。

## 5. 禁止事项

禁止在视觉稿中出现：

- 繁體中文标题 + English headline；
- 繁體中文说明 + English description；
- 繁體中文 CTA + English CTA；
- 内部简体中文策略说明；
- 英文辅助说明作为视觉稿正文。
