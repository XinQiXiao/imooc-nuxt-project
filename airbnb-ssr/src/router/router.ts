/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-24 16:09:32
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-08 13:41:09
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/router/router.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from '../views/home/home.vue';
import MineComponent from '../views/mine/mine.vue';
import LoginComponent from '../views/login/login.vue';

// 创建路由实例
const router = createRouter({
    history: createWebHistory(), // 相当于mode: 'hash'
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent,
            meta: {
                meta: '',
                keepAlive: false,
            },
        },
        {
            path: '/mine',
            name: 'mine',
            component: MineComponent,
            meta: {
                meta: '',
                keepAlive: false,
            },
        },
        {
            path: '/login',
            name: 'login',
            component: LoginComponent,
            meta: {
                meta: '',
                keepAlive: false,
            },
        },
    ],
});

export default router;