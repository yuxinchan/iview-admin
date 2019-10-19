import axios from 'axios'
import config from '@/config'
import _ from './yuxin'

var instance = axios.create({
  baseURI: config.CONSTANT.BASE_URL,
  timeout: 5000,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})

export default {
  get(url, data) {
    return instance.get(url, {params: data})
  },
  post(url, data) {
    return instance.post(url, data)
  }
}

//添加请求拦截器
instance.interceptors.request.use(function (config) {
  //eslint-disable-next-line
  console.log(`以${config.method}方式请求了接口：${config.url}}`)
  _.startLoading()
  return config
}, function (error) {
  //请求错误的处理
  return Promise.reject(error)
})

//添加响应拦截器
instance.interceptors.response.use(function (response) {
  _.stopLoading()
  return response
}, function (error) {
  //响应错误的处理
  return Promise.reject(error)
})