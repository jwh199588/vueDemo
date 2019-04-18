<template>
  <div>
    <input type="text"
           v-model="title">
    <input type="text"
           v-model="content">
    <button @click="add">添加</button>
  </div>
</template>
<script>
import store from '@/store'
export default {
  store,
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    add () {
      store.commit('addItem', {
        title: this.title,
        content: this.content
      })
      this.$router.push('/home/list')
    }
  }
}
</script>
<style scoped>
</style>
