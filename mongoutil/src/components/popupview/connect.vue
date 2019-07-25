<template>
  <div>
    <Modal v-model="showIf"
           draggable
           :closable="false"
           title="连接数据库"
           @on-cancel="cancelClick"
           @on-ok="okClick">
      <div>
        <input type="text"
               placeholder="host"><br>
        <input type="text"
               placeholder="username"><br>
        <input type="text"
               placeholder="password"><br>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      showIf: true,
      value: ''
    }
  },
  methods: {
    cancelClick () {
      this.$emit('listenEvent', '')
    },
    okClick () {
      this.$emit('listenEvent', '')
    }
  }
}
</script>
<style lang='stylus' scoped></style>
