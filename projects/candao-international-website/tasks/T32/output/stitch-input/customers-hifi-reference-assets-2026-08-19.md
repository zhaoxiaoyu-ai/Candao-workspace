# Customers 高保真 Stitch 参考资产清单

日期：2026-08-19  
页面目标：Customers / Desktop 1440 / TC

## 已用于本次 Stitch 生成的参考层

1. 当前结构和内容参考  
   `/Users/victorwong/Documents/Codex/Candao-workspace/projects/candao-international-website/tasks/T31/output/screenshots/customers-1440.png`  
   类型：PNG，1440 x 3004，约 680KB  
   用途：说明客户案例页的模块顺序、真实文案、客户数据看板、服务规模指标、实名案例、业态成果和页内媒介位置。  
   边界：这是视觉化低保真 / 中保真截图，不是最终高保真稿。

2. 高保真媒介气质参考  
   `/Users/victorwong/Documents/Codex/Candao-workspace/projects/candao-international-website/tasks/T11.5/output/assets/cv2-first-level/customers-hero-case-ops-2026-08-08.png`  
   类型：PNG，1808 x 870，约 1.9MB  
   用途：参考餐饮现场、品牌营运评审和产品演示的高保真摄影式构图。  
   边界：该图不是客户真实现场照片，不得作为 Pizza-Box、JIA Group 或 Jardine Group 的真实案例照片展示。

## Stitch 工具边界

当前 MCP 暴露的 Stitch 工具没有本地 PNG 直接输入参数。本次已按单页规则先用 `generate_screen_from_text` 送入完整高保真生成 prompt，并在 prompt 中把上述图像的视觉角色转写为结构化要求。

如后续需要把本地 PNG 真正上传为 Stitch 素材 screen，需按 `stitch::upload-to-stitch` 技能要求先向用户展示本清单并获得明确确认，然后使用上传脚本执行。

## 仍需真实素材确认

- 客户 Logo 原图；
- 客户现场照片；
- 真实产品截图；
- 产品视频或视频封面；
- 客户引用语原图。

以上素材未确认前，Stitch 生成结果只能使用客户名称、抽象媒介位、图表化指标和截图式界面骨架。
