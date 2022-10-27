/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-27 14:11:46
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-10-27 14:12:31
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/utils/indexedDB.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default class DB {
    private dbName: string // 数据库名称
    constructor(dbName: string) {
      this.dbName = dbName
    }
  
    // 打开数据库
    public openStore(storeName: string, keyPath: string, indexs?: Array<string>) {
      const request = window.indexedDB.open(this.dbName, 2)
      request.onsuccess = (event) => {
        console.log('数据库打开成功')
        console.log(event)
      }
      request.onerror = (event) => {
        console.log('数据库打开失败')
        console.log(event)
      }
      request.onupgradeneeded = (event) => {
        console.log('数据库升级成功')
        const { result }: any = event.target
        const store = result.createObjectStore(storeName, { autoIncrement: true, keyPath })
        if (indexs && indexs.length > 0) {
          indexs.map((v: string) => {
            store.createIndex(v, v, { unique: true })
          })
        }
        store.transaction.oncomplete = (event: any) => {
          console.log('创建对象仓库成功')
        }
        console.log(event)
      }
    }
  }
  
  
  