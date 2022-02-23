<template>
<div class="wrapper">
  <form class="personal-info" @submit.prevent="register">
    <div class="adress-email">
      <input type="text" placeholder="E-mail" v-model="email"/>
      <input type="password" placeholder="Password" v-model="password"/>
      <input type="text" placeholder="Adress" v-model="street"/>
    </div>
    <div class="name-input">
      <input type="text" placeholder="First name" v-model="firstName"/>
      <input type="text" placeholder="Last name" v-model="lastName"/>
    </div>
    <div class="city-zip">
      <input type="text" placeholder="City" v-model="city" />
      <input type="text" placeholder="Zip code" v-model="zip"/>
    </div>
    <SinusButton class="sinus-button">Sign up</SinusButton>
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
      firstName: "",
      lastName: "",
      password: "",
      street: "",
      zip: "",
      city: "",
    };
  },
  methods:{
    async register(){
      await this.$store.dispatch('registerUser', 
      {
        email: this.email,
        name: `${this.firstName} ${this.lastName}`,
        password: this.password,
        address:{
          street: this.street,
          zip: this.zip,
          city: this.city 
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper{
  padding: 5rem;
  display: flex;
  justify-content: center;
}
input {
  padding: 1rem;
  font-size: 1rem;
  background-color: rgb(232, 231, 231);
}
.sinus-button {
  margin: 1rem auto auto 11.5rem;
}
.name-input input,
.city-zip input {
  width: 13.9rem;
}
.adress-email {
  display: flex;
  flex-direction: column;
  width: 32.3rem;
}
</style>
