import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: []
  },
  mutations: {
    addItem (state, addnew) {
      state.news.push(addnew)
    }
  },
  actions: {

  }
})
