<template>
  <div class="alpabet">
    <ul>
      <li class="alpabet-li"
          @click="change"
          v-for="(item, index) in cities"
          :key="index">{{index}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CityAlpabet',
  props: ['cities'],
  data () {
    return {
    }
  },
  methods: {
    change (e) {
      this.$emit('changeCity', e.target.innerText)
    }
  }
}
</script>
<style lang='stylus' scoped>
.alpabet
  position absolute
  top 0
  right 0
  bottom 0
  display flex
  width 0.6rem
  text-align center
  flex-direction column
  justify-content center
  .alpabet-li
    text-align center
    line-height 0.38rem
    color #76B4BB
</style>
