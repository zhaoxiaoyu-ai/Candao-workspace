<script setup lang="ts">
export type SoftIconName = 'dineIn' | 'takeaway' | 'delivery' | 'qr' | 'waiter' | 'platform'
export type SoftIconTone = 'amber' | 'sage' | 'peach'

withDefaults(
  defineProps<{
    name: SoftIconName
    tone?: SoftIconTone
    size?: number
  }>(),
  {
    tone: 'amber',
    size: 54,
  },
)
</script>

<template>
  <span class="tp-soft-icon" :class="`tp-soft-icon--${tone}`" :style="{ width: `${size}px`, height: `${size}px` }" aria-hidden="true">
    <svg v-if="name === 'dineIn'" viewBox="0 0 64 64" role="img">
      <circle class="wash" cx="32" cy="32" r="20" />
      <path class="plate" d="M20 35c0-6.1 5.2-11 12-11s12 4.9 12 11-5.2 11-12 11-12-4.9-12-11Z" />
      <path class="accent" d="M26 34c2.2-3.1 7.4-4.8 12-2.2" />
      <path class="line" d="M18 21v19M46 21v19M16 27h4M44 27h4" />
    </svg>

    <svg v-else-if="name === 'takeaway'" viewBox="0 0 64 64" role="img">
      <path class="wash" d="M19 24h26l-2.4 24H21.4L19 24Z" />
      <path class="plate" d="M23 25.5h18l-1.8 18.5H24.8L23 25.5Z" />
      <path class="line" d="M25 24c.5-5 3.1-7.5 7-7.5S38.5 19 39 24" />
      <path class="accent fill" d="M28 31h8v3h-8z" />
    </svg>

    <svg v-else-if="name === 'delivery'" viewBox="0 0 64 64" role="img">
      <path class="wash" d="M18 35h23l5 6h4" />
      <path class="plate" d="M21 25h17c3.2 0 5.6 2.4 5.6 5.4V38H21V25Z" />
      <path class="accent fill" d="M25 29h8v5h-8z" />
      <path class="line" d="M18 42h32M24 45a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM45 45a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    </svg>

    <svg v-else-if="name === 'qr'" viewBox="0 0 64 64" role="img">
      <rect class="plate" x="22" y="14" width="20" height="36" rx="7" />
      <path class="line" d="M28 20h8M28 44h8" />
      <path class="accent fill" d="M27 27h4v4h-4zM34 27h4v4h-4zM27 34h4v4h-4zM34 34h4v4h-4z" />
      <path class="wash" d="M18 25a14 14 0 0 0 0 15M46 25a14 14 0 0 1 0 15" />
    </svg>

    <svg v-else-if="name === 'waiter'" viewBox="0 0 64 64" role="img">
      <circle class="plate" cx="27" cy="21" r="6" />
      <path class="wash" d="M18 47c1.1-9.2 5.1-14 11-14s9.9 4.8 11 14H18Z" />
      <rect class="plate" x="38" y="28" width="13" height="18" rx="4" />
      <path class="accent" d="M41 34h7M41 39h5" />
    </svg>

    <svg v-else viewBox="0 0 64 64" role="img">
      <rect class="plate" x="17" y="17" width="30" height="30" rx="10" />
      <path class="wash" d="M25 28h18c3.3 0 5.5 2.2 5.5 5s-2.2 5-5.5 5H25" />
      <path class="accent" d="M24 27l6 6-6 6" />
      <path class="line" d="M25 45h18M24 22h10" />
    </svg>
  </span>
</template>

<style scoped>
.tp-soft-icon {
  position: relative;
  display: inline-grid;
  place-items: center;
  flex: 0 0 auto;
  border: 1px solid rgba(255, 138, 61, 0.14);
  border-radius: 18px;
  background:
    radial-gradient(circle at 28% 20%, rgba(255, 255, 255, 0.92), transparent 38%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(255, 249, 241, 0.76));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    0 12px 24px rgba(229, 215, 204, 0.32);
}

.tp-soft-icon::after {
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  content: '';
  filter: blur(6px);
  opacity: 0.42;
}

.tp-soft-icon svg {
  position: relative;
  z-index: 1;
  width: 74%;
  height: 74%;
  overflow: visible;
}

.plate {
  fill: rgba(255, 255, 255, 0.95);
  stroke: rgba(112, 79, 56, 0.22);
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wash {
  fill: rgba(255, 138, 61, 0.1);
  stroke: rgba(255, 138, 61, 0.18);
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.line {
  fill: none;
  stroke: rgba(112, 79, 56, 0.46);
  stroke-width: 2.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.accent {
  fill: none;
  stroke: var(--icon-accent);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.accent.fill {
  fill: var(--icon-accent);
  stroke: none;
}

.tp-soft-icon--amber {
  --icon-accent: #ff8a3d;
}

.tp-soft-icon--amber::after {
  background: #ffb56e;
}

.tp-soft-icon--sage {
  --icon-accent: #55b887;
}

.tp-soft-icon--sage::after {
  background: #9bd9b3;
}

.tp-soft-icon--peach {
  --icon-accent: #f3a26f;
}

.tp-soft-icon--peach::after {
  background: #ffd0ae;
}
</style>
