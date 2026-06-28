<script setup lang="ts">
defineProps<{
  open: boolean
  title: string
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="tp-dialog-mask">
      <section class="tp-dialog" role="dialog" aria-modal="true" :aria-label="title">
        <button class="tp-dialog__close" aria-label="Close" @click="emit('close')">
          <span>×</span>
        </button>
        <h2>{{ title }}</h2>
        <slot />
      </section>
    </div>
  </Teleport>
</template>

<style scoped>
.tp-dialog-mask {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.48);
}

.tp-dialog {
  width: min(360px, calc(100vw - 48px));
  position: relative;
  border-radius: 24px;
  padding: 22px;
  background: #fff;
  box-shadow: var(--tp-shadow-modal);
}

.tp-dialog h2 {
  color: var(--tp-text);
  text-align: center;
  font-size: 17px;
  line-height: 24px;
  margin-bottom: 16px;
}

.tp-dialog__close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  color: var(--tp-text-secondary);
  background: transparent;
  font-size: 24px;
  line-height: 1;
}
</style>
