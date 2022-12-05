/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-21 18:37:07
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-12-05 17:38:48
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/entry-server.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from './main'
import { renderToString } from 'vue/server-renderer'

export async function render(url: string) {
  const { app, router, store, } = createApp()
  await router.push(url)
  await router.isReady()

  const matchedComponents = router.currentRoute.value.matched.flatMap(record =>
    Object.values(record.components)
  )

  console.log('匹配组件', matchedComponents)
  // 对所有匹配的路由组件调用 `asyncData()`
  await Promise.all(matchedComponents.map((Component: any) => {
    if (Component.asyncData) {
      return Component.asyncData({
        store,
        route: router.currentRoute
      })
    }
  }))

  const html = renderToString(app)
  return html
}