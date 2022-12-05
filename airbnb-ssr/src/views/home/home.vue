<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-12-05 16:11:21
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-12-05 18:30:15
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/views/home/home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store/store'

export default defineComponent({
  setup() {
    const store = useStore()
    function clickIt(item:any) {
      console.log(item)
    }
    return { store, clickIt }
  },
  asyncData({ store, route }:any) {
    console.log('asyncData----', store, route)
    return store.dispatch('getRoomList')
  }
})

</script>

<template>
<div class="home-page">
  <!-- banner -->
  <div class="banner"></div>
  <!-- 房屋列表 -->
  <div class="main-wapper">
    <h2 class="title">主标题</h2>
    <p class="sub-title">副标题</p>
    <div class="home-list">
      <div class="item" @click="clickIt(item)" v-for="(item,index) in store.state.roomList" :key="index">
        <img :src="item.pictureUrl" :alt="item.title">
        <p class="title">{{item.title}}</p>
        <p class="price">¥{{item.price}}元</p>
      </div>
    </div>
  </div>
</div>

</template>

<style lang="scss">
@import "@/assets/scss/home/home.scss";
</style>
