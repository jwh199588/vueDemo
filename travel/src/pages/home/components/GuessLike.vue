/* 猜你喜欢 */
<template>
  <div>
    <div class="title">
      <div>猜你喜欢</div>
    </div>
    <ul>
      <router-link class="item"
                   tag="li"
                   v-for="item in recommendList"
                   :key="item.id"
                   :to="'/detail/'+item.id">
        <img :src="item.imgUrl"
             class="item-img">
        <div class="item-content">
          <p class="item-content-title">{{item.title}}</p>
          <p class="item-content-desc">{{item.desc}}</p>
          <button class="item-content-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['recommendList'],
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
.title
  line-height 0.6rem
  margin-top 0.13rem
  background-color #eee
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem
  .item-content
    margin-top 0.2rem
    margin-left 0.2rem
    min-width 0
    .item-content-title
      font-size 0.3rem
      line-height 0.5rem
      ellipsis()
    .item-content-desc
      color #eee
      line-height 0.5rem
      ellipsis()
    .item-content-button
      background #ff9300
      line-height 0.3rem
      border-radius 0.1rem
      padding 0.1rem
</style>
