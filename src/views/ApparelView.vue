<template>
  <div class="apparel">
    <div class="hoodies">
        <router-link to="products/hoodie" @click.native="fetchAllProducts">
          <h3>
            Hoodies
          </h3>
          <SinusButton>Shop now</SinusButton>
        </router-link>
      </div>
      <div class="tshirts">
        <router-link to="/products/tshirt" @click.native="fetchAllProducts">
          <h3>
            T-Shirts
          </h3>
          <SinusButton>Shop now</SinusButton>
        </router-link>
      </div>
      <div class="socks">
        <router-link to="/products/socks" @click.native="fetchAllProducts">
          <h3>
            Socks
          </h3>
          <SinusButton>Shop now</SinusButton>
        </router-link>
      </div>
      <div class="caps">
        <router-link to="/products/cap" @click.native="fetchAllProducts">
          <h3>
            Caps
          </h3>
          <SinusButton>Shop now</SinusButton>
        </router-link>
      </div>
       
  </div>
</template>

<script>
import SinusButton from '@/components/SinusButton.vue'

export default {
  components: { SinusButton },
  methods: {
      fetchAllProducts(){
      const route = this.$route.path.substring(1).split('/')[1]
      this.$store.dispatch('fetchAllProducts', route)
    }
  }

}
</script>

<style lang="scss" scoped>

.apparel {
  display: grid;
  grid-template-areas:
    "tshirts socks caps"
    "hoodies hoodies hoodies";
  padding: 0 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5rem;
  margin: 5rem 0 ;
}

.apparel > div {
  border-radius: 16px;
  background-color: #881616;
  padding: 1rem;
}

h3 {
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;
}

.hoodies {
  grid-area: hoodies;
  background: 
  url('http://localhost:5000/images/sinus-hoodie-green.png') center no-repeat,
  url('http://localhost:5000/images/sinus-hoodie-ash.png') left no-repeat,
  url('http://localhost:5000/images/sinus-hoodie-purple.png') right no-repeat;
  background-size: 40%;
  height: 20rem;
}

.tshirts {
  grid-area: tshirts;
  height: 20rem;
  background: url('http://localhost:5000/images/sinus-tshirt-yellow.png') right no-repeat;
  background-size: 70%;
}

.socks {
  grid-area: socks;
  height: 20rem;
  background: url('http://localhost:5000/images/sinus-socks-ash.png') top right no-repeat;
  background-size: 60%;
}

.caps {
  grid-area: caps;
  height: 20rem;
  background: url('http://localhost:5000/images/sinus-cap-purple.png') right no-repeat;
  background-size: 80%;
}

</style>