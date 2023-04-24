import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 全局样式
import '@/assets/styles/index.scss'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)

app.use(ElementPlus)
app.use(VXETable)
app.mount('#app')
