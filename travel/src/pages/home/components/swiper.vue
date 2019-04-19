/* 轮播图 */
<template>
  <div class="swrap">
    <swiper :options="swiperOption"
            ref="mySwiper">
      <swiper-slide v-for="item in imgList"
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
  data () {
    return {
      imgList: [
        {
          id: 1,
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/389d0194766566f8f1185aa19b759c25.jpg_750x200_22620261.jpg'
        }, {
          id: 2,
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/dacf6fc7c805984ab5813f2e8f91ce54.jpg_750x200_07cbbc5a.jpg'
        }
      ],
      swiperOption: {
        pagination: '.swiper-pagination', // 分页器类名
        autoplay: 1000,
        loop: true// 循环
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
  padding-bottom 26.9%
  overflow hidden
  background #ccc
  .img-item
    width 100%
</style>
