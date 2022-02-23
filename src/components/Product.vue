<template>
  <div class="wrapper">
    <article class="product" v-if="!modalView">
      <div class="product-image-container">
        <router-link to="">
          <img
            class="shopping-cart"
            src="../assets/shopping-cart.svg"
            alt="Shopping cart"
            @click="addToCart(product)"
          />
        </router-link>
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
      <router-link to="/product/:category/:id">
        <h5 class="product-title">{{ product.title + ' ' + product.category }}</h5>
      </router-link>
      <h5 class="product-price">${{ product.price }}</h5>
    </article>

    <article v-if="modalView">
      <div class="product-image-container-modal">
        <router-link to="" class="flex">
          <img
            :src="'http://localhost:5000' + '/images/' + product.imgFile"
            class="product-image"
          />
        </router-link>
        <div>
          <router-link to="/product/:category/:id">
            <h5 class="product-title">{{ product.title }}</h5>
          </router-link>
          <div>
            <h5>{{ product.amount }}x</h5>
            <h5 class="product-price">${{ product.price }}</h5>
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
    addToCart(product){
      this.$store.dispatch("addToCart", product)
    }
  },
};
</script>

<style lang="scss" scoped>

.product-image-container-modal {
  display: flex;
  justify-content: space-between;
  padding: 0 6rem;
  align-items: center;
  img {
    max-height: 10rem;
    max-width: 10rem;
  }
  div {
    margin: 2rem 0 0 5rem;
    display: flex;
    flex-direction: column;
    div {
      margin: auto;
      flex-direction: row;
    }
    h5 {
      margin: 0 0.2rem;
    }
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
  max-height: 20rem;
  max-width: 18rem;
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
  text-transform: capitalize;
}

.product-price {
  color: #881616;
}
</style>
