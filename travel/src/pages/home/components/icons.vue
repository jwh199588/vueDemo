<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
             class="icon-img-content">
      </div>
      <p class="icon-p">景点门票</p>
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
<style lang="stylus" scoped>
@import ('~style/variable.styl')
.icons
  height 0
  padding-bottom 50%
  overflow hidden
  .icon
    position relative
    float left
    width 25%
    overflow hidden
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.4rem
      box-sizing border-box
      padding 0.1rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
  .icon-p
    color $darkColor
    position absolute
    left 0
    right 0
    bottom 0
    height 0.44rem
    line-height0 0.44rem
    text-align center
</style>
