import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: () => import( /* webpackChunkName: "group-home" */ '@/views/home')
    },
    {
      path: '/userlist',
      component: () => import( /* webpackChunkName: "group-home" */ '@/views/user/userlist')
    },
    { path: '/', redirect: '/home' }
  ]
})

export default router