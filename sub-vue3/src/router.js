
// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = () => import('./components/HelloWorld.vue')
const About =  () => import('./components/about.vue')

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]


export default routes

