<template>
  <div class="my-account">
    <section class="account-info" v-if="accountInfo">
      <h3>MY ACCOUNT</h3>
      <h5>{{accountInfo.name}}</h5>
      <h5>{{accountInfo.email}}</h5>
      <h5>{{accountInfo.address.street}}</h5>
      <h5>{{accountInfo.address.zip}}</h5>
      <h5>{{accountInfo.address.city}}</h5>
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
export default {
  computed: {
    accountInfo(){
      return this.$store.state.accountInfo
    },
  },
    async mounted(){
      await this.$store.dispatch('getAccountInfo')
    }
};
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