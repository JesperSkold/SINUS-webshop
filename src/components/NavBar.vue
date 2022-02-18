<template>
  <div class="nav">
    <img :src="sinusLogo" class="sinus-logo" />
    <router-link to="/">Home</router-link>
    <router-link to="/">Boards</router-link>
    <router-link to="/">Wheels</router-link>
    <router-link to="/">Apparel</router-link>
    <router-link to="/">Bags</router-link>
    <div class="cartlogin">
      <!-- <router-link to="/checkout"> -->
      <img @click="showCart" :src="shoppingCart" class="shopping-cart" />
      <!-- </router-link> -->
      <img :src="userLogin" class="user-login" />
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
 methods:{
   showCart(){
     this.$store.dispatch('showCartModal')
   }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid black;
  height: 8rem;
}

.shopping-cart{
  cursor: pointer;
}

.user-login{
  cursor: pointer;
}

a {
  text-decoration: none;
  font-size: 2rem;
}
</style>
