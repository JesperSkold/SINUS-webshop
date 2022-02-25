<template>
  <div class="nav">
    <div class="logo">
      <router-link to="/">
        <img :src="sinusLogo" class="sinus-logo" />
      </router-link>
    </div>
    <div class="nav-links-container">
      <router-link class="nav-links" to="/products/skateboard">Boards</router-link>
      <router-link class="nav-links" to="/products/wheel">Wheels</router-link>
      <router-link class="nav-links" to="/apparel">Apparel</router-link>
      <router-link class="nav-links" to="/products/totebag">Bags</router-link>
    </div>
    <div class="cartlogin">
        <img @click="showCart" :src="shoppingCart" class="shopping-cart" :class="{ add : cartShake }" />
      <router-link to="/login" v-if="!checkLogin">
        <img :src="userLogin" class="user-login" />
      </router-link>
      <router-link to="/account" v-else>
        <img :src="userLogin" class="user-login" :class="{ loggedin : checkLogin }" />
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
  },
  computed:{
    checkLogin(){
      return this.$store.state.userLoggedIn
    },
    cartShake(){
      return this.$store.state.cartAnimation
    }
  },
  watch: {
    '$store.state.showCartModal': function () {
      if(this.$store.state.showCartModal){
        document.documentElement.style.overflow = "hidden"
      } else {
        document.documentElement.style.overflow = "auto"
      }
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
  height: 6rem;
  background: #f4f4f4;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
}

.nav-links-container {
  display: flex;
  justify-content: space-between;
  width: 40%;
}

.sinus-logo {
  height: 4rem;
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
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  transition: all 100ms ease;
}

.nav-links {
  &.router-link-exact-active {
    transform: scale(1.2);
    color: #003827;
    transition: all 200ms ease;
  }
  &:hover {
    transform: scale(1.2);
    color: rgba(0, 0, 0, 0.75);
    transition: all 200ms ease
  }
}

.add {
  animation: grow 400ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes grow {
  50% {
    transform: scale(1.5) rotate(15deg);
    filter: brightness(0) saturate(100%) invert(16%) sepia(37%) saturate(1051%) hue-rotate(114deg) brightness(200%) contrast(103%);
    opacity: 0.5;
  }
}

.loggedin {
  filter: brightness(0) saturate(100%) invert(16%) sepia(37%) saturate(1051%) hue-rotate(114deg) brightness(200%) contrast(103%);
}

img{
  margin: 0 1rem
}
</style>
