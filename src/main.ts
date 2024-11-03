import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'

import en from './lang/en/en.json'
import pt from './lang/pt/pt.json'

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const app = createApp(App)

app.use(mdiVue, {
  icons: mdijs
})

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'pt',
  fallbackLocale: 'pt',
  messages: {
    en,
    pt
  }
})

app.use(router)
app.use(i18n)

app.mount('#app')
