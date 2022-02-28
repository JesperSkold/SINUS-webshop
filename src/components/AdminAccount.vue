<template>
	<div class="admin-view">
    <section class="product-management">
      <h4>PRODUCT ADMINISTRATION</h4>
      <p>Select mode:</p>
      <div class="select-mode">
        <button 
          @click="productManagementView = 'list'"
          :class="{active : productManagementView=='list'}" 
        >
          Edit and delete products
        </button>
        <button 
          @click="productManagementView = 'add'"
          :class="{active : productManagementView=='add'}"
        >
          Add product
        </button>
      </div>
      <div v-if="productManagementView == 'list'" class="edit-delete-products">
        <div v-if="!selectedProduct" class="select-category">
          <p><b>Select category:</b></p>
          <!-- <form @change="getCategory($event.target.value); selectedProduct = null"> -->
          <form @change="getCategory(); selectedProduct = null">
            <select v-model="selectedCategory">
              <option v-for="category in categories" :value="category" :key="category">
                {{category}}
              </option>
            </select>
          </form>
        </div>
      <div v-if="!selectedProduct" class="product-list">
        <div v-for="product in products" :key="product.id" class="product-list-item">
          <p><b>id:</b> {{product.id}}</p>
          <p class="product-title"><b>title:</b> {{product.title}}</p>
          <p><b>price:</b> {{product.price}}</p>
          <div class="product-btns">
            <button @click="selectedProduct = product">EDIT</button>
            <button @click="deleteProduct(product)">DELETE</button>
          </div>
        </div>
      </div>
      <div v-if="selectedProduct" class="edit-product-form">
        <form @submit.prevent="patchProduct" class="edit-product-form">
          <div>
          <p>Title</p>
          <input type="text" v-model="selectedProduct.title" placeholder="title">
        </div>
        <div>
          <p>Short Description</p>
          <input type="text" v-model="selectedProduct.shortDesc" placeholder="shortDesc">
        </div>
        <div>
          <p>Long Description</p>
          <input type="text" v-model="selectedProduct.longDesc" placeholder="longDesc">
        </div>
        <div>
          <p>Image File</p>
          <input type="text" v-model="selectedProduct.imgFile" placeholder="imgFile">
        </div>
        <div>
          <p>Category</p>
          <select v-model="selectedProduct.category">
            <option v-for="category in categories" :key="category" :value="category">
              {{category}}
            </option>
          </select>
        </div>
        <div>
          <p>Price</p>
          <input type="text" v-model="selectedProduct.price" placeholder="price" onkeypress="return /[0-9]/i.test(event.key)">
        </div>
        <input type="submit">
        </form>
        <button @click="selectedProduct = null">Back</button>
      </div>
    </div>
    <div v-if="productManagementView == 'add'" class="add-product">
      <form @submit.prevent="addProduct" class="add-product-form">
        <div>
          <p>Title</p>
          <input type="text" v-model="newProduct.title" placeholder="title">
        </div>
        <div>
          <p>Short Description</p>
          <input type="text" v-model="newProduct.shortDesc" placeholder="shortDesc">
        </div>
        <div>
          <p>Long Description</p>
          <input type="text" v-model="newProduct.longDesc" placeholder="longDesc">
        </div>
        <div>
          <p>Image File</p>
          <input type="text" v-model="newProduct.imgFile" placeholder="imgFile">
        </div>
        <div>
          <p>Category</p>
          <select v-model="newProduct.category">
            <option v-for="category in categories" :key="category" :value="category">
              {{category}}
            </option>
          </select>
        </div>
        <div>
          <p>Price</p>
          <input type="text" v-model="newProduct.price" placeholder="price" onkeypress="return /[0-9]/i.test(event.key)">
        </div>
        <input type="submit">
      </form>
      <form @submit.prevent="upload" class="upload">
        <input type="file" ref="fileField">
        <button>UPLOAD</button>
      </form>
    </div>
    </section>
		<section class="account-orders">
			<h4>ORDER ADMINISTRATION</h4>
      <h5 v-if="uniqueOrder.length < 1">There are no orders!</h5>
			<div class="order" v-for="order in uniqueOrder" :key="order.id">
				<p class="order-id"><b>Order id:</b> {{ order.id }}</p>
				<p class="order-price">
					<b>Total price:</b> <span>${{ order.sum }}</span>
				</p>
				<p class="order-date"><b>Date:</b> {{ order.date }}</p>
        <div class="order-status-form">
          <p><b>Status:</b></p>
          <form action="" @change="updateOrder($event, order.id)">
            <select name="" id="lol" placeholder="asdfads">
              <option value="" selected disabled hidden>{{ order.status }}</option>
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
    selectedCategory: null,
    selectedProduct: null,
    productManagementView: null,
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
    getCategory(){
      this.$store.dispatch('fetchAllProducts', this.selectedCategory)
      this.selectedProduct = null
    },
    patchProduct(){
      this.$store.dispatch('patchProduct', this.selectedProduct)
      console.log(this.selectedProduct)
      this.selectedCategory = this.selectedProduct.category
      this.selectedProduct = null
    },
    deleteProduct(product){
      this.$store.dispatch('deleteProduct', product)
    },
    addProduct(){
      this.$store.dispatch('addProduct', this.newProduct)
    },
    upload(){
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
}

h4 {
  margin: 2.5rem 0 0 0;
}

h5 {
  margin: 0;
}

p {
  margin: 0;
}

.product-management {
  display: flex;
  border-right: 3px #CCCCCC solid;
  flex-direction: column;
  padding: 0 2rem;
  place-items: center;
}

.edit-delete-products {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 1rem;
  button {
    align-self: center;
    margin: 1rem;
  }
}

.select-category {
  display: flex;
  align-items: center;
  p {
    margin: 0;
  }
}

.product-list {
  width: 100%;
  display: grid;
  place-items: center;
}

.product-list-item {
  display: flex;
  width: 100%;
  button {
    padding: 0;
    margin: 0;
  }
  p {
    flex: 1;
    margin: 0;
  }
  
  .product-title {
    flex: 2
  }
  .product-btns {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    
  }
}

.product-list-item:nth-child(odd){
  background: #CCCCCC;
}


.edit-product-form {
  display: flex;
  width: 100%;
  flex-direction: column;
  place-items: center;
  div {
    display: flex;
    width: 100%;
    p {
      flex: 1;
      margin: 0;
    }
    input, select {
      flex: 3;
    }
  }
}

.add-product {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 1rem; 
}

.add-product-form {
  display: flex;
  width: 100%;
  flex-direction: column;
  place-items: center;
  div {
    display: flex;
    width: 100%;
    p {
      flex: 1;
      margin: 0;
    }
    input, select {
      flex: 3;
    }
  }
}

.active {
  text-decoration: underline;
  font-weight: bold;
}

.upload {
  margin: 1rem;
  align-self: center;
}

.account-orders {
  display: flex;
  flex-direction: column;
  align-items: center;
	padding: 0 1rem;
	height: 60vh;
	overflow-y: auto;
}
.order {
  display: flex;
  width: 100%;
  justify-content: space-between;
  .order-id {
    flex: 1;
  }
  .order-price {
    flex: 1;
  }
  .order-date {
    flex: 1;
  .order-status-form {
    flex: 1;
  }
  }
}

.order:nth-child(odd){
  background: #CCCCCC
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
