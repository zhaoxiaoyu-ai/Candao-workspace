<script setup lang="ts">
import { useRouter } from 'vue-router'
import TpButton from '@/components/ui/TpButton.vue'
import TpCard from '@/components/ui/TpCard.vue'
import TpGeneratedIcon from '@/components/ui/TpGeneratedIcon.vue'
import { useCartStore } from '@/stores/cart'
import { useOrderStore } from '@/stores/order'

const router = useRouter()
const cart = useCartStore()
const order = useOrderStore()
</script>

<template>
  <main class="tp-page success-page">
    <div class="tp-shell tp-stack">
      <section class="success-hero">
        <div class="success-mark">✓</div>
        <h1>付款成功</h1>
        <strong class="tp-number">HK$ 222.1</strong>
        <p>支付方式：{{ order.paymentMethod || '現金' }}</p>
        <span>訂單號：TP-20260428-001</span>
      </section>

      <TpCard dense>
        <div class="info-row">
          <span><TpGeneratedIcon name="home" :size="24" /> 桌台</span>
          <strong>🍽 台 {{ cart.tableNo }}</strong>
        </div>
        <div class="info-row">
          <span><TpGeneratedIcon name="customer" :size="24" /> 人數</span>
          <strong>👤 客 {{ cart.guests }}</strong>
        </div>
        <div class="info-row">
          <span><TpGeneratedIcon name="receipt" :size="24" /> 商品</span>
          <strong>共 3 件商品</strong>
        </div>
        <div class="info-row total">
          <span>合計</span>
          <strong class="tp-number">HK$ 222.1</strong>
        </div>
      </TpCard>

      <TpCard dense>
        <p class="tp-eyebrow">自動返回</p>
        <h2>10秒後自動返回桌台...</h2>
        <p class="success-copy">原型支持取消倒計時；此處保留入口，後續接入桌台頁完整狀態。</p>
        <div class="success-actions">
          <TpButton variant="secondary">取消</TpButton>
          <TpButton @click="router.push('/staff/apps')">返回桌台</TpButton>
        </div>
      </TpCard>
    </div>
  </main>
</template>

<style scoped>
.success-page {
  padding-bottom: calc(32px + env(safe-area-inset-bottom));
}

.success-hero {
  min-height: 300px;
  border-radius: 30px;
  padding: 28px 22px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  text-align: center;
  color: #fff;
  background:
    radial-gradient(circle at 78% 18%, rgba(255, 255, 255, 0.2), transparent 24%),
    linear-gradient(135deg, #28a957, #32b963);
  box-shadow: var(--tp-shadow-card);
}

.success-mark {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--tp-success);
  background: #fff;
  font-size: 42px;
  font-weight: 900;
}

.success-hero h1 {
  font-size: 28px;
  line-height: 36px;
}

.success-hero strong {
  font-size: 36px;
  line-height: 42px;
}

.success-hero p,
.success-hero span {
  color: rgba(255, 255, 255, 0.82);
  font-size: 15px;
}

.info-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.info-row + .info-row {
  border-top: 1px solid var(--tp-hairline);
  margin-top: 12px;
  padding-top: 12px;
}

.info-row span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--tp-text-secondary);
}

.info-row.total strong {
  color: var(--tp-primary-active);
  font-size: 22px;
}

.success-copy {
  margin-top: 8px;
  color: var(--tp-text-secondary);
  font-size: 14px;
  line-height: 21px;
}

.success-actions {
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
</style>
