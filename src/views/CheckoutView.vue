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
      <h4>Your order is recieved</h4>
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
	// display: flex;
	// flex-direction: row;
	// align-items: center;
  // justify-content: space-between;
  min-height: 45vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  // place-items: center;
}

.checkout-products{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  // max-height: 60vh;
  max-width: 35vw;
  overflow-y: scroll;
  // padding: 2rem;
    h3{
      margin: 1rem
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

  h3{
    margin: 0
  }
}


</style>

