<template>
  <div class="admin-product-edit-form">
    <!-- <div v-if="selectedProduct" class="edit-product-form"> -->
      <form @submit.prevent="submitPatch" class="edit-product-form">
        <div>
          <p>Title</p>
          <input type="text" v-model="patchedProduct.title" placeholder="title">
        </div>
        <div>
          <p>Short Description</p>
          <input type="text" v-model="patchedProduct.shortDesc" placeholder="shortDesc">
        </div>
        <div>
          <p>Long Description</p>
          <input type="text" v-model="patchedProduct.longDesc" placeholder="longDesc">
        </div>
        <div>
          <p>Image File</p>
          <input type="text" v-model="patchedProduct.imgFile" placeholder="imgFile">
        </div>
        <div>
          <p>Category</p>
          <select v-model="patchedProduct.category">
            <option v-for="category in categories" :key="category" :value="category">
              {{category}}
            </option>
          </select>
        </div>
        <div>
          <p>Price</p>
          <input type="text" v-model="patchedProduct.price" placeholder="price" onkeypress="return /[0-9]/i.test(event.key)">
        </div>
        <input type="submit">
      </form>
      <button @click="patchedProduct = null">Back</button>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {selectedProduct: Object},

  data(){
    return{
      categories: ['cap', 'hoodie', 'wheel', 'tshirt', 'totebag', 'skateboard', 'socks'],
      selectedCategory: null,
      patchedProduct: null
    }
  },
  methods:{
    submitPatch(){
      this.$emit('patch', this.patchedProduct)
    }
  },
  beforeMount(){
    this.patchedProduct = this.selectedProduct
  },
}
</script>

<style>

</style>