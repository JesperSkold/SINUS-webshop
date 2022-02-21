<template>
  <div class="account-container">
    <LoginForm v-if="loggedIn == false" />
    <MyAccount v-if="loggedIn == true" />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import MyAccount from "@/components/MyAccount";
export default {
  components: { LoginForm, MyAccount },
  data() {
    return {
      loggedIn: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
