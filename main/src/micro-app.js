const microApps = [
  {
    name: 'sub-vue',
    entry: '//localhost:7777/',
    activeRule: '/sub-vue',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: '/sub-vue'
    }
  },
  {
    name: 'sub-react',
    entry: '//localhost:7788/',
    activeRule: '/sub-react',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: '/sub-react'
    }
  }
]

export default microApps
