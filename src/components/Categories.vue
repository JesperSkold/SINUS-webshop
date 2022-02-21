<template>
  <aside>
        <h4>Categories</h4>
      <router-link to="/products">
        <h5>Boards</h5>
      </router-link>
      <router-link to="/">
        <h5>Wheels</h5>
      </router-link>
      <div class="flex" @click="toggle">
          <h5 >Apparel</h5>
        <img src="@/assets/arrow-up.svg" alt="" height="30px" width="30px" :class="{flipped: active}">
      </div>
        <transition name="slide">
          <div v-if="active" class="dropdown-items">
            <router-link to="/">
              <p>Hoodies</p>
            </router-link>
            <router-link to="/">
              <p>T-shirts</p>
            </router-link>
            <router-link to="/">
              <p>Socks</p>
            </router-link>
          </div>
        </transition>
      <h5>Bags</h5>
  </aside>
</template>

<script>
export default {
  data(){return{
    active: false
  }},

  methods: {
      toggle () {
        this.active = !this.active
      }
    }

}
</script>

<style lang="scss" scoped>
img{
  margin-left: 2rem;
  cursor: pointer;
}

h5{
    margin: 1rem;
    cursor: pointer
}

h4{
  margin: 1rem;
}

.flex{
    display: flex;
    align-items: center;
    margin: 1rem
      
}

.flex h5{
  margin: 0;
  
}

.flipped {
  transform: rotate(180deg);
}

.dropdown-items{
  margin: 1rem;
  transform-origin: top;
  transition: transform .6s ease-in-out;
}

p{
  margin-left: 2.5rem;
}

.slide-enter, .slide-leave-to{
  transform: scaleY(0);
}



</style>