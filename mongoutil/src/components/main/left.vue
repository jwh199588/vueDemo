<template>
  <div class="content_left">
    <Tree :data="data5"
          :load-data="renderContent"></Tree>
    <rightmenu ref="menu"></rightmenu>
  </div>
</template>
<script>
import rightmenu from '../popupview/rightmenu'
// 定义全局
window.self = {}
export default {
  name: 'mainLeft',
  components: {
    rightmenu
  },
  data () {
    return {
      treeNode: [],
      parentName: '数据库',
      data5: [{
        title: '数据库',
        loading: false,
        children: []
      }]
    }
  },
  methods: {
    append (name) {
      console.log(name)
    },
    // 连接成功后，生成左侧树
    renderContent (item, callback) {
      item.title = this.parentName
      callback(this.treeNode)
    },
    // 创建右键菜单
    createMenu (h, { root, node, data }) {
      return h('a', {
        on: {
          // 鼠标左键
          click: () => { this.append(data) },
          // 鼠标右键
          contextmenu: (e) => {
            console.log(data)

            // 阻止默认事件
            e.preventDefault()
            // 调用右键菜单
            window.self.$refs.menu.parentMethod(event)
          }
        }
      }, [
        h('span', data.title)
      ])
    }
  },
  computed: {
    // 监听vuex中的msg，用于调用节点树
    listenStoreMsg () {
      return this.$store.state.msg
    }
  },
  watch: {
    // 监听值的变化
    listenStoreMsg () {
      this.$http.get('../../../static/leftTree.json')
        .then(function (res) {
          var parent = []
          var leftData = res.data
          var parentNode = {}
          parentNode.title = leftData.dataBaseName
          parentNode.expand = true
          parentNode.render = (h, { root, node, data }) => {
            return window.self.createMenu(h, { root, node, data })
          }
          const children = []
          leftData.childrens.forEach(element => {
            children.push({
              title: element.collectionName,
              expand: true,
              render: (h, { root, node, data }) => {
                return window.self.createMenu(h, { root, node, data })
              }
            })
          })
          parentNode.children = children
          parent.push(parentNode)
          window.self.treeNode = parent
          window.self.parentName = leftData.connectName
        })
        .catch(err => { console.log(err) })
    }
  },
  created () {
    window.self = this
  }
}
</script>
<style lang='stylus' scoped>
.content_left >>> .ivu-tree ul
  font-size 16px
.content_left >>> .ivu-tree li ul
  padding 0 0 0 15px
.content_left
  width 200px
  position absolute
  top 60px
  left 0px
  bottom 0px
  overflow-x hidden
  border-right gray
  border-right-style double
  .ivu-tree ul
    color red !important
    font-size 20px !important
</style>
