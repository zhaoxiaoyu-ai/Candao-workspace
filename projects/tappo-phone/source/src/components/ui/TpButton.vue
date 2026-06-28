<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'md' | 'lg'
    block?: boolean
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    block: false,
    disabled: false,
  },
)
</script>

<template>
  <button
    class="tp-button"
    :class="[`tp-button--${variant}`, `tp-button--${size}`, { 'tp-button--block': block }]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.tp-button {
  min-width: 92px;
  border-radius: var(--button-radius, 999px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 700;
  letter-spacing: 0;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    background 0.18s ease,
    opacity 0.18s ease;
}

.tp-button:active {
  transform: translateY(1px);
}

.tp-button:disabled {
  cursor: not-allowed;
  opacity: 0.48;
  transform: none;
}

.tp-button--md {
  height: 44px;
  padding: 0 18px;
  font-size: 15px;
}

.tp-button--lg {
  height: 48px;
  padding: 0 22px;
  font-size: 16px;
}

.tp-button--primary {
  color: #fff;
  background: linear-gradient(180deg, var(--tp-primary-hover), var(--tp-primary));
  box-shadow: 0 2px 8px rgba(255, 109, 0, 0.24);
}

.tp-button--primary:hover {
  background: linear-gradient(180deg, #ffb171, var(--tp-primary));
}

.tp-button--secondary {
  color: var(--tp-text);
  background: rgba(9, 5, 2, 0.05);
}

.tp-button--ghost {
  color: var(--tp-text-secondary);
  background: transparent;
}

.tp-button--block {
  width: 100%;
}
</style>
