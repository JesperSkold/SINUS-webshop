<template>
  <div class="my-account">
    <section class="account-info">
      <h3>MY ACCOUNT</h3>
      <!--iterate over account /api/me -->
      <h5>GÖRAN ARVIDSSON</h5>
      <!--.name, etc -->
      <h5>STOCKHOLM</h5>
      <h5>SOLVÄGEN 25</h5>
      <h5>137 58</h5>
    </section>
    <section class="account-orders">
      <h3>ORDER HISTORY</h3>
      <!-- iterate over /api/orders -->
      <div class="orders">
        <div>
          <p>Gretas Fury</p>
          <p>$220</p>
        </div>
        <div>
          <p>Gretas Fury</p>
          <p>$220</p>
        </div>
        <div>
          <p>Gretas Fury</p>
          <p>$220</p>
        </div>
        <div>
          <p>Gretas Fury</p>
          <p>$220</p>
        </div>
        <div>
          <p>Gretas Fury</p>
          <p>$220</p>
        </div>
        <div>
          <p>Gretas Fury</p>
          <p>$220</p>
        </div>
        <div>
          <p>Gretas Fury</p>
          <p>$220</p>
        </div>
        <div>
          <p>Gretas Fury</p>
          <p>$220</p>
        </div>
        <div>
          <p>Gretas Fury</p>
          <p>$220</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.my-account {
  display: flex;
  justify-content: center;
  padding: 5rem;
  gap: 20vh;
}

.account-info {
  h3 {
    text-decoration: underline;
  }
}

.orders {
  height: 35vh;
  min-width: 15vw;
  overflow: auto;

  div {
    display: flex;
    gap: 1rem;
  }
}
</style>