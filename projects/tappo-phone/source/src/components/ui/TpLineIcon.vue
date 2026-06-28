<script setup lang="ts">
export type LineIconName =
  | 'home'
  | 'data'
  | 'apps'
  | 'settings'
  | 'bell'
  | 'wallet'
  | 'plus'
  | 'trendUp'
  | 'dineIn'
  | 'takeaway'
  | 'delivery'
  | 'orderMethod'
  | 'qr'
  | 'waiter'
  | 'platform'
  | 'back'
  | 'success'
  | 'debit'
  | 'card'
  | 'store'
  | 'chevron'

withDefaults(
  defineProps<{
    name: LineIconName
    size?: number
  }>(),
  {
    size: 24,
  },
)
</script>

<template>
  <span class="tp-line-icon" :style="{ width: `${size}px`, height: `${size}px` }" aria-hidden="true">
    <svg v-if="name === 'home'" viewBox="0 0 24 24">
      <path d="M4 10.8 12 4l8 6.8V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.2Z" />
    </svg>
    <svg v-else-if="name === 'data'" viewBox="0 0 24 24">
      <path d="M5 19V7m6 12V4m6 15v-9" />
      <path d="M4 20h18" />
    </svg>
    <svg v-else-if="name === 'apps'" viewBox="0 0 24 24">
      <path d="M5 5h6v6H5V5Zm8 0h6v6h-6V5ZM5 13h6v6H5v-6Zm8 0h6v6h-6v-6Z" />
    </svg>
    <svg v-else-if="name === 'settings'" viewBox="0 0 24 24">
      <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
      <path d="M4.8 10.2 3.7 8.4l2-3.4 2.2.8a7.7 7.7 0 0 1 1.8-1L10.1 2h3.8l.4 2.8c.7.3 1.3.6 1.8 1l2.2-.8 2 3.4-1.1 1.8c.1.6.1 1.2 0 1.8l1.1 1.8-2 3.4-2.2-.8c-.6.4-1.2.8-1.8 1l-.4 2.8h-3.8l-.4-2.8a7.7 7.7 0 0 1-1.8-1l-2.2.8-2-3.4L4.8 12a7.3 7.3 0 0 1 0-1.8Z" />
    </svg>
    <svg v-else-if="name === 'bell'" viewBox="0 0 24 24">
      <path d="M18 9a6 6 0 1 0-12 0c0 7-2 7-2 9h16c0-2-2-2-2-9Z" />
      <path d="M10 21h4" />
    </svg>
    <svg v-else-if="name === 'wallet'" viewBox="0 0 24 24">
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H19v15H6.5A2.5 2.5 0 0 1 4 17.5v-10Z" />
      <path d="M15 12h5v5h-5a2.5 2.5 0 0 1 0-5Z" />
      <path d="M7 5V3.5h10V5" />
    </svg>
    <svg v-else-if="name === 'plus'" viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14" />
    </svg>
    <svg v-else-if="name === 'trendUp'" viewBox="0 0 24 24">
      <path d="m4 15 5-5 4 4 7-8" />
      <path d="M15 6h5v5" />
    </svg>
    <svg v-else-if="name === 'dineIn'" viewBox="0 0 24 24">
      <path d="M7 3v18M5 8h4M17 3v18M15 3h3a2 2 0 0 1 2 2v5a3 3 0 0 1-3 3" />
    </svg>
    <svg v-else-if="name === 'takeaway'" viewBox="0 0 24 24">
      <path d="M6 8h12l-1.2 12H7.2L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
    <svg v-else-if="name === 'delivery'" viewBox="0 0 24 24">
      <path d="M4 7h10v10H4V7Zm14 5 2 3v2h-6v-5h4Z" />
      <path d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
    <svg v-else-if="name === 'orderMethod'" viewBox="0 0 24 24">
      <path d="M5 5h14v14H5V5Z" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
    <svg v-else-if="name === 'qr'" viewBox="0 0 24 24">
      <path d="M5 5h6v6H5V5Zm8 0h6v6h-6V5ZM5 13h6v6H5v-6Zm9 1h2v2h-2v-2Zm4 0h1v5h-5v-1h3v-4Z" />
    </svg>
    <svg v-else-if="name === 'waiter'" viewBox="0 0 24 24">
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M3 20c.4-4 2.2-6 5-6s4.6 2 5 6H3Z" />
      <path d="M15 8h5v10h-5V8Z" />
    </svg>
    <svg v-else-if="name === 'platform'" viewBox="0 0 24 24">
      <path d="M5 5h14v14H5V5Z" />
      <path d="M8 9h8M8 13h8M8 17h3" />
    </svg>
    <svg v-else-if="name === 'back'" viewBox="0 0 24 24">
      <path d="m15 5-7 7 7 7" />
    </svg>
    <svg v-else-if="name === 'success'" viewBox="0 0 24 24">
      <path d="M20 6 9 17l-5-5" />
    </svg>
    <svg v-else-if="name === 'debit'" viewBox="0 0 24 24">
      <path d="M5 12h14" />
    </svg>
    <svg v-else-if="name === 'card'" viewBox="0 0 24 24">
      <path d="M4 6h16v12H4V6Z" />
      <path d="M4 10h16M8 15h4" />
    </svg>
    <svg v-else-if="name === 'store'" viewBox="0 0 24 24">
      <path d="M4 9h16l-1.5-5h-13L4 9Z" />
      <path d="M6 9v11h12V9M9 20v-6h6v6" />
    </svg>
    <svg v-else viewBox="0 0 24 24">
      <path d="m9 5 7 7-7 7" />
    </svg>
  </span>
</template>

<style scoped>
.tp-line-icon {
  display: inline-grid;
  place-items: center;
  flex: 0 0 auto;
}

.tp-line-icon svg {
  width: 100%;
  height: 100%;
  display: block;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
