const microApps = [
  {
    name: 'subapp1',
    entry: '//localhost:7777/',
    activeRule: '/subapp1',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: '/subapp1'
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
