<template>
  <form action="" class="checkout-form">
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
  padding: 1rem;
  font-size: 1rem;
}

button {
  width: 10rem;
  height: 3rem;
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
  width: 20rem;
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
