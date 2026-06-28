<script setup lang="ts">
import TpLineIcon from '@/components/ui/TpLineIcon.vue'
import type { LineIconName } from '@/components/ui/TpLineIcon.vue'
import type { NavItem } from '@/types/domain'

const props = defineProps<{
  items: NavItem[]
  active: string
}>()

const iconMap: Record<string, LineIconName> = {
  spec: 'data',
  owner: 'home',
  reports: 'data',
  staff: 'apps',
  order: 'orderMethod',
  settings: 'settings',
}

function itemIcon(key: string) {
  return iconMap[key] ?? 'home'
}
</script>

<template>
  <nav class="tp-bottom-nav" aria-label="Primary" :style="{ '--tp-bottom-nav-count': props.items.length }">
    <template v-for="item in props.items" :key="item.key">
      <RouterLink
        v-if="!item.disabled"
        class="tp-bottom-nav__item"
        :class="{ 'tp-bottom-nav__item--active': item.key === active }"
        :to="item.route"
      >
        <span class="tp-bottom-nav__icon" aria-hidden="true">
          <TpLineIcon :name="itemIcon(item.key)" :size="22" />
        </span>
        <span>{{ item.label }}</span>
      </RouterLink>
      <button
        v-else
        type="button"
        class="tp-bottom-nav__item"
        :class="{ 'tp-bottom-nav__item--active': item.key === active }"
        disabled
      >
        <span class="tp-bottom-nav__icon" aria-hidden="true">
          <TpLineIcon :name="itemIcon(item.key)" :size="22" />
        </span>
        <span>{{ item.label }}</span>
      </button>
    </template>
  </nav>
</template>

<style scoped>
.tp-bottom-nav {
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 30;
  width: min(100%, 440px);
  transform: translateX(-50%);
  padding: 8px 24px calc(8px + env(safe-area-inset-bottom));
  display: grid;
  grid-template-columns: repeat(var(--tp-bottom-nav-count), 1fr);
  gap: 6px;
  background: rgba(255, 255, 255, 0.98);
  border-top: 1px solid rgba(20, 20, 20, 0.06);
  box-shadow: 0 -2px 14px rgba(20, 20, 20, 0.06);
  backdrop-filter: blur(16px);
}

.tp-bottom-nav__item {
  border: 0;
  min-height: 51px;
  border-radius: 14px;
  color: var(--tp-text-tertiary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 650;
  background: transparent;
}

.tp-bottom-nav__icon {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
}

.tp-bottom-nav__item--active {
  color: var(--tp-primary);
  background: transparent;
}

.tp-bottom-nav__item--active .tp-bottom-nav__icon {
  background: #fff3e8;
  box-shadow: 0 4px 12px rgba(255, 138, 61, 0.16);
}

.tp-bottom-nav__item:disabled {
  opacity: 0.72;
}

@media (min-width: 768px) {
  .tp-bottom-nav {
    width: min(100%, 680px);
    grid-template-columns: repeat(var(--tp-bottom-nav-count), minmax(88px, 1fr));
    border-radius: 24px;
    bottom: 16px;
    padding-bottom: 10px;
  }
}
</style>
