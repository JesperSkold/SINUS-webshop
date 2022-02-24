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
        <div v-for="orders in orderHistory" :key="orders.id">
            {{orders.createdAt.slice(0, 10)}}
            Order ID:{{orders.id}}
          <div v-for="items in orders.items" :key="items.id">
            Price:{{items.price+items.price}}
            Amount:{{items.amount}}
          </div> 
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
    orderHistory(){
      return this.$store.state.orderHistory
    }
  }, //fetch products, implement find function against products and render product name with id
    async mounted(){
      await this.$store.dispatch('getAccountInfo')
      await this.$store.dispatch('getOrderHistory')
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
  min-width: 15vw;
  overflow: auto;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>