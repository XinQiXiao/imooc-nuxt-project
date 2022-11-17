/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-10 15:12:11
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-17 18:03:26
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/composables/login/useFormOperates.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IResultOr } from '@/api/interface'
import { userSignApi, userLoginApi } from '@/api/login'
import { getCurrentInstance } from 'vue'
import { useStore } from '@/store/store'
import { Router } from 'vue-router'
interface IRuleForm {
	mobile: string,
	password: string
}
interface Result {
	userSign: (params: IRuleForm) => void,
	userLogin: (params: IRuleForm) => void,
}

export default function useFormOperates(router: Router, params: IRuleForm): Result {
  const { proxy }: any = getCurrentInstance()
  const store = useStore()
  // 注册接口
  function userSign(): void {
    userSignApi(params).then((res: IResultOr) => {
      const { success, message } = res
      if (success) {
        proxy.$message.success(message)
      } else {
        proxy.$message.error(message)
      }
    })
  }

  // 登录接口
  function userLogin(): void {
    userLoginApi(params).then((res: IResultOr) => {
      const { success, message, result } = res
      if (success) {
        const { status } = result
        store.commit('setUserStatus', status)
        router.push({ name: 'home' })
        proxy.$message.success(message)
      } else {
        proxy.$message.error(message)
      }
    })
  }
  return {
    userSign,
    userLogin
  }
}