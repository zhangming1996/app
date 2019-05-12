<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "app",
  methods: {
    initFontSize() {
      document.documentElement.style.fontSize = "62.5%";
    }
  },
  created() {
    this.initFontSize();
  }
};
</script>

<style lang="scss" scoped></style>
