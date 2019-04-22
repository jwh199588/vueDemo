<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="cont"></div>
  </div>
</template>
<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/Header'
export default {
  components: {
    DetailBanner,
    DetailHeader
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
.cont
  height 50rem
</style>
