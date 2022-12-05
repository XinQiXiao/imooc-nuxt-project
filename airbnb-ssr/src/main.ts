/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-17 13:12:51
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-12-05 17:38:42
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSSRApp, } from 'vue';
import App from './App.vue';
import { createSSRRouter } from './router/router';
import ElementPlus, { ElMessage } from 'element-plus';
import 'element-plus/dist/index.css';
import { createSSRI18n } from './language/i18n'
import { createSSRStore, key as storeKey, } from './store/store'

export function createApp(){
    const app = createSSRApp(App);
    const store = createSSRStore()
    const router = createSSRRouter()
    const i18n = createSSRI18n()

    app.config.globalProperties.$message = ElMessage;
    app.use(store, storeKey)
    app.use(router);
    app.use(ElementPlus);
    app.use(i18n)
    return {app, router, store}
}


