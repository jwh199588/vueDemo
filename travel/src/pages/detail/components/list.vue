<template>
  <div>
    <div v-for="(item, index) in dataList"
         :key="index"
         class="item-list">
      <div>
        <span class="item-icon"></span>
        {{item.title}}
      </div>
      <!-- 递归的使用 -->
      <div v-if="item.children"
           :dataList="item.children"
           class="item-children">
        <detail-list :dataList='item.children'></detail-list>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: ['dataList'],
  data () {
    return {
    }
  }
}
</script>
<style lang='stylus' scoped>
.item-list
  font-size 0.35rem
  line-height 0.5rem
  .item-icon
    position relative
    left 0.1rem
    top 0.1rem
    display inline-block
    width 0.36rem
    height 0.36rem
    background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right 0.1rem
    background-size 0.4rem 3rem
  .item-children
    position relative
    left 0.2rem
</style>
