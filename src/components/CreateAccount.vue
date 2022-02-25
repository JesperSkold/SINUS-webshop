<template>
  <div class="wrapper">
    <h3 v-if="path">Your information</h3>
    <h3 v-else>Sign up</h3>
    <form class="personal-info" @submit.prevent=""> 
      <div class="adress-email">
        <input type="text" placeholder="Full name" v-model="name"/>
        <input type="text" placeholder="E-mail" v-model="email" :class="{error : error}"/>
        <input v-if="!path" type="password" placeholder="Password" v-model="password"/>
        <input type="text" placeholder="Address" v-model="street" @click="error2 = false" :class="{error : error2}" />
      </div>
      <div class="city-zip">
        <input type="text" placeholder="Zip code" v-model="zip" @click="error2 = false" :class="{error : error2}" />
        <input type="text" placeholder="City" v-model="city" @click="error2 = false" :class="{error : error2}" />
      </div>
      <p v-if="!path && error" class="red">{{errorMessage}}</p>
      <div v-if="!path" class="btn-flex">
        <SinusButton class="sinus-button" @click.native="register">Sign up</SinusButton>
      </div>
      <div class="checkout-price" v-else>
        <h5>Total price: ${{total}}</h5>
          <SinusButton v-if="!cartEmpty" class="sinus-button" @click.native="placeOrder">Order</SinusButton>
          <p class="red" v-if="path && error2">Fill in required fields</p>
      </div>
    </form>
  </div>
</template>

<script>
import SinusButton from "@/components/SinusButton";
export default {
  components: { SinusButton },
  data() {
    return {
      email: "",
      name: "",
      password: "",
      street: null,
      zip: null,
      city: null,
      error: false,
      error2: false
    };
  },
  beforeMount(){
    if(this.$store.state.userLoggedIn){
      this.email = this.accountInfo.email
      this.name = this.accountInfo.name
      this.street = this.accountInfo.address.street
      this.city = this.accountInfo.address.city
      this.zip = this.accountInfo.address.zip
      
    }
  },
  computed: {
    path(){
      return this.$route.path == '/checkout'
    },
    accountInfo(){
      return this.$store.state.accountInfo
    },
    total(){
      let cart = this.$store.state.cart
      let sum = 0
      for(let i = 0; i < cart.length; i++){
        sum = sum + (cart[i].amount * cart[i].price)
      }
      return sum
    },
    errorMessage(){
     return this.$store.state.error
   },
    cartEmpty(){
      if(this.$store.state.cart.length){
      return false 
      } else {
      return true
      }
    },
  },
  methods:{
    async register(){
      await this.$store.dispatch('registerUser', 
      {
        email: this.email,
        name: this.name,
        password: this.password,
        address:{
          street: this.street,
          zip: this.zip,
          city: this.city 
        }
      })
      this.error = true
    },
    placeOrder(){
      if(this.zip && this.city && this.street){
        this.$store.dispatch('placeOrder', 
        {
          email: this.email,
          name: this.name,
          address:{
            street: this.street,
            zip: this.zip,
            city: this.city 
          }
        })
        this.$emit('orderSent')
      }else{
        this.error2 = true
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.wrapper{
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3{
    margin: 1rem
  }
}

.personal-info{
  display: flex;
  flex-direction: column;
  // align-items: center;
  min-width: 32rem;
}

.btn-flex{
  display: flex;
  justify-content: center;
}


input {
  padding: 1rem;
  font-size: 1rem;
  margin: 1rem 0 0 ;
  // background-color: rgb(232, 231, 231);
   background: rgb(250, 250, 250);
}
.sinus-button {
  margin: 1rem 0 0
  
}
.city-zip{
  display: grid;
  grid-template-columns:1fr 1fr ;
  gap: 1rem;
}

// .city-zip input {
//   // width: 14rem;
// }
.adress-email {
  display: flex;
  flex-direction: column;
  // width: 32.3rem;
}

.checkout-price{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h5{
    margin: 1rem
  }
}


.red{
  color: red
}

.error {
  border: solid red 2px
}

</style>
