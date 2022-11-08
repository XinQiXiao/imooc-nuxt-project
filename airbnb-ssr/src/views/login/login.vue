<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-08 13:39:01
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-08 15:05:38
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/views/login/login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, reactive } from 'vue'
const activeName = ref('login')

const ruleFormRef = ref()

const ruleForm = reactive({
    mobile: '',
    password: ''
})
const rules = reactive({
    mobile: [
        {
            required: true,
            min: 11,
            max: 11,
            message: '请输入正确的手机号码',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '请输入正确的密码',
            trigger: 'blur'
        }
    ]
})


function handleTabClick(event){
    console.log('handleTabClick event=>', event)
}

function submitForm(){
    ruleFormRef.value.validate((valid: any) => {
        if(valid){
            alert('成功')
        } else {
            return false
        }
    })
}

</script>

<template>
    <div class="login-page">
        <div class="left-part"></div>
        <div class="right-part">
            <div class="login-panel">
                <el-tabs v-model="activeName" @tab-click="handleTabClick">
                    <el-tab-pane label="登录" name="login"></el-tab-pane>
                    <el-tab-pane label="注册" name="sign"></el-tab-pane>
                </el-tabs>
                <el-form
                    ref="ruleFormRef" :model="ruleForm" :rules="rules"
                >
                    <el-form-item prop="mobile">
                        <el-input
                            placeholder="请输入正确的手机号"
                            v-model="ruleForm.mobile"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            placeholder="请输入正确的密码"
                            v-model="ruleForm.password"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button 
                            class="login-btn" type="primary"
                            @click="submitForm"
                        >登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/login/login.scss";
</style>