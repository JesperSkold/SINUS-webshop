<template>
  <div class="nav">
    <router-link to="/">
      <img :src="sinusLogo" class="sinus-logo" />
    </router-link>
    <router-link class="nav-links" to="/products/skateboard">Boards</router-link>
    <router-link class="nav-links" to="/products/wheel">Wheels</router-link>
    <router-link class="nav-links" to="/apparel">Apparel</router-link>
    <router-link class="nav-links" to="/products/totebag">Bags</router-link>
    <div class="cartlogin">
      <!-- <router-link to="/checkout"> -->
      <img @click="showCart" :src="shoppingCart" class="shopping-cart" />
      <!-- </router-link> -->
      <router-link to="/account">
        <img :src="userLogin" class="user-login" />
      </router-link>
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
   },
  fetchAllProducts(){
      const route = this.$route.path.substring(1).split('/')[1]
      this.$store.dispatch('fetchAllProducts', route)
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 2px solid black;
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
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 200ms ease;
}

.nav-links {
  &.router-link-exact-active {
    transform: scale(1.2);
    color: #003827;
    transition: all 200ms ease;
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  &.router-link-exact-active:hover {
    transform: scale(1.2);
    transition: all 200ms ease
  }
  &:hover {
    transform: scale(1.1);
    transition: all 200ms ease
  }
}


img{
  margin: 0 1rem
}
</style>
