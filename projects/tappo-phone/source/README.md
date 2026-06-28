# Tappo Phone

Flutter WebView 内嵌 Web 的 Tappo Phone 前端。当前是 v0.1 设计规范和首批点餐闭环实现。

## Stack

- Vue 3 + TypeScript + Vite
- Pinia + Vue Router + vue-i18n
- 自建 Tappo UI 组件
- Flutter bridge 类型定义 + 开发期 mock bridge
- PWA 配置保留，默认关闭。设置 `VITE_ENABLE_PWA=true` 时启用。

## Scripts

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Current Scope

- `/` 老板端经营首页
- `/staff/apps` 员工应用中心
- `/ordering` 点餐主流程
- `/order-confirm` 确认订单与支付中间态
- `/order-info` 订单详情 / 等待中
- `/design-spec` v0.1 视觉规范页

所有业务数据都来自 `src/mocks/tappoData.ts` 和 `src/services/mockApi.ts`，后续真实接口接入时从 service 层替换。
