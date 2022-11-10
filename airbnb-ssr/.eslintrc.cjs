/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-24 17:16:32
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-10 15:08:28
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
