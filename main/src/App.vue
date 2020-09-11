<template>
  <div id="layout-wrapper">
    <div class="layout-header">
      <ul class="mainapp-apps">
        <li v-for="item in microApps" :key="item.name">{{ item.name }}</li>
      </ul>
    </div>
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
import NProgress from 'nprogress'
import microApps from './micro-app'
export default {
  name: 'App',
  data () {
    return {
      isLoading: true,
      microApps
    }
  },
  watch: {
    isLoading (val) {
      if (val) {
        NProgress.start()
      } else {
        this.$nextTick(() => {
          NProgress.done()
        })
      }
    }
  },
  components: {},
  created () {
    NProgress.start()
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
    margin-top: 60px;
  }
</style>
