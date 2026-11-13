# Website Sitemap V1.2

任务：T05 Sitemap 生产语言修正  
项目：餐道国际官网重构  
日期：2026-08-03  
输出语言：简体中文；页面名称保留繁體中文和 English 映射。

## 1. 修正范围

本文件是 `website-sitemap-2026-08-02.md` 与 `t05-v1.1-sitemap-scope-supplement-note-2026-08-03.md` 的生产语言补丁。

不重新规划 Sitemap，不新增页面，不修改 Phase。仅补充导航展示语言规则和 Locale 字段。

## 2. Navigation Language Rule

### Internal Sitemap

内部 Sitemap 允许使用：

```text
中文 + English 页面映射
```

例如：

```text
首页 Home
解决方案 Solutions
平台 Platform
```

这是内部映射，不代表真实官网导航同时显示两种语言。

### Website Navigation

Primary Locale:

```text
繁體中文
```

Secondary Locale:

```text
English
```

最终 UI Navigation 必须跟随当前选中的 Locale。

## 3. Navigation Locale Mapping

| Internal Name | Primary Locale Name | Secondary Locale Name |
| --- | --- | --- |
| Home | 首頁 | Home |
| Solutions | 解決方案 | Solutions |
| Platform | 平台 | Platform |
| Integrations | 整合能力 | Integrations |
| Customers | 客戶案例 | Customers |
| Resources | 資源 | Resources |
| About | 關於 Candao | About |
| Contact / Book a Demo | 預約產品演示 | Contact / Book a Demo |

## 4. URL Locale Rule

建议 URL 结构：

| Locale | URL Prefix | 示例 |
| --- | --- | --- |
| Primary | `/zh-hk/` 或 `/tc/` | `/zh-hk/platform` |
| Secondary | `/en/` | `/en/platform` |

URL Prefix 需在开发阶段结合 CMS、SEO 和地区策略最终确认。

## 5. 后续使用规则

- T07 Copy 可继续保留繁體中文 + English 内容库。
- T08 / T09 / T10 / T11 / T11.5 的视觉或原型默认读取 Primary Locale Name。
- English 版本必须作为独立页面状态或独立 Frame 生成。
- 不得在同一个 Header 中显示 `首頁 Home` 这种混排导航。
