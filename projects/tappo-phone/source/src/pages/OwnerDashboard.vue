<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TpLineIcon from '@/components/ui/TpLineIcon.vue'
import logoUrl from '@/assets/brand/tappo-logo.svg'
import type { LineIconName } from '@/components/ui/TpLineIcon.vue'

type Tone = 'orange' | 'blue' | 'green'

type SceneRow = {
  label: string
  orders: string
  receivable: string
  received: string
  icon: LineIconName
  tone: Tone
}

type MethodRow = {
  label: string
  orders: string
  receivable: string
  received: string
  percent: number
  icon: LineIconName
  tone: Tone
}

const sceneRows: SceneRow[] = [
  { label: '堂食', orders: '28單', receivable: 'HK$ 3,100', received: 'HK$ 2,800', icon: 'dineIn', tone: 'orange' },
  { label: '自取', orders: '12單', receivable: 'HK$ 850', received: 'HK$ 750', icon: 'takeaway', tone: 'blue' },
  { label: '外送', orders: '8單', receivable: 'HK$ 700', received: 'HK$ 650', icon: 'delivery', tone: 'green' },
]

const methodRows: MethodRow[] = [
  { label: '顧客掃碼', orders: '10單', receivable: 'HK$ 2,050', received: 'HK$ 1,850', percent: 45, icon: 'qr', tone: 'orange' },
  { label: '服務員代點', orders: '10單', receivable: 'HK$ 2,100', received: 'HK$ 1,900', percent: 45, icon: 'waiter', tone: 'blue' },
  { label: '外送平台', orders: '3單', receivable: 'HK$ 500', received: 'HK$ 450', percent: 10, icon: 'platform', tone: 'green' },
]
</script>

<template>
  <main class="tp-app-page owner-home">
    <header class="app-header">
      <div class="app-header__inner">
        <img class="app-header__logo" :src="logoUrl" alt="Tappo" />
        <button class="store-switch" type="button">
          <span>尖沙咀店</span>
          <i aria-hidden="true" />
        </button>
        <button class="icon-button" type="button" aria-label="通知">
          <TpLineIcon name="bell" :size="18" />
        </button>
      </div>
    </header>

    <div class="owner-home__content">
      <section class="balance-panel">
        <div class="balance-panel__title">
          <span class="icon-tile icon-tile--orange">
            <TpLineIcon name="wallet" :size="20" />
          </span>
          <h1>賬戶餘額</h1>
        </div>
        <div class="balance-panel__main">
          <div class="balance-value">
            <strong class="tp-number">1,250</strong>
            <span>pts</span>
          </div>
          <RouterLink class="recharge-button" to="/transactions">
            <TpLineIcon name="plus" :size="12" />
            <span>充值</span>
          </RouterLink>
        </div>
      </section>

      <section class="summary-card">
        <div class="summary-card__top">
          <div>
            <p>2026/04/27 銷售額</p>
            <span>應收金額</span>
            <strong class="tp-number">HK$ 3,280</strong>
          </div>
          <div class="growth-pill">
            <b>
              <TpLineIcon name="trendUp" :size="14" />
              +12.5%
            </b>
            <span>較昨日同期</span>
          </div>
        </div>

        <div class="summary-card__metrics">
          <div>
            <span class="metric-dot metric-dot--orange" />
            <p>訂單數</p>
            <strong class="tp-number">48</strong>
          </div>
          <div>
            <span class="metric-dot metric-dot--blue" />
            <p>實收金額</p>
            <strong class="tp-number">HK$ 3,150</strong>
          </div>
        </div>
      </section>

      <section class="app-section">
        <div class="section-heading">
          <h2>消費場景明細</h2>
          <span>3</span>
        </div>
        <div class="simple-card scene-card">
          <div v-for="row in sceneRows" :key="row.label" class="scene-row">
            <div class="scene-row__left">
              <span class="icon-tile" :class="`icon-tile--${row.tone}`">
                <TpLineIcon :name="row.icon" :size="18" />
              </span>
              <div>
                <strong>{{ row.label }}</strong>
                <small>{{ row.orders }}</small>
              </div>
            </div>
            <div class="scene-row__amount">
              <span>應收 {{ row.receivable }}</span>
              <small>實收 {{ row.received }}</small>
            </div>
          </div>
        </div>
      </section>

      <section class="method-card">
        <div class="method-card__heading">
          <TpLineIcon name="orderMethod" :size="20" />
          <h2>點餐方式</h2>
        </div>

        <div class="gauge" aria-label="點餐方式佔比">
          <div class="gauge__arc" />
          <div class="gauge__inner" />
        </div>

        <div class="method-legend">
          <div v-for="row in methodRows" :key="row.label">
            <span :class="`legend-chip legend-chip--${row.tone}`" />
            <strong>{{ row.label }}</strong>
            <b class="tp-number">{{ row.percent }}%</b>
          </div>
        </div>

        <div class="method-list">
          <div v-for="row in methodRows" :key="row.label" class="method-row">
            <div class="method-row__left">
              <span :class="`method-accent method-accent--${row.tone}`" />
              <div>
                <strong>{{ row.label }}</strong>
                <small>{{ row.orders }}</small>
              </div>
            </div>
            <div class="method-row__amount">
              <span>應收 {{ row.receivable }}</span>
              <small>實收 {{ row.received }}</small>
            </div>
          </div>
        </div>
      </section>

      <section class="booking-strip">
        <span>今日訂座</span>
        <strong class="tp-number">12單</strong>
      </section>
    </div>

    <button class="service-fab" type="button" aria-label="智能客服">
      <TpLineIcon name="apps" :size="24" />
    </button>
  </main>
</template>

<style scoped>
.tp-app-page {
  position: relative;
  min-height: 100dvh;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  background: #f7f7f8;
  color: #161616;
  padding-bottom: calc(92px + env(safe-area-inset-bottom));
  overflow-x: hidden;
}

.app-header {
  height: 134px;
  padding-top: 54px;
  background: #fff;
}

.app-header__inner {
  height: 80px;
  padding: 16px 20px;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) 40px;
  align-items: center;
  gap: 8px;
}

.app-header__logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: block;
  object-fit: contain;
  background: #fff;
}

.store-switch {
  min-width: 0;
  height: 40px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #161616;
  background: transparent;
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
}

.store-switch span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.store-switch i {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #777;
  transform: translateY(3px);
}

.icon-button {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  color: #1f1f1f;
  background: #fff;
}

.owner-home__content {
  display: grid;
  gap: 24px;
  padding: 0 16px;
}

.balance-panel {
  position: relative;
  min-height: 152px;
  margin: 0 4px;
  border-radius: 24px;
  overflow: hidden;
  padding: 24px;
  background:
    radial-gradient(circle at 92% -14%, rgba(255, 177, 107, 0.6), transparent 42%),
    radial-gradient(circle at 0 90%, rgba(255, 218, 173, 0.7), transparent 38%),
    linear-gradient(135deg, #ff934f 0%, #ff7f32 100%);
  box-shadow: 0 14px 30px rgba(255, 128, 50, 0.22);
}

.balance-panel__title,
.balance-panel__main {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.balance-panel__title h1 {
  flex: 1;
  color: #fff;
  font-size: 17px;
  line-height: 24px;
  font-weight: 750;
}

.balance-panel__main {
  margin-top: 24px;
}

.balance-value {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  color: #fff;
}

.balance-value strong {
  font-size: 40px;
  line-height: 40px;
  font-weight: 800;
}

.balance-value span {
  padding-bottom: 3px;
  font-size: 14px;
  line-height: 20px;
  opacity: 0.86;
}

.recharge-button {
  width: 75px;
  height: 40px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #ff812f;
  background: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 750;
  box-shadow: 0 8px 20px rgba(163, 63, 0, 0.18);
}

.summary-card,
.simple-card,
.method-card,
.booking-strip {
  border: 1px solid rgba(20, 20, 20, 0.04);
  border-radius: 22px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(30, 30, 30, 0.06);
}

.summary-card {
  min-height: 222px;
  padding: 21px;
}

.summary-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.summary-card__top p,
.summary-card__top span {
  color: #686868;
  font-size: 15px;
  line-height: 22px;
}

.summary-card__top strong {
  display: block;
  margin-top: 4px;
  color: #161616;
  font-size: 30px;
  line-height: 40px;
  font-weight: 800;
}

.growth-pill {
  display: grid;
  justify-items: end;
  gap: 4px;
}

.growth-pill b {
  height: 28px;
  border-radius: 999px;
  padding: 0 10px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #20a66a;
  background: #ecfbf3;
  font-size: 14px;
  line-height: 20px;
}

.growth-pill span {
  font-size: 12px;
  line-height: 16px;
}

.summary-card__metrics {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.summary-card__metrics div {
  min-height: 76px;
  border-radius: 14px;
  padding: 12px;
  background: #f8f8f8;
}

.summary-card__metrics p {
  display: inline-block;
  margin-left: 6px;
  color: #727272;
  font-size: 12px;
  line-height: 16px;
}

.summary-card__metrics strong {
  display: block;
  margin-top: 6px;
  padding-left: 14px;
  color: #191919;
  font-size: 24px;
  line-height: 32px;
  font-weight: 800;
}

.metric-dot,
.legend-chip {
  display: inline-block;
  flex: 0 0 auto;
}

.metric-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
}

.app-section {
  display: grid;
  gap: 12px;
}

.section-heading {
  height: 26px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-heading h2,
.method-card__heading h2 {
  color: #191919;
  font-size: 19px;
  line-height: 26px;
  font-weight: 760;
}

.section-heading span {
  min-width: 23px;
  height: 20px;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  color: #ff812f;
  background: #fff2e8;
  font-size: 12px;
  line-height: 16px;
  font-weight: 750;
}

.scene-card {
  min-height: 216px;
  padding: 21px;
  display: grid;
  gap: 24px;
}

.scene-row,
.method-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.scene-row__left,
.method-row__left {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.scene-row__left div,
.method-row__left div {
  min-width: 0;
  display: grid;
  gap: 1px;
}

.scene-row strong,
.method-row strong {
  color: #191919;
  font-size: 16px;
  line-height: 24px;
  font-weight: 750;
  white-space: nowrap;
}

.scene-row small,
.method-row small {
  color: #8a8a8a;
  font-size: 13px;
  line-height: 18px;
}

.scene-row__amount,
.method-row__amount {
  flex: 0 0 auto;
  min-width: 92px;
  display: grid;
  justify-items: end;
  gap: 4px;
  font-size: 13px;
  line-height: 20px;
}

.scene-row__amount span,
.method-row__amount span {
  color: #4a4a4a;
}

.scene-row__amount small,
.method-row__amount small {
  color: #8a8a8a;
}

.icon-tile {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  color: var(--tone);
  background: var(--tone-bg);
}

.icon-tile--orange,
.metric-dot--orange,
.legend-chip--orange,
.method-accent--orange {
  --tone: #ff812f;
  --tone-bg: #fff1e5;
  background: #ff812f;
}

.icon-tile--orange {
  background: #fff1e5;
}

.icon-tile--blue,
.metric-dot--blue,
.legend-chip--blue,
.method-accent--blue {
  --tone: #3b82f6;
  --tone-bg: #eef5ff;
  background: #3b82f6;
}

.icon-tile--blue {
  background: #eef5ff;
}

.icon-tile--green,
.metric-dot--green,
.legend-chip--green,
.method-accent--green {
  --tone: #35b779;
  --tone-bg: #edf9f3;
  background: #35b779;
}

.icon-tile--green {
  background: #edf9f3;
}

.method-card {
  min-height: 502px;
  padding: 25px;
}

.method-card__heading {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ff812f;
}

.gauge {
  position: relative;
  width: 200px;
  height: 116px;
  margin: 24px auto 0;
  overflow: hidden;
}

.gauge__arc {
  width: 200px;
  height: 200px;
  border-radius: 999px;
  background: conic-gradient(from 270deg, #ff812f 0 45%, #3b82f6 45% 90%, #35b779 90% 100%);
  transform: rotate(0deg);
}

.gauge__inner {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 160px;
  height: 100px;
  border-radius: 100px 100px 0 0;
  background: #fff;
  box-shadow: 0 -5px 18px rgba(20, 20, 20, 0.04);
}

.method-legend {
  margin-top: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  text-align: center;
}

.method-legend div {
  display: grid;
  justify-items: center;
  gap: 4px;
}

.legend-chip {
  width: 9px;
  height: 10px;
  border-radius: 999px;
}

.method-legend strong {
  color: #484848;
  font-size: 14px;
  line-height: 20px;
  font-weight: 650;
}

.method-legend b {
  color: #191919;
  font-size: 16px;
  line-height: 24px;
}

.method-list {
  margin-top: 24px;
  display: grid;
  gap: 8px;
}

.method-row {
  min-height: 62px;
  border: 1px solid rgba(20, 20, 20, 0.06);
  border-radius: 14px;
  padding: 9px 13px;
  background: rgba(255, 255, 255, 0.7);
}

.method-accent {
  width: 6px;
  height: 40px;
  border-radius: 999px;
}

.booking-strip {
  height: 58px;
  padding: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #191919;
  font-size: 16px;
  line-height: 24px;
}

.booking-strip strong {
  font-size: 16px;
  line-height: 24px;
}

.service-fab {
  position: absolute;
  right: -10px;
  top: 1230px;
  z-index: 25;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: inline-grid;
  place-items: center;
  color: #fff;
  background: #ff812f;
  box-shadow: 0 12px 26px rgba(255, 129, 47, 0.32);
}

@media (max-width: 389px) {
  .tp-app-page {
    max-width: 100%;
  }

  .service-fab {
    right: 8px;
  }
}
</style>
