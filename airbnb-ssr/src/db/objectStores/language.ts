/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-03 16:54:02
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-09 18:38:07
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/db/objectStores/language.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import TypeObjectStore from '../type' // 引入类型别名

const webLang: TypeObjectStore =
{
  keyPath: 'id',
  indexs: ['name']
}

const languageObjectStore = {
  language: webLang
}

export default languageObjectStore