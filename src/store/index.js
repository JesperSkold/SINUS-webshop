import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/index.js'

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
        if (response.status === 200){
          context.commit('fetchAllProducts', response.data.products)
        }else{
          console.log(response)
        }
      console.log(response)
    },
    showCartModal(context){
      context.commit('showCartModal')
    }
  },
  modules: {
  }
})
