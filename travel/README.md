## 准备工作 ##

 1. 为了保证移动端的样式，引入`border.css  reset.css`,在`main.js`中使用
 2. 移动端点击事件会有300毫秒的延迟，引入了`fastclick`
    在`main.js`中添加`fastClick.attach(document.body)`
 3. 添加iconfont账号
 4. 在项目下添加css预编译插件`stylus`， `npm install stylus --save npm、 install stylus-loader --save`
### 首页 ###
 1. 第一天
     - 使用iconfont图标库[iconfont官网][1]
     - 使用预编译插件stylus定义自定义常量[教程][2]
     - 添加路径别名[别名教程][3]
     - 添加vue-awesome-swiper模块[GitHub连接][4]


 2. 第二天
     - 添加导航栏`Header.vue`
     - 添加轮播图`swiper.vue`
     - 添加图标部分`icons.vue`
     - 添加热门搜索`GuessLike.vue`
     - 添加周末游部分`Weekend.vue`
     - 使用ajax请求数据[添加本地json文件][5]
     - 添加热门搜索跳转，使用动态路由`Detail.vue`
     - 画廊显示`Gallar.vue`
 3. 第三天
     - 添加详情页面返回首页的部分`Header.vue`
     - 添加轮播图`swiper.vue`
     - 添加城市列表页面`City.vue`
     - 使用`better-scroll`插件让浏览器的滑动手感更好
     - 使用vuex和localstorage

 4. 

 
 


  [1]: https://www.iconfont.cn/
  [2]: https://blog.csdn.net/Jwh199588/article/details/89400060
  [3]: https://blog.csdn.net/Jwh199588/article/details/89398923
  [4]: https://github.com/surmon-china/vue-awesome-swiper
  [5]: https://blog.csdn.net/Jwh199588/article/details/89422654