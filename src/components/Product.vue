<!--
<template>
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
</template>
-->

<template>
  <article class="product">
  
    <div class="product-image-container">
      <router-link to="/cart">
        <img class="shopping-cart" src="../assets/shopping-cart.svg" alt="Shopping cart">
      </router-link>
      <router-link to="/product/:category/:id">
        <img class="product-image" src="../assets/product-template.png" :alt="product.title">
      </router-link>
    </div>
    <router-link to="/product/:category/:id">
      <p class="product-title">{{product.title}}</p>
    </router-link>
    <p class="product-price">{{product.price}}</p>
  </article>
</template>


<script>
export default {
  props: {product: Object}

}
</script>

<style scoped lang:scss>
.product {
  display: grid;
  position: relative;
  justify-content: center;
  width: 19rem;
  margin: 1rem;
  padding: 1rem;
  /* Border is just for reference, remove later! */
  border: 1px solid black;
  /* Border is just for reference, remove later! */
}

.product-image {
  height: 18rem;
  margin: 0 auto;
}

.shopping-cart {
  position: absolute;
  right: 2rem;
}

.product-title, .product-price {
  text-align: center;
  margin: 0;
}

.product-price {
  color: #881616
}

</style>