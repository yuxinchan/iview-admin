import util from '@/util'
const ajax = util.ajax
export default {
  getUserList() {
    return ajax.get("/userlist")
  }
}