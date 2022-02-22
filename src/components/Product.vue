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
      <router-link to="">
        <img class="shopping-cart" src="../assets/shopping-cart.svg" alt="Shopping cart">
      </router-link>
      <router-link to="">
      <img :src="'http://localhost:5000' + '/images/'+ product.imgFile" class="product-image" height="200" />
      </router-link>
    </div>
    <router-link to="/product/:category/:id">
      <p class="product-title">{{product.title}}</p>
    </router-link>
    <p class="product-price">${{product.price}}</p>
  </article>
</template>


<script>
export default {
  props: {product: Object},
  computed: {
    image(){
      return 'http://localhost:5000/images/' + this.product.imgFile
    }
  }

}
</script>

<style scoped lang:scss>
.product {
  display: grid;
  position: relative;
  place-items: center;
  width: 14rem;
  padding: 1rem;
}

.product-image:hover {
  filter: brightness(1.1);
}

.shopping-cart {
  position: absolute;
  right: 2rem;
  transition: 100ms ease-in
}

.shopping-cart:hover {
  transform: scale(1.1);
  transition: 100ms ease-in
}

.product-title, .product-price {
  text-align: center;
  margin: 0;
}

.product-price {
  color: #881616
}



</style>