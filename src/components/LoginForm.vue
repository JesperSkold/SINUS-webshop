<template>
  <div class="login-form">
    <div class="login">
      <h2>Login</h2>
      <label for="">Email</label>
      <input type="text" />
      <label for="">Password</label>
      <input type="password" />
      <p class="sign-up">Sign up</p>
      <div class="button">
        <SinusButton>Login</SinusButton>
      </div>
    </div>
  </div>
</template>

<script>
import SinusButton from "@/components/SinusButton.vue";
export default {
  components: { SinusButton },
  data() {
    return {};
  },
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

.sign-up {
  padding: 0;
  margin: auto 5px auto auto;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

input {
  padding: 2rem;
  font-size: 2rem;
  background: rgb(250, 250, 250);
  margin-bottom: 1rem;
  border-radius: 10px;
}
</style>
