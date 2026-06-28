<script setup lang="ts">
import TpCard from '@/components/ui/TpCard.vue'
import TpGeneratedIcon from '@/components/ui/TpGeneratedIcon.vue'
import TpTopBar from '@/components/ui/TpTopBar.vue'
import settingsHero from '@/assets/generated/tappo-settings-hero.png'
import type { GeneratedIconName } from '@/components/ui/TpGeneratedIcon.vue'

type SettingItem = {
  title: string
  caption: string
  icon: GeneratedIconName
  tone: 'blue' | 'orange' | 'green' | 'violet' | 'cyan' | 'rose'
}

const hardwareItems: SettingItem[] = [
  { title: '打印機管理', caption: '票據、標籤與廚房打印', icon: 'receipt', tone: 'blue' },
  { title: '錢箱', caption: '開箱權限與現金班結', icon: 'payment', tone: 'orange' },
]

const systemItems: SettingItem[] = [
  { title: '業務場景', caption: '堂食、自取、外送設定', icon: 'pos', tone: 'orange' },
  { title: '支付設置', caption: '卡、QR、現金與錢包', icon: 'payment', tone: 'green' },
  { title: '點餐設置', caption: '菜單、時段與估清規則', icon: 'menu', tone: 'cyan' },
  { title: '應用設置', caption: '語言、通知與員工權限', icon: 'settings', tone: 'violet' },
]
</script>

<template>
  <main class="tp-page settings-page">
    <div class="tp-shell tp-stack">
      <TpTopBar title="Fangcun Store" subtitle="Business Date 2025-05-29 · Breakfast" />

      <section class="settings-hero">
        <div class="settings-hero__copy">
          <p class="tp-eyebrow">硬體與外設</p>
          <h1>讓門店設備保持在線</h1>
          <span>2025-05-30 11:46</span>
        </div>
        <img :src="settingsHero" alt="Tappo POS 設備插畫" />
      </section>

      <TpCard class="balance-card">
        <div>
          <p class="tp-eyebrow">主賬戶</p>
          <strong class="tp-number">1,200 <small>Pts</small></strong>
          <span>充值有禮，多充多送</span>
        </div>
        <button type="button">餘額充值</button>
      </TpCard>

      <section class="settings-section">
        <div class="settings-section__title">
          <h2>硬體與外設</h2>
        </div>
        <div class="settings-list settings-list--two">
          <button v-for="item in hardwareItems" :key="item.title" type="button" class="setting-tile">
            <span :class="`setting-tile__icon setting-tile__icon--${item.tone}`">
              <TpGeneratedIcon :name="item.icon" :size="36" />
            </span>
            <span>
              <strong>{{ item.title }}</strong>
              <em>{{ item.caption }}</em>
            </span>
            <i aria-hidden="true">›</i>
          </button>
        </div>
      </section>

      <section class="settings-section">
        <div class="settings-section__title">
          <h2>系統配置</h2>
        </div>
        <div class="settings-list">
          <button v-for="item in systemItems" :key="item.title" type="button" class="setting-tile">
            <span :class="`setting-tile__icon setting-tile__icon--${item.tone}`">
              <TpGeneratedIcon :name="item.icon" :size="36" />
            </span>
            <span>
              <strong>{{ item.title }}</strong>
              <em>{{ item.caption }}</em>
            </span>
            <i aria-hidden="true">›</i>
          </button>
        </div>
      </section>

      <section class="support-grid">
        <TpCard class="task-card">
          <div class="task-card__head">
            <TpGeneratedIcon name="schedule" :size="42" framed />
            <div>
              <h2>新手引導任務</h2>
              <p>完成任務熟悉系統，領取首月優惠券。</p>
            </div>
            <strong>2<small>/5</small></strong>
          </div>
          <div class="progress-rail" aria-hidden="true"><span /></div>
          <button type="button">繼續任務</button>
        </TpCard>

        <TpCard class="feedback-card">
          <div>
            <TpGeneratedIcon name="customer" :size="42" framed />
            <h2>我們想聽聽您的聲音</h2>
            <p>遇到問題或有新功能建議？您的反饋是我們進步的動力。</p>
          </div>
          <div class="feedback-card__actions">
            <button type="button">建議反饋</button>
            <button type="button">故障上報</button>
          </div>
        </TpCard>
      </section>

      <TpCard class="session-card">
        <button type="button">
          <TpGeneratedIcon name="home" :size="32" framed />
          <span>Restart App</span>
        </button>
        <button type="button">
          <TpGeneratedIcon name="settings" :size="32" framed />
          <span>Logout</span>
        </button>
      </TpCard>
    </div>
  </main>
</template>

<style scoped>
.settings-page {
  overflow-x: hidden;
  background:
    radial-gradient(circle at 18% 0, rgba(102, 166, 255, 0.14), transparent 28%),
    linear-gradient(180deg, rgba(255, 138, 61, 0.08), rgba(255, 251, 246, 0) 250px),
    var(--tp-bg);
}

.settings-page .tp-shell {
  max-width: min(440px, calc(100vw - 32px));
  overflow-x: hidden;
}

.settings-hero {
  position: relative;
  min-height: 188px;
  overflow: hidden;
  border: 1px solid rgba(255, 138, 61, 0.1);
  border-radius: 28px;
  padding: 20px;
  background:
    radial-gradient(circle at 90% 14%, rgba(255, 138, 61, 0.26), transparent 34%),
    linear-gradient(135deg, #fff, #fff5e9 72%);
  box-shadow: var(--tp-shadow-card);
}

.settings-hero__copy {
  position: relative;
  z-index: 2;
  max-width: 220px;
}

.settings-hero h1 {
  margin-top: 8px;
  color: var(--tp-text);
  font-size: 28px;
  line-height: 35px;
}

.settings-hero span {
  display: inline-block;
  margin-top: 14px;
  border-radius: 999px;
  padding: 8px 11px;
  color: var(--tp-text-secondary);
  background: rgba(255, 255, 255, 0.86);
  box-shadow: var(--tp-shadow-low);
  font-size: 13px;
  font-weight: 800;
}

.settings-hero img {
  position: absolute;
  right: -54px;
  bottom: -70px;
  width: 230px;
  height: 230px;
  object-fit: cover;
  object-position: center;
  mix-blend-mode: multiply;
}

.task-card__head,
.feedback-card__actions,
.session-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.balance-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  overflow: hidden;
  background:
    radial-gradient(circle at 92% 24%, rgba(74, 110, 224, 0.22), transparent 32%),
    linear-gradient(135deg, #eef6ff, #ffffff 76%);
}

.balance-card > div {
  min-width: 0;
}

.balance-card strong {
  display: block;
  margin-top: 6px;
  color: #3154b8;
  font-size: 30px;
  line-height: 36px;
}

.balance-card small {
  color: rgba(49, 84, 184, 0.58);
  font-size: 13px;
}

.balance-card span {
  color: rgba(49, 84, 184, 0.62);
  font-size: 14px;
  line-height: 20px;
}

.balance-card button,
.task-card button,
.feedback-card__actions button {
  max-width: 120px;
  border-radius: 16px;
  padding: 12px 15px;
  color: #fff;
  background: #3154b8;
  box-shadow: 0 8px 18px rgba(49, 84, 184, 0.2);
  font-size: 14px;
  font-weight: 800;
  white-space: nowrap;
}

.balance-card button {
  width: fit-content;
  justify-self: start;
  padding-inline: 13px;
}

.settings-section {
  display: grid;
  gap: 10px;
}

.settings-section__title {
  padding: 0 4px;
}

.settings-section__title h2,
.task-card h2,
.feedback-card h2 {
  font-size: 18px;
  line-height: 25px;
}

.settings-list {
  display: grid;
  gap: 10px;
}

.setting-tile {
  min-height: 80px;
  border: 1px solid rgba(9, 5, 2, 0.05);
  border-radius: 20px;
  padding: 14px;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 13px;
  color: var(--tp-text);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--tp-shadow-card);
  text-align: left;
}

.setting-tile__icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: grid;
  place-items: center;
}

.setting-tile__icon--blue {
  background: #eef7ff;
}

.setting-tile__icon--orange {
  background: #fff3e6;
}

.setting-tile__icon--green {
  background: #edfff5;
}

.setting-tile__icon--violet {
  background: #f6f3ff;
}

.setting-tile__icon--cyan {
  background: #ecfbff;
}

.setting-tile strong,
.setting-tile em {
  display: block;
}

.setting-tile strong {
  font-size: 16px;
  line-height: 22px;
}

.setting-tile em {
  margin-top: 3px;
  color: var(--tp-text-tertiary);
  font-size: 13px;
  font-style: normal;
  line-height: 18px;
}

.setting-tile i {
  color: var(--tp-text-tertiary);
  font-size: 24px;
  font-style: normal;
  line-height: 1;
}

.support-grid {
  display: grid;
  gap: 12px;
}

.task-card,
.feedback-card {
  display: grid;
  gap: 16px;
}

.task-card__head {
  align-items: flex-start;
}

.task-card__head p,
.feedback-card p {
  margin-top: 5px;
  color: var(--tp-text-tertiary);
  font-size: 14px;
  line-height: 21px;
}

.task-card__head strong {
  color: var(--tp-text);
  font-family: var(--tp-number-font);
  font-size: 26px;
  line-height: 32px;
}

.task-card__head small {
  color: var(--tp-text-tertiary);
  font-size: 13px;
}

.progress-rail {
  height: 12px;
  overflow: hidden;
  border-radius: 999px;
  background: #fff0df;
  padding: 3px;
}

.progress-rail span {
  width: 40%;
  height: 100%;
  border-radius: inherit;
  display: block;
  background: linear-gradient(90deg, #ff8a3d, #ffbd6f);
}

.task-card button {
  width: 100%;
  background: var(--tp-text);
  box-shadow: 0 8px 18px rgba(9, 5, 2, 0.12);
}

.feedback-card__actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.feedback-card__actions button:first-child {
  background: var(--tp-text);
  box-shadow: 0 8px 18px rgba(9, 5, 2, 0.12);
}

.feedback-card__actions button:last-child {
  background: #dd391d;
  box-shadow: 0 8px 18px rgba(221, 57, 29, 0.16);
}

.session-card {
  justify-content: center;
  padding-block: 18px;
}

.session-card button {
  min-width: 118px;
  border-radius: 18px;
  padding: 12px;
  display: grid;
  place-items: center;
  gap: 7px;
  color: var(--tp-text-secondary);
  background: #fafafa;
}

.session-card span {
  font-size: 14px;
  line-height: 20px;
}

@media (min-width: 768px) {
  .settings-list--two,
  .settings-list,
  .support-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .settings-hero {
    min-height: 230px;
  }

  .settings-hero img {
    right: 8px;
    bottom: -100px;
    width: 330px;
    height: 330px;
  }
}
</style>
