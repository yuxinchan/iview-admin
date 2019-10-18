import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: () => import('@/views/user/login')
    },
    {
      path: '/',
      component: () => import('@/views/main'),
      children: [
        {
          path: '',
          component: () => import('@/views/user/home')
        },
        {
          path: '/userlist',
          component: () => import('@/views/user/userlist')
        }
      ]
    },
  ]
})

export default router