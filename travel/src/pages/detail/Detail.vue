<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="cont">
      <detail-list :dataList="dataList"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/Header'
import DetailList from './components/list'
export default {
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      dataList: [{
        title: '成人票',
        children: [{
          title: '成人票-1',
          children: [{
            title: '成人票-2'
          }, {
            title: '成人票-2'
          }]
        }, {
          title: '成人票'
        }]
      }, {
        title: '成人票'
      }, {
        title: '成人票'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.cont
  height 50rem
</style>
