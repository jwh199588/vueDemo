// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './iview'
import axios from 'axios'
import VueAxios from 'vue-axios' // 不加时 请求为 this.axios.get()
import store from './store'
Vue.use(VueAxios, axios)
Vue.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
