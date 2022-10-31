<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-24 16:10:43
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-10-31 16:30:36
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/views/home/home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { useRoute, useRouter, } from 'vue-router'
import { h, getCurrentInstance, ref, } from 'vue'
import { fetchDemo, fetchElephant, } from '../../api/api'
// home.vue
import IndexedDB from '../../utils/indexedDB'
import airbnbDB from '../../utils/indexedDB'



const router = useRouter()
const route = useRoute()

const value1 = ref('')
const airbnbDBInstance = new IndexedDB('airbnb')

console.log('home route.params=>', route.params)

function messageClick () {
  const { proxy }: any = getCurrentInstance();
  proxy.$message({
    message: h('p', null, [
      h('span', null, 'Message can be'),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  });
}

const apiDemoClick = async () => {
  try {
    await fetchDemo()
  } catch (e) {
    console.log('getRoomList e=>', e)
  }
}

async function dbAddClick () {
  try {
		await airbnbDBInstance.openStore('elephant', 'id', ['nose', 'ear'])
		airbnbDBInstance.updateItem(
			'elephant', {
				nose: '3m',
				ear: 'big',
			}
		)
	} catch (e) {
		console.log('dbAddClick e=>', e)
	}
}
async function dbEditClick () {
	try {
		await airbnbDBInstance.openStore('elephant', 'id', ['nose', 'ear'])
		airbnbDBInstance.updateItem(
			'elephant', {
				id: 2,
				nose: '5m',
				ear: 'big big big',
			}
		)
	} catch (e) {
		console.log('dbEditClick e=>', e)
	}
}
async function dbListClick () {
	try {
		const ret = await fetchElephant()
		console.log('ret=>', ret)
	} catch (e) {
		console.log('dbEditClick e=>', e)
	}
}
async function dbListItemClick () {
	try {
		await airbnbDBInstance.openStore('elephant', 'id', ['nose', 'ear'])
		airbnbDBInstance.getItem(
			'elephant', 1
		)
	} catch (e) {
		console.log('dbEditClick e=>', e)
	}
}
async function dbDeleteItemClick () {
	try {
		await airbnbDBInstance.openStore('elephant', 'id', ['nose', 'ear'])
		airbnbDBInstance.deleteItem(
			'elephant', 4
		)
	} catch (e) {
		console.log('dbEditClick e=>', e)
	}
}


</script>

<template>
    <div class="home-container">
        <button @click="()=> router.push({ path: '/mine', query: { id: 1} })">跳转个人中心</button>
        <el-button @click="messageClick">message demo</el-button>
        <el-button @click="apiDemoClick">接口demo</el-button>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
            size="small"
        />
        <el-button @click="dbAddClick">数据库 添加 </el-button>
        <el-button @click="dbEditClick">数据库 编辑 </el-button>
        <el-button @click="dbListClick">数据库 获取列表 </el-button>
				<el-button @click="dbListItemClick">数据库 获取单个数据 </el-button>
				<el-button @click="dbDeleteItemClick">数据库 删除单个数据 </el-button>
    </div>
</template>

<style >
    .home-container {
        background-color: yellow;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
</style>