# HomeConnectorLoop Storyboard

## Composition Contract

- purpose: 解释餐道如何把外卖平台、自有点餐、门店、配送、支付、ERP 和财务数据接回同一营运中枢。
- duration: 10s
- fps: 30
- aspect_ratio: 16:9

## Sequence

1. 0-1s：深蓝画布与中心「餐道營運中樞」节点出现。
2. 1-3s：外围订单渠道、门店、会员、配送、支付与企业系统节点出现。
3. 3-5s：数据线从外围节点汇入中心。
4. 5-7s：OMS、DMS / iDMS、CDBI、財務對賬被点亮。
5. 7-9s：异常订单和对账差异以独立标注出现。
6. 9-10s：回到循环首帧，保留静态可读结构。

## Elements

- central hub
- six operation nodes
- cyan data lines
- status packets
- exception labels

## Assets

- assets/logo/candao-blue-logo.svg
- reference master: missing

## Loop And Fallback

- loop_behavior: seamless soft loop
- poster: missing; use completed hub frame after reference assets are ready
- reduced_motion_fallback: 使用完成帧静态 Poster，不显示循环连线。

## Stitch Keyframes

- home-connector/keyframe-01
- home-connector/keyframe-02
- home-connector/keyframe-03

## Asset Rule

不得生成合作方 Logo 或虚构后台；节点只表达业务对象和数据方向。
