<template>
	<div class="wrapper">
		<div class="modal-overlay" @click="closeModal" v-if="showCart"></div>
		<Transition name="cart-pop" appear>
			<div class="cart-view" v-if="showCart">
				<div class="top-title">
					<h5>Your Cart</h5>
					<img src="../assets/close.svg" alt="" @click="closeModal" />
				</div>
        <!-- <Product :modalView="true" /> är samma sak som </Product modalView> -->
				<Product v-for="product in products" :key="product.id" :product="product" :modalView="true" class="cart-test" />
				<section v-if="!cartEmpty" class="checkout">
					<h5>
						Checkout Total: <span>${{ total }}</span>
					</h5>
					<router-link to="/checkout">
						<SinusButton v-on:click.native="closeModal">TO CHECKOUT</SinusButton>
					</router-link>
				</section>
				<h5 v-else class="empty">Cart is empty :(</h5>
			</div>
		</Transition>
	</div>
</template>

<script>
import SinusButton from "@/components/SinusButton.vue";
import Product from "@/components/Product.vue";
export default {
	components: {
		Product,
		SinusButton,
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
		cartEmpty() {
			if (this.$store.state.cart.length) {
				return false;
			} else {
				return true;
			}
		},
		total() {
			let cart = this.$store.state.cart;
			let sum = 0;
			for (let i = 0; i < cart.length; i++) {
				sum = sum + cart[i].amount * cart[i].price;
			}
			return sum;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_global-colors.scss";

.cart-pop-enter {
	transform: translateX(100%);
}
.cart-pop-enter-active {
	transition: .8s;
}

.cart-pop-leave-active {
	transform: translateX(100%);
	transition: .8s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.top-title {
	display: flex;
	justify-content: space-between;
	padding: 2rem;
	background: #f4f4f4;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
	margin-bottom: 2.5rem;
	height: 4rem;
	h5 {
		margin: 0;
		align-self: center;
	}
	img {
		height: 2rem;
		align-self: center;
	}
}

.cart-view {
	position: absolute;
	right: 0;
	width: 35vw;
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
		display: flex;
		flex-direction: column;
		height: 20vh;
		width: 35vw;
		background: #f4f4f4;
		box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
		position: fixed;
		bottom: 0;
		span {
			color: $price-color;
		}
		h5 {
			margin: 0.5rem 0 0;
		}
		button {
			margin-top: 0.5rem;
		}
	}
}

.empty {
	text-align: center;
}

.cart-test:last-of-type {
	margin-bottom: 25vh;
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
