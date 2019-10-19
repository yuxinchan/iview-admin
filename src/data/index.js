import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import service from '@/service'
import config from '@/config'
import util from '@/util'

export default new Vuex.Store({
  state: {
    loginUserName: ""
  },
  getters: {
    userName(state) {
      if (!state.loginUserName) {
        state.loginUserName = util.storage.get(config.KEY.CACHE_LOGIN_USER_NAME)
      }
      return state.loginUserName
    }
  },
  mutations: {
    setLoginUserName(state, val) {
      state.loginUserName = val
      util.storage.set(config.KEY.CACHE_LOGIN_USER_NAME, val)
    },
    removeLoginUserName(state) {
      state.loginname = ''
      util.storage.remove(config.KEY.CACHE_LOGIN_USER_NAME)
    }
  },
  actions: {
    getStarList() {
      return service.user.getStarList()
    }
  }
})