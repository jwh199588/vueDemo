/* 循环播放图标区
 * swiper代表轮播的区域
 * swiper-slide代表当前的页面
 */
<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pageList"
                    :key="index">
        <div class="icon"
             v-for="item in page"
             :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl"
                 class="icon-img-content">
          </div>
          <p class="icon-p">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true, // 循环
        initialSlide: 1 // 默认第一次显示的位置
      }
    }
  },
  computed: {
    pageList () {
      const pageList = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pageList[page]) {
          pageList[page] = []
        }
        pageList[page].push(item)
      })
      return pageList
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
    ellipsis()
</style>
