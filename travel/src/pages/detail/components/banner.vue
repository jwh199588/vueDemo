<template>
  <div>
    <div class="banner-img"
         @click="showImg">
      <img src="//img1.qunarzz.com/sight/p0/1604/1e/1e75f8e1af9fe81f90.img.jpg_600x330_aeba2c96.jpg"
           class="banner-img-item">
      <div class="banner-cont">
        <div>
          <span class="iconfont">&#xe6dd;</span>
          19
        </div>
        <div class="banner-cont-desc">世界花卉大观园(AAAA景区)</div>
      </div>
    </div>
    <Gallary v-show="showIf"
             @closeImg="closeImg"></Gallary>
  </div>
</template>
<script>
import Gallary from 'common/gallary/Gallary'
export default {
  name: 'banner',
  components: {
    Gallary
  },
  data () {
    return {
      showIf: false
    }
  },
  methods: {
    showImg () {
      this.showIf = true
    },
    closeImg () {
      this.showIf = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner-img
  position relative
  height 0
  padding-bottom 53%
  overflow hidden
  .banner-img-item
    width 100%
  .banner-cont
    position absolute
    left 0.6rem
    right 0
    bottom 0.2rem
    line-height 0.6rem
    color white
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-cont-desc
      font-size 0.4rem
      margin-left -0.4rem
</style>
