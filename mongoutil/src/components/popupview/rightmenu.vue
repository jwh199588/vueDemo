<template>
  <!-- 右键菜单 -->
  <div>
    <Dropdown transfer
              ref="contentMenu"
              style="display: none;"
              trigger="click"
              placement="right-start">
      <DropdownMenu slot="list"
                    style="min-width: 80px;">
        <DropdownItem name='add'>添加菜单</DropdownItem>
        <DropdownItem name='edit'>修改菜单</DropdownItem>
        <DropdownItem name='del'>删除菜单</DropdownItem>
      </DropdownMenu>

    </Dropdown>
  </div>
</template>
<script>
export default {
  name: 'rightmenu',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  mounted () { },
  methods: {
    parentMethod (event) {
      // 在组件附件显示
      this.$refs.contentMenu.$refs.reference = event.target
      this.$refs.contentMenu.currentVisible = !this.$refs.contentMenu.currentVisible
    }
  }
}
</script>
<style lang='stylus' scoped></style>
