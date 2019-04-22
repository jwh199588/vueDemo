/* 搜索框 */
<template>
  <div>
    <div class="city-input">
      <input type="text"
             v-model="keyWord"
             placeholder="请输入城市名称"
             class="city-input-cont">

    </div>
    <div class="city-show"
         v-show="keyWord">
      <ul>
        <li class="city-show-li border-bottom"
            v-for="(item, index) in lists"
            :key="index">{{item.name}}</li>
        <li v-show="hasNoData"
            class="city-show-li border-bottom">没有匹配的数据</li>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityInput',
  props: ['cities'],
  data () {
    return {
      keyWord: '',
      lists: [],
      timer: null
    }
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
        }
        this.lists = result
      }, 100)
    }
  },
  computed: {
    hasNoData () {
      return !this.lists.length
    }
  }
}
</script>
<style lang='stylus' scoped>
.city-input
  text-align center
  background-color #00BCD4
  padding 0.1rem
  line-height 0.6rem
  .city-input-cont
    text-align center
    width 98%
    line-height 0.6rem
    border-radius 0.1rem
    padding 0 0.1rem
.city-show
  z-index 1
  overflow hidden
  position absolute
  top 1.8rem
  left 0
  right 0
  bottom 0
  background #eee
  .city-show-li
    line-height 0.6rem
    background-color white
    color #666
    padding-left 0.5rem
</style>
