<template>
  <form action="" class="checkout-form">
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
      <button class="sinus-button">PLACE ORDER</button>
    </div>
  </form>
</template>

<script>
export default {
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
  padding: 2rem;
  font-size: 2rem;
  background: rgb(250, 250, 250);
}

button {
  width: 15rem;
  height: 5rem;
  margin: auto;
}

.checkout-form {
  margin: auto;
}

.checkout-form > label {
  position: absolute;
  top: 50px;
  left: 20px;
  padding: 5px 10px;
  border-radius: 15px;
  background: #fff;
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

.payment-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5rem;
}

.card-number input {
  width: 39.8rem;
}

.month-cvc input {
  width: 17.8rem;
}

.month-cvc {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
