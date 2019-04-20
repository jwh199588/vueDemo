/* 轮播图 */
<template>
  <div class="swrap">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList"
                    :key="item.id">
        <img :src="item.imgUrl"
             class="img-item" />
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  props: ['swiperList'],
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 分页器类名
        autoplay: 1000,
        loop: true // 循环
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
// 样式穿透
.swrap >>> .swiper-pagination-bullet-active
  background #fff
// 为了解决页面抖动的问题，添加如下的样式
.swrap
  width 100%
  height 0
  padding-bottom 30.5%
  overflow hidden
  background #ccc
  .img-item
    width 100%
</style>
