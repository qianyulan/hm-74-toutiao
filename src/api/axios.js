
// 配置axios 默认配置选项
// 痛点：地址栏太长  后期不好维护 用baseurl保存地址栏 baseURL基本路径
// 所有的接口token需要在头部携带 （每次请求都要拿token 放token）
// axios 在除去登录的所有请求都需要携带 但只是在请求前获取token 在 去发请求即可
// 不应该在页面初始化的时候获取token 会报错
// 怎么在请求前使用token
// 这个时候就需要请求拦截器  类似于jquery的beforeSend一个意思
// 在发送请求前在头部添加一个token

import axios from 'axios'

// 自定义实例默认值
const instance = axios.create({

  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/'
//   headers: {
//     Authorization: 'Bearer ' + JSON.parse(window.sessionStorage.getItem('hm-74-toutiao')).token
//   }
})

// 添加请求拦截器
//    拦截器       请求                   配置项
// axios.interceptors.request.use(function (config) {
//     // 两个回调函数 成功函数 失败失败
//     // 在发送请求之前做些什么
//     // 在配置项不做修改直接return
//     return config
//   }, function (error) {
//     // 对请求错误做些什么
//     // Promise.reject(error) 返回一个一定错误的Promise对象
//     // Promise.resoyle()  返回一个一定成功的Promise对象
//     return Promise.reject(error)
//   })

instance.interceptors.request.use(function (config) {
  // 给头部加上认证信息
  const user = window.sessionStorage.getItem('hm-74-toutiao')
  if (user) {
    config.headers = {
      Authorization: 'Bearer' + JSON.parse(user).token
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
// 因为token用于访问需要身体认证的普通借口  是在服务端  有效期只有两个小时
// 添加响应拦截器
instance.interceptors.response.use(response => response, error => {
  // 对响应数据做点什么
  if (error.response.status === 401) {
    location.hash = '#/login'
  }
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
