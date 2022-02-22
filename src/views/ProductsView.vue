<template>
  <div class="products-view">
    <div class="products-view-top">
      <div class="path"><p>products / {{route}}</p></div>
      <div class="filter" @click="filterDisplay = true">        
        <select 
          class="filters-select"
          v-model="activeSortType"
        >
          <option v-for="type in sortTypes" :key="type.name" :value="type.value">{{type.name}}</option>
        </select>
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

export default {
  components: { Product },
  data(){return{
    filterDisplay: false,
    activeSortType: 'low',
    sortTypes: [{name: 'Newest', value: 'new'}, {name: 'Oldest', value: 'old'}, {name: 'Low Price', value: 'low'}, {name: 'High Price', value: 'high'}]
    }},
 
  computed: {
    products(){
  
      return this.$store.state.products
    },
    route(){
      return this.$route.path.substring(1).split('/')[1]
    }
  },
  beforeMount(){
    const route = this.$route.path.substring(1).split('/')[1]
      this.$store.dispatch('fetchAllProducts', route)
  },

  watch: {
    '$route.path': function () {
      const route = this.$route.path.substring(1).split('/')[1]
      this.$store.dispatch('fetchAllProducts', route)
    }
  },
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

.filters-select {
  // appearance: none;
  font-size: 1rem;
  font-family: 'Mukhta Malar', sans-serif;
  // background: url('../assets/arrow-up.svg') no-repeat;
  background: none;
  text-align: right;
  background-size: 16px;
  background-position: center right;
  border: none;
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
