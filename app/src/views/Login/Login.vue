<template>
  <div class="Login">
    <!-- 登录界面 -->
  </div>
</template>

<script>

export default {
  name: "login",
  components: {},
  computed: vx.mapState({
    name:state => state.User.name
  }),
  created() {
    
  }
};
</script>
<style lang="scss" scoped>
@import "~@/static/css/Login/Login.scss";
</style>
