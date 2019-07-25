<template>
  <div class="content_right">
    <Tabs type="card"
          closable>
      <TabPane v-for="tab in tabs"
               :key="tab"
               :label="'标签' + tab">标签{{ tab }}</TabPane>

    </Tabs>
  </div>
</template>
<script>
export default {
  name: 'mainRight',
  data () {
    return {
      tabs: 2
    }
  },
  methods: {
    handleTabRemove (name) {
      this['tab' + name] = false
    }
  }
}
</script>
<style lang='stylus' scoped>
.content_right
  position absolute
  top 70px
  left 230px
  right 0px
  bottom 0px
</style>
