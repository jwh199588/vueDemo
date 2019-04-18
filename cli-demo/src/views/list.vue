<template>
  <div>
    <ul>
      <li v-for="(item,index) in list"
          :key="index">
        {{item.title}}----{{item.content}}
      </li>
    </ul>
  </div>
</template>
<script>
import store from '@/store'
export default {
  store,
  data () {
    return {
    }
  },
  computed: {
    list () {
      return store.state.news
    }
  }
}
</script>
<style scoped>
</style>
