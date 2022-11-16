<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-03 13:36:11
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-16 11:59:19
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/components/layout/headerCommon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { onMounted, ref, getCurrentInstance, } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { fetchLanguageApi, } from '../../api/layout'
import { userLogoutApi } from '@/api/login'
import { IResultOr } from '@/api/interface'
import { useStore } from 'vuex'

const { t, locale: localeLanguage } = useI18n()
const router = useRouter()
const { proxy }: any = getCurrentInstance()
const activeIndex = ref('orders')
const store = useStore()

const emit = defineEmits<{
  (e: 'changeLang', language: any): void
}>()
function handleSelect(e: any){
  if(e === 'zh'){
    store.dispatch('saveLanguage', zhCn)
    localeLanguage.value = zhCn.name
  } else if(e === 'en'){
    store.dispatch("saveLanguage", en)
    localeLanguage.value = en.name
  } else if(e === 'login'){
    router.push({name: 'login'})
  } else if(e === 'logout'){
    userLogout()
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
  // getLanguage()
})

// 登出接口
function userLogout() {
  userLogoutApi().then((res: IResultOr) => {
    const { success, message } = res
    if (success) {
      proxy.$message.success(message)
      router.push({ name: 'login' })
      store.commit('setUserStatus', 0)
    } else {
      // 错误情况也允许退出
      proxy.$message.error(message)
      router.push({ name: 'login' })
      store.commit('setUserStatus', 0)
    }
  })
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
      <el-menu-item index="records">{{t('header.records')}}</el-menu-item>
      <el-sub-menu index="language">
        <template #title>{{t('header.language')}}</template>
        <el-menu-item index="zh">中文</el-menu-item>
        <el-menu-item index="en">English</el-menu-item>
      </el-sub-menu>
      <el-menu-item v-if="store.state.userStatus === 1" index="logout">{{t('login.logout')}}</el-menu-item>
      <el-menu-item v-else index="login">{{ t("login.loginTab") }}/{{ t("login.signTab") }}</el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/scss/layout/commonHeader.scss";
</style>
