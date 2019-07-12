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
      name: 'home',
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

export default router
