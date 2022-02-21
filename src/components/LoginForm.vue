<template>
  <div class="login-form">
    <div class="login">
      <h2>Login</h2>
      <label for="">Email</label>
      <input type="text" />
      <label for="">Password</label>
      <input type="password" />
      <div class="button">
        <SinusButton>Login</SinusButton>
      </div>
    </div>
    <div class="sign-up">
      <h2>Sign up</h2>
      <label for="">Email</label>
      <input type="text" />
      <label for="">Password</label>
      <input type="password" />
      <label for="">Repeat password</label>
      <input type="password" />
      <div class="button">
        <SinusButton>Signup</SinusButton>
      </div>
    </div>
  </div>
</template>

<script>
import SinusButton from "@/components/SinusButton.vue"
export default {
  components: {SinusButton}
};
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: row;
  border: 1px solid black;
}

.login,
.sign-up {
  display: flex;
  flex-direction: column;
  margin: 2rem;
}

input {
  padding: 2rem;
  font-size: 2rem;
  background: rgb(250, 250, 250);
  margin-bottom: 1rem;
  border-radius: 10px;
}


</style>
