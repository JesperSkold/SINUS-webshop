<template>
  <div class="login-form">
    <div class="login">
      <h2>Login</h2>
      <label for="">Email</label>
      <input type="text" />
      <label for="">Password</label>
      <input type="password" />
      <button class="sinus-button">Login</button>
    </div>
    <div class="sign-up">
      <h2>Sign up</h2>
      <label for="">Email</label>
      <input type="text" />
      <label for="">Password</label>
      <input type="password" />
      <label for="">Repeat password</label>
      <input type="password" />
      <button class="sinus-button">Sign up</button>
    </div>
  </div>
</template>

<script>
export default {};
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

button {
  width: 15rem;
  height: 5rem;
  margin: auto;
}
</style>
