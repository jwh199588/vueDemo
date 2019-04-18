<template>
  <div>
    <h2>{{user}} 欢迎来到个人中心</h2>
    <div><button @click="add">添加</button></div>
  </div>

</template>
<script>
export default {
  props: [],
  data () {
    return {
      user: localStorage.getItem('username')
    }
  },
  methods: {
    add () {
      this.$router.push('/add')
    }
  }
}
</script>
<style scoped>
</style>
