/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-27 14:11:46
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-10-31 13:24:41
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/utils/indexedDB.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default class DB {
  private dbName: string // 数据库名称
  private db: any // 数据库对象
  constructor(dbName: string) {
    this.dbName = dbName
  }
  
  // 打开数据库
  public openStore(storeName: string, keyPath: string, indexs?: Array<string>) {
    return new Promise((resolve, reject)=>{
      const request = window.indexedDB.open(this.dbName, 2)
      request.onsuccess = (event: any) => {
        console.log('数据库打开成功')
        this.db = event.target.result
        console.log('openStore onsuccess event=>', event)
        return resolve(true)
      }
      request.onerror = (event) => {
        console.log('数据库打开失败')
        console.log('openStore onerror event=>', event)
        return reject(false)
      }
      request.onupgradeneeded = (event) => {
        console.log('数据库升级成功')
        const { result }: any = event.target
        const store = result.createObjectStore(storeName, { autoIncrement: true, keyPath })
        if (indexs && indexs.length > 0) {
          indexs.map((v: string) => {
            store.createIndex(v, v, { unique: false })
          })
        }
        store.transaction.oncomplete = (event: any) => {
          console.log('创建对象仓库成功')
        }
        console.log('onupgradeneeded event=>', event)
        return resolve(true)
      }
    })
  }

  public updateItem(storeName: string, data: any) {
    console.log('updateItem db=>', this.db)
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
    const request = store.put({
      ...data,
      updateTIme: new Date().getTime()
    })
    return new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log('数据写入成功')
        console.log('updateItem onsuccess event=>', event)
        return resolve(event)
      }
      request.onerror = (event: any) => {
        console.log('数据写入失败')
        console.log('updateItem onerror event=>', event)
        return reject(event)
      }
    })
    
  }

  public deleteItem(storeName: string, key: number | string) {
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
    const request = store.delete(key)
    return new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log('数据删除成功')
        console.log('deleteItem onsuccess event=>', event)
        return resolve(event)
      }
      request.onerror = (event: any) => {
        console.log('数据删除失败')
        console.log('deleteItem onerror event=>', event)
        return reject(event)
      }
    })
  }

  public getList(storeName: string) {
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
    const request = store.getAll()
    return new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log('查询所有数据成功')
        console.log('getList onsuccess result=>', event.target.result)
        return resolve(event.target.result)
      }
      request.onerror = (event: any) => {
        console.log('查询所有数据失败')
        console.log('getList onerror event=>', event)
        return reject(event)
      }
    })
  }

  public getItem(storeName: string, key: number | string) {
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
    const request = store.get(key)
    return new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        console.log('查询某一条数据成功')
        console.log('getItem onsuccess result=>', event.target.result)
        return resolve(event.target.result)
      }
      request.onerror = (event: any) => {
        console.log('查询某一条数据失败')
        console.log('getItem onerror event=>', event)
        return reject(event)
      }
    })
  }
  
}
  
  
  