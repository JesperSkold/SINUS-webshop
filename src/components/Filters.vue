<template>
  <div class="filter-container">
    <img src="../assets/close.svg" @click="$emit('close')">
    <h3>Sort by:</h3>
    <div>
      <h5>Newest</h5>
      <img src="../assets/arrow-up.svg" class="arrow">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.filter-container {
  display: grid;
  grid-template-areas: 1fr 1fr;
  height: 27rem;
  width: 20rem;
  background: gold;
}

.arrow {
  transform: rotate(180deg)
}
</style>