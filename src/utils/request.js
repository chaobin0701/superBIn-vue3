// 1. 创建一个新的axios实例
import axios from 'axios'

// 导出基准地址，原因：其他地方不是通过axios发请求的地方用上基准地址
export const baseURL = 'http://118.31.47.122:3333'
const instance = axios.create({
  // axios 的一些配置，baseURL  timeout
  baseURL,
  timeout: 5000
})
// 请求拦截器
instance.interceptors.request.use(config => config, err => Promise.reject(err))

// res => res.data  取出data数据，将来调用接口的时候直接拿到的就是后台的数据
instance.interceptors.response.use(res => res.data, err => Promise.reject(err))

// 请求工具函数
export default (url, method, submitData) => {
  // 负责发请求：请求地址，请求方式，提交的数据
  return instance({
    url,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}