import { defineStore } from 'pinia'
import { callBridge } from '@/bridge'
import type { Role } from '@/types/domain'

export const useAppStore = defineStore('app', {
  state: () => ({
    role: 'owner' as Role,
    storeName: '示範餐廳',
    deviceId: '',
    bridgeReady: false,
  }),
  actions: {
    async initApp() {
      try {
        const device = await callBridge({ type: 'getDeviceInfo' })
        this.deviceId = device.deviceId
        this.bridgeReady = true
      } catch {
        this.bridgeReady = false
      }
    },
    setRole(role: Role) {
      this.role = role
    },
  },
  persist: {
    storage: sessionStorage,
    pick: ['role', 'storeName'],
  },
})
