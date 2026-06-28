import { defineStore } from 'pinia'
import type { PaymentStatus } from '@/types/domain'

export const useOrderStore = defineStore('order', {
  state: () => ({
    orderId: '92502',
    paymentStatus: 'idle' as PaymentStatus,
    paymentMethod: 'KPay',
  }),
  actions: {
    setPending(method: string) {
      this.paymentMethod = method
      this.paymentStatus = 'pending'
    },
    setPaid(method: string) {
      this.paymentMethod = method
      this.paymentStatus = 'paid'
    },
    setFailed() {
      this.paymentStatus = 'failed'
    },
  },
  persist: {
    storage: sessionStorage,
    pick: ['orderId', 'paymentStatus', 'paymentMethod'],
  },
})
