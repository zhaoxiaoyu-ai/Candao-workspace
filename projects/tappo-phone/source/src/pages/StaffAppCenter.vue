<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TpButton from '@/components/ui/TpButton.vue'
import TpCard from '@/components/ui/TpCard.vue'
import TpGeneratedIcon from '@/components/ui/TpGeneratedIcon.vue'
import TpTopBar from '@/components/ui/TpTopBar.vue'
import { callBridge } from '@/bridge'
import { mockApi } from '@/services/mockApi'
import type { GeneratedIconName } from '@/components/ui/TpGeneratedIcon.vue'
import type { StaffApp } from '@/types/domain'

const apps = ref<StaffApp[]>([])
const copied = ref(false)

const iconMap: Record<string, GeneratedIconName> = {
  pos: 'pos',
  booking: 'booking',
  settings: 'settings',
  pad: 'asset',
}

onMounted(async () => {
  apps.value = await mockApi.getStaffApps()
})

function appIcon(id: string) {
  return iconMap[id] ?? 'home'
}

async function copyMosUrl() {
  await callBridge({ type: 'copy', text: 'https://mos.tappo.example/download-pad' })
  copied.value = true
}

async function openAppStore() {
  await callBridge({ type: 'openExternal', url: 'https://apps.apple.com/' })
}
</script>

<template>
  <main class="tp-page">
    <div class="tp-shell tp-stack">
      <TpTopBar title="你好，陳大文" subtitle="christal的門店" />

      <section class="staff-header">
        <div>
          <p class="tp-eyebrow">應用中心</p>
          <h1>我的應用</h1>
        </div>
        <span>智能收銀已開通</span>
        <div class="staff-header__icons" aria-hidden="true">
          <TpGeneratedIcon name="pos" :size="76" framed />
          <TpGeneratedIcon name="booking" :size="48" framed />
          <TpGeneratedIcon name="payment" :size="42" framed />
        </div>
      </section>

      <section class="app-grid">
        <RouterLink v-for="app in apps.filter((item) => item.enabled)" :key="app.id" :to="app.route" class="app-tile">
          <TpGeneratedIcon :name="appIcon(app.id)" :size="62" framed />
          <strong>{{ app.name }}</strong>
          <p>{{ app.description }}</p>
        </RouterLink>
      </section>

      <TpCard>
        <div class="pad-card">
          <TpGeneratedIcon name="asset" :size="66" framed />
          <div>
            <p class="tp-eyebrow">下載 Tappo Pad，解鎖完整功能</p>
            <h2>Phone 可用能力與 Pad / MOS 配合能力</h2>
            <span>當前 Phone 可用：智能收銀、訂座、應用、設置。需要配合 Pad / MOS 使用：現金收款、小票打印、完整訂單詳情。</span>
          </div>
        </div>
        <div class="guide-list">
          <div><strong>✓</strong><span>當前 Phone 可用</span></div>
          <div><strong>⚠</strong><span>💵 現金收款 → 前往 Tappo Pad</span></div>
          <div><strong>⚠</strong><span>🖨️ 小票打印 → 需 Tappo Pad 在綫</span></div>
          <div><strong>⚠</strong><span>📋 完整訂單詳情 → Tappo Pad 或 MOS 後台</span></div>
        </div>
        <div class="pad-actions">
          <TpButton size="md" @click="openAppStore">
            <TpGeneratedIcon name="home" :size="22" />
            下載 Tappo Pad
          </TpButton>
          <TpButton size="md" variant="secondary" @click="copyMosUrl">
            <TpGeneratedIcon name="report" :size="22" />
            {{ copied ? '已複製' : '複製 MOS 網址' }}
          </TpButton>
        </div>
      </TpCard>
    </div>
  </main>
</template>

<style scoped>
.staff-header {
  position: relative;
  min-height: 190px;
  overflow: hidden;
  border-radius: 28px;
  padding: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background:
    radial-gradient(circle at 88% 16%, rgba(255, 138, 61, 0.24), transparent 34%),
    linear-gradient(135deg, #fff, #fff2e5);
  box-shadow: var(--tp-shadow-card);
}

.staff-header::after {
  content: "";
  position: absolute;
  right: -34px;
  bottom: -36px;
  width: 152px;
  height: 152px;
  border-radius: 42px;
  background:
    radial-gradient(circle at 52% 44%, rgba(255, 138, 61, 0.28), transparent 38%),
    rgba(255, 255, 255, 0.58);
  transform: rotate(12deg);
}

.staff-header__icons {
  position: absolute;
  right: 12px;
  bottom: 12px;
  width: 136px;
  height: 112px;
  z-index: 1;
}

.staff-header__icons .tp-generated-icon {
  position: absolute;
}

.staff-header__icons .tp-generated-icon:nth-child(1) {
  right: 22px;
  bottom: 4px;
  transform: rotate(7deg);
}

.staff-header__icons .tp-generated-icon:nth-child(2) {
  right: 0;
  top: 0;
  transform: rotate(-8deg);
}

.staff-header__icons .tp-generated-icon:nth-child(3) {
  left: 8px;
  top: 20px;
  transform: rotate(10deg);
}

.staff-header > div:first-child,
.staff-header > span {
  position: relative;
  z-index: 2;
}

.staff-header h1 {
  max-width: 270px;
  margin-top: 8px;
  font-size: 30px;
  line-height: 38px;
  letter-spacing: 0;
}

.staff-header span {
  width: fit-content;
  border-radius: 999px;
  padding: 9px 12px;
  color: var(--tp-text-secondary);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--tp-shadow-low);
  font-size: 14px;
  font-weight: 700;
}

.app-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.app-tile {
  min-height: 174px;
  border: 1px solid var(--tp-border);
  border-radius: 22px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #fff;
  box-shadow: var(--tp-shadow-card);
}

.app-tile strong {
  font-size: 17px;
  line-height: 23px;
}

.app-tile p,
.pad-card span {
  color: var(--tp-text-secondary);
  font-size: 14px;
  line-height: 21px;
}

.pad-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 14px;
}

.pad-card h2 {
  margin-top: 3px;
  font-size: 19px;
  line-height: 26px;
}

.pad-card span {
  display: block;
  margin-top: 7px;
}

.guide-list {
  margin-top: 16px;
  display: grid;
  gap: 8px;
}

.guide-list div {
  border-radius: 14px;
  padding: 10px 12px;
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr);
  gap: 8px;
  align-items: center;
  color: var(--tp-text-secondary);
  background: var(--tp-primary-light);
  font-size: 14px;
  line-height: 20px;
}

.guide-list strong {
  color: var(--tp-primary);
}

.pad-actions {
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

@media (min-width: 768px) {
  .app-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
