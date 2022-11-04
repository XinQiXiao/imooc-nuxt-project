<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-03 13:36:11
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-04 15:26:45
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/components/layout/headerCommon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { fetchLanguageApi, saveLanguageApi, } from '../../api/layout'

const { t, locale: localeLanguage } = useI18n()
const router = useRouter()

const activeIndex = ref('orders')

const emit = defineEmits<{
  (e: 'changeLang', language: any): void
}>()
function handleSelect(e: any){
  // console.log('handleSelect e=>', e)
  if(e === 'zh'){
    emit('changeLang', zhCn)
    saveLanguage(zhCn.name)
  } else if(e === 'en'){
    emit('changeLang', en)
    saveLanguage(en.name)
  }
}

// Mock接口：保存当前语言包
async function saveLanguage(language: any){
  try {
    const ret = await saveLanguageApi(language)
    // console.log('saveLanguage ret=>', ret)
  } catch (e) {
    console.log('saveLanguage e=>', e)
  }
}
async function getLanguage(){
  try {
    const ret = await fetchLanguageApi()
    // console.log('getLanguage ret=>', ret)
    if(ret && ret.success){
      if(ret.result && ret.result.name){
        if(ret.result.name === 'zh'){
          emit('changeLang', zhCn)
        } else if(ret.result.name === 'en'){
          emit('changeLang', en)
        }
      }
    }
    
  } catch (e) {
    console.log('getLanguage e=>', e)
  }
}

onMounted(()=>{
  getLanguage()
})
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
      <el-menu-item index="records">{{t('header.records')}}</el-menu-item>
      <el-sub-menu index="language">
        <template #title>{{t('header.language')}}</template>
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
