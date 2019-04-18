<template>
  <div>
    <form v-if="show">
      用户名<input type="text"
             v-model="username"><br>
      密码<input type="password"
             v-model="password"><br>
      <button @click.prevent="login">登录</button>
      <button @click.prevent="show = false">注册</button>
    </form>
    <form v-else>
      用户名<input type="text"
             v-model="username"><br>
      密码<input type="password"
             v-model="password"><br>
      确认密码<input type="password"
             v-model="rePassword"><br>
      <button @click="reg">确定</button>
      <button @click="show = true">取消</button>
    </form>

  </div>
</template>
<script>
export default {
  props: [],
  data () {
    return {
      show: true,
      username: '',
      password: '',
      rePassword: ''
    }
  },
  methods: {
    login () {
      if (localStorage.getItem('username') === this.username && localStorage.getItem('password') === this.password) {
        this.$router.push('/home/list')
      } else {
        alert('user不对')
      }
    },
    reg () {
      if (this.password === this.rePassword) {
        localStorage.setItem('username', this.username)
        localStorage.setItem('password', this.password)
        this.show = true
      } else {
        alert('两个密码不一样')
      }
    }
  },
  watch: {
    show () {
      this.username = ''
      this.password = ''
      this.rePassword = ''
    }
  }
}
</script>
<style scoped>
</style>
