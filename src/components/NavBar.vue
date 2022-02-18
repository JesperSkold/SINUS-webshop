<template>
  <div class="nav">
    <img :src="sinusLogo" class="sinus-logo" />
    <router-link to="/">Home</router-link>
    <router-link to="/">Boards</router-link>
    <router-link to="/">Wheels</router-link>
    <router-link to="/">Apparel</router-link>
    <router-link to="/">Bags</router-link>
    <div class="cartlogin">
      <router-link to="/checkout"
        ><img :src="shoppingCart" class="shopping-cart"
      /></router-link>
      <router-link to="/account"
        ><img :src="userLogin" class="user-login"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoppingCart: require("@/assets/shopping-cart.svg"),
      userLogin: require("@/assets/user-login.svg"),
      sinusLogo: require("@/assets/sinus-logo.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border: 1px solid black;
  height: 8rem;
}

a {
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: bold;
}

img{
  margin: 0 1rem
}
</style>
