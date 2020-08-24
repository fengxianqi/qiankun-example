const microApps = [
  {
    name: 'sub-vue',
    entry: '//localhost:7777/',
    activeRule: '/sub-vue',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: '/sub-vue'
    }
  }
  // {
  //   name: 'subapp2',
  //   entry: '//localhost:7788/',
  //   activeRule: '/subapp2',
  //   container: '#subapp-viewport'
  // }
]

export default microApps
