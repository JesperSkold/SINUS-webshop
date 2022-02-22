<template>
  <div class="apparel">
      <div class="hoodies">
        <router-link to="/hoodies">
          <h3>
            Hoodies
          </h3>
          <SinusButton>Shop now</SinusButton>
        </router-link>
      </div>
      <div class="tshirts">
        <router-link to="/tshirts">
          <h3>
            T-Shirts
          </h3>
          <SinusButton>Shop now</SinusButton>
        </router-link>
      </div>
      <div class="socks">
        <router-link to="/socks">
          <h3>
            Socks
          </h3>
          <SinusButton>Shop now</SinusButton>
        </router-link>
      </div>
      <div class="caps">
        <router-link to="/caps">
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
  components: { SinusButton }

}
</script>

<style lang="scss" scoped>

.apparel {
  display: grid;
  grid-template-areas:
    "hoodies hoodies hoodies"
    "tshirts socks caps";
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5rem;
  margin-top: 4rem;
}

.apparel > div {
  border-radius: 16px;
  padding: 1rem;
}

h3 {
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;
}

.hoodies {
  grid-area: hoodies;
  background: url('../assets/product-template.png') no-repeat 80% #EEEEEE;
  height: 20rem;
}

.tshirts {
  grid-area: tshirts;
  background: tomato;
  height: 20rem;
}

.socks {
  grid-area: socks;
  background: tomato;
  height: 20rem;
}

.caps {
  grid-area: caps;
  background: tomato;
  height: 20rem;
}

</style>