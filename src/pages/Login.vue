<template>
  <div class="login">
    <Form ref="formInline" :model="formLogin" :rules="ruleInline">
        <FormItem prop="user">
            <Input type="text" v-model="formLogin.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formLogin.password" placeholder="Password">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
        formLogin: {
            user: '',
            password: ''
        },
        ruleInline: {
            user: [
                { required: true, message: '请填写用户名', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请填写密码', trigger: 'blur' },
                { type: 'string', min: 5, message: '密码不少于5位', trigger: 'blur' }
            ]
        }
    }
  },
  methods: {
    handleSubmit (name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                this.$Message.success('登录成功!')
                this.LOGIN({
                    user: this.formLogin.user,
                    password: this.formLogin.password
                }).then((res) => {
                    this.$router.push('/hello')
                })
            } else {
                this.$Message.error('Fail!')
            }
        })
    },
    ...mapActions(['LOGIN'])
  }
}
</script>


<style>
  .login{
    background-color: #50BFFF;
    width: 35%;
    margin: 0 auto;
    margin-top: 100px;
    border: solid 1px #50BFFF;
    padding: 20px;
    border-radius: 5px;
  }
</style>