import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: () => import('@/views/user/login'),
      meta: {
        title: "登录"
      }
    },
    {
      path: '/',
      component: () => import('@/views/main'),
      children: [
        {
          path: '',
          component: () => import('@/views/user/home'),
          meta: {
            title: "工作平台",
            order: "0-1",
            level: 1
          }
        },
        {
          path: '/starlist',
          component: () => import('@/views/user/starlist'),
          meta: {
            title: "收藏列表",
            order: "1-1"
          }
        },
        {
          path: '/musiclist',
          component: () => import('@/views/show/musiclist'),
          meta: {
            title: "音乐排行",
            order: "2-1"
          }
        }
      ]
    },
  ]
})

export default router


import ViewUI from 'view-design'
Vue.use(ViewUI)
ViewUI.LoadingBar.config({
  color: '#2d8cf0'
})

import util from '@/util'
import config from '@/config'
router.beforeEach((to, from, next) => {
  if (to.path !== "/login") {
    if(!util.storage.get(config.KEY.CACHE_LOGIN_USER_NAME)) {
      return next("/login")
    }
  }
  ViewUI.LoadingBar.start()
  if (to.meta && to.meta.title) document.title = "YuXin -" + to.meta.title
  next()
})


//eslint-disable-next-line
router.afterEach((to, from) => {
  ViewUI.LoadingBar.finish()
})