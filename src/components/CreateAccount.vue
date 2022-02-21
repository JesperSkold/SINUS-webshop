<template>
  <div class="personal-info">
    <div class="country-email">
      <input type="text" placeholder="Country" />
      <input type="text" placeholder="E-mail" />
    </div>
    <div class="name-input">
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
    </div>
    <div class="adress-mobile">
      <input type="text" placeholder="Adress" />
      <input type="text" placeholder="Mobile No." />
    </div>
    <div class="city-zip">
      <input type="text" placeholder="City" />
      <input type="text" placeholder="Zip code" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.checkout-form {
  margin: auto;
}

.name-input input,
.adress-mobile input,
.city-zip input {
  width: 34rem;
}

.country-email {
  display: flex;
  flex-direction: column;
}

.personal-info,
.payment-info {
  border: 5px solid black;
  border-radius: 10px;
}
</style>
