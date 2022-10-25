/*
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-17 13:12:51
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-10-25 13:25:45
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  css: {
    // css 预处理 路径最后要加上；不然会报错
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/main.scss";'
      }
    }
  },
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
})

