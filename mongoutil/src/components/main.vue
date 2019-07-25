<template>
  <div class="main_class">
    <div class="header">
      <main-header></main-header>
    </div>
    <div class="content">
      <main-left></main-left>
      <main-right></main-right>
    </div>
  </div>
</template>

<script>
import mainHeader from './main/header'
import mainLeft from './main/left'
import mainRight from './main/right'
export default {
  name: 'HelloWorld',
  components: {
    mainHeader,
    mainLeft,
    mainRight
  }
}
</script>

<style lang="stylus" scoped>
.main_class
  width 100%
  height 100%
  .header
    width 100%
    height 60px
    background-color #464C5B
</style>
