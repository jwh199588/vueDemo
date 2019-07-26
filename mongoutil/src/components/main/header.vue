<template>
  <div>
    <Dropdown placement="bottom-start"
              class="menu_dropdown"
              trigger="click"
              @on-click="dropdownName">
      <a href="javascript:void(0)">
        文件
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem name='connect'>连接</DropdownItem>
        <DropdownItem>导入</DropdownItem>
        <DropdownItem>导出</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <div>
      <header-connect v-if="headerConnect"
                      v-on:listenEvent="listenEvent"></header-connect>
    </div>
  </div>
</template>
<script>
import headerConnect from '@/components/popupview/connect'
export default {
  name: 'mainHeader',
  data () {
    return {
      headerConnect: false
    }
  },
  components: {
    headerConnect
  },
  methods: {
    dropdownName (name) {
      if (name === 'connect') {
        this.connect()
      }
    },
    // 连接数据库
    connect () {
      this.headerConnect = true
    },
    listenEvent () {
      this.headerConnect = false
    }
  }

}
</script>
<style lang='stylus' scoped>
.menu_dropdown
  margin-left 50px
  margin-top 20px
  font-size 15px
  a
    color #9EA7AC !important
  a:hover
    color white !important
</style>
