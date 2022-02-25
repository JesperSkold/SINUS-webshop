import Vue from "vue";
import Vuex from "vuex";
import VueRouter from '@/router/index.js'
import * as API from "@/api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    orderHistory: [],
    accountInfo: null,
    productId: null,
    singleProduct: null,
    showCartModal: false,
    showProductModal: false,
    userLoggedIn: false,
    error: "",
    cartAnimation: false,
    adminLoggedIn: false,
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
      localStorage.setItem('cart', JSON.stringify(state.cart))
      state.cartAnimation = true
      setTimeout(() => {
        state.cartAnimation = false
      }, 400)
    },

    removeFromCart(state, product){
      const needle = state.cart.find(cartProduct => cartProduct.id == product.id)
      if(needle.amount > 1){
        needle.amount--
      } else{
        state.cart = state.cart.filter(cartProduct => cartProduct.id != product.id)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    loggedIn(state){
      state.userLoggedIn = true
    },
    saveAccountInfo(state, accInfo){
      state.accountInfo = accInfo
    },
    saveOrderHistory(state, items){
      state.orderHistory = items
    },
    error(state, errorMsg){
      state.error = errorMsg
        console.log(state.error)
    },
    clearCart(state){
      state.cart = []
      localStorage.clear()
    },
    setAdmin(state){
      state.adminLoggedIn = true
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
    removeFromCart(context, product){
      context.commit("removeFromCart", product)
    },

    async registerUser(context, credentials){
      const response = await API.registerUser(credentials.email, credentials.name, credentials.password, credentials.address.street, credentials.address.zip, credentials.address.city)
      if (response.status === 200) {
        await API.saveToken(response.data.token)
        context.commit('loggedIn')
        VueRouter.push('/account')
      }else{
        context.commit('error', response.data.error)
      }
    },
    async auth(context, credentials){
      const response = await API.loginUser(credentials.email, credentials.password)
      if (response.status === 200) {
        await API.saveToken(response.data.token)
        context.commit('loggedIn')
        VueRouter.push('/account')
        context.commit('error', response.data.error)
      }else{
        console.log(response.data.error);
        context.commit('error', response.data.error)
        
      }
    },
    async placeOrder(context, credentials){
      const cartIds = []
      for(let i = 0; i < context.state.cart.length; i++){
        for(let j = 0; j < context.state.cart[i].amount; j++){
          cartIds.push(context.state.cart[i].id)
        }
      }
      console.log(cartIds)
      const response = 
        await API.placeOrder(cartIds, credentials.address.city, credentials.address.street, credentials.address.zip)
        if(response.status === 200){
          console.log('Order placed!')
          context.commit('clearCart')
          console.log(response)
        } else {
          console.log(response)
        }
    },

    async getAccountInfo(context){
      const response = await API.fetchAccountInfo()
      if (response.status === 200) {
        console.log(response.data);
        context.commit('saveAccountInfo', response.data)
        if (response.data.role === 'admin') {
          context.commit('setAdmin')
          console.log('IAM ADMIN');
        }
      }else{
        console.log(response.data.error);
      }
    },
    async getOrderHistory(context){
      const response = await API.fetchOrderHistory()
      if (response.status === 200) {
        console.log(response.data, "<--- new");
        context.commit('saveOrderHistory', response.data)
      } else{
        console.log(response.data.error);
      }
    },
    async patchOrder(context, order){
      console.log(order.status);
      const response = await API.editOrder(order.id, order.status)
      if (response.status === 200) {
        console.log('WOW U EDITTED THE ORDER');
      }else{
        console.log(response)
      }
    },
    async patchProduct(context, product){
      const response = await API.patchProduct(
        product.id,
        product.title,
        product.shortDesc,
        product.longDesc,
        product.imgFile,
        product.category,
        product.price
        )
      if (response.status === 200) {
        console.log('nice patch bro ;)')
        await context.dispatch('fetchAllProducts', product.category)
      } else {
        console.log(response)
      }
    },
    async deleteProduct(context, product){
      const response = await API.deleteProduct(product.id)
      if (response.status === 200) {
        console.log('nice delete bro ;)')
        await context.dispatch('fetchAllProducts', product.category)
      } else {
        console.log(response)
      }
    },
    async addProduct(context, product){
      const response = await API.addProduct(
        product.title,
        product.shortDesc,
        product.longDesc,
        product.imgFile,
        product.category,
        product.price
      )
      if (response.status === 200) {
        console.log('nice add bro ;)')
        await context.dispatch('fetchAllProducts', product.category)
      } else {
        console.log(response)
      }
    },
    async upload(context, ref){
      const response = await API.upload(ref)
      if (response.status === 200) {
        console.log('nice upload bro ;)')
      } else {
        console.log(response)
      }
    }
  }
});
