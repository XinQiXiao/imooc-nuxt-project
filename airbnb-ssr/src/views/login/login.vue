<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-08 13:39:01
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-10 15:14:08
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/views/login/login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">

import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import useFormProperties from '@/composables/login/useFormProperties'
import useFormOperates from '@/composables/login/useFormOperates'

const { t } = useI18n()

const router = useRouter()

const { ruleForm, loginText, ruleFormRef, activeName, rules } = useFormProperties(t)
const { userSign, userLogin } = useFormOperates(router, ruleForm)

function handleTabClick(event: any){
    const { name } = event.props
    // console.log('handleTabClick name=>', name)
    loginText.value = t(`login['${name}Btn']`)
}

function submitForm(){
    ruleFormRef.value.validate((valid: any) => {
        if(valid){
            if(activeName.value == 'sign'){
                userSign()
            } else if(activeName.value == 'login'){
                userLogin()
            }
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
                    <el-tab-pane :label="t('login.loginTab')" name="login"></el-tab-pane>
                    <el-tab-pane :label="t('login.signTab')" name="sign"></el-tab-pane>
                </el-tabs>
                <el-form
                    ref="ruleFormRef" :model="ruleForm" :rules="rules"
                >
                    <el-form-item prop="mobile">
                        <el-input
                            :placeholder="t('login.placeMobile')"
                            v-model="ruleForm.mobile"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            :placeholder="t('login.placePass')"
                            v-model="ruleForm.password"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button 
                            class="login-btn" type="primary"
                            @click="submitForm"
                        >{{loginText}}</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/login/login.scss";
</style>