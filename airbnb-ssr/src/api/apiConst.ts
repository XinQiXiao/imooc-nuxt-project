/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-04 11:02:07
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-04 11:02:44
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/api/apiConst.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * code: '000000'表示'操作成功'；code: '000001'表示'数据已存在'；code: '000002'表示'密码不正确'；
 * code: '000003'表示'手机号不正确'；code: '000004'表示'其他异常'；code: '000005'表示'登录过期'；
 */
const API_SUCCESS_CODE = '000000'
const API_FAIL_CODE = '000004'

export {
    API_SUCCESS_CODE,
    API_FAIL_CODE,
}