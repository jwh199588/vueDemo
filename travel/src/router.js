import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('./pages/home/Home.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('./pages/list/list.vue')
  }
  ]
})
