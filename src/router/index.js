// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
// 欢迎页
import Welcome from '@/views/welcome'
// 404页面
import NotFound from '@/views/404'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    {
      // name: 'home', 语法规范 可删除
      path: '/',
      component: Home,
      children: [
        // 配置欢迎页路由规则
        { name: 'welcome', path: '/', component: Welcome }
      ]
    },
    // 配置404路由规则
    { name: '404', path: '*', component: NotFound }
  ]
})
// 加上前置守卫

router.beforeEach((to, from, next) => {
  // to 目标路由对象 from 当前路由对象 to.path 目标路径
  if (to.path === '/login') return next()
  const user = window.sessionStorage.getItem('hm-74-toutiao')
  // 保存了token加密的字符串
  console.log(user)
  if (user) return next()
  next('/login')
})
export default router
