<template>
  <div class="products-view">
    <div class="products-view-top">
      <div class="path"><p>products / {{route}}</p></div>
        <!-- <Filters v-if="filterDisplay" class="filters-modal" @close="filterDisplay = false"/> -->
      <div class="filter" @click="filterDisplay = true">        
        <select 
          class="filters-select"
          v-model="activeSortType"
        >
          <option v-for="type in sortTypes" :key="type.name" :value="type.value">{{type.name}}</option>
        </select>
        <!-- <img class="filter-icon" src="../assets/filter.svg" alt=""> -->
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
// import Filters from '@/components/Filters.vue'

export default {
  components: { Product },
  // components: { Product, Filters },
  data(){return{
    filterDisplay: false,
    activeSortType: 'low',
    sortTypes: [{name: 'Newest', value: 'new'}, {name: 'Oldest', value: 'old'}, {name: 'Lowest price', value: 'low'}, {name: 'Highest price', value: 'high'}]
    }},
 
  methods: {
    fetchAllProducts(){
      const route = this.$route.path.substring(1).split('/')[1]
      this.$store.dispatch('fetchAllProducts', route)
    }
  },
  computed: {
    products(){
      // if(this.activeSortType == 'new'){

      // } else if (this.activeSortType == 'old'){

      // }
      return this.$store.state.products
    },
    route(){
      let routeFixed = this.$route.path.substring(1).split('/')[1]
      if(routeFixed === 'tshirt'){
        return 't-Shirts'
      }
      else if(routeFixed == 'socks'){
        return 'socks'
      }
      return routeFixed + 's'
    }
  },

  // updated(){
  //     this.fetchAllProducts()
  //     console.log("bajs")
  // },
  
  // beforeMount() {
  //     this.fetchAllProducts()
  //   }
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
  text-transform: capitalize;
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
  font-size: 1rem;
  font-family: 'Mukta Malar', sans-serif;
  background: url('../assets/filter.svg') no-repeat;
  text-align: right;
  height: 1.8rem;
  appearance: none;
  padding-right: 1.8rem;
  background-size: 32px;
  background-position: center right;
  border: none;
  &:hover {
    cursor: pointer;
  }
}

.line {
  width: 95%;
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
