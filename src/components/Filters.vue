<template>
  <div class="filter-container">
    <div class="sort-type">
      <div class="dropdown-items">
        <div @click="active = !active" class="active-sort-type">
          <h5 class="active">{{ activeSortType }}</h5>
          <img src="../assets/arrow-up.svg" class="arrow" :class="{rotate: active}" width="30">
        </div>
        <div class="sort-types" v-if="active">
          <h5 v-for="type in sortTypesFiltered" :key="type" @click="activateSortType(type)">
            {{type}}
          </h5>
        </div>
      </div>
    </div>
    <img src="../assets/close.svg" class="close" @click="$emit('close')" height="30" width="30">
  </div>
</template>

<script>
export default {
  data(){return {
    active: false,
    activeSortType: 'Newest',
    sortTypes: ['Newest', 'Oldest', 'Price (lowest)', 'Price (highest)'],
  }},
  methods: {
    activateSortType(type){
      this.activeSortType = type
      this.$emit('close')
    }
  },
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
  flex-direction: row;
  justify-content: space-between;
  right: 5%;
  top: 25%;
  border-radius: 3px;
  z-index: 2;
  height: 10rem;
  width: 12rem;
  padding: 1rem;
  background: white;
  border: 2px black solid;
}


.close {
  align-self: start;
}

.close:hover {
  cursor: pointer
}

.active {
  text-decoration: underline;
  text-decoration-thickness: 2px;
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

.rotate {
  transform: rotate(0deg)
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