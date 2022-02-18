<template>
  <article class="product">
    <div class="product-image-container">
      <img class="shopping-cart" src="../assets/shopping-cart.svg" alt="Shopping cart">
      <img class="product-image" src="../assets/product-template.png" alt="Product Template">
    </div>
    <p class="product-title">Sinus Ash Hoodie</p>
    <p class="product-price">$ 1337</p>
  </article>
</template>

<!--
Should work with API

<template>
  <article class="product">
    <div class="product-image-container">
      <img class="product-image" :src"product.imgFile" :alt="product.title">
    </div>
    <p class="product-title">{{this.product.title}}</p>
    <p class="product-price">{{this.product.price}}</p>
  </article>
</template>

-->


<script>
export default {

}
</script>

<style scoped lang:scss>
.product {
  display: grid;
  justify-content: center;
  width: 19rem
}

/* .product-image-container {
  background: url('../assets/shopping-cart.svg') top 1rem right 1rem no-repeat
} */

.product-title, .product-price {
  text-align: center;
  margin: 0;
}

.product-price {
  color: #881616
}

</style>