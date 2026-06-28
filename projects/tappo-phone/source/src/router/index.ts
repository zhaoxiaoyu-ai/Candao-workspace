import { createRouter, createWebHistory } from 'vue-router'
import type { NavItem } from '@/types/domain'

export const navItems: NavItem[] = [
  { key: 'owner', label: '主頁', route: '/' },
  { key: 'staff', label: '應用', route: '/staff/apps' },
  { key: 'order', label: '點餐', route: '/ordering' },
  { key: 'spec', label: '規範', route: '/design-spec' },
]

export const ownerNavItems: NavItem[] = [
  { key: 'owner', label: '主頁', route: '/' },
  { key: 'reports', label: '數據', route: '/transactions' },
  { key: 'staff', label: '應用', route: '/staff/apps' },
  { key: 'settings', label: '設置', route: '/settings' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'owner-dashboard',
      component: () => import('@/pages/OwnerDashboard.vue'),
      meta: { navKey: 'owner', navGroup: 'owner' },
    },
    {
      path: '/staff/apps',
      name: 'staff-app-center',
      component: () => import('@/pages/StaffAppCenter.vue'),
      meta: { navKey: 'staff', navGroup: 'owner' },
    },
    {
      path: '/ordering',
      name: 'ordering-flow',
      component: () => import('@/pages/OrderingFlow.vue'),
      meta: { navKey: 'order', hideNav: true },
    },
    {
      path: '/order-confirm',
      name: 'order-confirm',
      component: () => import('@/pages/OrderConfirm.vue'),
      meta: { navKey: 'order', hideNav: true },
    },
    {
      path: '/order-info',
      name: 'order-info',
      component: () => import('@/pages/OrderInfo.vue'),
      meta: { navKey: 'order', hideNav: true },
    },
    {
      path: '/design-spec',
      name: 'design-spec',
      component: () => import('@/pages/DesignSpec.vue'),
      meta: { navKey: 'spec' },
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/pages/SettingsPage.vue'),
      meta: { navKey: 'settings', navGroup: 'owner' },
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: () => import('@/pages/TransactionHistory.vue'),
      meta: { navKey: 'reports', hideNav: true },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
