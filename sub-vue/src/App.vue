<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a href="#" @click="gotoSubReact" style="marin: 0 0 0 10px">跳转到sub-react</a>
    </div>
    <div>
      从vuex的global module的state： {{ JSON.stringify(user) }}
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    // 通过global获取user的信息
    ...mapState('global', {
      user: state => state.user
    })
  },
  methods: {
    gotoSubReact () {
      history.pushState(null, 'sub-react', '/sub-react')
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

</style>
