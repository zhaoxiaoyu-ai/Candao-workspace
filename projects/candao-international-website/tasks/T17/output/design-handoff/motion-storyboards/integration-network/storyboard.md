# IntegrationDataFlow Storyboard

## Composition Contract

- purpose: 解释 Connector 不是 Logo 墙，而是处理接入对象、数据流、权限和异常回传。
- duration: 8s
- fps: 30
- aspect_ratio: 16:10

## Sequence

1. 外卖平台、自建入口、POS / KDS、CRM、支付、ERP 和配送节点围绕 Connector。
2. Menu、Order、User、Basic Info 数据包进入 Connector。
3. 标准化数据流向 OMS、Data Asset、財務對賬。
4. 异常或字段缺失回传到接入评估。

## Elements

- API packets
- Connector hub
- OMS
- Data Asset
- 財務對賬
- exception return line

## Assets

- none required for storyboard

## Loop And Fallback

- loop_behavior: soft loop
- poster: missing; use static topology map after keyframes are drawn
- reduced_motion_fallback: 静态拓扑图保留节点、方向箭头和数据对象标签。

## Stitch Keyframes

- integration-network/keyframe-01
- integration-network/keyframe-02
- integration-network/keyframe-03

## Asset Rule

不使用合作方 Logo；不创造未确认接入承诺。
