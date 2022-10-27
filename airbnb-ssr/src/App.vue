<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-17 13:12:51
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-10-27 14:00:48
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

// import HelloWorld from './components/HelloWorld.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

const router = useRouter()

const { locale: localeLanguage } = useI18n()
localeLanguage.value = 'zh-cn'
const elementLocale = ref(zhCn)

const { t } = useI18n()

const changeLang = (language: any) => {
  // console.log('changeLang language=>', language)
  // const s = t('message.chinese')
  // console.log('changeLang s=>', s)
  elementLocale.value = language
  localeLanguage.value = language.name
}

// const s = t('message.chinese')
// console.log('s=>', s)

</script>

<template>
  <el-config-provider :locale="elementLocale">
    <router-view></router-view>
    <button @click="changeLang(zhCn)">{{t('message.chinese')}}</button>
    <button @click="changeLang(en)">{{t('message.english')}}</button>
    <button @click="()=> {router.push({path: '/home'})}">首页</button>
    <button @click="()=> {router.push({path: '/mine'})}">个人中心</button>
  </el-config-provider>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
