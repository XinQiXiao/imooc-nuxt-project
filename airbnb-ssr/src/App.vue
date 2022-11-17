<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-17 13:12:51
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-17 18:00:26
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { useRoute, } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store/store'
import HeaderComponent from './components/layout/headerCommon.vue'
import FooterComponent from './components/layout/footerCommon.vue'

const store = useStore()
const route = useRoute()

const { locale: localeLanguage } = useI18n()
localeLanguage.value = 'zh-cn'

</script>

<template>
  <el-config-provider :locale="store.state.locale">
    <HeaderComponent v-show="route.fullPath.indexOf('login')==-1" />
    <div class="container">
      <router-view></router-view>
    </div>
    <FooterComponent v-show="route.fullPath.indexOf('login')==-1"/>
  </el-config-provider>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
