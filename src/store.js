import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 3
  },
  mutations: {
    add (state, num) {
      state.count += num
    },
    reduce (state) {
      state.count--
    }
  },
  getters: {
    count: state => state.count
  },
  actions: {
    addActions (context) {
      context.commit('add', 10)
      setTimeout(() => {
        context.commit('reduce')
      }, 2000)
    },
    reduceActions ({ commit }) {
      commit()
    }
  }
})
