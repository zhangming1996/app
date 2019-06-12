<template>
  <div class="ScrollBar" id="ScrollBar" ref="ScrollBar">
    <img :src="htmlUrl" oncontextmenu="return false;" ondragstart="return false;" />
  </div>
</template>

<script>
import html2canvas from "html2canvas"

export default {
  name: "ScrollBar",
  props:["el"],
  components: {
    html2canvas
  },
  watch:{

  },
  data: () => ({
    htmlUrl: ""
  }),
  mounted() {
    this.$nextTick(() => {
      this.toImage()
    })
  },
  methods: {
    // 页面元素转图片
    toImage() {
      html2canvas(document.getElementById(this.el), {
        backgroundColor: null,
        useCORS: true,
      }).then(canvas => {
        let url = canvas.toDataURL("image/png");
        this.htmlUrl = url;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.ScrollBar {
  position: absolute;
  right:0px;
  top:0px;
  height: 100%;
  width:6%;
  border:1px solid red;
  box-sizing: border-box;
  img {
    display: block;
    width:100%;
  }
}
</style>
