<template>
  <div class="checkout-view">
    <Cart />
    <CheckoutForm />
  </div>
</template>

<script>
import Cart from "@/components/Cart";
import CheckoutForm from "@/components/CheckoutForm";
export default {
  components: { Cart, CheckoutForm },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.checkout-view {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
