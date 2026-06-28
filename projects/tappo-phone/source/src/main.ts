import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'
import { installMockBridge } from './bridge/mock'
import i18n from './locales'
import router from './router'
import './styles/base.css'

installMockBridge()

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(pinia).use(router).use(i18n).mount('#app')
