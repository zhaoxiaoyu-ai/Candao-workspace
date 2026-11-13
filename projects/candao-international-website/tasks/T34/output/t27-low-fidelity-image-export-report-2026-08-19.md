# T34 T27 低保真页面图片导出报告

日期：2026-08-19  
输入入口：`tasks/T27/output/stitch-ready-low-fidelity/index.html`  
技术导出范围：入口总览 + `stitch-ready-page-map.json` 中 8 个页面  
产品输出范围：只包含 8 个真实页面；入口总览图仅作内部导航 / QA 参考  
导出视口：1440 x 1200，完整页面截图  

## 2026-08-20 产品输出口径修正

用户确认：`index.html` 的总览图不是真正产品输出时需要的文件。因此：

- `tasks/T34/output/images/01-index-low-fidelity-1440-full.png` 不进入产品输出清单。
- `tasks/T27/output/stitch-ready-low-fidelity/index-1440-content.png` 不进入产品输出清单。
- 产品输出图片只包含 Home、Solutions、Platform、Integrations、Customers、Resources、About、Demo 8 个真实页面。
- 口径清单见 `tasks/T34/output/product-output-image-manifest-2026-08-20.json`。

## 导出结果

| 页面 | 来源 HTML | 导出图片 | 图片尺寸 | 产品输出 |
| --- | --- | --- | --- | --- |
| 低保真總覽 | `tasks/T27/output/stitch-ready-low-fidelity/index.html` | `tasks/T34/output/images/01-index-low-fidelity-1440-full.png` | 1440 x 2059 | 否，仅内部参考 |
| 首頁 | `tasks/T27/output/stitch-ready-low-fidelity/home.html` | `tasks/T34/output/images/02-home-low-fidelity-1440-full.png` | 1440 x 3749 | 是 |
| 解決方案 | `tasks/T27/output/stitch-ready-low-fidelity/solutions.html` | `tasks/T34/output/images/03-solutions-low-fidelity-1440-full.png` | 1440 x 2273 | 是 |
| 平台 | `tasks/T27/output/stitch-ready-low-fidelity/platform.html` | `tasks/T34/output/images/04-platform-low-fidelity-1440-full.png` | 1440 x 3054 | 是 |
| 整合能力 | `tasks/T27/output/stitch-ready-low-fidelity/integrations.html` | `tasks/T34/output/images/05-integrations-low-fidelity-1440-full.png` | 1440 x 2194 | 是 |
| 客戶案例 | `tasks/T27/output/stitch-ready-low-fidelity/customers.html` | `tasks/T34/output/images/06-customers-low-fidelity-1440-full.png` | 1440 x 3004 | 是 |
| 資源 | `tasks/T27/output/stitch-ready-low-fidelity/resources.html` | `tasks/T34/output/images/07-resources-low-fidelity-1440-full.png` | 1440 x 5040 | 是 |
| 關於餐道 | `tasks/T27/output/stitch-ready-low-fidelity/about.html` | `tasks/T34/output/images/08-about-low-fidelity-1440-full.png` | 1440 x 6288 | 是 |
| 預約產品演示 | `tasks/T27/output/stitch-ready-low-fidelity/demo.html` | `tasks/T34/output/images/09-demo-low-fidelity-1440-full.png` | 1440 x 2379 | 是 |

## 追加单张入口图

2026-08-20 用户只要求将指定入口 HTML 转成图片。本轮重新打开 `tasks/T27/output/stitch-ready-low-fidelity/index.html`，读取页面实际内容高度后，单独导出：

- `tasks/T27/output/stitch-ready-low-fidelity/index-1440-content.png`：1440 x 2059
- 本次单页 QA：`tasks/T34/output/qa/t27-index-single-image-export-check-2026-08-20.json`，pass，文件大小 545,484 bytes。

该追加图同样只作为内部参考，不进入产品输出清单。

## 验证

- `tasks/T34/output/qa/t27-low-fidelity-image-export-check-2026-08-19.json`：pass，9/9 技术导出通过；其中 8 张是真实页面产品输出，1 张是内部总览参考。
- `tasks/T34/output/qa/t27-index-single-image-export-check-2026-08-20.json`：pass，单张入口图通过。
- 已使用 `sips` 检查所有 PNG 宽高。
- 已打开 `01-index-low-fidelity-1440-full.png` 做视觉 sanity check，确认不是空白且为完整长图；但该图不进入产品输出。

## 说明

本轮导出的是用户指定的 T27 `stitch-ready-low-fidelity` 低保真包图片，不是 T33 中的正式高保真图片，也不使用 T32 失败 Customers 产物。正式产品输出口径以 8 个真实页面为准，不包含任何入口总览图。
