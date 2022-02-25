<template>
	<div class="admin-view">
    <section class="products">
    <form @change="getCategory($event.target.value); selectedProduct = null">
      <select>
        <option v-for="category in categories" :value="category" :key="category">
          {{category}}
          </option>
      </select>
    </form>
    <ul>
      <li v-for="product in products" :key="product.id"> 
        id: {{product.id}}, title: {{product.title}}
        <button @click="selectedProduct = product">EDIT</button>
        <button @click="deleteProduct(product)">DELETE</button>
      </li>
    </ul>
    <form v-if="selectedProduct" @submit.prevent="patchProduct">
      <input type="text" v-model="selectedProduct.title" placeholder="title">
      <input type="text" v-model="selectedProduct.shortDesc" placeholder="shortDesc">
      <input type="text" v-model="selectedProduct.longDesc" placeholder="longDesc">
      <input type="text" v-model="selectedProduct.imgFile" placeholder="imgFile">
      <input type="text" v-model="selectedProduct.category" placeholder="category">
      <input type="text" v-model="selectedProduct.price" placeholder="price">
      <input type="submit">
    </form>
    <form v-if="newProduct" @submit.prevent="addProduct">
      <h5>Add product</h5>
      <input type="text" v-model="newProduct.title" placeholder="title">
      <input type="text" v-model="newProduct.shortDesc" placeholder="shortDesc">
      <input type="text" v-model="newProduct.longDesc" placeholder="longDesc">
      <input type="text" v-model="newProduct.imgFile" placeholder="imgFile">
      <input type="text" v-model="newProduct.category" placeholder="category">
      <input type="text" v-model="newProduct.price" placeholder="price">
      <input type="submit">
    </form>
    <form @submit.prevent="upload" class="upload">
      <input type="file" ref="fileField">
      <button>UPLOAD</button>
    </form>
    </section>
		<section class="account-orders">
			<h3>ORDER HISTORY</h3>
			<div class="orders" v-for="item in uniqueOrder" :key="item.id">
				<h4>OrderID: {{ item.id }}</h4>
				<p>
					Total price: <span>${{ item.sum }}</span>
				</p>
				<p>Order date: {{ item.date }}</p>
        <form action="" @change="updateOrder($event, item.id)">
          <select name="" id="lol" placeholder="asdfads">
            <option value="" selected disabled hidden>{{ item.status }}</option>
            <option value="inProcess">inProcess</option>
            <option value="shipped">Shipped</option>
            <option value="canceled">Cancel</option>
          </select>
        </form>
			</div>
		</section>
	</div>
</template>

<script>
export default {
  data(){return{
    categories: ['cap', 'hoodie', 'wheel', 'tshirt', 'totebag', 'skateboard', 'socks'],
    selectedProduct: null,
    newProduct: {
      title: "",
      shortDesc: "",
      longDesc: "",
      imgFile: "",
      category: "",
      price: "",
    },
  }},
  methods:{
    updateOrder(orderStatus, orderId){
		console.log(orderStatus.target.value)
		console.log(orderId)  
      this.$store.dispatch('patchOrder', {status: orderStatus.target.value, id: orderId})
    },
    getCategory(category){
      this.$store.dispatch('fetchAllProducts', category)
      this.selectedProduct = null
    },
    patchProduct(){
      this.$store.dispatch('patchProduct', this.selectedProduct)
      this.selectedProduct = null
    },
    deleteProduct(product){
      this.$store.dispatch('deleteProduct', product)
    },
    addProduct(){
      this.$store.dispatch('addProduct', this.newProduct)
    },
    upload(){
      // console.log(this.$refs.fileField, "LMAO");
      // console.log(this.$refs.fileField.files[0])
      // const formData = new FormData()
      // formData.append("imgFile", this.$refs.fileField.files[0])
      // console.log(formData);
      this.$store.dispatch('upload', this.$refs.fileField.files[0])
    }
  },
	computed: {
    products(){
      return this.$store.state.products
    },
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

.admin-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.products {
  display: flex;
  flex-direction: column;
  // justify-content: center ;
  padding: 5rem;
}

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
