<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Mukta+Malar:wght@400;700&display=swap");

h1,
h2,
h3,
h4,
h5,
a {
  font-family: "Montserrat", sans-serif;
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
button {
  font-family: "Mukta Malar", sans-serif;
}

button {
  font-size: 0.875rem;
}
</style>
