/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-09 13:44:35
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-09 13:44:48
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/db/objectStores/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import TypeObjectStore from '../type' // 引入类型别名

const webUser: TypeObjectStore =
{
  keyPath: 'userId',
  indexs: ['mobile', 'password', 'status']
}

const userObjectStore =
{
  web_user: webUser
}

export default userObjectStore
