<template>
  <div class="city-list"
       ref="scroll">
    <div>
      <div>
        <div class="city-list-title">当前城市</div>
        <div class="city-list-center">
          <div class="city-list-center-wrapper">
            <div class="city-list-center-content">
              {{this.$store.state.city}}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="city-list-title">热门城市</div>
        <div class="city-list-center">
          <div class="city-list-center-wrapper"
               v-for="item  in hotCities"
               :key="item.id"
               @click="handleChange(item.name)">
            <div class="city-list-center-content">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div v-for="(city, index) in cities"
             :key="index"
             :ref="index">
          <div class="city-list-title">{{index}}</div>
          <div>
            <ul>
              <li class="item"
                  v-for="item in city"
                  :key="item.id"
                  @click="handleChange(item.name)">{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store'
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: ['hotCities', 'cities', 'CityLetter'],
  store,
  data () {
    return {
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.scroll)
  },
  watch: {
    CityLetter () {
      const letter = this.$refs[this.CityLetter][0]
      this.scroll.scrollToElement(letter)
    }
  },
  methods: {
    handleChange (value) {
      store.commit('showCity', value)
      this.$router.push('/')
    }
  }
}
</script>
<style lang='stylus' scoped>
.city-list
  position absolute
  top 1.7rem
  left 0
  right 0
  bottom 0
  overflow hidden
  .city-list-title
    background-color #F5F5F5
    height 0.6rem
    line-height 0.6rem
    padding-left 0.2rem
  .city-list-center
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    .city-list-center-wrapper
      float left
      width 33%
    .city-list-center-content
      margin-left 0.1rem
      margin-top 0.1rem
      height 0.5rem
      line-height 0.5rem
      border 0.01rem solid #ccc
      text-align center
  .item
    line-height 0.6rem
    padding-left 0.3rem
    font-size 0.3rem
</style>
