import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: () => import('./views/login.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./views/Home.vue'),
    children: [{
      path: 'list',
      name: 'list',
      component: () => import('./views/list.vue')
    },
    {
      path: 'user',
      name: 'user',
      component: () => import('./views/user.vue')
    }
    ]
  }, {
    path: '/add',
    name: 'add',
    component: () => import('./views/add.vue')
  }
  ]
})
