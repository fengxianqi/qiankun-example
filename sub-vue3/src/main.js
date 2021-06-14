import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import routes from './router'

let instance = null

function render (props = {}) {
  console.log('base', import.meta.env)
  const { container, routerBase } = props
  const router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? routerBase : import.meta.env.BASE_URL),
    routes, 
  })
  

  instance = createApp(App)

  instance.use(router)

  instance.mount(container ? container.querySelector('#app') : '#app')
}


if (!window.__POWERED_BY_QIANKUN__) {
  // 非qiankun环境
  // 这里是子应用独立运行的环境

  // 独立运行时，也注册一个名为global的store module
  // commonStore.globalRegister(store)
  // 模拟登录后，存储用户信息到global module
  // const userInfo = { name: '我是独立运行时名字叫张三' } // 假设登录后取到的用户信息
  // store.commit('global/setGlobalState', { user: userInfo })
  console.log('独立运行')
  render()
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}

export async function mount (props) {
  console.log('[vue] props from main framework', props)

  // commonStore.globalRegister(store, props)
  console.log('运行在qiankun环境中')
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}





