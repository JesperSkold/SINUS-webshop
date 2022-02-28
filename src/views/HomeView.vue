<template>
  <div class="home" v-if="!modalView">
    <div class="hero">
      <div class="hero-flex">
        <h1>Plastic-1</h1>
        <h3>now in plastic</h3>
      </div>
      <div class="hero-product"
      @click="
            showProductModal();
            activeProduct();
          "
      ></div>
      <router-link to="/products/skateboard">
        <h3 class="shop-now">SHOP NOW</h3>
      </router-link>
    </div>
    <div class="boards">
      <h3>Boards</h3>
      <router-link to="/products/skateboard">
        <SinusButton>view more</SinusButton>
      </router-link>
    </div>
    <div class="apparel">
      <h3>Apparel</h3>
        <router-link to="/apparel">
          <SinusButton>view more</SinusButton>
        </router-link>
    </div>
    <div class="wheels">
      <h3>Wheels</h3>
      <router-link to="/products/wheel">
        <SinusButton>view more</SinusButton>
      </router-link>
    </div>
    <div class="bags">
        <h3>Bags</h3>
        <router-link to="/products/totebag">
          <SinusButton>view more</SinusButton>
        </router-link>
    </div>
  </div>
</template>

<script>
import SinusButton from '../components/SinusButton.vue'

export default {
  props: { modalView: Boolean},
  components: {
    SinusButton
    },
    methods: {
    showProductModal() {
      this.$store.dispatch("showProductModal");
    },
    activeProduct() {
      this.$store.dispatch("activeProduct", 16);
    },
  }
}
</script>

<style lang="scss" scoped>
  h1,h3{
    color: white;
    margin: 0;
    text-shadow: (0px 4px 4px rgba(0, 0, 0, 0.5));
  }
  .hero-product {
    height: 260px;
    width: 200px;
    cursor: pointer;
  }
  .home {
    padding: 2.5rem 8rem;
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: repeat(3,1fr);
    grid-template-areas: 
      "hero hero hero"
      "boards apparel apparel"
      "wheels wheels bags";
      div{
        border-radius: 16px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        padding: 1rem;
      }
      button{
        margin-top: 1rem;
      }
  }

  .shop-now:hover{
    transform: scale(1.05);
    transition: 100ms ease-in-out;
  }

  .hero{
    min-height: 20rem;
    background-image: 
      url("../assets/sinus-skateboard-plastic-1.png"),
      url("../assets/hero-background.png");
    background-size:
      4rem,
      cover;
    background-position:
      center,
      center;
    background-repeat:
      no-repeat,
      no-repeat;
    grid-area: hero;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
  }
    .hero-flex{
      display: flex;
      flex-direction: column;
    }

  .boards{
    background-image: url("../assets/boards-background.png");
    background-size: cover;
    background-position: center;
    min-height: 20rem;
    grid-area: boards;
  }

  .apparel{
    background-image: url("../assets/apparel-background.png");
    background-size: cover;
    background-position: center;
    min-height: 20rem;
    grid-area: apparel;
  }

  .wheels{
    background-image: url("../assets/wheels-background.png");
    background-size: cover;
    background-position: center;
    min-height: 20rem;
    grid-area: wheels;
  }

  .bags{
    background-image: 
      url('http://localhost:5000/images/sinus-totebag-gretaedition.png'),
      url("../assets/bags-background.png"),
    ;
    background-repeat: no-repeat;
    background-size: 12rem, 70rem;
    background-position: center, center;
    min-height: 20rem;
    grid-area: bags;
  }

</style>
