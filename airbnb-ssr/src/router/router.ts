import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from '../views/home/home.vue';
import MineComponent from '../views/mine/mine.vue';

// 创建路由实例
const router = createRouter({
    history: createWebHistory(), // 相当于mode: 'hash'
    routes: [
        {
            path: '/home',
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
    ],
});

export default router;