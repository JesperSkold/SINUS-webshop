<template>
	<div class="checkout-view">
    <!-- <section class="products">
		<h1>YOUR PRODUCTS</h1>
		<Product v-for="product in products" :key="product.id" :product="product" />
    </section> -->
    <div class="checkout-products">
      <h3 v-if="!cartEmpty">Your cart</h3>
      <h3 v-else>Cart is empty :(</h3>
      <Product v-for="product in products" :key="product.id" :product="product" :modalView="true" />
    </div>
    <div class="your-information">
      <CheckoutForm />
    </div>
	</div>
</template>

<script>
// import Product from "@/components/Product.vue";
import CheckoutForm from "@/components/CheckoutForm";
import Product from "@/components/Product.vue"
export default {
	components: {
   CheckoutForm,
   Product
   },
	data() {
		return {};
	},
	computed: {
		products() {
			return this.$store.state.cart;
		},
  cartEmpty(){
      if(this.$store.state.cart.length){
      return false 
      } else {
      return true
      }
    },
	},
};
</script>

<style lang="scss" scoped>
.checkout-view {
	// display: flex;
	// flex-direction: row;
	// // align-items: center;
  // justify-content: space-between
  min-height: 50vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.checkout-products{
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 50vh;
  max-width: 35vw;
  overflow-y: scroll;
  padding: 2rem;
}

.your-information{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3{
    margin: 1rem
  }
}


</style>

