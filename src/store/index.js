import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    productId: null,
    singleProduct: null,
    showCartModal: false,
    showProductModal: false,
  },
  mutations: {
    fetchAllProducts(state, fetchedProducts) {
      state.products = fetchedProducts;
    },
    showCartModal(state) {
      state.showCartModal = !state.showCartModal;
    },
    showProductModal(state) {
      state.showProductModal = !state.showProductModal;
    },
    saveProductId(state, id) {
      state.productId = id;
    },
    setActiveProduct(state) {
      state.singleProduct = state.singleProduct = state.products.find(
        (x) => x.id === state.productId
      );
    },
  },
  actions: {
    async fetchAllProducts(context) {
      const response = await API.fetchAllProducts();
      if (response.status === 200) {
        context.commit("fetchAllProducts", response.data.products);
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
  },
  modules: {},
});
