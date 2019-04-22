import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {}
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    showCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (error) {}
    }
  },
  actions: {

  }
})
