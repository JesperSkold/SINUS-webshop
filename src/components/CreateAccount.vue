  <template>
<div class="wrapper">
  <h3 v-if="path">Your information</h3>
  <form class="personal-info" @submit.prevent="">
    <div class="adress-email">
      <input type="text" placeholder="Full name" v-model="name"/>
      <input type="text" placeholder="E-mail" v-model="email"/>
      <input v-if="!path" type="password" placeholder="Password" v-model="password"/>
      <input type="text" placeholder="Adress" v-model="street"/>
    </div>
    <div class="city-zip">
      <input type="text" placeholder="City" v-model="city" />
      <input type="text" placeholder="Zip code" v-model="zip"/>
    </div>
    <SinusButton v-if="!path" class="sinus-button" @click.native="register">Sign up</SinusButton>
    <div class="checkout-price" v-else>
      <h5>Total price: ${{total}}</h5>
      <SinusButton  class="sinus-button" @click.native="placeOrder">Order</SinusButton>
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
      street: "",
      zip: "",
      city: "",
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
    },
    placeOrder(){
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
input {
  padding: 1rem;
  font-size: 1rem;
  background-color: rgb(232, 231, 231);
}
.sinus-button {
  margin: 1rem
  // margin: 1rem auto auto 11.5rem;
}

.city-zip input {
  width: 13.9rem;
}
.adress-email {
  display: flex;
  flex-direction: column;
  width: 32.3rem;
}

.checkout-price{
  display: flex;
  justify-content: center;
  align-items: center;

  h5{
    margin: 1rem
  }
}
</style>
