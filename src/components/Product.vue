<template>
  <div class="wrapper">
    <article class="product" v-if="!modalView">
      <div class="product-image-container">
          <img
            class="shopping-cart"
            src="../assets/shopping-cart.svg"
            alt="Shopping cart"
            @click="addToCart(product)"
          />
        <!-- <router-link to=""> -->
        <img
          :src="'http://localhost:5000' + '/images/' + product.imgFile"
          class="product-image"
          @click="
            showProductModal();
            activeProduct(product.id);
          "
        />
        <!-- </router-link> -->
      </div>
        <h5 class="product-title" @click="
            showProductModal();
            activeProduct(product.id);
          ">
          {{ product.title + " " + product.category }}
        </h5>
      <h5 class="product-price">${{ product.price }}</h5>
    </article>

    <article v-if="modalView">
      <div class="cart-product">
        <img
          :src="'http://localhost:5000' + '/images/' + product.imgFile"
          class="product-image"
        />
        <div>
          <h5 class="product-title">
            {{ product.title + " " + product.category }}
          </h5>
          <div>
            <h5>{{ product.amount }}x</h5>
            <h5 class="product-price">${{ product.price }}</h5>
          </div>
          <div>
            <button @click="removeFromCart(product)">&#9135;</button>
            <button @click="addToCart(product)">+</button>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: { product: Object, modalView: Boolean },
  methods: {
    showProductModal() {
      this.$store.dispatch("showProductModal");
    },
    activeProduct(id) {
      this.$store.dispatch("activeProduct", id);
    },
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
    removeFromCart(product) {
      this.$store.dispatch("removeFromCart", product);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem 2.5rem;
  place-items: center;
  img {
    max-height: 10rem;
    max-width: 10rem;
  }
  div {
    display: flex;
    flex-direction: column;
    div {
      margin: auto;
      flex-direction: row;
    }
    h5 {
      margin: 0.2rem;
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f4f4f4;
    color: black;
    border: none;
    font-size: 1.5rem;
    border-radius: 2px;
    margin: 0.2rem;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
  }
  button:hover {
    cursor: pointer;
  }
}
.product {
  display: grid;
  position: relative;
  place-items: center;
  width: 20rem;
  padding: 1rem;
  border-radius: 8px;
  background: #f4f4f4;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  transition: 150ms ease all;
}

.product:hover {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
  transition: 100ms ease all;
}

.product-image {
  cursor: pointer;
  max-height: 20rem;
  max-width: 18rem;
}

.shopping-cart {
  position: absolute;
  right: 2rem;
  transition: 100ms ease-in;
  cursor: pointer;
}

.shopping-cart:hover {
  transform: scale(1.1);
  transition: 100ms ease-in;
}

.product-title{
  cursor:pointer
}

.product-title,
.product-price {
  text-align: center;
  margin: 0;
  text-transform: capitalize;
  
}

.product-price {
  color: #881616;
}
</style>
