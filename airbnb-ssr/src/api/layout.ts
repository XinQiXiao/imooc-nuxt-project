/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-03 16:49:10
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-07 17:36:38
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/api/layout.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { ElLoading } from 'element-plus'
import { IResultOr } from './interface'
import { airbnbDB, languageObjectStore, } from '../db/db' // 引入数据库和对象仓库
import { API_FAIL_CODE, API_SUCCESS_CODE } from './apiConst'

// console.log('languageObjectStore=>', languageObjectStore)
const storeName = Object.keys(languageObjectStore)[0]
// console.log('storeName=>', storeName)

// Mock接口：保存当前语言包
export async function saveLanguageApi(lang: any) {
    const loading = ElLoading.service({
        lock: true,
        background: 'rgba(0, 0, 0, 0.1)'
    })
    await airbnbDB.openStore(storeName, 'id', ['name'])
    const resultOr: IResultOr = await airbnbDB.getItem(storeName, 1).then(res => {
        return { code: API_SUCCESS_CODE, message: '操作成功', result: res || null, success: true }
    }).catch(e=>{
        console.log('saveLanguageApi getItem e=>', e)
        return { code: API_FAIL_CODE, message: '操作失败', result: null, success: false }
    })
    const { success } = resultOr
    let obj = {}
    if (success) { // 说明数据已存在，则更新数据
        obj = { name: lang, id: 1 }
    } else { // 说明数据不存在，则新增数据
        obj = { name: lang }
    }
    const result: IResultOr = await airbnbDB.updateItem(storeName, obj).then(res => {
        setTimeout(() => {
            loading.close()
        }, 200)
        return { code: API_SUCCESS_CODE, message: '操作成功', result: null, success: true }
    }).catch(e=>{
        loading.close()
        console.log('saveLanguageApi getItem e=>', e)
        return { code: API_FAIL_CODE, message: '操作失败', result: null, success: false }
    })
    return result
}

// Mock接口：获取当前语言包
export async function fetchLanguageApi() {
    const loading = ElLoading.service({
        lock: true,
        background: 'rgba(0, 0, 0, 0.1)'
    })
    await airbnbDB.openStore(storeName, 'id', ['name'])
    const result: IResultOr = await airbnbDB.getItem(storeName, 1).then(res => {
        setTimeout(() => {
            loading.close()
        }, 200)
        return { code: API_SUCCESS_CODE, message: '操作成功', result: res || null, success: true }
    }).catch(e=>{
        loading.close()
        console.log('fetchLanguageApi getItem e=>', e)
        return { code: API_FAIL_CODE, message: '操作失败', result: null, success: false }
    })
    return result
}
