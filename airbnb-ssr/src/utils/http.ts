/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-25 13:12:02
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-10-25 13:30:26
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/utils/http.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios, { AxiosRequestConfig,AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

const defaultConfig:AxiosRequestConfig = {
  timeout: 5000,
  baseURL: '/release/'
}
class Http {
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  // 实例化axios
  private static axiosInstance = axios.create(defaultConfig)

  // 请求拦截
  private httpInterceptorsRequest(): void {
    Http.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      return config
    }, (err:any) => {
      // 对请求错误的处理
      return Promise.reject(err)
    })
  }

  // 响应拦截
  private httpInterceptorsResponse(): void {
    Http.axiosInstance.interceptors.response.use((res: AxiosResponse) => {
      // 对响应成功的处理，处理一些接口成功的状态码，比如:2xx范围内的状态码
      console.log('httpInterceptorsResponse res=>', res)
      const { data } = res
      const { success } = data
      if (success) {
        ElMessage('成功')
      } else {
        ElMessage('失败')
      }
      return res
    }, (err:any) => {
      // 对响应错误的处理，处理一些接口失败所返回的状态码，比如：3XX,4XX,5XX范围内的状态码
      console.log('服务器异常 err=>', err)
      return Promise.reject(err)
    })
  }

  public httpGet<T>(url: string, params?: T): Promise<T> {
    return Http.axiosInstance.get(url, { params }).then(res => res.data).catch()
  }

  public httpPost<T>(url: string, params?: T): Promise<T> {
    return Http.axiosInstance.post(url, { params }).then(res => res.data).catch()
  }
}

export const http = new Http()

