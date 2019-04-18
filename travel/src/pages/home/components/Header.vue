<template>
  <div class="header">
    <div class="header-left">left</div>
    <div class="header-center">cemter</div>
    <div class="header-right">right</div>
  </div>
</template>
<script>
export default {
  props: [],
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  mounted: {},
  methods: {}
}
</script>
<style lang="stylus" scoped>
.header
  display flex
  line-height 0.86rem
  background-color #0AB8D5
  .header-left
    width 0.9rem
    float left
  .header-center
    flex 1
    height 0.64rem
    line-height 0.64rem
    background #fff
    margin-top 0.1rem
    border-radius 0.08rem
    color #ccc
  .header-right
    width 1.2rem
    float right
    text-align center
</style>
