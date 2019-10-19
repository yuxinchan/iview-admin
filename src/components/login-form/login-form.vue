<template>
  <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <FormItem prop="userName">
      <Input v-model="form.userName" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'LoginForm',
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        userName: 'yuxinchan',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit () {
      // this.$emit('on-success-valid', {
      //   userName: this.form.userName,
      //   password: this.form.password
      // })
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.form.userName,
            password: this.form.password
          })
        }
      })
    }
  }
}
</script>


<!--<template>-->
  <!--<Form ref="formValidate" :model="form">-->
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
      <!--<Button @click="handleSubmit" type="primary" long>登录</Button>-->
    <!--</FormItem>-->
  <!--</Form>-->
<!--</template>-->
<!--<script>-->
  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--form: {-->
          <!--username: 'yuxinchan',-->
          <!--password: ''-->
        <!--},-->
        <!--// rules: {-->
        <!--//   username: [-->
        <!--//     { required: true, message: '账号不能为空', trigger: 'blur' }-->
        <!--//   ],-->
        <!--//   password: [-->
        <!--//     { required: true, message: '密码不能为空', trigger: 'blur' }-->
        <!--//   ]-->
        <!--// }-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--handleSubmit() {-->
        <!--// this.$refs[name].validate((valid) => {-->
        <!--//   if (valid) {-->
        <!--//     this.$Message.success("登录成功")-->
        <!--//     setTimeout(() => {-->
        <!--//       this.$router.push("/")-->
        <!--//     }, 0)-->
        <!--//   } else {-->
        <!--//     this.$Message.error('登陆失败!');-->
        <!--//   }-->
        <!--// })-->
        <!--if (this.username && this.password) {-->
          <!--this.$emit('on-success-valid', {-->
            <!--userName: this.form.userName,-->
            <!--password: this.form.password-->
          <!--})-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->