<template>
  <div>
    <AccountForm />
  </div>
</template>

<script>
import AccountForm from "@/components/AccountForm.vue"
export default {
components:{
  AccountForm,
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