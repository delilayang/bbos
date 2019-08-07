<template>
<div class="header-login">
    <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
        <el-form-item prop="username">
            <el-input size="small" >
            <i slot="prefix" class="icon-yonghu"></i>
            </el-input>
            <!-- <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="請輸入帳號">
            <i slot="prefix" class="icon-yonghu"></i>
            </el-input> -->
        </el-form-item>
        <el-form-item prop="password">
            <el-input size="small" auto-complete="off" placeholder="請輸入密碼">
                <i class="el-icon-view el-input__icon" :style="fontstyle" slot="suffix"></i>
                <i slot="prefix" class="icon-mima"></i>
            </el-input>
            <!-- <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="請輸入密碼">
            <i class="el-icon-view el-input__icon" :style="fontstyle" slot="suffix" @click="showPassword"></i>
            <i slot="prefix" class="icon-mima"></i> -->
        </el-form-item>
        <!-- <el-form-item prop="verifycode"> -->
        <el-form-item>
        <!-- 注意：prop與input绑定的值一定要一致，否則驗證規則中的value會報undefined，因為value即為绑定的input輸入值 -->
            <el-input size="small" placeholder="請輸入驗證碼"></el-input>
            <!-- <el-input size="small" v-model="loginForm.verifycode" placeholder="請輸入驗證碼" class="identifyinput"></el-input> -->
        </el-form-item>
        <el-form-item>
            <div class="identifybox">
            <div>
            <s-identify></s-identify>
            </div>
            <!-- <div @click="refreshCode">
            <s-identify :identifyCode="identifyCode"></s-identify>
            </div> -->
            <!-- <el-button @click="refreshCode" type='text' class="textbtn">點擊更新驗證碼</el-button> -->
            </div>
        </el-form-item>
        <!-- <el-checkbox v-model="checked">記住帳號</el-checkbox> -->
        <el-form-item>
            <el-button type="primary" size="small" class="login-submit">登入</el-button>
            <!-- <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登入</el-button> -->
        </el-form-item>       
    </el-form>
    <div class="member-login">
        <el-button>忘記密碼</el-button>
        <span>|</span> <el-button>加入會員</el-button>
    </div>
    <div>
        <span>TW</span><span> | </span><span>EN</span><span> | </span><span>JP</span><span> | </span><span>CN</span>
    </div>
</div>
</template>
<script>
import { isvalidUsername } from '~/utils/validate'
import SIdentify from '~/components/common/SIdentify'
export default {
 name: 'userlogin',
 data() {
 // 用戶名自定義驗證規則
 const validateUsername = (rule, value, callback) => {
  if (!isvalidUsername(value)) {
  callback(new Error('請輸入正確的用戶名'))
  } else {
  console.log('user', value)
  callback()
  }
 }
 // 驗證碼自定義規則
 const validateVerifycode = (rule, value, callback) => {
  if (value === '') {
  callback(new Error('請輸入驗證碼'))
  } else if (value !== this.identifyCode) {
  console.log('validateVerifycode:', value)
  callback(new Error('驗證碼不正確!'))
  } else {
  callback()
  }
 }
 return {
  fontstyle: {
  },
  loginForm: {
  username: 'admin',
  password: '123456',
  verifycode: ''
  },
  checked: false,
  identifyCodes: '1234567890',
  identifyCode: '',
  loginRules: { // 綁定在form表單中的驗證規則
  username: [
   { required: true, trigger: 'blur', validator: validateUsername }
  ],
  password: [
   { required: true, message: '請輸入密碼', trigger: 'blur' },
   { min: 6, message: '密碼長度最少6位數', trigger: 'blur' }
  ],
  verifycode: [
   { required: true, trigger: 'blur', validator: validateVerifycode }
  ]
  },
  passwordType: 'password'
 }
 },
 components: {
 SIdentify
 },
 created() {
 },
 mounted() {
 // 驗證碼初始化
 this.identifyCode = ''
 this.makeCode(this.identifyCodes, 4)
 },
 computed: {
 },
 props: [],
 methods: {
 // 通過改變input的type使密碼可見
 showPassword() {
  this.fontstyle === '' ? (this.fontstyle = 'color: red') : (this.fontstyle = '') // 改變密碼可見按鈕顏色
  this.passwordType === ''
  ? (this.passwordType = 'password')
  : (this.passwordType = '')
 },
 // 點擊登入按鈕
 handleLogin() {
  this.$refs.loginForm.validate(valid => {
  if (valid) {
   this.$store.dispatch('Login', this.loginForm).then(res => {
   this.$router.push({ path: '/dashboard/dashboard' })
   })
  }
  })
 },
 // 生成隨機數
 randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
 },
 // 切換驗證碼
 refreshCode() {
  this.identifyCode = ''
  this.makeCode(this.identifyCodes, 4)
 },
 // 生成四位隨機驗證碼
 makeCode(o, l) {
  for (let i = 0; i < l; i++) {
  this.identifyCode += this.identifyCodes[
   this.randomNum(0, this.identifyCodes.length)
  ]
  }
  console.log(this.identifyCode)
 }
 }
}
</script>
<style lang="scss" scoped>
.identifybox {
    display: flex;
    justify-content: space-between;
}
.iconstyle {
    color: #409EFF;
}
.login-form {
    display: flex;
    .el-form-item {
        margin: 0.2em;
    }
}
.header-login {
    background: #99a9bf;
    display: flex;
    align-items: center;
    .member-login {
        .el-button {
            height: 32px;
            background: transparent;
            border: transparent;
            padding: 10px 5px;
        }
    }  
}
</style>
