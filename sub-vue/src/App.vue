<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <p>当前处于<code>{{ isInQiankun ? 'qiankun' : '独立运行'}}</code>环境</p>
      <p>vuex的`global module`的user state：<code> {{ JSON.stringify(user) }}</code></p>
    </div>
    <div class="btns">
      <template v-if="isInQiankun">
        <button @click="gotoSubReact">从当前子应用内跳转到`sub-react`子应用</button>
        <button @click="openSubVue">独立打开sub-vue子应用</button>
      </template>
      <button @click="changeUsername">改变全局的用户名称</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    // 通过global获取user的信息
    ...mapState('global', {
      user: state => state.user
    }),
    isInQiankun () {
      return window.__POWERED_BY_QIANKUN__
    }
  },
  methods: {
    // setGlobalState 是在 /common/src/store/global-register.js中定义的
    ...mapActions('global', ['setGlobalState']),
    gotoSubReact () {
      history.pushState(null, 'sub-react', '/sub-react')
    },
    changeUsername () {
      // 也可通过 store.commit('global/setGlobalState', { user: '李四' }) 进行操作
      this.setGlobalState({
        user: { name: '李四' + Math.round(Math.random() * 100) }
      })
    },
    openSubVue () {
      if (!this.isInQiankun) {
        alert('当前已经是单独运行的子应用')
        return
      }

      // window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ 是qiankun注入的子应用对应的地址，谨慎使用，生产环境建议将跳转地址维护在环境变量中
      window.open(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.btns{
  margin: 100px;
}
.btns button{
  margin: 0 10px;
}

</style>
