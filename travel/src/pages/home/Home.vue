<!--首页-->
<template>
  <div>
    <home-Header></home-Header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-guessList :recommendList="recommendList"></home-guessList>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeGuessList from './components/GuessLike'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  props: [],
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeGuessList,
    HomeWeekend
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios.get('/api/seller').then(this.setInfo)
    },
    setInfo (datas) {
      var data = datas.data.data
      if (data.ret && data.data) {
        this.swiperList = data.data.swiperList
        this.iconList = data.data.iconList
        this.recommendList = data.data.recommendList
        this.weekendList = data.data.weekendList
      }
    }
  }
}
</script>
<style scoped>
</style>
