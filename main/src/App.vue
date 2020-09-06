<template>
  <div id="layout-wrapper">
    <div class="layout-header">头部导航</div>
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
import NProgress from 'nprogress'
export default {
  name: 'App',
  data () {
    return {
      isLoading: true
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
