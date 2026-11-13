# Platform UI Motion Storyboard

任务：T11.5-A / Task A06  
日期：2026-08-05  
输出语言：简体中文  

## 1. Figma 输出

| Frame | Node ID | 尺寸 | 验证 |
| --- | --- | --- | --- |
| `Platform UI Motion Storyboard / TC` | `50:2` | 1440 × 940 | 非空，13 个一级子节点 |

## 2. Motion 叙事目标

用滚动和 UI 状态变化解释：

```text
系统连接
→ 订单推动流程
→ 门店负载变化
→ 总部 Dashboard 汇总
```

## 3. Storyboard

| Step | 时间 | 画面状态 | Motion 表达 | 业务意义 |
| --- | --- | --- | --- | --- |
| 01 | 0.0s → 0.6s | 订单从多个渠道进入 | 渠道标签从右侧滑入，蓝色连接线亮起 | 说明 Candao 接住多渠道入口 |
| 02 | 0.6s → 1.2s | 统一队列形成 | 队列卡片 stagger 进入，优先级排序 | 说明门店不用跨系统切换 |
| 03 | 1.2s → 1.8s | 门店负载更新 | 柱状图上升，风险区域琥珀提示 | 说明高峰压力可视 |
| 04 | 1.8s → 2.4s | HQ Dashboard 聚合 | 多节点状态收敛到总部视角 | 说明总部能看见并处理例外 |

## 4. Motion 规则

- 所有动效必须服务“从混乱到清晰”。
- 动效等级控制在 L2-L3。
- 过渡建议使用 300-500ms，ease-out。
- UI 状态变化优先用高亮、进度、chip 切换，不使用复杂 3D。
- 移动端降级为纵向 steps 或 swipeable cards。

## 5. 可开发拆分

| 前端模块 | 对应分镜 |
| --- | --- |
| `ChannelInputStep` | Step 01 |
| `UnifiedQueueStep` | Step 02 |
| `StoreLoadStep` | Step 03 |
| `HqVisibilityStep` | Step 04 |
| `CapabilityMotionController` | 滚动触发和 active step 管理 |

