# T54 Figma 最终层级超链接整理报告

日期：2026-09-01  
Figma 文件：`BMXIuVRzSUUt9YNhVAQA6K`  
页面：`03 Desktop Pages / Bilingual Validation`（`3:5`）

> 回退说明：用户已指出本轮替换上方截图区域的执行方向错误。T54 新增面板 `623:2` 与隐藏原截图的操作已在 T55 中回退；当前正确版本是保留原截图，只把最上方路径文字直接改成 hyperlink。后续不要将本报告作为当前页面状态依据。

## 用户要求

将用户截图中标出的 Figma 页面上方区域改成最终层级的超链接。

## 执行内容

- 已将原上方 Aceternity / 页面参考缩略图区域隐藏归档，相关节点改为不可见并加 `T54 archived /` 前缀。
- 已在原区域创建新面板：`最終層級超連結 / Web Desktop 1440`（`623:2`）。
- 面板使用深色首页体系，按 T05 Sitemap 展示一级页面、二级 URL 路径和页脚法务路径。
- 8 个主卡设置 Figma Prototype 点击跳转，可直接跳到当前页面内对应最终 Desktop Frame。
- 二级项目与法务项设置 URL hyperlink，路径来自 T05 Sitemap，基准域名使用旧官网域名 `https://www.can-dao.com.hk`。

## 主卡跳转

| 层级项 | 卡片 ID | 跳转目标 Frame |
| --- | --- | --- |
| 首頁 | `623:17` | `336:7645` |
| 解決方案 | `623:40` | `447:8876` |
| 平台能力 | `623:66` | `488:350` |
| 整合能力 | `623:95` | `488:668` |
| 客戶案例 | `623:124` | `488:1138` |
| 資源與支援 | `623:147` | `488:1413` |
| 關於餐道 | `623:170` | `488:2002` |
| 預約產品演示 | `623:193` | `488:2401` |

## 验证结果

- 层级卡数量：`9`
- 主卡 Figma 跳转：`8`
- 文本 hyperlink：`100`
- 旧参考缩略图归档节点：`23`
- 禁用可见词：`0`
- domain-copy：`1/1 pass`

## 输出文件

- 面板截图：`tasks/T54/output/screenshots/t54-final-hierarchy-links-panel-after.png`
- Figma 读回 QA：`tasks/T54/output/qa/t54-figma-link-readback-qa.json`
- domain-copy QA：`tasks/T54/output/qa/domain-copy-t54-figma-hierarchy-report.json`

## 边界

本轮只修改 Figma 画布顶部索引区域，不改写页面正文、不新增业务事实、不批准人工关卡。
