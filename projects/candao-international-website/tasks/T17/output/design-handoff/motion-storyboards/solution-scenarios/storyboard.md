# SolutionScenarioFlow Storyboard

## Composition Contract

- purpose: 将 Solutions 的六类场景从功能列表转成问题进入、能力承接、状态回到可处理流程的叙事。
- duration: 6-8s per scenario
- fps: 30
- aspect_ratio: 16:10

## Sequence

1. 问题状态出现：多平台订单、门店接单、配送履约、对账差异或会员营运压力。
2. 对应产品能力介入：OMS、Menu Center、DMS / iDMS、CDBI 或 財務對賬。
3. 状态回到可处理流程：订单状态、配送状态、售罄同步或对账差异进入下一步操作。

## Elements

- scenario nodes
- problem state
- product capability
- before-after state
- context CTA

## Assets

- scenario image: missing
- product screenshot: missing

## Loop And Fallback

- loop_behavior: per scenario; no forced autoplay
- poster: missing; use before-after static panel after assets are ready
- reduced_motion_fallback: 每个场景显示 before / after 两帧，不做连续滚动动画。

## Stitch Keyframes

- solution-scenarios/keyframe-01
- solution-scenarios/keyframe-02

## Asset Rule

场景图可以生成为无文字示意；产品截图必须来自真实截图。
