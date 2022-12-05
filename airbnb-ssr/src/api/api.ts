/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-25 13:15:49
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-12-05 18:39:03
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/api/api.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { http } from '../utils/http';
import AirbnbDB from '../utils/indexedDB'
import { IResultOr as IResult } from './interface'

const airbnbDB = new AirbnbDB('airbnb')

// 真实接口
function fetchDemo() {
  return http.httpGet('/api/room/room/getRoomList?pageNo=1&pageSize=3')
}

// api/index.ts 
// Mock接口
async function fetchElephant() {
  await airbnbDB.openStore('elephant', 'id', ['nose', 'ear'])      // 连接数据库
  const result = await airbnbDB.getList('elephant').then(res => {  // 查询数据
    return { code: '000000', message: '操作成功', result: res, success: true }
  })
  return result
}

// 真实接口
function fetchRoomList(): Promise<IResult> {
  return http.httpGet('http://110.42.184.111/api/room/room/getRoomList?pageNo=1&pageSize=3', {})
}


export {
  fetchDemo,
  fetchElephant,
  fetchRoomList,
}