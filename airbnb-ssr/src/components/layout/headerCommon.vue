<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-03 13:36:11
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-03 14:36:30
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/components/layout/headerCommon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('orders')
</script>

<template>
  <div
    class="header-common"
  >
    <img
      class="logo"
      src="../../assets/images/layout/logo.png" 
      alt="爱此迎"
    />
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
    >
      <el-menu-item index="orders">{{'房源订单中心'}}</el-menu-item>
      <el-menu-item index="records">{{'历史足迹'}}</el-menu-item>
      <el-sub-menu index="language">
        <template #title>{{'语言'}}</template>
        <el-menu-item index="zh">中文</el-menu-item>
        <el-menu-item index="en">English</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="logout">{{'退出'}}</el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/scss/layout/commonHeader.scss";
</style>
