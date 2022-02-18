import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showCartModal: false,
  },
  mutations: {
    showCartModal(state){
      state.showCartModal = !state.showCartModal
    }
  },
  actions: {
    showCartModal(context){
      context.commit('showCartModal')
    }
  },
  modules: {
  }
})
