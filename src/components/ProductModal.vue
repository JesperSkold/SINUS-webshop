<template>
  <div class="wrapper" v-if="showProduct">
    <div class="modal-overlay"></div>
    <div class="product-view">
      <div class="top-title">
        <img src="../assets/close.svg" alt="" @click="closeProductModal" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeProductModal() {
      this.$store.dispatch("showProductModal");
    },
  },
  computed: {
    showProduct() {
      return this.$store.state.showProductModal;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-view {
  position: absolute;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-direction: column;
  z-index: 999;
  padding: 5rem;
  border: 2px solid black;
  border-radius: 2rem;
  background-color: white;
}
.modal-overlay {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
}
</style>
