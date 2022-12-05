<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-10-24 16:10:48
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-12-05 17:27:43
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/views/mine/mine.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, reactive, Ref } from 'vue'
const dateForm = reactive({
		date: '',
	})

</script>

<template>
    <div class="mine-container">
        <!-- <div class="block">
            <span class="demonstration">Default</span>
            <el-date-picker
                v-model="dateForm.date"
                type="datetime"
                placeholder="Select date and time"
            />
        </div> -->
    </div>
    
</template>

<style >
.mine-container {
    position: relative;
    width: 400px;
    height: 400px;
    background-color: yellow;
}
</style>