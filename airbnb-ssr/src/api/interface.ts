/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-03 16:47:43
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-03 16:47:53
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/api/interface.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AxiosRequestConfig } from 'axios'
export interface IResultOr { // 定义interface规范返回结果的类型
  code: string,
  success: boolean,
  message: string,
  result: any
}

export interface IRoomListParams extends AxiosRequestConfig { // 定义interface规范返回结果的类型
  pageNo: number,
  pageSize: number,
  cityCode: string,
}

export interface IRoomDetailParams extends AxiosRequestConfig { // 定义interface规范返回结果的类型
  id: number
}