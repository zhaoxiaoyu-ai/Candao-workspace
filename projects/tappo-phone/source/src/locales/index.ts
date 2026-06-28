import { createI18n } from 'vue-i18n'
import zhHK from './zh-HK/common'

export default createI18n({
  legacy: false,
  locale: 'zh-HK',
  fallbackLocale: 'zh-HK',
  messages: {
    'zh-HK': zhHK,
  },
})
