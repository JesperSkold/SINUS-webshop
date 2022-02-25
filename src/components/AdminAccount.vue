<template>
	<div>
		<h1>HELLO ADMIN MAN</h1>
		<section class="account-orders">
			<h3>ORDER HISTORY</h3>
			<div class="orders" v-for="item in uniqueOrder" :key="item.id">
				<h4>OrderID: {{ item.id }}</h4>
				<p>
					Total price: <span>${{ item.sum }}</span>
				</p>
				<p>Order date: {{ item.date }}</p>
         <!-- <form action="" @submit.prevent="updateOrder($event)"> -->
        <form action="" @change="updateOrder($event, item.id)">
          <select name="" id="lol" placeholder="asdfads">
            <option value="" selected disabled hidden>{{ item.status }}</option>
            <option value="inProcess">inProcess</option>
            <option value="shipped">Shipped</option>
            <option value="canceled">Canceled</option>
          </select>
        </form>
				<!-- <p>Order status: {{ item.status }}</p> -->
			</div>
		</section>
	</div>
</template>

<script>
// in process, cancelled, shipped
export default {
    data(){return{
        status: null
      }
    },
  methods:{
    updateOrder(orderStatus, orderId){
		console.log(orderStatus.target.value)
		console.log(orderId)  
      this.$store.dispatch('patchOrder', {status: orderStatus.target.value, id: orderId})
    }
  },
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
		orderHistory() {
			return this.$store.state.orderHistory;
		},
	},
  mounted(){
    this.$store.dispatch('getOrderHistory')
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_global-colors.scss";
.account-orders {
  width: 30vw;
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
		p:nth-child(3){
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
