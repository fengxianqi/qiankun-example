import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

import routes from './router'


const router = createRouter({
  history: createWebHashHistory(window.__POWERED_BY_QIANKUN__ ? "/sub-vue3/" : "/"),
  routes, 
})


const app = createApp(App)

app.use(router)

app.mount('#app')

