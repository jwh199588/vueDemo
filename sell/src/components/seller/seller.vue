<template>
  <div>
    <div id="app">
      <treeselect v-model="value"
                  :multiple="true"
                  :options="options" />
    </div>
  </div>
</template>
<script>
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  name: 'seller',
  components: { Treeselect },
  data () {
    return {
      value: null,
      // define options
      options: [{
        id: 'a',
        label: 'a',
        children: [{
          id: 'aa',
          label: 'aa'
        }, {
          id: 'ab',
          label: 'ab'
        }]
      }, {
        id: 'b',
        label: 'b'
      }, {
        id: 'c',
        label: 'c'
      }]
    }
  }
}
</script>
<style lang='stylus' scoped></style>
