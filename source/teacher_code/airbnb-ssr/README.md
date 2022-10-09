# 版本修复
## V0.0.0
**dev-13.5** 分支为视频教程中最终源码，我们设定为**V0.0.0**版本，将该分支合并到 **master** 分支后，所对应的提交版本号为**132406d3de**。

后续如果在 **dev-13.5** 分支代码之上存在缺陷或优化，为了方便同学们查看，我都会将问题汇总在 **issues** 中，并在下面的 **V0.0.X** 中列出修复的内容，并统一将代码合并到 **master** 。
## V0.0.1
* **【完成】** master（提交版本号 **0947d06d5d**）登录过期问题&详情页面重复调用接口问题 （**issues_#4**）
* **【完成】** master（提交版本号 **5b2b9c3cf8**）修复资源预加载重复问题 （**issues_#2**）
* **【完成】** master（提交版本号 **2018ca12fe**）Vue-i18n报错：SyntaxError: Not available in legacy mode （**issues_#5**）
* **【完成】** master（提交版本号 **49990e91c6**）Cannot find module './dist/client/ssr-manifest.json' （**issues_#3**）

* * *

# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
