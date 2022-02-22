<template>
  <div class="products-view">
    <div class="products-view-top">
      <div class="path"><p>Products / Hoodies</p></div>
        <Filters v-if="filterDisplay" class="filters-modal" @close="filterDisplay = false"/>
      <div class="filter" @click="filterDisplay = true">
        <p>Filters</p>
        <img class="filter-icon" src="../assets/filter.svg" alt="">
      </div>
      <div class="line"></div>
    </div>
    <div class="products-list">
      <Product v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
import Filters from '@/components/Filters.vue'

export default {
  components: { Product, Filters },
  data(){return{
    filterDisplay: false,
    }},
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

<style scoped lang="scss">

.products-view {
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  place-items: center;
}

p {
  margin: 0;
  padding: 0;
  line-height: 0;
}

.products-view-top {
  display: grid;
  width: 60rem;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
}

.path {
  grid-column: 1/1;
  grid-row: 1/2;
  justify-self: left;
}

.filter {
  display: flex;
  align-items: center;
  grid-row: 1/2;
  grid-column: 3/4;
  justify-self: right;
}

.filter:hover {
  cursor: pointer;
}

.line {
  width: 90%;
  grid-column: 1/4;
  grid-row: 2/3;
  margin-bottom: 1rem;
  justify-self: center;
  border-top: 2px black solid;
}

.products-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  column-gap: 4rem;
}

</style>>
