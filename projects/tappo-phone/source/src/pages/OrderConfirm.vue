<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TpButton from '@/components/ui/TpButton.vue'
import TpCard from '@/components/ui/TpCard.vue'
import TpGeneratedIcon from '@/components/ui/TpGeneratedIcon.vue'
import TpTopBar from '@/components/ui/TpTopBar.vue'
import { callBridge } from '@/bridge'
import { useCartStore } from '@/stores/cart'
import { useOrderStore } from '@/stores/order'
import type { GeneratedIconName } from '@/components/ui/TpGeneratedIcon.vue'

const router = useRouter()
const cart = useCartStore()
const order = useOrderStore()
const selectedMethod = ref('')
const paying = ref(false)
const errorText = ref('')

const checkoutItems = [
  { name: '鮮杏汁豬肺湯（廚房）', note: '', price: '$100', cancelled: false },
  { name: '熱奶茶', note: '多冰 + 正常糖 + 珍珠', price: '$10', cancelled: false },
  {
    name: '兩人套餐',
    note: '附注：叉燒、切雞 x2；菠菜、猪肉松、四季豆 x4；健康菜籽油 x2；熱香片茶 x2；年輕牛奶',
    price: '$99',
    cancelled: false,
  },
  { name: '可樂', note: '', price: '$2', cancelled: true },
]

const amountRows = [
  { label: '小計', value: '$211' },
  { label: '包裝費', value: '$0' },
  { label: '稅(10%)', value: '$21.1' },
  { label: '折扣', value: '-$10.00' },
]

const paymentMethods: Array<{
  key: string
  label: string
  description: string
  icon: GeneratedIconName
  disabled?: boolean
}> = [
  { key: 'KPay（掃碼）', label: 'KPay 掃碼', description: '可手動輸入付款碼並模擬完成付款', icon: 'payment' },
  { key: 'KPay（卡機）', label: 'KPay 卡機', description: '已配置，請至 Kpay 卡機上完成刷卡', icon: 'asset' },
  { key: '現金支付', label: '現金支付', description: '現金支付請到 Tappo Pad 進行', icon: 'receipt', disabled: true },
]

function choosePayment(method: (typeof paymentMethods)[number]) {
  if (method.disabled) {
    errorText.value = '現金支付請到 Tappo Pad 進行'
    return
  }
  selectedMethod.value = method.key
  errorText.value = ''
}

async function submitPayment() {
  if (paying.value) return
  if (!selectedMethod.value) {
    errorText.value = '請選擇支付方式'
    return
  }

  paying.value = true
  errorText.value = ''

  await callBridge({
    type: 'pay',
    orderId: order.orderId,
    amount: 222.1,
    method: selectedMethod.value,
  })

  order.setPaid(selectedMethod.value)
  await router.push('/order-info')
  paying.value = false
}
</script>

<template>
  <main class="tp-page confirm-page">
    <div class="tp-shell tp-stack">
      <TpTopBar title="訂單確認" :subtitle="`堂食 · 🍽 台 ${cart.tableNo} · 👤 客 ${cart.guests}`" back back-to="/ordering" />

      <TpCard dense>
        <div class="confirm-header">
          <div>
            <p class="tp-eyebrow">📋 商品費用</p>
            <h1>堂食</h1>
          </div>
          <span>收起 ▲</span>
        </div>
        <div class="confirm-lines">
          <article v-for="item in checkoutItems" :key="item.name" :class="{ cancelled: item.cancelled }">
            <div>
              <strong>{{ item.name }} <em v-if="item.cancelled">已取消</em></strong>
              <small v-if="item.note">{{ item.note }}</small>
            </div>
            <span class="tp-number">{{ item.price }}</span>
          </article>
        </div>
      </TpCard>

      <TpCard dense>
        <h2 class="block-title">費用合計</h2>
        <div class="amount-list">
          <div v-for="row in amountRows" :key="row.label">
            <span>{{ row.label }}</span>
            <strong class="tp-number">{{ row.value }}</strong>
          </div>
          <div class="amount-list__total">
            <span>合計</span>
            <strong class="tp-number">$222.1</strong>
          </div>
        </div>
      </TpCard>

      <TpCard dense>
        <h2 class="block-title">選擇支付方式</h2>
        <div class="payment-list">
          <button
            v-for="method in paymentMethods"
            :key="method.key"
            :class="{ active: method.key === selectedMethod, disabled: method.disabled }"
            @click="choosePayment(method)"
          >
            <TpGeneratedIcon :name="method.icon" :size="44" framed />
            <div>
              <strong>{{ method.label }}</strong>
              <small>{{ method.description }}</small>
            </div>
          </button>
        </div>
        <p class="scan-hint">KPay 掃碼：可輸入付款碼並模擬完成付款；KPay 卡機：處理中時提示至卡機完成刷卡。</p>
        <p v-if="errorText" class="pay-error">{{ errorText }}</p>
      </TpCard>
    </div>

    <footer class="confirm-footer">
      <div>
        <span>HK$</span>
        <strong class="tp-number">222.1</strong>
      </div>
      <TpButton :disabled="paying" @click="submitPayment">
        {{ paying ? '處理中...' : '付款' }}
      </TpButton>
    </footer>
  </main>
</template>

<style scoped>
.confirm-page {
  padding-bottom: calc(96px + env(safe-area-inset-bottom));
}

.confirm-header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.confirm-header h1 {
  margin-top: 3px;
  font-size: 22px;
  line-height: 29px;
}

.confirm-header span {
  height: 30px;
  border-radius: 999px;
  padding: 0 10px;
  display: inline-flex;
  align-items: center;
  color: var(--tp-primary);
  background: var(--tp-primary-light);
  font-size: 13px;
}

.confirm-lines,
.payment-list,
.amount-list {
  margin-top: 14px;
  display: grid;
  gap: 10px;
}

.confirm-lines article,
.amount-list div {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.confirm-lines article.cancelled {
  opacity: 0.52;
}

.confirm-lines strong,
.confirm-lines small {
  display: block;
}

.confirm-lines strong {
  font-size: 15px;
  line-height: 20px;
}

.confirm-lines strong em {
  border-radius: 999px;
  margin-left: 6px;
  padding: 2px 6px;
  color: var(--tp-error);
  background: rgba(255, 64, 64, 0.1);
  font-size: 12px;
  font-style: normal;
}

.confirm-lines small,
.amount-list span {
  color: var(--tp-text-tertiary);
  font-size: 13px;
  line-height: 18px;
}

.block-title {
  font-size: 18px;
  line-height: 24px;
}

.payment-list button {
  border: 1px solid var(--tp-hairline);
  border-radius: 16px;
  padding: 12px;
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 10px;
  text-align: left;
  background: #fff;
}

.payment-list button.active {
  border-color: var(--tp-primary);
  background: var(--tp-primary-light);
}

.payment-list button.disabled {
  opacity: 0.52;
}

.payment-list strong,
.payment-list small {
  display: block;
}

.payment-list strong {
  font-size: 15px;
  line-height: 20px;
}

.payment-list small {
  margin-top: 3px;
  color: var(--tp-text-tertiary);
  font-size: 12px;
  line-height: 17px;
}

.scan-hint {
  margin-top: 12px;
  color: var(--tp-text-secondary);
  font-size: 13px;
  line-height: 19px;
}

.amount-list__total {
  border-top: 1px solid var(--tp-hairline);
  padding-top: 10px;
}

.amount-list__total strong {
  color: var(--tp-primary-active);
  font-size: 22px;
}

.pay-error {
  margin-top: 12px;
  color: var(--tp-error);
  font-size: 13px;
  line-height: 18px;
}

.confirm-footer {
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 35;
  width: min(100%, 440px);
  transform: translateX(-50%);
  padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
  display: grid;
  grid-template-columns: minmax(0, 1fr) 134px;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: var(--tp-shadow-bottom);
}

.confirm-footer span,
.confirm-footer strong {
  display: block;
}

.confirm-footer span {
  color: var(--tp-text-tertiary);
  font-size: 13px;
}

.confirm-footer strong {
  color: var(--tp-primary-active);
  font-size: 24px;
}
</style>
