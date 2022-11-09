/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-17 13:12:51
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-09 13:49:54
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';
import router from './router/router';
import ElementPlus, { ElMessage } from 'element-plus';
import 'element-plus/dist/index.css';
import i18n from './language/i18n'

import { airbnbDB, languageObjectStore, userObjectStore  } from './db/db' // 引入数据库和对象仓库

router.beforeEach((to, from, next) => {
    airbnbDB.openStore({
        ...languageObjectStore,
        ...userObjectStore
    }).then((res: any) => {
        console.log('初始化所有对象仓库', res)
        next()
    })
})

const app = createApp(App);
app.config.globalProperties.$message = ElMessage;
app.use(router);
app.use(ElementPlus);
app.use(i18n)
app.mount('#app');
