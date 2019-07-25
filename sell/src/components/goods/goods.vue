<template>
  <div>
    <div v-for="(item, index) in myData"
         :key="index">
      <div>{{item.name}}</div>
      <div v-if="item.myList">
        <goods :myData="item.myList"></goods>
      </div>
    </div>
  </div>

</template>
<script>
export default {

  name: 'goods',
  props: ['myData'],
  data () {
    return {

    }
  }
}
</script>
<style lang='stylus' scoped></style>
