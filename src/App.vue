<template>
  <div id="app">
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue"
export default {
  components:{
    Footer
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
	padding: 0;
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Mukta+Malar:wght@400;700&display=swap');

h1, h2, h3, h4, h5 {
  font-family: 'Montserrat', sans-serif;
}
h1 {
  font-size: 6rem
}
h2 {
  font-size: 4rem
}
h3 {
  font-size: 3rem
}
h4 {
  font-size: 2rem
}
p, button {
  font-family: 'Mukta Malar', sans-serif;
}
button {
  font-size: .875rem
}
</style>