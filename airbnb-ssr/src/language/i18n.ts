/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-26 13:42:15
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-10-26 14:02:41
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/language/i18n.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// i18n.ts
import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

// https://blog.csdn.net/weixin_41086056/article/details/125111752
const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  messages: {
    'zh-cn': zh, 
    en,
  }
})
export default i18n

