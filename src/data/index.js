import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import service from '@/service'

export default new Vuex.Store({
  actions: {
    getUserList() {
      return service.user.getUserList()
    }
  }
})