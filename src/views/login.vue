<template>
  <el-container class="login-container">
    <el-header class="login-header">
      <el-row :gutter="20">
        <el-col :span="1">
          <img class="logo" src="@/assets/logo/logo.png">
        </el-col>
        <el-col :span="14">
          <h1 class="title">气象信息智慧监测管理系统</h1>
        </el-col>
        <el-col :span="8">
          <div style="text-align: center;">24小时客服热线: <span class="text">123456</span></div>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="login">
      <div class="login-form">
        <el-row>
          <el-col :span="24" class="login-title">
            <h2>用户登陆</h2>
          </el-col>
        </el-row>
        <el-form ref="loginRef" :model="loginForm" status-icon :rules="rules" size="large">
          <div class="tool-button-container">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" type="text" placeholder="请输入用户名">
                <template #prefix><el-icon size="large">
                    <User />
                  </el-icon></template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="loginForm.password" type="password" placeholder="请输入密码">
                <template #prefix><el-icon size="large">
                    <Unlock />
                  </el-icon></template>
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input v-model="loginForm.code" size="large" placeholder="验证码" style="width: 60%">
                <template #prefix><el-icon size="large">
                    <Key />
                  </el-icon></template>
              </el-input>
              <div class="login-code">
                <img :src="codeUrl" @click="getCode" class="login-code-img" />
              </div>
            </el-form-item>
            <el-button type="primary" @click="submitForm(loginRef)" class="login-btn">登 录</el-button>
            <div class="other-tips">
              <el-row class="row-bg" justify="end">
                <el-col :span="12" style="text-align: left;"><a href="#">忘记密码？</a></el-col>
                <el-col :span="12" style="text-align: right;"><span>还没有登录账号？</span>
                  <a href="#">注册账号</a></el-col>
              </el-row>
            </div>
          </div>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { getCodeImg } from '@/api/login'

const loginRef = ref<FormInstance>()

const loginForm = reactive({
  username: '',
  password: '',
  code: '',
  uuid: ''
})

const rules = reactive<FormRules>({
  username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
  code: [{ required: true, trigger: "change", message: "请输入验证码" }]
})

// 验证码地址
const codeUrl = ref('')
const loading = ref(false)

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

function getCode() {
  getCodeImg().then(res => {
    codeUrl.value = 'data:image/gif;base64,' + res.img
    loginForm.uuid = res.uuid
  })
}

getCode()
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
}

.login {
  background-image: url(@/assets/images/bg.jpg);
  background-size: cover;
  height: 100%;
  align-items: center;
  position: relative;
}

.text {
  color: #00796a;
  font-weight: bold;
}

.login-header {
  height: 95px;
  line-height: 95px;
}

.logo {
  height: 60px;
  vertical-align: middle;
}

.title {
  display: inline;
  color: #00796a;
  margin-left: 5px;
}

.login-form {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 20px 50px;
  width: 400px;
  height: 420px;
  background-color: #fff;
  border-radius: 10px;
}

.login-title {
  color: #00796a;
  text-align: center;
  padding: 20px 0;
}

.tool-button-container {
  text-align: center;
}

.login-btn {
  width: 400px;
  font-size: 18px;
}

.login-code {
  width: 40%;
  height: 40px;
  text-align: right;

  img {
    cursor: pointer;
  }
}

.login-code-img {
  height: 40px;
}

.other-tips {
  margin-top: 30px;
  font-size: 14px;
}</style>
