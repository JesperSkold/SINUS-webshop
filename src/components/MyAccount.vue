<template>
	<div class="wrapper">
		<div class="my-account" v-if="accountInfo">
			<section class="account-info">
				<h3>MY ACCOUNT</h3>
				<h5>{{ accountInfo.name }}</h5>
				<h5>{{ accountInfo.email }}</h5>
				<h5>{{ accountInfo.address.street }}</h5>
				<h5>{{ accountInfo.address.zip }}</h5>
				<h5>{{ accountInfo.address.city }}</h5>
			</section>
			<section class="account-orders">
				<h3>ORDER HISTORY</h3>
				<div class="orders" v-for="item in uniqueOrder" :key="item.id">
					<h4>OrderID: {{ item.id }}</h4>
					<p>
						Total price: <span>${{ item.sum }}</span>
					</p>
					<p>Order date: {{ item.date }}</p>
					<p>Order status: {{ item.status }}</p>
				</div>
			</section>
		</div>
		<div class="error-msg" v-else>
			<h4>You can't view your account info if you're not logged in!</h4>
			<router-link to="/login"> Click here to login or sign up </router-link>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		uniqueOrder() {
			let orders = [];
			let orderInfo = null;
			let sum = 0;
			for (let i = 0; i < this.orderHistory.length; i++) {
				orderInfo = { date: this.orderHistory[i].createdAt.slice(0, 10), id: this.orderHistory[i].id, status: this.orderHistory[i].status };
				for (const elem of this.orderHistory[i].items) {
					sum += elem.price * elem.amount;
				}
				orders.push({ ...orderInfo, sum });
				sum = 0;
			}
			return orders;
		},
		accountInfo() {
			return this.$store.state.accountInfo;
		},
		orderHistory() {
			return this.$store.state.orderHistory;
		},
	},
	async mounted() {
		await this.$store.dispatch("getAccountInfo");
		await this.$store.dispatch("getOrderHistory");
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_global-colors.scss";

.error-msg{
	display: flex;
	flex-direction: column;
	align-items: center;
	a{
		text-decoration: underline;
	}
}

.my-account {
	display: flex;
	justify-content: center;
	padding: 5rem;
	gap: 20vh;
}

.account-info {
	h3 {
		text-decoration: underline;
	}
}

.account-orders {
	padding: 0 1rem;
	height: 50vh;
	overflow-y: auto;
}

.orders {
	p:nth-child(2) {
		display: inline;
		span {
			color: $price-color;
		}
		p:nth-child(3) {
			margin: 0;
		}
	}
	p:nth-child(4) {
		margin-top: 0;
		margin-bottom: 2rem;
		border-bottom: 1px solid black;
	}
	p {
		display: flex;
		flex-direction: column;
	}
	h4 {
		margin: 1rem 0;
	}
}
</style>
