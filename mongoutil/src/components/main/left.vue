<template>
  <div class="content_left">
    <Tree :data="data5"></Tree>
    <rightmenu ref="menu"></rightmenu>
  </div>
</template>
<script>
import rightmenu from '../popupview/rightmenu'
export default {
  name: 'mainLeft',
  components: {
    rightmenu
  },
  data () {
    return {
      nodeInfo: [],
      data5: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'child 1-1',
              render: (h, { root, node, data }) => {
                return h('a', {
                  on: {
                    // 鼠标左键
                    click: () => { this.append(data) },
                    // 鼠标右键
                    contextmenu: (e) => {
                      // 阻止默认事件
                      e.preventDefault()
                      this.nodeInfo = ['123']
                      // 调用右键菜单
                      this.$refs.menu.parentMethod(event)
                    }
                  }
                }, [
                  h('span', data.title)
                ])
              },
              children: [
                {
                  title: 'leaf 1-1-1',
                  expand: true
                },
                {
                  title: 'leaf 1-1-2',
                  expand: true
                }
              ]
            },
            {
              title: 'child 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1',
                  expand: true
                },
                {
                  title: 'leaf 1-2-1',
                  expand: true
                }
              ]
            }
          ]
        }
      ],
      buttonProps: {
        type: 'default',
        size: 'small'
      }
    }
  },
  methods: {
    append (name) {
      console.log(name)
    },
    // 连接成功后，生成左侧树
    creatLeftTrue () {

    }
  },
  watch: {
    // 监听信息，连接成功后添加信息
    nodeInfo: () => {
      this.creatLeftTrue()
    }
  }
}
</script>
<style lang='stylus' scoped>
.content_left
  width 200px
  position absolute
  top 60px
  left 0px
  bottom 0px
  overflow-x hidden
  .ivu-menu
    position absolute
    top 0px
    left 0px
    bottom 0px
    overflow-y scroll
    z-index 500
</style>
