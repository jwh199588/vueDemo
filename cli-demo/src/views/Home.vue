<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div>
      <router-link to="/home/list">新闻列表</router-link>
      <router-link to="/home/user">个人中心</router-link>
    </div>

  </div>
</template>
<script>
export default {
  props: [],
  data () {
    return {
    }
  }
}
</script>
<style scoped>
</style>
