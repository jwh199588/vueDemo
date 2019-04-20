/* 公共画廊组件 */
<template>
  <div class="container"
       @click="closeImg">
    <div class="icon-img">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="http://img1.qunarzz.com/sight/p0/1803/ab/ab95a998d9dc4e5aa3.img.jpg_r_800x800_38cc39dc.jpg"
               class="icon-img-content">
        </swiper-slide>
        <swiper-slide>
          <img src="http://img1.qunarzz.com/sight/p0/1803/f5/f596953492002d19a3.img.jpg_r_800x800_418a0b16.jpg"
               class="icon-img-content">
        </swiper-slide>
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Gallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    closeImg () {
      this.$emit('closeImg')
    }
  }
}
</script>
<style lang='stylus' scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  z-index 99
  position fixed
  flex-direction column
  justify-content center
  left 0
  right 0
  top 0
  bottom 0
  background-color #000
.icon-img
  width 100%
  height 0
  padding-bottom 100%
  .icon-img-content
    width 100%
    height 100%
  .swiper-pagination
    bottom -2rem
    color white
    font-size 0.5rem
</style>
