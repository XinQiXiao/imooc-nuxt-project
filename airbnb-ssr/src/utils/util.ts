/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-09 13:36:03
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-09 13:36:12
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/utils/util.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 获取客户端的cookie
export function getQueryCookie(cookie: string, variable: string) {
    const vars = cookie.split(';')
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=')
      if (pair[0].indexOf(variable) !== -1) { return pair[1] }
    }
    return (false)
  }