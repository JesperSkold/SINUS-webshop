<template>
  <button>{{buttonText}}</button>
</template>

<script>
export default {
  props: ['buttonText'],

  computed: {
    text(){
      return this.buttonText
    }
  },

  data(){return{
    // buttonText: ""
  }}
  }

</script>

<style scoped lang=scss>
  button{
    background: #003827;
    color: White;
    border-radius: 4px;
    padding: 1rem 2.5rem;
    border: none;
    font-weight: bold;
  }

  button:active{
    background: #015239;
  }

  button:hover{
    box-shadow: -1px 3px 6px 0px rgba(0, 0, 0, 0.4);

  }
</style>