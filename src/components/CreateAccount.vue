<template>
  <div class="personal-info">
    <div class="adress-email">
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Adress" />
    </div>
    <div class="name-input">
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
    </div>
    <div class="city-zip">
      <input type="text" placeholder="City" />
      <input type="text" placeholder="Zip code" />
    </div>
    <SinusButton class="sinus-button">Sign up</SinusButton>
  </div>
</template>

<script>
import SinusButton from "@/components/SinusButton";
export default {
  components: { SinusButton },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-content: flex-end;
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
}
</style>
