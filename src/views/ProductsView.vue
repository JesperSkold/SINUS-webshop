<template>
  <div class="products-view">
    <Filters v-if="filterDisplay" @close="filterDisplay = false"/>
    <div class="products-view-top">
      <div class="path"><p>Products / Hoodies</p></div>
      <div class="filter" @click="filterDisplay = true">
        <img class="filter-icon" src="../assets/filter.svg" alt="">
        <p>Filters</p>
      </div>
      <div class="line"></div>
    </div>
    <div class="categories-navigation">
      <Categories />
    </div>
    <div class="products-list">
      <Product v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
import Categories from '@/components/Categories.vue'
import Filters from '@/components/Filters.vue'

export default {
  components: { Product, Categories, Filters },
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
  display: grid;
  grid-template-areas: 1fr 1fr;
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
  grid-column: 2/3;
  width: 50rem;
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

.line {
  width: 80%;
  grid-column: 1/4;
  grid-row: 2/3;
  margin-bottom: 1rem;
  justify-self: center;
  border-top: 2px black solid;
}

.categories-navigation {
  align-self: start;
}

.products-list {
  display: grid;
  width: 50rem;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  padding: 0;
}

</style>>
