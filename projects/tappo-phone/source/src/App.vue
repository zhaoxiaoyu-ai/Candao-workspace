<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import TpBottomNav from '@/components/ui/TpBottomNav.vue'
import { navItems, ownerNavItems } from '@/router'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const appStore = useAppStore()

onMounted(() => {
  void appStore.initApp()
})

const activeNav = computed(() => String(route.meta.navKey ?? 'owner'))
const routeNavItems = computed(() => (route.meta.navGroup === 'owner' ? ownerNavItems : navItems))
const showNav = computed(() => !route.meta.hideNav)
</script>

<template>
  <RouterView />
  <TpBottomNav v-if="showNav" :items="routeNavItems" :active="activeNav" />
</template>
