<template>
  <div class="cart-view" v-if="showCart">
   <article class="product">
    <div class="product-image-container">
      <img class="product-image" src="../assets/product-template.png" alt="Product Template">
      <router-link to="/cart">
        <img class="shopping-cart" src="../assets/shopping-cart.svg" alt="Shopping cart">
      </router-link>
    </div>
    <p class="product-title">Sinus Ash Hoodie</p>
    <p class="product-price">$ 1337</p>
  </article>
  </div>
</template>

<script>
export default {
  computed:{
    showCart(){
      return this.$store.state.showCartModal
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-view {
  width: 480px;
  height: 100vh;
  border: 1px solid black;
}
</style>
