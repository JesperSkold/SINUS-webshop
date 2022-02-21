<template>
  <div class="filter-container">
    <img src="../assets/close.svg" class="close" @click="$emit('close')" height="30" width="30">
    <h3>Sort by</h3>
    <div class="sort-type">
      <div class="dropdown-items">
        <div @click="active = !active" class="active-sort-type">
          <h5 class="active">{{ activeSortType }}</h5>
          <img src="../assets/arrow-up.svg" class="arrow" width="30">
        </div>
        <div class="sort-types" v-if="active">
          <h5 v-for="type in sortTypesFiltered" :key="type" @click="activeSortType = type">
            {{type}}
          </h5>
        </div>
      </div>
      <div class="slider-container">
        <input 
          type="range"
          id="price"
          name="price"
          min="10"
          max="5000"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){return {
    active: false,
    activeSortType: 'Newest',
    sortTypes: ['Newest', 'Oldest', 'Price (lowest)', 'Price (highest)']
  }},
  computed: {
    sortTypesFiltered(){
      return this.sortTypes.filter(type => type != this.activeSortType)
    }
  }

}
</script>

<style lang="scss" scoped>

.filter-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 5%;
  top: 25%;
  border-radius: 7px;
  z-index: 2;
  height: 24rem;
  width: 18rem;
  padding: 1rem;
  background: white;
  border: 2px black solid;
}


.close {
  align-self: end;
}

.close:hover {
  cursor: pointer
}

.active {
  text-decoration: underline;
}

h3 {
  margin: 0rem;
}

h5 {
  margin: 0;
}

h5:hover {
  cursor: pointer;
}

.active-sort-type {
  display: flex;
  :hover{
    cursor: pointer;
  }
}


.arrow {
  transform: rotate(180deg);
  align-self: center;
  margin-left: 0.5rem
}


.sort-type {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-top: .5rem;
}

.slider-container {
  width: 100%;
}

input {
  width: 100%;
}

</style>