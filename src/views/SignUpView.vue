<template>
  <div>
    <CreateAccount />
  </div>
</template>

<script>
import CreateAccount from "@/components/CreateAccount.vue"
export default {
components:{
  CreateAccount,
 },
}
</script>

<style lang="scss" scoped>
div{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>