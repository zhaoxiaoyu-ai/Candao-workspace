<script setup lang="ts">
import TpButton from '@/components/ui/TpButton.vue'
import TpCard from '@/components/ui/TpCard.vue'
import TpGeneratedIcon from '@/components/ui/TpGeneratedIcon.vue'
import TpTopBar from '@/components/ui/TpTopBar.vue'
import logoUrl from '@/assets/brand/tappo-logo.svg'
import assistantHero from '@/assets/generated/tappo-ai-assistant-hero.jpg'
import { tappoTokens } from '@/styles/tokens'

const colorRows = [
  { name: 'Primary', value: tappoTokens.color.primary },
  { name: 'Primary hover', value: tappoTokens.color.primaryHover },
  { name: 'Primary active', value: tappoTokens.color.primaryActive },
  { name: 'Primary light', value: tappoTokens.color.primaryLight },
  { name: 'App background', value: tappoTokens.color.appBg },
  { name: 'Success', value: tappoTokens.color.success },
  { name: 'Error', value: tappoTokens.color.error },
  { name: 'Warning', value: tappoTokens.color.warning },
]

const viewportRows = [
  'Primary 402 x 874',
  'Compact 390 x 844 / 393 x 852',
  'Large 430 x 932 / 440 x 956',
  'Boss Pad >= 768',
]

const iconRows = ['home', 'report', 'customer', 'asset', 'inventory', 'receipt', 'menu', 'schedule', 'pos', 'booking', 'settings', 'payment'] as const
</script>

<template>
  <main class="tp-page">
    <div class="tp-shell tp-stack">
      <TpTopBar title="Tappo Phone v0.1" subtitle="Design tokens and first runnable shell" />

      <section class="spec-hero">
        <img :src="logoUrl" alt="Tappo" />
        <div>
          <p class="tp-eyebrow">Flutter WebView + Vue 3</p>
          <h1 class="tp-title">以 402 x 874 作为首要验收尺寸</h1>
          <p class="tp-subtitle">
            该页面用于提前锁定品牌色、圆角、阴影、移动端密度和核心组件形态，后续业务页面沿用同一套 Tappo 组件。
          </p>
        </div>
        <img class="spec-hero__assistant" :src="assistantHero" alt="Tappo 经营助手视觉资产" />
      </section>

      <section class="spec-grid">
        <TpCard>
          <p class="tp-eyebrow">Brand</p>
          <h2>视觉基准</h2>
          <p>
            点餐流程按蓝湖高保真迁移，经营和应用中心沿用移动端 Figma 的暖背景、软卡片和橙色主操作。
          </p>
        </TpCard>

        <TpCard tone="dark">
          <p class="tp-eyebrow">Bridge</p>
          <h2>Flutter WebView</h2>
          <p>已预留 bridge 类型定义，开发期默认安装 mock bridge，支付和设备信息可先走本地模拟。</p>
        </TpCard>
      </section>

      <section class="tp-section">
        <div class="section-title">
          <h2>Generated Assets</h2>
          <span>统一插画与业务图标，替代临时通用图标感</span>
        </div>
        <div class="asset-grid">
          <TpGeneratedIcon v-for="icon in iconRows" :key="icon" :name="icon" :size="64" framed />
        </div>
      </section>

      <section class="tp-section">
        <div class="section-title">
          <h2>Color Tokens</h2>
          <span>从 Figma / 蓝湖提炼并按新规范收敛</span>
        </div>
        <div class="swatch-grid">
          <div v-for="color in colorRows" :key="color.name" class="swatch">
            <span :style="{ background: color.value }" />
            <strong>{{ color.name }}</strong>
            <em>{{ color.value }}</em>
          </div>
        </div>
      </section>

      <section class="spec-grid">
        <TpCard>
          <p class="tp-eyebrow">Components</p>
          <h2>Button</h2>
          <div class="button-row">
            <TpButton>确认</TpButton>
            <TpButton variant="secondary">次要</TpButton>
            <TpButton disabled>不可用</TpButton>
          </div>
        </TpCard>
        <TpCard dense>
          <p class="tp-eyebrow">Typography</p>
          <h2>字号修正</h2>
          <p>主体内容以 14px 起步，重要标题和金额放大；12px 只作为标签或辅助元信息，避免旧稿文字过小。</p>
        </TpCard>
      </section>

      <section class="tp-section">
        <div class="section-title">
          <h2>Viewport Rules</h2>
          <span>不再机械沿用 375 旧稿</span>
        </div>
        <div class="viewport-list">
          <span v-for="viewport in viewportRows" :key="viewport">{{ viewport }}</span>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.spec-hero {
  position: relative;
  min-height: 210px;
  overflow: hidden;
  border-radius: 28px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  background:
    radial-gradient(circle at 86% 18%, rgba(255, 138, 61, 0.2), transparent 28%),
    linear-gradient(135deg, #fff, #fff3e4);
  box-shadow: var(--tp-shadow-card);
}

.spec-hero > img:first-child {
  width: 112px;
  height: auto;
}

.spec-hero__assistant {
  position: absolute;
  right: -44px;
  bottom: -118px;
  width: 210px;
  height: 310px;
  object-fit: cover;
  object-position: 62% 38%;
  opacity: 0.92;
}

.spec-hero > div {
  position: relative;
  z-index: 2;
  max-width: 250px;
}

.spec-hero .tp-subtitle {
  margin-top: 10px;
}

.spec-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.spec-grid h2,
.section-title h2 {
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 8px;
}

.spec-grid p {
  color: var(--tp-text-secondary);
  line-height: 20px;
}

.section-title {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
}

.section-title span {
  color: var(--tp-text-tertiary);
  font-size: 12px;
  line-height: 17px;
  text-align: right;
}

.swatch-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.swatch {
  border: 1px solid var(--tp-hairline);
  border-radius: 16px;
  padding: 10px;
  display: grid;
  gap: 7px;
  background: #fff;
}

.swatch span {
  height: 38px;
  border-radius: 12px;
  border: 1px solid var(--tp-hairline);
}

.swatch strong {
  font-size: 13px;
  line-height: 18px;
}

.swatch em {
  color: var(--tp-text-tertiary);
  font-family: var(--tp-number-font);
  font-size: 12px;
  font-style: normal;
}

.button-row {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.asset-grid {
  border: 1px solid var(--tp-hairline);
  border-radius: 24px;
  padding: 14px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 10px;
  background: #fff;
  box-shadow: var(--tp-shadow-card);
}

.viewport-list {
  display: grid;
  gap: 8px;
}

.viewport-list span {
  border-radius: 14px;
  padding: 12px 14px;
  color: var(--tp-text-secondary);
  background: #fff;
  border: 1px solid var(--tp-hairline);
}

@media (min-width: 768px) {
  .spec-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .swatch-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
