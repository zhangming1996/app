<template>
  <div class="Login">
    <!-- 登录界面 -->
    
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "login",
  components: {},
  computed: mapState({
    name: state => state.User.name,
    account_number: state => state.User.account_number,
    pass_word: state => state.User.account_number
  }),
  created() {}
};
</script>
<style lang="scss" scoped>
@import "~@/static/css/Login/Login.scss";
</style>
