import Vue from "vue";
import Vuex from "vuex";
import VueRouter from '@/router/index.js'
import * as API from "@/api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart : [],
    productId: null,
    singleProduct: null,
    showCartModal: false,
    showProductModal: false,
    userLoggedIn: false,
  },
  mutations: {
    fetchAllProducts(state, fetchedProducts) {
      state.products = fetchedProducts;
    },
    showCartModal(state) {
      state.showCartModal = !state.showCartModal;
      if(localStorage.getItem('cart')){
        state.cart = JSON.parse(localStorage.getItem('cart'))
      }
    },
    showProductModal(state) {
      state.showProductModal = !state.showProductModal;
    },
    saveProductId(state, id) {
      state.productId = id;
    },
    setActiveProduct(state) {
      state.singleProduct = state.products.find(
        (x) => x.id === state.productId
      );
    },
    addToCart(state, product){
      const needle = state.cart.find(cartProduct => cartProduct.id == product.id)
      if(needle){
        needle.amount++
      } else{
        state.cart.push({...product, amount: 1})
      }
      localStorage.setItem('cart', JSON.stringify(state.cart) )
    },
    loggedIn(state){
      state.userLoggedIn = true
    }
  },
  actions: {
    async fetchAllProducts(context, route) {
      const response = await API.fetchAllProducts(route);
      if (response.status === 200) {
        context.commit("fetchAllProducts", response.data);
      } else {
        console.log(response);
      }
      console.log(response);
    },
    showCartModal(context) {
      context.commit("showCartModal");
    },
    showProductModal(context) {
      context.commit("showProductModal");
    },
    activeProduct(context, id) {
      context.commit("saveProductId", id);
      context.commit("setActiveProduct");
    },
    addToCart(context, product){
      context.commit("addToCart", product)
    },

    async registerUser(context, credentials){
      const response = await API.registerUser(credentials.email, credentials.name, credentials.password, credentials.address.street, credentials.address.zip, credentials.address.city)
      if (response.status === 200) {
        await API.saveToken(response.data.token)
        context.commit('loggedIn')
        VueRouter.push('/account')
      }else{
        console.log(response.data.error);
      }
    },
    async auth(context, credentials){
      const response = await API.loginUser(credentials.email, credentials.password)
      if (response.status === 200) {
        await API.saveToken(response.data.token)
        context.commit('loggedIn')
        VueRouter.push('/account')
      }else{
        console.log(response.data.error);
      }
    }
  },
  modules: {},
});
