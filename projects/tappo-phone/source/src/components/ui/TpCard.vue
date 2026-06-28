<script setup lang="ts">
withDefaults(
  defineProps<{
    tone?: 'soft' | 'plain' | 'dark'
    dense?: boolean
  }>(),
  {
    tone: 'soft',
    dense: false,
  },
)
</script>

<template>
  <section class="tp-card" :class="[`tp-card--${tone}`, { 'tp-card--dense': dense }]">
    <slot />
  </section>
</template>

<style scoped>
.tp-card {
  border-radius: 24px;
  padding: 18px;
}

.tp-card--dense {
  border-radius: 16px;
  padding: 14px;
}

.tp-card--soft {
  background: var(--tp-surface);
  border: 1px solid var(--tp-border);
  box-shadow: var(--tp-shadow-card);
}

.tp-card--plain {
  background: var(--tp-surface);
  border: 1px solid var(--tp-hairline);
}

.tp-card--dark {
  color: #fff;
  background: linear-gradient(135deg, #17120f, #312217);
  box-shadow: var(--tp-shadow-card);
}
</style>
