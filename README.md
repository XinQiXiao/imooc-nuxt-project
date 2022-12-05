<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-08 18:27:29
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-12-05 18:43:40
 * @FilePath: /study/demo/imooc-nuxt-project/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
### 资料
[imooc 项目地址]
（http://110.42.184.111）

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
[资料]（https://www.imooc.com/wiki/SSR/h3.html）
    code TODO 9-6
    视频 TODO 9-6

    client
    https://git.imooc.com/coding-566/airbnb-ssr/commit/41603e21303346ff239a35984c1246bca6d026a2
    server

    8-10 图4 main中数据库初始化成功
    
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
    npm install sass -D
    配置
css: {
// css 预处理 路径最后要加上；不然会报错
preprocessorOptions: {
    scss: {
    additionalData: '@import "@/assets/scss/main.scss";'
    }
}
},

    axios 安装
    npm install axios --save
    axios 跨域配置，路径配置
    vite.config.ts
server: {
host: 'localhost',
    port: 3000,
    proxy: {
        '/release': {
        target: 'https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/release/, '')
        }
    }
}

    国际化
    element-plus 配置 el-config-provider
    vue-i18n
    安装： npm install vue-i18n@next --save
    (9.2.0-beta.25 需要这个版本，其他版本会报错)
