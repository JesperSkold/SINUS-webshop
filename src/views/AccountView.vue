<template>
  <div>
    <MyAccount v-if="!adminLogin"/>
    <AdminAccount v-else-if="adminLogin"/>
  </div>
</template>

<script>
import MyAccount from "@/components/MyAccount";
import AdminAccount from "@/components/AdminAccount";
export default {
  components: { 
    MyAccount, AdminAccount
  },
  computed:{
    adminLogin(){
      return this.$store.state.adminLoggedIn
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
