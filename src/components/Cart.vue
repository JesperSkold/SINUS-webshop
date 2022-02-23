<template>
	<div class="wrapper" v-if="showCart">
		<div class="modal-overlay" @click="closeModal"></div>
		<div class="cart-view">
			<div class="top-title">
        <h3>Your Cart</h3>
        <img src="../assets/close.svg" alt="" @click="closeModal" />
      </div>
			<Product v-for="product in products" :key="product.id" :product="product" :modalView="true" />
			<section class="checkout">
				<h5>Checkout Total: <span>${{total}}</span></h5>
				<router-link to="/checkout">
					<SinusButton v-on:click.native="closeModal">TO CHECKOUT</SinusButton>
				</router-link>
			</section>
		</div>
	</div>
</template>

<script>
import SinusButton from "@/components/SinusButton.vue"
import Product from "@/components/Product.vue";
export default {
	components: {
		Product,
		SinusButton
	},
	methods: {
		fetchAllProducts() {
			this.$store.dispatch("fetchAllProducts");
		},
		closeModal() {
			this.$store.dispatch("showCartModal");
		},
	},
	computed: {
		showCart() {
			return this.$store.state.showCartModal;
		},
		products() {
			return this.$store.state.cart;
		},
		total(){
      let cart = this.$store.state.cart
      let sum = 0
      for(let i = 0; i < cart.length; i++){
        sum = sum + (cart[i].amount * cart[i].price)
      }
      return sum
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_global-colors.scss";

.top-title{
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: #f4f4f4;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);

  h3{
    margin:0
  }
}

.cart-view {
	position: absolute;
  // padding: 2rem;
	right: 0;
	width: 40vw;
	height: 100vh;
	position: fixed;
	overflow-y: auto;
	background: white;
	z-index: 999;
	img {
		cursor: pointer;
	}

	.checkout {
		align-items: center;
    // padding: 2rem;
		display: flex;
		flex-direction: column;
		height: 20vh;
		width: 40vw;
    background: #f4f4f4;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
		// border-top: 0.5rem solid rgba(128, 128, 128, 0.424);
		position: sticky;
		bottom: 0;
		// background: white;
		span {
			color: $price-color;
		}
		h5 {
			margin: 0.5rem 0 0;
		}
		button {
			margin-top: 0.5rem
		}
	}
}

.modal-overlay {
	cursor: pointer;
	position: absolute;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 998;
	background: #2c3e50;
	opacity: 0.6;
}
</style>
