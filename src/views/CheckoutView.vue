<template>
	<div class="checkout-view">
    <div class="checkout-products" v-if="!orderSent">
      <h3 v-if="!cartEmpty">Your cart</h3>
      <h3 v-else>Cart is empty :(</h3>
      <Product v-for="product in products" :key="product.id" :product="product" :modalView="true" />
    </div>
    <div class="your-information" v-if="!orderSent">
      <CheckoutForm @orderEmit="orderSent=true"/>
    </div>
    <div class="order-done" v-else>
      <h3>Thank you for your purchase!</h3>
      <h4>Your order is being handled.</h4>
      <router-link to="/">
        <SinusButton>Back to home</SinusButton>
      </router-link>
    </div>
	</div>
</template>

<script>
import CheckoutForm from "@/components/CheckoutForm";
import Product from "@/components/Product.vue"
import SinusButton from "@/components/SinusButton"
export default {
	components: {
   CheckoutForm,
   Product,
   SinusButton
   },
	data() {
		return {
      orderSent: false
    };
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
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.checkout-products{
  display: flex;
  flex-direction: column;
  max-height: 70vh;
  max-width: 35vw;
  overflow-y: auto;
    h3{
      text-align: center;
    }
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

.order-done{
  grid-column: 1/4;
  display: grid;
  place-items: center;
  align-content: center;

  h3 {
    margin: 0rem
  }
  h4 {
    margin: 1rem
  }
}


</style>

