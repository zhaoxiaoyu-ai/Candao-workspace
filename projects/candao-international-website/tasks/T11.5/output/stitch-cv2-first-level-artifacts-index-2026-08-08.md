# Stitch C v2 一级目录主页产物索引

## 1. 本次范围

本次按最新 Website Production Guideline v1.0 和文案交互确认表 v0.1，重新补齐官网第一层级目录主页。

已生成的一级主页：

- 首頁
- 解決方案
- 平台
- 整合能力
- 客戶案例
- 關於 Candao
- 預約產品演示

本次不把 `Order Management` 和 `Delivery Management` 作为一级目录。它们只作为 `Platform` 下的二级产品能力入口出现。

## 2. Stitch 项目信息

| 项目 | 信息 |
|---|---|
| Stitch Project | `Candao International Website T11.5-C` |
| Project ID | `10888304674441209287` |
| Design System | `Candao International SaaS Blue #528dff` |
| Design System ID | `assets/12141666305108771015` |
| Locale | 繁體中文 |

## 3. Stitch 新增一级主页

| 一级目录主页 | Stitch Screen ID | Stitch 标题 | 本地 HTML | 本地截图 |
|---|---|---|---|---|
| 首頁 | `d38f6ed9fe2c42b29849f2ab5776ef90` | 首頁 - Candao International Fixed | `.stitch/designs/cv2-first-level/home-desktop-tc.html` | `.stitch/designs/cv2-first-level/home-desktop-tc.png` |
| 解決方案 | `3f2cde2898c04fddb949d2371608ebeb` | 解決方案 - Candao International Fixed | `.stitch/designs/cv2-first-level/solutions-desktop-tc.html` | `.stitch/designs/cv2-first-level/solutions-desktop-tc.png` |
| 平台 | `f5e50f9a9b5a4bc898a4d27568566d1c` | 平台 - Candao International Fixed | `.stitch/designs/cv2-first-level/platform-desktop-tc.html` | `.stitch/designs/cv2-first-level/platform-desktop-tc.png` |
| 整合能力 | `621fecf4ef6945f58faa162d9f8af3b3` | 整合能力 - Candao International Fixed | `.stitch/designs/cv2-first-level/integrations-desktop-tc.html` | `.stitch/designs/cv2-first-level/integrations-desktop-tc.png` |
| 客戶案例 | `e234dc8834e841b49e8d66d139e48734` | 客戶案例 - Candao International Fixed | `.stitch/designs/cv2-first-level/customers-desktop-tc.html` | `.stitch/designs/cv2-first-level/customers-desktop-tc.png` |
| 關於 Candao | `9c63c26edcbd481599e3d4cd689b378e` | 關於 Candao - Candao International Fixed | `.stitch/designs/cv2-first-level/about-desktop-tc.html` | `.stitch/designs/cv2-first-level/about-desktop-tc.png` |
| 預約產品演示 | `07cf801156f94a2681cf94c5e1102703` | 預約產品演示 - Candao International Fixed | `.stitch/designs/cv2-first-level/contact-demo-desktop-tc.html` | `.stitch/designs/cv2-first-level/contact-demo-desktop-tc.png` |

以上 Screen ID 为修正后的 Fixed 版本。第一轮生成 ID 保留在 Stitch 项目历史中，但不作为后续参考基准。

## 3.1 Stitch 内部整理索引

为避免 Stitch 画布上多轮生成结果混淆，已新增内部整理索引：

| 项目 | 内容 |
|---|---|
| Screen Title | `00 Candao C v2 保留版索引 (Fixed)` |
| Screen ID | `5782dcac875b4c5fb8de68aae837d69a` |
| 用途 | 在 Stitch 项目内标记 7 个 Fixed 保留版、旧探索版本和素材图边界 |
| 本地 HTML | `.stitch/designs/cv2-cleanup/00-candao-cv2-cleanup-index-fixed.html` |
| 本地截图 | `.stitch/designs/cv2-cleanup/00-candao-cv2-cleanup-index-fixed.png` |
| 清理报告 | `tasks/T11.5/output/stitch-project-cleanup-report-2026-08-10.md` |

## 4. Image2 视觉资产

| 资产用途 | 文件 |
|---|---|
| Home Hero：餐厅高峰运营、接单、厨房、配送交接 | `projects/candao-international-website/tasks/T11.5/output/assets/cv2-first-level/home-hero-restaurant-ops-2026-08-08.png` |
| Solutions Hero：多门店餐饮运营与现场协同 | `projects/candao-international-website/tasks/T11.5/output/assets/cv2-first-level/solutions-hero-multistore-ops-2026-08-08.png` |
| Platform Hero：半真实平台能力地图和运营 Dashboard | `projects/candao-international-website/tasks/T11.5/output/assets/cv2-first-level/platform-capability-ui-2026-08-08.png` |
| Integrations Hero：半真实整合目录和数据同步 UI | `projects/candao-international-website/tasks/T11.5/output/assets/cv2-first-level/integrations-ecosystem-ui-2026-08-08.png` |
| Customers Hero：匿名客户案例运营评审场景 | `projects/candao-international-website/tasks/T11.5/output/assets/cv2-first-level/customers-hero-case-ops-2026-08-08.png` |
| About / Contact Hero：餐饮现场服务与产品演示场景 | `projects/candao-international-website/tasks/T11.5/output/assets/cv2-first-level/about-contact-service-ops-2026-08-08.png` |

同一批资产已复制到本地原型目录：

`projects/candao-international-website/source/stitch-first-level-v2/assets/`

## 5. 本地可交互 C v2 原型

| 项目 | 路径 |
|---|---|
| 本地入口 | `projects/candao-international-website/source/stitch-first-level-v2/index.html` |
| 页面切换方式 | `?page=home`、`?page=solutions`、`?page=platform`、`?page=integrations`、`?page=customers`、`?page=about`、`?page=contact` |
| 图片填入方式 | 使用 Image2 生成图片作为真实 `<img>` 资产嵌入页面 |
| 交互方式 | 顶部导航、Capability Map 节点切换、Workflow Stepper、场景选择、整合筛选、需求分流、多步骤表单状态 |
| 本地大图截图 | `tasks/T11.5/output/stitch-cv2-first-level-local-prototype-screenshots/` |

## 6. 重要说明

Stitch MCP 当前没有暴露直接把本地 Image2 图片上传并精确绑定到某个页面位置的工具。因此本次采取双层产出：

1. Stitch 内生成 7 个一级目录主页，用锁定 IA、文案结构和视觉要求约束页面。
2. 对 Stitch 生成结果执行 Fixed 编辑，清理中英混排、英文架构图、错误一级导航和默认版权文案。
3. 本地 C v2 原型将 Image2 生成资产真实嵌入对应页面位置，作为后续 Figma / 前端生产参考。

后续如果需要把本地 Image2 资产进一步同步进 Figma 或其他可编辑设计文件，应进入 A：Design Production 阶段。

## 7. 当前待审查点

- Stitch Fixed 页面已通过关键词扫描，未发现本次定义的明显英文残留和简体残留。
- Stitch 的个别大图区仍可能保留生成工具的图片占位表达；本地 C v2 原型已经用 Image2 资产完成实际填入，应以本地原型作为图片落位参考。
- 本地 C v2 原型已生成 7 张 1440 宽完整页面截图，可用于快速查看真实图片填入后的设计效果。
- 本地 C v2 原型已清理明显英文/简体可见文案，但仍建议在进入 Figma 前进行一次逐屏文案 QA。
- 现阶段产物是 C：Web Prototype Exploration，不是最终设计稿。
