<template>
<div class="wrapper">
  <article class="product" v-if="!modalView">
    <div class="product-image-container">
      <router-link to="">
        <img
          class="shopping-cart"
          src="../assets/shopping-cart.svg"
          alt="Shopping cart"
        />
      </router-link>
      <router-link to="">
        <img
          :src="'http://localhost:5000' + '/images/' + product.imgFile"
          class="product-image"
          height="200"
          @click="showProductModal"
        />
      </router-link>
    </div>
    <router-link to="/product/:category/:id">
      <p class="product-title">{{ product.title }}</p>
    </router-link>
    <p class="product-price">${{ product.price }}</p>
  </article>

  <article v-if="modalView">
    <div class="product-image-container-modal">
      <router-link to="">
        <img :src="'http://localhost:5000' + '/images/'+ product.imgFile" class="product-image" width="200"/>
      </router-link>
      <div>
    <router-link to="/product/:category/:id">
      <h5 class="product-title">{{product.title}}</h5>
    </router-link>
      <div>
        <h5>1 x</h5>
        <h5 class="product-price">${{product.price}}</h5>
      </div>
     </div>
    </div>
  </article>
  </div>
</template>

<script>
export default {
  methods: {
    showProductModal() {
      this.$store.dispatch("showProductModal");
    },
  },
};
  props: {product: Object, modalView: Boolean}
}
</script>

<style lang="scss" scoped>

.product-image-container-modal{
  display: flex;
  justify-content: center;
  img{
    max-height: 40vh;
  }
  div{
    margin: 2rem 0 0 5rem;
    display: flex;
    flex-direction: column;
    div{
      margin: auto;
      flex-direction: row;
    }
    h5{
      margin: 0 .2rem;
    }
  }
}
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
  transition: 100ms ease-in;
}

.shopping-cart:hover {
  transform: scale(1.1);
  transition: 100ms ease-in;
}

.product-title,
.product-price {
  text-align: center;
  margin: 0;
}

.product-price {
  color: #881616;
}

</style>

