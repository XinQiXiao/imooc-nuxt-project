<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-08 18:27:29
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-10-24 18:30:53
 * @FilePath: /study/demo/imooc-nuxt-project/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 资料
[TypeScript]
(http://ts.xcatliu.com/introduction/index.html)

[vite]
(https://cn.vitejs.dev/guide/why.html)

[nuxt]
(https://www.nuxtjs.org.cn/getting-started/installation.html)

[vue3]
(https://cn.vuejs.org/guide/introduction.html)
    
    开始
        简介
        快速上手
    基础
        创建一个应用
        模板语法
        响应式基础
        计算属性
        类与样式绑定
        条件渲染

[视频]
    3-6
    
    nvm 安装（先不安装，本地有 n）

    vue-router 4 安装
    npm install vue-router@next --save

    element-plus 安装
    npm install element-plus --save
    按需导入：npm install -D unplugin-vue-components unplugin-auto-import
    vite.config.ts中做如下配置：
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
plugins: [
    // ...
    AutoImport({
    resolvers: [ElementPlusResolver()],
    }),
    Components({
    resolvers: [ElementPlusResolver()],
    }),
],
}

    eslint 集成
    npm install eslint -D
    npx eslint --init

    sass 安装


[资料]（https://www.imooc.com/wiki/SSR/a2.html）