<template>
  <div class="home" id="root">
    <div class="text-view" id="view">
      <p v-for="(item,index) of list" :key="index">{{item}}</p>
    </div>
    <scroll-bar el="view" ref="ScrollBar"></scroll-bar>
  </div>
</template>

<script>
import ScrollBar from "@/components/ScrollBar.vue";

export default {
  name: "home",
  components: { ScrollBar },
  data: () => ({
    htmlUrl: "",
    list: ["111111111111111111111111111111111111111111"]
  }),
  mounted() {
    var _this = this;
    setInterval(function() {
      _this.update(23);
    }, 1000);
  },
  methods: {
    $update(fn) {
      var _this = this;
      var _fn = fn;
      return (function() {
        _this.$refs.ScrollBar.toImage();
        _fn.call(_this);
      })();
    },
    update(args) {
      this.$update(function() {
        console.log(args);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/static/css/Home/Home.scss";
#root {
  font-size: 50px;
  font-weight: bold;
}
</style>

