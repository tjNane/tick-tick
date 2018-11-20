import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 3
  },
  mutations: {
    add (state) {
      state.count++
    },
    reduce (state) {
      state.count--
    }
  },
  actions: {

  }
})
