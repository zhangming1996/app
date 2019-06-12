<template>
  <div class="ScrollBar" id="ScrollBar" ref="ScrollBar">
    <img :src="htmlUrl">
  </div>
</template>

<script>
import html2canvas from "html2canvas"
export default {
  name: "ScrollBar",
  components: {
    html2canvas
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
      // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
      html2canvas(this.$refs.root, {
        backgroundColor: null,
        useCORS: true // 如果截图的内容里有图片,可能会有跨域的情况,加上这个参数,解决文件跨域问题
      }).then(canvas => {
        let url = canvas.toDataURL("image/png");
        this.htmlUrl = url;
      });
    }
  }
}
</script>

<style>

</style>
