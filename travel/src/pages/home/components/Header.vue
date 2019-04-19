/* 首页的header */
<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xeb99;</span>
    </div>
    <div class="header-center">
      <span class="iconfont">&#xe611;</span>
    </div>
    <div class="header-right">
      城市
      <span class="iconfont icon-right">&#xe606;</span></div>
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
<style lang="stylus" scoped>
@import ('~style/variable.styl')
.header
  display flex
  line-height 0.86rem
  background-color $bgColor
  .header-left
    text-align center
    width 0.8rem
    float left
  .header-center
    flex 1
    height 0.64rem
    padding-left 0.2rem
    line-height 0.64rem
    background #fff
    margin-top 0.12rem
    border-radius 0.08rem
    color #ccc
  .header-right
    width 1.4rem
    float right
    text-align center
    .icon-right
      margin-left -0.05rem
</style>
