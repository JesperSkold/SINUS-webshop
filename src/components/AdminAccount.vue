<template>
	<div class="admin-view">
    <section class="product-management">
      <h4>PRODUCT MANAGEMENT</h4>
      <div class="select-category">
        <p>Select category:</p>
        <form @change="getCategory($event.target.value); selectedProduct = null">
          <select>
            <option v-for="category in categories" :value="category" :key="category">
              {{category}}
            </option>
          </select>
        </form>
      </div>
      <div v-for="product in products" :key="product.id" class="product-list-item">
        <div>
          <button @click="selectedProduct = product">EDIT</button>
          <button @click="deleteProduct(product)">DELETE</button>
        </div>
        <p>id: {{product.id}}</p>
        <p>title: {{product.title}}</p>
        <p>price: {{product.price}}</p>
      </div>
    <form v-if="selectedProduct" @submit.prevent="patchProduct">
      <input type="text" v-model="selectedProduct.title" placeholder="title">
      <input type="text" v-model="selectedProduct.shortDesc" placeholder="shortDesc">
      <input type="text" v-model="selectedProduct.longDesc" placeholder="longDesc">
      <input type="text" v-model="selectedProduct.imgFile" placeholder="imgFile">
      <input type="text" v-model="selectedProduct.category" placeholder="category">
      <input type="text" v-model="selectedProduct.price" placeholder="price">
      <input type="submit">
    </form>
    <form @submit.prevent="addProduct">
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
			<h4>ORDER HISTORY</h4>
			<div class="orders" v-for="item in uniqueOrder" :key="item.id">
				<p>OrderID: {{ item.id }}</p>
				<p>
					Total price: <span>${{ item.sum }}</span>
				</p>
				<p>Order date: {{ item.date }}</p>
        <div class="order-status-form">
          <p>Order status:</p>
          <form action="" @change="updateOrder($event, item.id)">
            <select name="" id="lol" placeholder="asdfads">
              <option value="" selected disabled hidden>{{ item.status }}</option>
              <option value="inProcess">inProcess</option>
              <option value="shipped">Shipped</option>
              <option value="canceled">Cancel</option>
            </select>
          </form>
        </div>
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
  grid-template-columns: 4fr 3fr;
  // padding: 2.5rem 0rem
}

h4 {
  margin: 2.5rem 0 0 0;
}

h5 {
  margin: 0;
}

.product-management {
  display: flex;
  border-right: 3px #CCCCCC solid;
  flex-direction: column;
  padding: 0 2rem;
  align-items: center;
}

.select-category {
  display: flex;
  align-items: center;
}

.product-list-item {
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 0rem 0;
  button {
    padding: 0;
    margin: 0;
  }
  p {
    margin: 0;
  }
}

.account-orders {
  display: flex;
  flex-direction: column;
  align-items: center;
	padding: 0 1rem;
	height: 60vh;
	overflow-y: auto;
}
.orders {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  // border: 1px black solid;
  p {
    margin: 0 1rem 0 0;
  }
}

.order-status-form {
  display: flex;
  align-items: center;
  p {
    margin: 0;
  }
  select {
    background: none;
    border: none;
    font-size: .9rem;
  }
}

</style>
