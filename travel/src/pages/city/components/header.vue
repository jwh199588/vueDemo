<template>
  <div>
    <div class="city-header">
      <router-link tag="span"
                   to="/"
                   class="iconfont header-return-icon">&#xeb99;</router-link>
      城市选择
    </div>
  </div>
</template>
<script>
export default {
  name: 'CityHeader',
  data () {
    return {
    }
  }
}
</script>
<style lang='stylus' scoped>
.city-header
  position relative
  width 100%
  line-height 0.9rem
  font-size 0.34rem
  background-color #00BCD4
  color white
  text-align center
  .header-return-icon
    position absolute
    top 0.02rem
    left 0.2rem
</style>
