import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'style/css/border.css'
import 'style/css/reset.css'
import 'style/css/iconfont.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
