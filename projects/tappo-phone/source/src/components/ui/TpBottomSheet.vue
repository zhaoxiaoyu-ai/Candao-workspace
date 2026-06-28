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
    <div v-if="open" class="tp-sheet-mask" @click.self="emit('close')">
      <section class="tp-sheet" role="dialog" aria-modal="true" :aria-label="title">
        <div class="tp-sheet__handle" />
        <h2>{{ title }}</h2>
        <slot />
      </section>
    </div>
  </Teleport>
</template>

<style scoped>
.tp-sheet-mask {
  position: fixed;
  inset: 0;
  z-index: 55;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(0, 0, 0, 0.46);
}

.tp-sheet {
  width: min(100%, 440px);
  max-height: min(78dvh, 720px);
  overflow: auto;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 10px 18px calc(18px + env(safe-area-inset-bottom));
  background: #fff;
  box-shadow: var(--tp-shadow-modal);
}

.tp-sheet__handle {
  width: 44px;
  height: 4px;
  margin: 0 auto 14px;
  border-radius: 999px;
  background: rgba(9, 5, 2, 0.15);
}

.tp-sheet h2 {
  color: var(--tp-text);
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
}
</style>
