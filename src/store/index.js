import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/mock.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    showCartModal: false,
  },
  mutations: {
    fetchAllProducts(state, fetchedProducts){
      state.products = fetchedProducts
    },
    showCartModal(state){
      state.showCartModal = !state.showCartModal
    }
  },
  actions: {
    async fetchAllProducts(context){
      const response = await API.fetchAllProducts()
      context.commit('fetchAllProducts', response)
    },
    showCartModal(context){
      context.commit('showCartModal')
    }
  },
  modules: {
  }
})
