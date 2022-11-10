/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-10 15:05:20
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-10 15:10:24
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/composables/login/useFormProperties.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref, reactive, Ref } from 'vue'
interface IRuleForm {
  mobile: string,
  password: string
}
interface IRuleItem {
  required: boolean;
  min?: number;
  max?: number;
  message: string;
  trigger: string;
}
interface IRules {
  mobile: IRuleItem[],
  password: IRuleItem[]
}
interface Result {
  activeName: Ref<string>,
  loginText: Ref<any>,
  ruleFormRef: any,
  ruleForm: IRuleForm,
  rules: IRules
}
export default function useFormProperties(t: any): Result {
	const activeName = ref('login')
	const loginText = ref(t('login.loginBtn'))
	const ruleFormRef = ref()
	const ruleForm = reactive({
		mobile: '15312340000',
		password: '1'
	})
	const rules = reactive({
		mobile: [
			{
				required: true,
				min: 11,
				max: 11,
				message: t('login.placeMobile'),
				trigger: 'blur'
			}
		],
		password: [
			{
				required: true,
				message: t('login.placePass'),
				trigger: 'blur'
			}
		]
	})
	return {
		activeName,
		loginText,
		ruleFormRef,
		ruleForm,
		rules
	}
}