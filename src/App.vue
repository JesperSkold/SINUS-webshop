<template>
  <div>
    <Cart />
    <ProductModal />
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Cart from "@/components/Cart";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import ProductModal from "@/components/ProductModal.vue";

export default {
  components: {
    NavBar,
    Footer,
    Cart,
    ProductModal,
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Mukta+Malar:wght@400;700&display=swap");

body,
html {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
a {
  font-family: "Montserrat", sans-serif;
}

a {
  text-decoration: none;
  color: black;

  &.router-link-exact-active {
    color: #003827;
  }
}

h1 {
  font-size: 6rem;
}
h2 {
  font-size: 4rem;
}

h3 {
  font-size: 3rem;
}

h4 {
  font-size: 2rem;
}

h5 {
  font-size: 1.5rem;
}

p,
button,
label {
  font-family: "Mukta Malar", sans-serif;
  h5 {
    font-size: 1.5rem;
  }
}
button {
  font-size: 0.875rem;
}
</style>
