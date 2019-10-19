<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
  import LoginForm from '@/components/login-form/login-form'
  // import axios from 'axios'
  export default {
    components: {
      LoginForm
    },
    methods: {
      handleSubmit ({ userName, password }) {
        if (userName && password) {
          this.$Message.success("登录成功")
          sessionStorage.setItem("loginuser",userName)
          setTimeout(() => {
            this.$router.push("/")
          }, 0)
        } else {
          this.$Message.error("请填写完整信息")
        }
        // this.$Loading.start()
        // axios
        //   .get("http//localhost:8080/user/login", {
        //     parmas: {
        //       username: userName,
        //         password
        //     }
        //   })
        //   .then(res => {
        //     this.$Loading.finish()
        //     if (res.data.success) {
        //       this.$Message.success("登录成功")
        //       setTimeout(() => {
        //         this.$router.push("/")
        //       }, 300)
        //     } else {
        //       this.$Message.error("用户名或密码错误")
        //     }
        //   }).catch(e => {
        //   this.$Message.error("服务器繁忙")
        // })
      }
    }
  }
</script>



<!--<template>-->
  <!--<div class="login">-->
    <!--<div class="login-con">-->
      <!--<Card icon="log-in" title="欢迎登录" :bordered="false">-->
        <!--<div class="form-con">-->
          <!--<Form ref="formValidate" :model="form" :rules="rules">-->
            <!--<FormItem prop="userName">-->
              <!--<Input v-model="form.username" placeholder="请输入用户名"></Input>-->
              <!--<span slot="prepend">-->
                <!--<Icon :size="16" type="ios-person"></Icon>-->
              <!--</span>-->
            <!--</FormItem>-->
            <!--<FormItem prop="password">-->
              <!--<Input v-model="form.password" type="password" placeholder="请输入密码"></Input>-->
              <!--<span slot="prepend">-->
                <!--<Icon :size="14" type="md-lock"></Icon>-->
              <!--</span>-->
            <!--</FormItem>-->
            <!--<FormItem>-->
              <!--<Button @click="handleSubmit('formValidate')" type="primary" long>登录</Button>-->
            <!--</FormItem>-->
          <!--</Form>-->
          <!--<p class="login-tip">输入任意用户名和密码即可</p>-->
        <!--</div>-->
      <!--</Card>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--form: {-->
          <!--username: '',-->
          <!--password: ''-->
        <!--},-->
        <!--rules: {-->
          <!--username: [-->
            <!--{ required: true, message: '账号不能为空', trigger: 'blur' }-->
          <!--],-->
          <!--password: [-->
            <!--{ required: true, message: '密码不能为空', trigger: 'blur' }-->
          <!--]-->
        <!--}-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--handleSubmit (name) {-->
        <!--this.$refs[name].validate((valid) => {-->
          <!--if (valid) {-->
            <!--this.$Message.success("登录成功")-->
            <!--setTimeout(() => {-->
              <!--this.$router.push("/")-->
            <!--}, 0)-->
          <!--} else {-->
            <!--this.$Message.error('登陆失败!')-->
          <!--}-->
        <!--})-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<style scoped>
  .login {
    width: 100vw;
    height: 100vh;
    background-image: url('./../../assets/images/login-bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .login-con {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-60%);
    width: 300px;
  }
  .login-con-header{
     font-size: 16px;
     font-weight: 300;
     text-align: center;
     padding: 30px 0;
   }
  .login-con .form-con{
    padding: 10px 0 0;
  }
  .login-con .login-tip{
    font-size: 10px;
    text-align: center;
    color: #c3c3c3;
  }
</style>