<template>
  <div class="login-form">
    <form class="login" @submit.prevent="loginAccount" @click="error = false">
      <h3>Login</h3>
      <label for="">Email</label>
      <input type="text" v-model="email" :class="{red : error}"/>
      <label for="">Password</label>
      <input type="password" v-model="password" :class="{red : error}"/>
      <div class="button">
        <SinusButton>Login</SinusButton>
        <router-link to="signup">
          <p class="sign-up">Sign up</p>
        </router-link>
      </div>
      <div>
        <p v-if="error" class="error">{{errorMessage}}</p>
      </div>
    </form>
  </div>
</template>

<script>
import SinusButton from "@/components/SinusButton.vue";
export default {
  components: { SinusButton },
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  computed: {
    errorMessage(){
      if(this.$store.state.error == 'Invalid credentials') {
        return 'Email or password is incorrect!'
      } else {
        return ''
      }
    }
  },
  onMounted(){

  },
  methods:{
    async loginAccount(){
     await this.$store.dispatch('auth', {email: this.email, password: this.password})
     this.error = true
     
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  justify-content: center;
}
.login-form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  // min-height: 70vh;
  padding: 1rem;
  
  h3{
    margin:0 ;
  }
}

.login,
.sign-up {
  display: flex;
  flex-direction: column;
  // margin: 2rem;
}
a, .sign-up {
  color: #003827;
  margin: auto 5px auto auto;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
}

.button{
  display: flex;
}

input {
  padding: 1rem;
  font-size: 1rem;
  width: 20rem;
  background: rgb(250, 250, 250);
  margin-bottom: 1rem;
  border-radius: 10px;
}

.error{
  color: red;
  position: absolute;
}

.red{
  border: solid 2px red
}

</style>