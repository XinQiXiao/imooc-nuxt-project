/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-16 11:37:32
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-12-05 17:02:34
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/store/store.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { saveLanguageApi } from '@/api/layout'
import { InjectionKey } from 'vue'
import { fetchRoomList } from '@/api/api.ts'

// 为 store state 声明类型
export interface AllStateTypes {
  count: number,
  locale: any,
  userStatus: Number,
  roomList: Array<any>,
}

// 定义 injection key
export const key: InjectionKey<Store<AllStateTypes>> = Symbol('storeKey')

export function useStore() {
  return baseUseStore(key)
}

export function createSSRStore() {
  return createStore<AllStateTypes>({
    state: {
      count: 1,
      locale: null, // 语言包
      userStatus: 0, // 登录态
      roomList: []
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
      },
      setRoomList(state, payload) { // 设置房屋列表数据
        state.roomList = payload
        return state.roomList
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
      },
      getRoomList({ commit }) {
        fetchRoomList().then(res => {
          const { success, result } = res
          const orders = result.orders
          if (success) {
            console.log('保存到Vuex中', orders)
            commit('setRoomList', orders)
          }
        })
      }
    }
  })
}