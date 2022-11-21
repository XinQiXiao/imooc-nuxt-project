/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-21 18:37:07
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-21 18:37:32
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/entry-server.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from './main'
import { renderToString } from 'vue/server-renderer'

export async function render(url: string) {
  const { app, router } = createApp()
  await router.push(url)
  await router.isReady()
  const html = renderToString(app)
  return html
}