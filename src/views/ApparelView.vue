<template>
  <div class="apparel">
    <div class="hoodies">
        <router-link to="products/hoodie">  
          <h3>
            Hoodies
          </h3>
          <SinusButton>Shop now</SinusButton>
        </router-link>
      </div>
      <div class="tshirts">
        <router-link to="/products/tshirt">
          <h3>
            T-Shirts
          </h3>
          <SinusButton>Shop now</SinusButton>
        </router-link>
      </div>
      <div class="socks">
        <router-link to="/products/socks">
          <h3>
            Socks
          </h3>
          <SinusButton>Shop now</SinusButton>
        </router-link>
      </div>
      <div class="caps">
        <router-link to="/products/cap">
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
}
</script>

<style lang="scss" scoped>

.apparel {
  display: grid;
  grid-template-areas:
    "tshirts socks caps"
    "hoodies hoodies hoodies";
  padding: 2.5rem 8rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2.5rem;
}

.apparel > div {
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  transition: 150ms ease all;
  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
    transition: 100ms ease all;
  }
}


h3 {
  color: white;
  margin-bottom: 1rem;
  text-shadow: (0px 4px 4px rgba(0, 0, 0, 0.5));
}

.hoodies {
  grid-area: hoodies;
  background: 
    url('http://localhost:5000/images/sinus-hoodie-green.png') no-repeat,
    url('http://localhost:5000/images/sinus-hoodie-ash.png') no-repeat,
    url('http://localhost:5000/images/sinus-hoodie-purple.png') no-repeat,
    url('http://localhost:5000/images/sinus-hoodie-fire.png') no-repeat,
    url('http://localhost:5000/images/sinus-hoodie-ocean.png') no-repeat,
    url('../assets/logo.svg') round,
    linear-gradient(#be9022, #881616)
  ;

  background-position:
    bottom center,
    bottom left 40%,
    bottom right 40%,
    bottom right 30%,
    bottom left 30%,
  ;

  background-size: 
    28%,
    27%,
    27%,
    26%,
    26%,
    8rem
  ;

  height: 20rem;
      &:hover {
    background-position:
      bottom center,
      bottom left 39%,
      bottom right 39%,
      bottom right 29%,
      bottom left 29%;
  }
}

.tshirts {
  grid-area: tshirts;
  height: 20rem;
  background: 
    url('http://localhost:5000/images/sinus-tshirt-yellow.png') right no-repeat,
    url('../assets/logo.svg') space,
    linear-gradient(#881616, peru)
  ;
  background-size: 70%, 3.5rem;
  &:hover {
    background-size: 72%, 3.5rem;
  }
}

.socks {
  grid-area: socks;
  height: 20rem;
  background: 
    url('http://localhost:5000/images/sinus-socks-fire.png') no-repeat,
    url('http://localhost:5000/images/sinus-socks-green.png') no-repeat,
    url('http://localhost:5000/images/sinus-socks-ocean.png') no-repeat,
    url('../assets/logo.svg') space,
    linear-gradient(#581e78, peru)
    ;
  background-position: 
    center right 34%,
    center right 30%,
    center right 26%;
  // background-color: #581e78;
  // background-color: #f4f4f4;
  background-size: 30%, 30%, 30%, 7rem;
    &:hover {
    background-size: 32%, 32%, 32%, 7rem;
  }
}

.caps {
  grid-area: caps;
  height: 20rem;
  background: url('http://localhost:5000/images/sinus-cap-purple.png') right no-repeat,
  url('../assets/logo.svg') space,
  linear-gradient(#2c598b, peru);
  // background-color: #2c598b;
  // background-color: #f4f4f4;
  background-size: 80%, 3.5rem;
  &:hover {
    background-size: 82%, 3.5rem;
  }
}

</style>