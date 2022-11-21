/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-21 18:13:23
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-21 18:15:03
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/entry-client.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from './main';
import { airbnbDB, languageObjectStore, userObjectStore  } from './db/db'; // 引入数据库和对象仓库

const { app, router } = createApp();
router.beforeEach((to, from, next) => {
    airbnbDB.openStore({
        ...languageObjectStore,
        ...userObjectStore
    }).then((res: any) => {
        console.log('初始化所有对象仓库', res)
        next()
    })
})
router.isReady().then(()=>{
    app.mount('#app');
});