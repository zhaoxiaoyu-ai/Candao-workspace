import { menuCategories, menuItems, ownerMetrics, staffApps } from '@/mocks/tappoData'

const delay = (ms = 160) => new Promise((resolve) => window.setTimeout(resolve, ms))

export const mockApi = {
  async getOwnerDashboard() {
    await delay()
    return {
      store: '示範餐廳',
      status: '營業中',
      metrics: ownerMetrics,
      points: 1250,
      apps: ['智能POS', '三方外賣連接', '訂座管理'],
    }
  },
  async getStaffApps() {
    await delay()
    return staffApps
  },
  async getMenu() {
    await delay()
    return {
      categories: menuCategories,
      items: menuItems,
    }
  },
}
