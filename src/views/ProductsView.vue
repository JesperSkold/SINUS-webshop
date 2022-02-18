<template>
  <div>
    <Product v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'

export default {
  components: { Product },
  methods: {
    fetchAllProducts(){
      this.$store.dispatch('fetchAllProducts')
    }
  },
  computed: {
    products(){
      return this.$store.state.products
    }
  },
  
  beforeMount() {
      this.fetchAllProducts()
    }
}
</script>

<style>

</style>