<template>
  <div class="wrapper" v-if="showProduct">
    <div class="modal-overlay" @click="closeProductModal"></div>
    <div class="product-view">
      <img
        src="../assets/close.svg"
        alt=""
        @click="closeProductModal"
        class="close-button"
      />
      <div class="product-info" v-if="getProduct">
        <img
          :src="'http://localhost:5000' + '/images/' + getProduct.imgFile"
          class="product-image"
          height="400"
        />
        <div class="product-text">
          <h3>{{ getProduct.title }} {{ getProduct.category }}</h3>
          <p>{{ getProduct.longDesc }}</p>
          <div class="price-button">
            <h4>${{ getProduct.price }}</h4>
            <SinusButton @click.native="addToCart(getProduct)"
              >ADD TO CART</SinusButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SinusButton from "@/components/SinusButton";
export default {
  components: {
    SinusButton,
  },
  methods: {
    closeProductModal() {
      this.$store.dispatch("showProductModal");
    },
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
      console.log(product);
    },
  },
  computed: {
    showProduct() {
      return this.$store.state.showProductModal;
    },
    getProduct() {
      return this.$store.state.singleProduct;
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  color: rgb(146, 1, 1);
}
.product-text {
  flex-direction: column;
  min-width: 300px;
}
.product-info,
.price-button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.close-button {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
}
.product-view {
  position: absolute;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-direction: column;
  z-index: 999;
  padding: 5rem;
  border: 2px solid black;
  border-radius: 2rem;
  background-color: white;
}
.modal-overlay {
  cursor: pointer;
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
}
</style>
