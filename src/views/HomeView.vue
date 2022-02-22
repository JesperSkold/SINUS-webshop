<template>
  <div class="home">
    <div class="hero">
      <div class="hero-flex">
        <h1>Plastic-1</h1>
        <h3>now in plastic</h3>
      </div>
      <img src="../assets/sinus-skateboard-plastic-1.png" alt="">
      <router-link to="">
        <h3 class="shop-now">SHOP NOW</h3>
      </router-link>
    </div>
    <div class="boards">
      <h3>Boards</h3>
      <router-link to="/boards">
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
      <router-link to="/wheels">
        <SinusButton>view more</SinusButton>
      </router-link>
    </div>
    <div class="bags">
      <div class="bags-flex">
        <h3>Bags</h3>
        <router-link to="/bags">
          <SinusButton>view more</SinusButton>
        </router-link>
      </div>
      <img src="../assets/sinus-totebag-gretaedition 1.png" alt="">
    </div>
  </div>
</template>

<script>
import SinusButton from '../components/SinusButton.vue'

export default {
  components: {SinusButton}
}
</script>

<style lang="scss" scoped>
  h1,h3{
    color: white;
    margin: 0;
  }
  .home {
    padding: 2.5rem;
    display: grid;
    grid-gap: 5rem;
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

  .hero:hover .shop-now{
    transform: scale(1.5);
    transition: 100ms ease-in-out;
  }

  .shop-now{
    transition: 100ms ease-in-out;
  }

  .hero{
    background: url("../assets/hero-background.png");
    background-size: cover;
    background-position: center;
    
    grid-area: hero;
    // display: flex;
    // justify-content: space-between;
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
    min-height: 26rem;
    grid-area: boards;
  }

  .apparel{
    background-image: url("../assets/apparel-background.png");
    background-size: cover;
    background-position: center;
    min-height: 26rem;
    grid-area: apparel;
  }

  .wheels{
    background-image: url("../assets/wheels-background.png");
    background-size: cover;
    background-position: center;
    min-height: 26rem;
    grid-area: wheels;
  }

  .bags{
    background-image: url("../assets/bags-background.png");
    background-size: cover;
    background-position: center;
    min-height: 26rem;
    grid-area: bags;
    display: flex;
    justify-content: space-between;

    img{
      margin-right: 1rem;
    }
  }

  .bags-flex{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

</style>
