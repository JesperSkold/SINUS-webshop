<template>
  <div class="checkout">
    <AccountForm @orderSent="$emit('orderEmit')"/>
  </div>
</template>

<script>
import AccountForm from "@/components/AccountForm";
export default {
  components: { AccountForm,  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.checkout {
  display: flex;
  margin: auto

}
input {
  padding: 1rem;
  font-size: 1rem;
  background-color: rgb(232, 231, 231);
}
.checkout-form {
  margin: auto;
}

.name-input input,
.city-zip input {
  width: 13.9rem;
}

.adress-email {
  display: flex;
  flex-direction: column;
}
.personal-info,
.payment-info {
  border: 5px solid black;
  border-radius: 10px;
}
.payment-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5rem;
}
.card-number input {
  width: 20.1rem;
}

.month-cvc input {
  width: 8.9rem;
}
.month-cvc {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
