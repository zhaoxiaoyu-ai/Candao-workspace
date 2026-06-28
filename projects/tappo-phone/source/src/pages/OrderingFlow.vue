<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import TpBottomSheet from '@/components/ui/TpBottomSheet.vue'
import TpButton from '@/components/ui/TpButton.vue'
import TpDialog from '@/components/ui/TpDialog.vue'
import TpGeneratedIcon from '@/components/ui/TpGeneratedIcon.vue'
import { callBridge } from '@/bridge'
import { mockApi } from '@/services/mockApi'
import { useCartStore } from '@/stores/cart'
import type { GeneratedIconName } from '@/components/ui/TpGeneratedIcon.vue'
import type { MenuCategory, MenuItem } from '@/types/domain'

const router = useRouter()
const cart = useCartStore()
const categories = ref<MenuCategory[]>([])
const items = ref<MenuItem[]>([])
const activeCategory = ref('')
const query = ref('')
const searchOpen = ref(false)
const showGuestDialog = ref(!cart.guestConfirmed)
const showCart = ref(false)
const showClearDialog = ref(false)
const tempGuest = ref(cart.guests)
const guestError = ref('')
const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const categoryIcons: Record<string, GeneratedIconName> = {
  tea: 'menu',
  combo: 'customer',
  single: 'receipt',
  noodles: 'menu',
  weekday: 'schedule',
  value: 'payment',
  snack: 'inventory',
  dessert: 'payment',
}

onMounted(async () => {
  const menu = await mockApi.getMenu()
  categories.value = menu.categories
  items.value = menu.items
  activeCategory.value = menu.categories[0]?.id ?? ''
})

const visibleItems = computed(() => {
  const keyword = query.value.trim().toLowerCase()
  return items.value.filter((item) => {
    const matchCategory = searchOpen.value || item.categoryId === activeCategory.value
    const matchKeyword = !keyword || `${item.name} ${item.description}`.toLowerCase().includes(keyword)
    return matchCategory && matchKeyword
  })
})

function formatMoney(value: number) {
  return `$${value.toFixed(0)}`
}

function itemQuantity(itemId: string) {
  return cart.lines.find((line) => line.item.id === itemId)?.quantity ?? 0
}

function categoryIcon(categoryId: string) {
  return categoryIcons[categoryId] ?? 'menu'
}

function chooseGuest(value: number) {
  tempGuest.value = value
  guestError.value = ''
}

function selectCategory(categoryId: string) {
  activeCategory.value = categoryId
  searchOpen.value = false
}

function confirmGuest() {
  if (!tempGuest.value) {
    guestError.value = '请选择就餐人数'
    return
  }
  cart.setGuests(tempGuest.value)
  showGuestDialog.value = false
}

function addItem(item: MenuItem) {
  if (item.soldOut) return
  cart.addItem(item)
  void callBridge({ type: 'haptic', style: 'light' })
}

function clearCart() {
  cart.clear()
  showClearDialog.value = false
  showCart.value = false
}

function goConfirm() {
  if (cart.count === 0) return
  void router.push('/order-confirm')
}
</script>

<template>
  <main class="tp-page tp-page--dense order-page">
    <div class="tp-shell order-shell">
      <header class="order-header">
        <button aria-label="Back to staff apps" @click="router.push('/staff/apps')">
          <span class="nav-symbol">‹</span>
        </button>
        <div>
          <strong>示範餐廳</strong>
          <span>🍽 台 {{ cart.tableNo }} · 👤 客 {{ cart.guests }}</span>
        </div>
        <button aria-label="Search menu" @click="searchOpen = !searchOpen">
          <span class="search-symbol" />
        </button>
        <button aria-label="Language">
          <span class="lang-symbol">文</span>
        </button>
      </header>

      <div v-if="searchOpen" class="search-field">
        <span class="search-symbol search-symbol--field" />
        <input v-model="query" placeholder="Search menu item" autofocus />
        <button v-if="query" aria-label="Clear search" @click="query = ''">
          ×
        </button>
      </div>

      <div class="mode-switch">
        <button :class="{ active: cart.mode === 'dine-in' }" @click="cart.setMode('dine-in')">堂食</button>
        <button :class="{ active: cart.mode === 'takeaway' }" @click="cart.setMode('takeaway')">自取</button>
      </div>

      <section class="menu-layout">
        <aside class="category-rail" aria-label="Menu categories">
          <button
            v-for="category in categories"
            :key="category.id"
            :class="{ active: category.id === activeCategory && !searchOpen }"
            @click="selectCategory(category.id)"
          >
            <TpGeneratedIcon :name="categoryIcon(category.id)" :size="30" />
            <em>{{ category.name }}</em>
          </button>
        </aside>

        <div class="menu-list">
          <article v-for="item in visibleItems" :key="item.id" class="menu-item" :class="{ soldout: item.soldOut }">
            <img :src="item.image" :alt="item.name" />
            <div class="menu-item__body">
              <div>
                <span v-if="item.tags[0]" class="item-tag">{{ item.tags[0] }}</span>
                <h2>{{ item.name }}</h2>
                <p>{{ item.description }}</p>
              </div>
              <div class="menu-item__bottom">
                <strong class="tp-number">{{ formatMoney(item.price) }}</strong>
                <div class="quantity-control">
                  <button v-if="itemQuantity(item.id)" aria-label="Remove item" @click="cart.removeItem(item.id)">
                    −
                  </button>
                  <span v-if="itemQuantity(item.id)">{{ itemQuantity(item.id) }}</span>
                  <button :disabled="item.soldOut" aria-label="Add item" @click="addItem(item)">
                    +
                  </button>
                </div>
              </div>
            </div>
            <span v-if="item.soldOut" class="soldout-label">售罄</span>
          </article>

          <div v-if="visibleItems.length === 0" class="empty-search">
            <TpGeneratedIcon name="report" :size="54" framed />
            <strong>未找到餐品</strong>
            <p>请换一个关键词，或切回分类浏览。</p>
          </div>
        </div>
      </section>
    </div>

    <footer class="cart-bar">
      <button class="cart-bar__summary" @click="showCart = true">
        <span>
          <TpGeneratedIcon name="pos" :size="36" />
          <em v-if="cart.count">{{ cart.count }}</em>
        </span>
        <div>
          <strong class="tp-number">{{ formatMoney(cart.total) }}</strong>
          <small>{{ cart.count ? `共 ${cart.count} 件商品` : '購物車是空的' }}</small>
        </div>
      </button>
      <TpButton variant="secondary" :disabled="cart.count === 0">送單</TpButton>
      <TpButton :disabled="cart.count === 0" @click="goConfirm">付款</TpButton>
    </footer>

    <TpDialog :open="showGuestDialog" title="选择就餐人数" @close="showGuestDialog = false">
      <div class="guest-grid">
        <button
          v-for="guest in guestOptions"
          :key="guest"
          :class="{ active: guest === tempGuest }"
          @click="chooseGuest(guest)"
        >
          {{ guest }}
        </button>
      </div>
      <p v-if="guestError" class="form-error">{{ guestError }}</p>
      <TpButton block @click="confirmGuest">确认</TpButton>
    </TpDialog>

    <TpBottomSheet :open="showCart" title="购物车" @close="showCart = false">
      <div class="cart-sheet-list">
        <article v-for="line in cart.lines" :key="line.item.id" class="cart-line">
          <div>
            <strong>{{ line.item.name }}</strong>
            <span class="tp-number">{{ formatMoney(line.item.price) }}</span>
          </div>
          <div class="quantity-control">
            <button aria-label="Remove item" @click="cart.removeItem(line.item.id)">
              −
            </button>
            <span>{{ line.quantity }}</span>
            <button aria-label="Add item" @click="addItem(line.item)">
              +
            </button>
          </div>
        </article>
      </div>
      <button v-if="cart.count" class="clear-button" @click="showClearDialog = true">清空购物车</button>
      <div class="sheet-total">
        <span>订单合计</span>
        <strong class="tp-number">{{ formatMoney(cart.total) }}</strong>
      </div>
      <TpButton block :disabled="cart.count === 0" @click="goConfirm">确认订单</TpButton>
    </TpBottomSheet>

    <TpDialog :open="showClearDialog" title="清空购物车？" @close="showClearDialog = false">
      <p class="dialog-copy">清空后需要重新选择餐品。</p>
      <div class="dialog-actions">
        <TpButton variant="secondary" @click="showClearDialog = false">取消</TpButton>
        <TpButton @click="clearCart">清空</TpButton>
      </div>
    </TpDialog>
  </main>
</template>

<style scoped>
.order-page {
  padding-bottom: calc(104px + env(safe-area-inset-bottom));
}

.order-shell {
  max-width: 440px;
}

.order-header {
  height: 50px;
  display: grid;
  grid-template-columns: 38px 1fr 38px 38px;
  align-items: center;
  gap: 7px;
}

.order-header button,
.search-field button,
.quantity-control button {
  display: inline-grid;
  place-items: center;
}

.nav-symbol {
  font-size: 30px;
  line-height: 28px;
  transform: translateY(-1px);
}

.lang-symbol {
  color: var(--tp-text-secondary);
  font-size: 15px;
  font-weight: 800;
}

.search-symbol {
  position: relative;
  width: 17px;
  height: 17px;
  display: inline-block;
  border: 2px solid currentColor;
  border-radius: 999px;
}

.search-symbol::after {
  content: "";
  position: absolute;
  right: -5px;
  bottom: -4px;
  width: 7px;
  height: 2px;
  border-radius: 999px;
  background: currentColor;
  transform: rotate(45deg);
}

.search-symbol--field {
  width: 15px;
  height: 15px;
}

.order-header button {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  color: var(--tp-text-secondary);
  background: rgba(255, 255, 255, 0.86);
  box-shadow: var(--tp-shadow-low);
}

.order-header strong {
  display: block;
  font-size: 15px;
  line-height: 19px;
}

.order-header span {
  color: var(--tp-primary);
  font-size: 13px;
  line-height: 18px;
}

.search-field {
  height: 42px;
  border: 1px solid var(--tp-hairline);
  border-radius: 14px;
  padding: 0 10px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 7px;
  color: var(--tp-text-tertiary);
  background: #fff;
}

.search-field input {
  min-width: 0;
  border: 0;
  outline: none;
  color: var(--tp-text);
  background: transparent;
}

.mode-switch {
  margin: 10px 0;
  padding: 3px;
  border-radius: 999px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgba(9, 5, 2, 0.05);
}

.mode-switch button {
  height: 34px;
  border-radius: 999px;
  color: var(--tp-text-secondary);
  background: transparent;
  font-weight: 700;
}

.mode-switch button.active {
  color: #fff;
  background: var(--tp-primary);
}

.menu-layout {
  display: grid;
  grid-template-columns: 78px minmax(0, 1fr);
  gap: 10px;
}

.category-rail {
  position: sticky;
  top: 10px;
  align-self: start;
  display: grid;
  gap: 8px;
}

.category-rail button {
  min-height: 64px;
  border-radius: 14px;
  padding: 7px 5px;
  display: grid;
  place-items: center;
  gap: 2px;
  color: var(--tp-text-secondary);
  background: #fff;
  border: 1px solid var(--tp-hairline);
}

.category-rail button.active {
  color: var(--tp-primary);
  border-color: var(--tp-primary-border);
  background: var(--tp-primary-light);
}

.category-rail em {
  max-width: 68px;
  overflow: hidden;
  color: inherit;
  font-size: 12px;
  line-height: 15px;
  font-style: normal;
  text-align: center;
}

.menu-list {
  display: grid;
  gap: 10px;
}

.menu-item {
  position: relative;
  border: 1px solid var(--tp-hairline);
  border-radius: 16px;
  padding: 9px;
  display: grid;
  grid-template-columns: 82px minmax(0, 1fr);
  gap: 10px;
  background: #fff;
}

.menu-item.soldout {
  opacity: 0.62;
}

.menu-item img {
  width: 82px;
  height: 82px;
  border-radius: 13px;
  object-fit: cover;
  background: var(--tp-subtle);
}

.menu-item__body {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
}

.item-tag {
  width: fit-content;
  border-radius: 999px;
  padding: 2px 6px;
  display: block;
  color: var(--tp-urgent);
  font-size: 12px;
  line-height: 16px;
  background: rgba(248, 59, 0, 0.08);
}

.menu-item h2 {
  margin-top: 4px;
  font-size: 14px;
  line-height: 18px;
}

.menu-item p {
  margin-top: 3px;
  color: var(--tp-text-tertiary);
  font-size: 13px;
  line-height: 18px;
}

.menu-item__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.menu-item__bottom strong {
  color: var(--tp-primary-active);
  font-size: 15px;
}

.quantity-control {
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.quantity-control button {
  width: 26px;
  height: 26px;
  border-radius: 999px;
  color: #fff;
  background: var(--tp-primary);
  font-size: 18px;
  font-weight: 800;
  line-height: 1;
}

.quantity-control button:disabled {
  color: var(--tp-text-disabled);
  background: rgba(9, 5, 2, 0.08);
}

.quantity-control span {
  min-width: 14px;
  text-align: center;
  font-family: var(--tp-number-font);
  font-weight: 700;
}

.soldout-label {
  position: absolute;
  top: 12px;
  left: 12px;
  border-radius: 999px;
  padding: 3px 7px;
  color: #fff;
  background: var(--tp-urgent);
  font-size: 12px;
}

.empty-search {
  min-height: 220px;
  border: 1px dashed var(--tp-hairline);
  border-radius: 18px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 8px;
  color: var(--tp-text-tertiary);
  background: #fff;
}

.empty-search strong {
  color: var(--tp-text-secondary);
}

.cart-bar {
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 35;
  width: min(100%, 440px);
  transform: translateX(-50%);
  padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
  display: grid;
  grid-template-columns: minmax(0, 1fr) 78px 78px;
  gap: 10px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--tp-shadow-bottom);
  backdrop-filter: blur(14px);
}

.cart-bar__summary {
  min-width: 0;
  border-radius: 999px;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
  background: var(--tp-primary-light);
}

.cart-bar :deep(.tp-button) {
  min-width: 0;
  padding: 0 10px;
}

.cart-bar__summary > span {
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: #fff;
  background: #fff;
  box-shadow: var(--tp-shadow-low);
}

.cart-bar__summary em {
  position: absolute;
  top: -3px;
  right: -2px;
  min-width: 18px;
  height: 18px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: #fff;
  background: var(--tp-urgent);
  font-size: 12px;
  font-style: normal;
}

.cart-bar__summary strong,
.cart-bar__summary small {
  display: block;
}

.cart-bar__summary strong {
  font-size: 17px;
  line-height: 21px;
}

.cart-bar__summary small {
  overflow: hidden;
  color: var(--tp-text-tertiary);
  font-size: 12px;
  line-height: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.guest-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.guest-grid button {
  height: 50px;
  border-radius: 14px;
  color: var(--tp-text-secondary);
  background: rgba(9, 5, 2, 0.05);
  font-family: var(--tp-number-font);
  font-size: 17px;
  font-weight: 700;
}

.guest-grid button.active {
  color: var(--tp-primary);
  background: var(--tp-primary-light);
  box-shadow: inset 0 0 0 1px var(--tp-primary);
}

.form-error {
  margin: 10px 0;
  color: var(--tp-error);
  font-size: 12px;
  line-height: 18px;
}

.cart-sheet-list {
  display: grid;
  gap: 10px;
}

.cart-line {
  border-bottom: 1px solid var(--tp-hairline);
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.cart-line strong,
.cart-line span {
  display: block;
}

.cart-line strong {
  font-size: 14px;
  line-height: 19px;
}

.cart-line span {
  margin-top: 3px;
  color: var(--tp-text-tertiary);
  font-size: 13px;
}

.clear-button {
  margin-top: 12px;
  color: var(--tp-error);
  background: transparent;
}

.sheet-total {
  border-top: 1px solid var(--tp-hairline);
  margin: 14px 0;
  padding-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sheet-total span {
  color: var(--tp-text-secondary);
}

.sheet-total strong {
  color: var(--tp-primary-active);
  font-size: 20px;
}

.dialog-copy {
  color: var(--tp-text-secondary);
  text-align: center;
  line-height: 20px;
}

.dialog-actions {
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
</style>
