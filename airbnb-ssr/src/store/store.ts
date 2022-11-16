/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-16 11:37:32
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-16 11:39:01
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/store/store.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from 'vuex'
import { saveLanguageApi } from '@/api/layout'

export const store = createStore({
	state: {
    count: 1,
    locale: null, // 语言包
    userStatus: 0 // 登录态
  },
	mutations: {
    setCount(state, payload) {
      state.count += payload
      return state.count
    },
    setLanguage(state, payload) { // 设置语言包
      state.locale = payload
      return state.locale
    },
    setUserStatus(state, payload) { // 设置登录态
      state.userStatus = payload
      return state.userStatus
    }
  },
	actions: {
    fetchCount({ commit, state }, payload) {
      setTimeout(() => {
        commit('setCount', payload)
      }, 3000)
    },
    saveLanguage({ commit, state }, language: any) { // 保存语言包
      saveLanguageApi(language.name).then(res => {
        const { success } = res
        if (success) {
          commit('setLanguage', language)
          console.log('保存当前语言包成功')
        }
      })
    }
  }
})