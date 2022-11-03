<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-03 13:36:11
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-03 15:58:31
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/components/layout/headerCommon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, locale: localeLanguage } = useI18n()
const router = useRouter()

const activeIndex = ref('orders')

const emit = defineEmits<{
  (e: 'changeLang', language: any): void
}>()
function handleSelect(e: any){
  console.log('handleSelect e=>', e)
  if(e === 'zh'){
    emit('changeLang', 'zhCn')
  } else if(e === 'en'){
    emit('changeLang', 'en')
  }
}
</script>

<template>
  <div
    class="header-common"
  >
    <img
      class="logo"
      src="../../assets/images/layout/logo.png" 
      alt="爱此迎"
      @click="() => { router.push({name: 'home'}) }"
    />
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="orders">{{t('header.orders')}}</el-menu-item>
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
