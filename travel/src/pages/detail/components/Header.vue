<template>
  <div>
    <router-link class="header-return"
                 tag="div"
                 to="/"
                 v-if="showHeader">
      <span class="iconfont header-return-icon">&#xeb99;</span>
    </router-link>
    <div class="header-banner"
         :style="opacityStyle"
         v-else>
      <router-link class="header-banner-icon"
                   tag="div"
                   to="/">
        <span class="iconfont header-return-icon">&#xeb99;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      showHeader: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang='stylus' scoped>
@import ('~style/variable.styl')
.header-return
  position absolute
  top 0.3rem
  left 0.3rem
  height 0.9rem
  line-height 0.9rem
  width 0.9rem
  border-radius 1rem
  background rgba(0, 0, 0, 0.8)
  text-align center
  .header-return-icon
    font-size 0.55rem
    color #fff
.header-banner
  font-size 0.35rem
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  overflow hidden
  height 0.9rem
  line-height 0.8rem
  text-align center
  color #fff
  background-color $bgColor
  .header-banner-icon
    position absolute
    top 0
    left 0.3rem
    width 0.64rem
</style>
