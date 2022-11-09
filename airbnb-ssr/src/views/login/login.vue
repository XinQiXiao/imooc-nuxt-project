<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-08 13:39:01
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-09 18:23:25
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/views/login/login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const router = useRouter()

const activeName = ref('login')
const loginText = ref(t(`login.loginBtn`))

const ruleFormRef = ref()

const ruleForm = reactive({
    mobile: '15311112222',
    password: '1'
})
const rules = reactive({
    mobile: [
        {
            required: true,
            min: 11,
            max: 11,
            message: t('login.placeMobile'),
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: t('login.placePass'),
            trigger: 'blur'
        }
    ]
})


function handleTabClick(event: any){
    const { name } = event.props
    // console.log('handleTabClick name=>', name)
    loginText.value = t(`login['${name}Btn']`)
}

function submitForm(){
    ruleFormRef.value.validate((valid: any) => {
        if(valid){
            router.push({name: 'home'})
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