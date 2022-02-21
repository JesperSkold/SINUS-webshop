<template>
	<div class="checkout-view">
    <!-- <section class="products">
		<h1>YOUR PRODUCTS</h1>
		<Product v-for="product in products" :key="product.id" :product="product" />
    </section> -->
		<CheckoutForm />
	</div>
</template>

<script>
// import Product from "@/components/Product.vue";
import CheckoutForm from "@/components/CheckoutForm";
export default {
	components: {
   CheckoutForm,
  //  Product 
   },
	data() {
		return {};
	},
	computed: {
		products() {
			return this.$store.state.products;
		},
	},
};
</script>

<style lang="scss" scoped>
.checkout-view {
	display: flex;
	flex-direction: row;
	align-items: center;
}
</style>

