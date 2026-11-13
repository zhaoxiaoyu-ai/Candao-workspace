# PlatformScreenshotOverlay Storyboard

## Composition Contract

- purpose: 在真实产品截图外部解释状态变化，不重绘产品 UI。
- duration: 5-6s
- fps: 30
- aspect_ratio: 16:10

## Sequence

1. 真实产品截图出现，外框和蓝色边缘光建立产品舞台。
2. 热点标注依序显示订单状态、配送状态、异常类型或对账差异。
3. 对应下一步操作出现：通知门店、转派第三方配送、重新对账或提交接入评估。
4. 停在最终可读状态，供 Stitch 或前端作为截图说明层。

## Elements

- real screenshot
- browser frame
- overlay hotspots
- status labels
- CTA

## Assets

- real product screenshot: missing

## Loop And Fallback

- loop_behavior: stop at final state
- poster: missing; use static screenshot with labels after screenshots are ready
- reduced_motion_fallback: 静态截图加编号标注，保留状态、异常和下一步。

## Stitch Keyframes

- platform-overlays/keyframe-01
- platform-overlays/keyframe-02
- platform-overlays/keyframe-03

## Asset Rule

截图必须来自真实产品并完成敏感信息清理；动画标注层与截图文件分离。
