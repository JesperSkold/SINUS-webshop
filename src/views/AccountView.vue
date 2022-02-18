<template>
  <div class="account-container">
    <LoginForm v-if="loggedIn == false" />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
export default {
  components: { LoginForm },
  data() {
    return {
      loggedIn: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
