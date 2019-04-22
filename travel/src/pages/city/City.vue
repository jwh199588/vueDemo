/* 城市首页 */
<template>
  <div>
    <city-header></city-header>
    <city-input :cities="cities"></city-input>
    <city-list :hotCities="hotCities"
               :CityLetter='CityLetter'
               :cities="cities"></city-list>
    <city-alpabet :cities="cities"
                  @changeCity="changeCity"></city-alpabet>
  </div>
</template>
<script>
import CityHeader from './components/header'
import CityInput from './components/input'
import CityList from './components/list'
import CityAlpabet from './components/Alpabet'
import axios from 'axios'
import { log } from 'util'
export default {
  name: '',
  data () {
    return {
      hotCities: [],
      cities: {},
      CityLetter: ''
    }
  },
  components: {
    CityHeader,
    CityInput,
    CityList,
    CityAlpabet
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      axios.get('/api/city').then(this.setInfo)
    },
    setInfo (datas) {
      var data = datas.data.data
      if (data.ret && data.data) {
        this.hotCities = data.data.hotCities
        this.cities = data.data.cities
      }
    },
    changeCity (value) {
      this.CityLetter = value
    }
  }
}
</script>
<style lang='stylus' scoped></style>
