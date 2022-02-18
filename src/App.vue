<template>
  <div>
    <Cart />
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Cart from "@/components/Cart";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components:{
     NavBar,
     Footer,
     Cart 
     },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Mukta+Malar:wght@400;700&display=swap");

body, html{
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
}

a:hover {
  text-shadow: rgba(0, 0, 0, 0.25);
}

a.active {
  text-decoration-line: underline;
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

.sinus-button {
  background: #003827;
  color: White;
  border-radius: 4px;
  padding: 1rem 2.5rem;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
}

.sinus-button:active {
  background: #015239;
}

.sinus-button:hover {
  box-shadow: -1px 3px 6px 0px rgba(0, 0, 0, 0.4);
}
</style>
