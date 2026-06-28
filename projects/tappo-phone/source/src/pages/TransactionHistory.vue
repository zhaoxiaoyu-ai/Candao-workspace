<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TpLineIcon from '@/components/ui/TpLineIcon.vue'
import type { LineIconName } from '@/components/ui/TpLineIcon.vue'

type TransactionTone = 'success' | 'pending'

type Transaction = {
  id: string
  title: string
  time: string
  amount: string
  balance: string
  detail: string
  status: string
  icon: LineIconName
  tone: TransactionTone
}

const transactions: Transaction[] = [
  {
    id: 'topup-1',
    title: '充值',
    time: '2025-11-18 20:26:24',
    amount: '+5,100',
    balance: '餘額 17,596（含贈100）',
    detail: '支付金額: HK$ 49.9 (Alipay)',
    status: '支付成功',
    icon: 'success',
    tone: 'success',
  },
  {
    id: 'debit-1',
    title: '扣費 (訂單業務 - 堂食)',
    time: '2025-11-18 20:26:20',
    amount: '-2',
    balance: '餘額 12,496',
    detail: '信義會館店',
    status: '審核成功',
    icon: 'debit',
    tone: 'pending',
  },
  {
    id: 'topup-2',
    title: '充值',
    time: '2025-11-18 20:26:24',
    amount: '+5,100',
    balance: '餘額 17,596（含贈100）',
    detail: '支付金額: HK$ 49.9 (Alipay)',
    status: '支付成功',
    icon: 'success',
    tone: 'success',
  },
  {
    id: 'topup-3',
    title: '充值',
    time: '2025-11-18 20:26:24',
    amount: '+5,100',
    balance: '餘額 17,596（含贈100）',
    detail: '支付金額: HK$ 49.9 (Alipay)',
    status: '支付成功',
    icon: 'success',
    tone: 'success',
  },
  {
    id: 'debit-2',
    title: '扣費 (訂單業務 - 堂食)',
    time: '2025-11-18 20:26:20',
    amount: '-2',
    balance: '餘額 12,496',
    detail: '信義會館店',
    status: '審核成功',
    icon: 'debit',
    tone: 'pending',
  },
]
</script>

<template>
  <main class="tp-app-page transactions-page">
    <header class="record-header">
      <RouterLink to="/" class="record-header__back" aria-label="返回主頁">
        <TpLineIcon name="back" :size="16" />
      </RouterLink>
      <h1>交易記錄</h1>
    </header>

    <section class="transaction-list" aria-label="交易記錄列表">
      <article v-for="item in transactions" :key="item.id" class="transaction-card">
        <div class="transaction-card__top">
          <div class="transaction-card__identity">
            <span class="transaction-icon" :class="`transaction-icon--${item.tone}`">
              <TpLineIcon :name="item.icon" :size="20" />
            </span>
            <div>
              <h2>{{ item.title }}</h2>
              <time>{{ item.time }}</time>
            </div>
          </div>

          <div class="transaction-card__amount">
            <strong class="tp-number">{{ item.amount }}<span>pts</span></strong>
            <small>{{ item.balance }}</small>
          </div>
        </div>

        <div class="transaction-card__divider" />

        <div class="transaction-card__bottom">
          <div class="transaction-detail">
            <TpLineIcon :name="item.tone === 'success' ? 'card' : 'store'" :size="14" />
            <span>{{ item.detail }}</span>
          </div>
          <RouterLink class="status-pill" to="/">
            <TpLineIcon name="success" :size="15" />
            <span>{{ item.status }}</span>
            <TpLineIcon name="chevron" :size="13" />
          </RouterLink>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.tp-app-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  background: #f7f7f8;
  color: #161616;
  padding-bottom: calc(34px + env(safe-area-inset-bottom));
  overflow-x: hidden;
}

.record-header {
  height: 114px;
  padding: 54px 20px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
}

.record-header__back {
  width: 24px;
  height: 28px;
  display: inline-grid;
  place-items: center;
  color: #252525;
}

.record-header h1 {
  color: #161616;
  font-size: 20px;
  line-height: 28px;
  font-weight: 760;
}

.transaction-list {
  padding: 16px;
  display: grid;
  gap: 16px;
}

.transaction-card {
  min-height: 149px;
  border-radius: 18px;
  padding: 25px 17px 24px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(30, 30, 30, 0.06);
}

.transaction-card__top,
.transaction-card__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.transaction-card__identity {
  min-width: 0;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  gap: 12px;
}

.transaction-card__identity div {
  min-width: 0;
  display: grid;
}

.transaction-card__identity h2 {
  max-width: 168px;
  color: #191919;
  font-size: 16px;
  line-height: 24px;
  font-weight: 750;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.transaction-card__identity time,
.transaction-card__amount small {
  color: #888;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.transaction-icon {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  flex: 0 0 auto;
}

.transaction-icon--success {
  color: #27a86b;
  background: #ecfbf3;
  box-shadow: 0 6px 16px rgba(39, 168, 107, 0.14);
}

.transaction-icon--pending {
  color: #ff812f;
  background: #fff1e5;
  box-shadow: 0 6px 16px rgba(255, 129, 47, 0.14);
}

.transaction-card__amount {
  flex: 0 1 128px;
  min-width: 0;
  display: grid;
  justify-items: end;
}

.transaction-card__amount strong {
  max-width: 128px;
  color: #191919;
  font-size: 18px;
  line-height: 24px;
  font-weight: 800;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.transaction-card__amount strong span {
  margin-left: 2px;
  color: #595959;
  font-size: 13px;
  line-height: 24px;
  font-weight: 650;
}

.transaction-card__divider {
  height: 1px;
  margin: 16px 0;
  background: #f0f0f0;
}

.transaction-detail {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #6a6a6a;
  font-size: 14px;
  line-height: 22px;
}

.transaction-detail span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.status-pill {
  flex: 0 0 auto;
  min-width: 88px;
  height: 24px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  color: #27a86b;
  font-size: 13px;
  line-height: 22px;
  font-weight: 650;
}

@media (max-width: 360px) {
  .transaction-card__top,
  .transaction-card__bottom {
    align-items: flex-start;
    flex-direction: column;
  }

  .transaction-card__amount {
    justify-items: start;
    padding-left: 52px;
  }

  .status-pill {
    justify-content: flex-start;
  }
}
</style>
