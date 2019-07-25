import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('./pages/home/Home.vue') // 懒加载
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('./pages/detail/Detail.vue')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('./pages/city/City.vue')
  }],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
