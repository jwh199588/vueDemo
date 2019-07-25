import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import connect from '@/components/popupview/connect'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'main',
    component: main
  },
  {
    path: '/connect',
    name: 'connect',
    component: connect
  }
  ]
})
