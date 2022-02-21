<template>
  <div class="account-container">
    <LoginForm v-if="loggedIn == false" />
    <CreateAccount v-if="signUp == true" />
    <MyAccount v-if="loggedIn == true" />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import CreateAccount from "@/components/CreateAccount";
import MyAccount from "@/components/MyAccount";
export default {
  components: { LoginForm, MyAccount, CreateAccount },
  data() {
    return {
      loggedIn: true,
      signUp: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.account-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
