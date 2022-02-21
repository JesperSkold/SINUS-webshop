<template>
	<div class="wrapper" v-if="showCart">
		<div class="modal-overlay"></div>
		<div class="cart-view">
			<div class="top-title">
			<h2>Your Cart</h2>
			<img src="../assets/close.svg" alt="" @click="closeModal" />
      </div>
			<Product v-for="product in products" :key="product.id" :product="product" />
			<section class="checkout">
				<h4>Checkout Total: <span>$17452</span></h4>
				<router-link to="/checkout"><button @click="closeModal">RIDE TO CHECKOUT</button></router-link>
			</section>
		</div>
	</div>
</template>

<script>
import Product from "@/components/Product.vue";
export default {
	components: {
		Product,
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
			return this.$store.state.products;
		},
	},
	beforeMount() {
		this.fetchAllProducts();
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_global-colors.scss";

.top-title{
  display: flex;
  h2{
    padding: 0 2rem;
  }
  img{
    padding: 0 2rem;
    align-self: center;
  }
}

.cart-view {
	right: 0;
	position: absolute;
	width: 30rem;
	height: 85vh;
	position: fixed;
	right: 0;
	overflow-y: auto;
	background: #fff;
	z-index: 999;
	img {
		position: fixed;
		right: 1rem;
		cursor: pointer;
	}

	.checkout {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 15vh;
		width: inherit;
		border-top: 0.5rem solid rgba(128, 128, 128, 0.424);
		position: fixed;
		bottom: 0;
		background: white;
		span {
			color: $price-color;
		}
		h4 {
			margin: 0;
		}
		button {
			border-radius: 0.3rem;
			height: 4rem;
			width: 10rem;
			margin-top: 2rem;
			background: $btn-background;
			color: white;
		}
	}
}

.modal-overlay {
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
