/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-03 16:51:35
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-09 13:45:50
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/db/db.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import DB from '../utils/indexedDB' // 引入indexedDB工具类
import languageObjectStore from './objectStores/language' // 引入语言类型对象仓库
import userObjectStore from './objectStores/user' // 引入用户信息对象仓库

// 数据库
const airbnbDB = new DB('airbnb')

export {
  airbnbDB,
  languageObjectStore,
  userObjectStore,
}