<script setup lang="ts">
import { colors, typography, textStyles, spacing, padding, borderRadius, controlHeight, shadows, breakpoints } from '../styles/design-tokens'

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <!-- 头部 -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <h1 class="text-2xl font-semibold">COMS 8.0 设计系统 - 样式指南</h1>
        <p class="text-sm text-gray-500 mt-1">从 Figma 设计系统提取的设计令牌参考</p>
      </div>
      <nav class="max-w-7xl mx-auto px-6 pb-3 flex gap-4 text-sm">
        <a href="#colors" class="text-blue-500 hover:underline">颜色</a>
        <a href="#typography" class="text-blue-500 hover:underline">字体</a>
        <a href="#spacing" class="text-blue-500 hover:underline">间距</a>
        <a href="#radius" class="text-blue-500 hover:underline">圆角</a>
        <a href="#shadows" class="text-blue-500 hover:underline">阴影</a>
        <a href="#controls" class="text-blue-500 hover:underline">控件高度</a>
        <a href="#breakpoints" class="text-blue-500 hover:underline">断点</a>
      </nav>
    </header>

    <main class="max-w-7xl mx-auto px-6 py-8 space-y-16">

      <!-- ==================== 颜色 ==================== -->
      <section id="colors">
        <h2 class="text-xl font-semibold mb-6 pb-2 border-b">颜色 Colors</h2>

        <!-- 品牌色 -->
        <div class="mb-8">
          <h3 class="text-base font-medium mb-3 text-gray-700">品牌色 Brand</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div v-for="(value, key) in colors.brand" :key="key"
              class="cursor-pointer group" @click="copyToClipboard(value)">
              <div class="h-20 rounded-lg border border-gray-200 mb-2 transition-transform group-hover:scale-105"
                :style="{ backgroundColor: value }"></div>
              <p class="text-xs font-medium">{{ key }}</p>
              <p class="text-xs text-gray-400 font-mono">{{ value }}</p>
            </div>
          </div>
        </div>

        <!-- 语义色 -->
        <div class="mb-8">
          <h3 class="text-base font-medium mb-3 text-gray-700">语义色 Semantic</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div v-for="(value, key) in colors.semantic" :key="key"
              class="cursor-pointer group" @click="copyToClipboard(value)">
              <div class="h-20 rounded-lg border border-gray-200 mb-2 transition-transform group-hover:scale-105"
                :style="{ backgroundColor: value }"></div>
              <p class="text-xs font-medium">{{ key }}</p>
              <p class="text-xs text-gray-400 font-mono">{{ value }}</p>
            </div>
          </div>
        </div>

        <!-- 文本色 -->
        <div class="mb-8">
          <h3 class="text-base font-medium mb-3 text-gray-700">文本色 Text</h3>
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
            <div v-for="(value, key) in colors.text" :key="key"
              class="cursor-pointer group" @click="copyToClipboard(value)">
              <div class="h-20 rounded-lg border border-gray-200 mb-2 flex items-center justify-center transition-transform group-hover:scale-105"
                :style="{ backgroundColor: '#f8f9fa' }">
                <span class="text-lg font-semibold" :style="{ color: value }">Aa</span>
              </div>
              <p class="text-xs font-medium">{{ key }}</p>
              <p class="text-xs text-gray-400 font-mono">{{ value }}</p>
            </div>
          </div>
        </div>

        <!-- 边框色 -->
        <div class="mb-8">
          <h3 class="text-base font-medium mb-3 text-gray-700">边框色 Border</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div v-for="(value, key) in colors.border" :key="key"
              class="cursor-pointer group" @click="copyToClipboard(value)">
              <div class="h-20 rounded-lg bg-white mb-2 transition-transform group-hover:scale-105"
                :style="{ border: `2px solid ${value}` }"></div>
              <p class="text-xs font-medium">{{ key }}</p>
              <p class="text-xs text-gray-400 font-mono">{{ value }}</p>
            </div>
          </div>
        </div>

        <!-- 填充色 -->
        <div class="mb-8">
          <h3 class="text-base font-medium mb-3 text-gray-700">填充色 Fill</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div v-for="(value, key) in colors.fill" :key="key"
              class="cursor-pointer group" @click="copyToClipboard(value)">
              <div class="h-20 rounded-lg border border-gray-200 mb-2 transition-transform group-hover:scale-105"
                :style="{ backgroundColor: value }"></div>
              <p class="text-xs font-medium">{{ key }}</p>
              <p class="text-xs text-gray-400 font-mono">{{ value }}</p>
            </div>
          </div>
        </div>

        <!-- 背景色 -->
        <div class="mb-8">
          <h3 class="text-base font-medium mb-3 text-gray-700">背景色 Background</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div v-for="(value, key) in colors.background" :key="key"
              class="cursor-pointer group" @click="copyToClipboard(value)">
              <div class="h-20 rounded-lg border border-gray-200 mb-2 transition-transform group-hover:scale-105"
                :style="{ backgroundColor: value }"></div>
              <p class="text-xs font-medium">{{ key }}</p>
              <p class="text-xs text-gray-400 font-mono">{{ value }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== 字体 ==================== -->
      <section id="typography">
        <h2 class="text-xl font-semibold mb-6 pb-2 border-b">字体 Typography</h2>

        <!-- 字体族 -->
        <div class="mb-8">
          <h3 class="text-base font-medium mb-3 text-gray-700">字体族 Font Family</h3>
          <div class="space-y-3">
            <div v-for="(value, key) in typography.fontFamily" :key="key"
              class="bg-white rounded-lg border border-gray-200 p-4">
              <p class="text-sm text-gray-500 mb-1">{{ key }}</p>
              <p class="text-xl" :style="{ fontFamily: value }">
                ABCDEFG abcdefg 0123456789 中文字体预览
              </p>
              <p class="text-xs text-gray-400 font-mono mt-2">{{ value }}</p>
            </div>
          </div>
        </div>

        <!-- 字体大小 -->
        <div class="mb-8">
          <h3 class="text-base font-medium mb-3 text-gray-700">字体大小 Font Size</h3>
          <div class="bg-white rounded-lg border border-gray-200 divide-y">
            <div v-for="(value, key) in typography.fontSize" :key="key"
              class="flex items-center justify-between p-4">
              <div class="flex items-center gap-4">
                <span class="text-xs text-gray-400 w-20 font-mono">{{ key }}</span>
                <span :style="{ fontSize: value + 'px', fontFamily: typography.fontFamily.base }">
                  设计系统字体预览 Design System
                </span>
              </div>
              <span class="text-xs text-gray-400 font-mono">{{ value }}px</span>
            </div>
          </div>
        </div>

        <!-- 预设文本样式 -->
        <div class="mb-8">
          <h3 class="text-base font-medium mb-3 text-gray-700">预设文本样式 Text Styles</h3>
          <div class="bg-white rounded-lg border border-gray-200 divide-y">
            <div v-for="(style, key) in textStyles" :key="key"
              class="flex items-center justify-between p-4">
              <div class="flex items-center gap-4">
                <span class="text-xs text-gray-400 w-24 font-mono">{{ key }}</span>
                <span :style="{
                  fontFamily: style.fontFamily,
                  fontSize: style.fontSize + 'px',
                  fontWeight: style.fontWeight,
                  lineHeight: style.lineHeight,
                }">
                  设计系统文本样式 Design System
                </span>
              </div>
              <span class="text-xs text-gray-400 font-mono">
                {{ style.fontSize }}px / {{ style.fontWeight }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== 间距 ==================== -->
      <section id="spacing">
        <h2 class="text-xl font-semibold mb-6 pb-2 border-b">间距 Spacing</h2>

        <div class="mb-8">
          <h3 class="text-base font-medium mb-3 text-gray-700">基础间距 Spacing Scale</h3>
          <div class="space-y-3">
            <div v-for="(value, key) in spacing" :key="key"
              class="flex items-center gap-4 bg-white rounded-lg border border-gray-200 p-4">
              <span class="text-xs text-gray-400 w-16 font-mono">{{ key }}</span>
              <div class="h-4 rounded bg-blue-400" :style="{ width: value * 4 + 'px' }"></div>
              <span class="text-xs text-gray-400 font-mono">{{ value }}px</span>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h3 class="text-base font-medium mb-3 text-gray-700">内边距 Padding</h3>
          <div class="space-y-3">
            <div v-for="(value, key) in padding" :key="key"
              class="flex items-center gap-4 bg-white rounded-lg border border-gray-200 p-4">
              <span class="text-xs text-gray-400 w-44 font-mono">{{ key }}</span>
              <div class="border-2 border-dashed border-blue-300 rounded">
                <div class="bg-blue-50 rounded text-xs text-blue-500 text-center"
                  :style="{ padding: value + 'px' }">
                  {{ value }}px
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== 圆角 ==================== -->
      <section id="radius">
        <h2 class="text-xl font-semibold mb-6 pb-2 border-b">圆角 Border Radius</h2>
        <div class="grid grid-cols-3 gap-6">
          <div v-for="(value, key) in borderRadius" :key="key" class="text-center">
            <div class="w-24 h-24 mx-auto bg-blue-400 mb-3"
              :style="{ borderRadius: value + 'px' }"></div>
            <p class="text-xs font-medium">{{ key }}</p>
            <p class="text-xs text-gray-400 font-mono">{{ value }}px</p>
          </div>
        </div>
      </section>

      <!-- ==================== 阴影 ==================== -->
      <section id="shadows">
        <h2 class="text-xl font-semibold mb-6 pb-2 border-b">阴影 Shadows</h2>
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-6">
          <div v-for="(value, key) in shadows" :key="key" class="text-center">
            <div class="w-24 h-24 mx-auto bg-white rounded-lg mb-3"
              :style="{ boxShadow: value }"></div>
            <p class="text-xs font-medium">{{ key }}</p>
            <p class="text-xs text-gray-400 font-mono break-all">{{ value }}</p>
          </div>
        </div>
      </section>

      <!-- ==================== 控件高度 ==================== -->
      <section id="controls">
        <h2 class="text-xl font-semibold mb-6 pb-2 border-b">控件高度 Control Heights</h2>
        <div class="space-y-4">
          <div v-for="(value, key) in controlHeight" :key="key"
            class="flex items-center gap-4">
            <span class="text-xs text-gray-400 w-16 font-mono">{{ key }}</span>
            <div class="bg-blue-400 rounded-lg flex items-center justify-center text-white text-xs font-medium"
              :style="{ height: value + 'px', width: '200px' }">
              {{ value }}px
            </div>
          </div>
        </div>
      </section>

      <!-- ==================== 断点 ==================== -->
      <section id="breakpoints">
        <h2 class="text-xl font-semibold mb-6 pb-2 border-b">断点 Breakpoints</h2>
        <div class="bg-white rounded-lg border border-gray-200 divide-y">
          <div v-for="(value, key) in breakpoints" :key="key"
            class="flex items-center justify-between p-4">
            <div class="flex items-center gap-4">
              <span class="text-xs text-gray-400 w-12 font-mono">{{ key }}</span>
              <div class="h-3 bg-blue-100 rounded-full" :style="{ width: (value / 8) + 'px' }">
                <div class="h-3 bg-blue-400 rounded-full" :style="{ width: '100%' }"></div>
              </div>
            </div>
            <span class="text-xs text-gray-400 font-mono">&gt;= {{ value }}px</span>
          </div>
        </div>
      </section>

    </main>

    <!-- 底部 -->
    <footer class="border-t border-gray-200 mt-16">
      <div class="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-gray-400">
        COMS 8.0 设计系统 · 从 Figma 提取 · 点击色块可复制色值
      </div>
    </footer>
  </div>
</template>
