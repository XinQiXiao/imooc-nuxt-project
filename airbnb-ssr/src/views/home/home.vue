<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-24 16:10:43
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-10-25 13:52:12
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/views/home/home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { useRoute, useRouter, } from 'vue-router';
import { h, getCurrentInstance, } from 'vue';
import { fetchDemo } from '@/api/api'

const router = useRouter();
const route = useRoute();

// console.log('home route.params=>', route.params);

const { proxy }: any = getCurrentInstance();
proxy.$message({
    message: h('p', null, [
        h('span', null, 'Message can be'),
        h('i', { style: 'color: teal' }, 'VNode'),
    ]),
});

const getRoomList = async ()=>{
    try {
        const ret = await fetchDemo();
        console.log('getRoomList ret=>', ret)
    } catch (e) {
        console.log('getRoomList e=>', e)
    }
}

getRoomList();

</script>

<template>
    <div class="home-container">
        首页
        <button @click="()=> router.push({ path: '/mine', query: { id: 1} })">跳转个人中心</button>
        <el-button>Default</el-button>
    </div>
</template>

<style >
    .home-container {
        background-color: yellow;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
        height: 100px;
    }
</style>