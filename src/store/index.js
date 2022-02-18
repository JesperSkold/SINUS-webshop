import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/mock.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    fetchAllProducts(state, fetchedProducts){
      state.products = fetchedProducts
    }
  },
  actions: {
    async fetchAllProducts(context){
      const response = await API.fetchAllProducts()
      context.commit('fetchAllProducts', response)
    }
  },
  modules: {
  }
})
