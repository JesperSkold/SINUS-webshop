<template>
  <form action="" class="checkout-form">

    <CreateAccount />

    <div class="payment-container">
      <div class="payment-info">
        <div class="card-number">
          <input type="text" placeholder="Card Number" />
        </div>
        <div class="month-cvc">
          <input type="text" placeholder="MM/YY" />
          <input type="text" placeholder="CVC" />
        </div>
      </div>
      <SinusButton>ORDER</SinusButton>
    </div>
  </form>
</template>

<script>
import CreateAccount from "@/components/CreateAccount";
import SinusButton from "@/components/SinusButton";
export default {
  components: { CreateAccount, SinusButton },
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

.month-cvc input {
  width: 8.9rem;
}
.month-cvc {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
