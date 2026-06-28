import { defineStore } from 'pinia'
import type { CartLine, MenuItem, OrderMode } from '@/types/domain'

export const useCartStore = defineStore('cart', {
  state: () => ({
    mode: 'dine-in' as OrderMode,
    tableNo: '8',
    guests: 2,
    guestConfirmed: false,
    lines: [] as CartLine[],
  }),
  getters: {
    count: (state) => state.lines.reduce((sum, line) => sum + line.quantity, 0),
    subtotal: (state) => state.lines.reduce((sum, line) => sum + line.item.price * line.quantity, 0),
    tax(): number {
      return Math.round(this.subtotal * 0.1)
    },
    packagingFee(): number {
      return this.mode === 'takeaway' ? this.count * 2 : 0
    },
    total(): number {
      return this.subtotal + this.tax + this.packagingFee
    },
  },
  actions: {
    setGuests(guests: number) {
      this.guests = guests
      this.guestConfirmed = true
    },
    setMode(mode: OrderMode) {
      this.mode = mode
    },
    addItem(item: MenuItem) {
      const line = this.lines.find((entry) => entry.item.id === item.id)
      if (line) {
        line.quantity += 1
        return
      }
      this.lines.push({ item, quantity: 1 })
    },
    removeItem(itemId: string) {
      const line = this.lines.find((entry) => entry.item.id === itemId)
      if (!line) return
      line.quantity -= 1
      if (line.quantity <= 0) {
        this.lines = this.lines.filter((entry) => entry.item.id !== itemId)
      }
    },
    clear() {
      this.lines = []
    },
  },
  persist: {
    storage: sessionStorage,
    pick: ['mode', 'tableNo', 'guests', 'guestConfirmed', 'lines'],
  },
})
