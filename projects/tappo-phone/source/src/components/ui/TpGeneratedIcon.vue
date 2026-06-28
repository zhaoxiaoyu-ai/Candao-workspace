<script setup lang="ts">
import assetIcon from '@/assets/generated/icons/tappo-icon-asset.png'
import bookingIcon from '@/assets/generated/icons/tappo-icon-booking.png'
import customerIcon from '@/assets/generated/icons/tappo-icon-customer.png'
import homeIcon from '@/assets/generated/icons/tappo-icon-home.png'
import inventoryIcon from '@/assets/generated/icons/tappo-icon-inventory.png'
import menuIcon from '@/assets/generated/icons/tappo-icon-menu.png'
import paymentIcon from '@/assets/generated/icons/tappo-icon-payment.png'
import posIcon from '@/assets/generated/icons/tappo-icon-pos.png'
import receiptIcon from '@/assets/generated/icons/tappo-icon-receipt.png'
import reportIcon from '@/assets/generated/icons/tappo-icon-report.png'
import scheduleIcon from '@/assets/generated/icons/tappo-icon-schedule.png'
import settingsIcon from '@/assets/generated/icons/tappo-icon-settings.png'

export type GeneratedIconName =
  | 'home'
  | 'report'
  | 'customer'
  | 'asset'
  | 'inventory'
  | 'receipt'
  | 'menu'
  | 'schedule'
  | 'pos'
  | 'booking'
  | 'settings'
  | 'payment'

const props = withDefaults(
  defineProps<{
    name: GeneratedIconName
    size?: number
    framed?: boolean
  }>(),
  {
    size: 48,
    framed: false,
  },
)

const icons: Record<GeneratedIconName, string> = {
  home: homeIcon,
  report: reportIcon,
  customer: customerIcon,
  asset: assetIcon,
  inventory: inventoryIcon,
  receipt: receiptIcon,
  menu: menuIcon,
  schedule: scheduleIcon,
  pos: posIcon,
  booking: bookingIcon,
  settings: settingsIcon,
  payment: paymentIcon,
}
</script>

<template>
  <span
    class="tp-generated-icon"
    :class="{ 'tp-generated-icon--framed': framed }"
    :style="{ width: `${props.size}px`, height: `${props.size}px` }"
    aria-hidden="true"
  >
    <img :src="icons[name]" alt="" />
  </span>
</template>

<style scoped>
.tp-generated-icon {
  display: inline-grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 24%;
  overflow: hidden;
}

.tp-generated-icon img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.tp-generated-icon--framed {
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    0 8px 18px rgba(229, 215, 204, 0.36);
}
</style>
