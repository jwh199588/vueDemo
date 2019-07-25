<template>
  <div id="app">
    <div class="header">
      <v-header></v-header>
    </div>
    <div class="tab">
      <div class="tab-item">
        <goods :myData='myData'>商品</goods>
      </div>
      <div class="tab-item">
        <router-link to='/ratings'>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/seller'>商家</router-link>
      </div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
import vheader from './components/header/header'
import goods from './components/goods/goods'
export default {
  name: 'App',
  components: {
    'v-header': vheader,
    goods
  },
  data () {
    return {
      myData: [{
        name: '123',
        myList: [{
          name: 1234,
          list: [{
            name: '12345'
          }]
        }]
      }, {
        name: '223',
        myList: [{
          name: 2234,
          list: [{
            name: '22345'
          }]
        }]
      }]
    }
  }

}
</script>

<style lang='stylus' scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    .tab-item
      flex 1
      text-align center
      .router-link-active
        color rgb(240, 20, 20)
</style>
