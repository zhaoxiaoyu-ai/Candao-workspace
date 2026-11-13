# PLATFORM Prompt

## 页面目标

用真实产品截图说明餐道产品如何承接订单、餐单、门店、配送、数据和接入。

## 访客可见内容

标题：用真實產品能力承接訂單、餐單、配送、數據和接入。  
说明：平台頁回答產品如何工作：每項能力都應對應真實產品截圖、業務對象、狀態、操作、下一步和產品視頻入口。

## 模块顺序

1. P01 产品截图 Hero。
2. P02 六项能力导航。
3. P03 真实产品截图舞台。
4. P04 产品截图矢量标注层。
5. P05 产品视频 Carousel。
6. P06 CTA。

## 模块呈现方式

- P01：三层真实产品截图舞台，截图缺失时保留产品截图位。
- P02：桌面端纵向能力 Tabs，移动端改 Accordion。
- P03：当前能力详情只显示一个真实截图位、业务对象、状态、产品名和下一步。
- P04：标注层在截图外部独立绘制，不改变产品 UI。
- P05：产品视频 Carousel；视频缺失时只保留待接入入口。
- P06：CTA 根据当前能力导向 Demo、Integrations 或 Customers。

## 六项能力

- 多渠道訂單：OMS / COMS / SOMS。
- 餐單與門店：Menu Center / Store Abnormity Management。
- 會員與自有點餐：Mobile Ordering / QR / H5 / Web ordering。
- 配送履約：DMS / iDMS。
- 數據與對賬：CDBI / 財務對賬。
- AMS / Connector：API、POS / KDS、CRM、ERP、支付、配送。

## 交互状态

- 默认：多渠道订单激活。
- Hover：临时预览标题和一句说明，移开后回到锁定项。
- Click：标题、说明、产品名、截图位、标注层、视频入口和 CTA 同步变化。
- Scroll：截图舞台进入视口后保持稳定，不自动轮播。
- Mobile：能力切换改 Accordion。

## 素材

真实产品截图和视频缺失。必须保留截图位和视频位，不重绘后台 UI。

## 参考图与素材文件

- 参考图编号：`ref-02-product-stage`、`ref-05-typography` 当前被首页母版缺失阻塞；不得裁切历史截图充当正式参考。
- 真实素材文件：暂无产品截图文件可用。
- 待提供素材：`product-screenshot-oms`、`product-screenshot-menu-store`、`product-screenshot-dms-idms`、`product-screenshot-cdbi-finance`、`product-videos`，状态均为 `missing`。
- 视频入口：可设计 Carousel、播放按钮和 Modal 状态，但文件缺失时只显示待接入素材位，不生成假视频封面。

## 不允许

不要生成虚构后台、虚构视频、未授权客户数据或连续产品卡片墙。
