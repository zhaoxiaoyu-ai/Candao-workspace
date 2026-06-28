<script setup lang="ts">
import TpGeneratedIcon from '@/components/ui/TpGeneratedIcon.vue'

withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    back?: boolean
    backTo?: string
  }>(),
  {
    subtitle: '',
    back: false,
    backTo: '/',
  },
)
</script>

<template>
  <header class="tp-topbar">
    <RouterLink v-if="back" :to="backTo" class="tp-topbar__icon" aria-label="Back">
      <span class="tp-topbar__back">‹</span>
    </RouterLink>
    <div class="tp-topbar__copy">
      <strong>{{ title }}</strong>
      <span v-if="subtitle">{{ subtitle }}</span>
    </div>
    <button class="tp-topbar__icon" aria-label="Notifications">
      <TpGeneratedIcon name="report" :size="28" />
    </button>
  </header>
</template>

<style scoped>
.tp-topbar {
  min-height: 56px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
}

.tp-topbar__copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.tp-topbar__copy strong {
  color: var(--tp-text);
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0;
}

.tp-topbar__copy span {
  color: var(--tp-text-tertiary);
  font-size: 12px;
  line-height: 17px;
}

.tp-topbar__icon {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--tp-text-secondary);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: var(--tp-shadow-low);
}

.tp-topbar__back {
  font-size: 30px;
  line-height: 30px;
  transform: translateY(-1px);
}
</style>
