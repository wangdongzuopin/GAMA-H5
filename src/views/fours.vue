<template>
  <div class="home">
    <div ref="capture" id="capture" class="capture">
      <h1>你是</h1>
      <h1>你是</h1>
      <h1>你是</h1>
      <h1>你是</h1>
      <h1>你是</h1>
      <h1>你是</h1>
      <h1>你是</h1>
      <h1>你是</h1>
      <h1>你是</h1>
      <h1>你是</h1>
      <h1>你是</h1>
      <h1>你是</h1>
      <button @click="picutne">shengs</button>
    </div>

    <div
      class="dialog-img"
      v-if="dialogTableVisible"
      @click="dialogTableVisible = false"
    >
      <img :src="imgUrl" alt="" />
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import $ from "jquery";
export default {
  data() {
    return {
      dialogTableVisible: false,
    };
  },
  methods: {
    picutne() {
      // 获取元素
      let div = document.getElementsByClassName("capture")[0];
      // 获取距离页面顶部的偏移值
      console.log( div.offsetTop);
      console.log( div.offsetLeft);

      
      let img = this.$refs.capture;
      // 图片高度
      var w = parseInt(window.getComputedStyle(img).width);
      // 图片宽度
      var h = parseInt(window.getComputedStyle(img).height);
      let canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      setTimeout(() => {
        html2canvas(this.$refs.capture, {
          canvas,
          scale: 1,
          useCORS: true,
          scrollY: 0,
          x: div.offsetTop,
          y: div.offsetTop,
        }).then((canvas) => {
          let dataURL = canvas.toDataURL("image/png");
          this.imgUrl = dataURL;
          if (this.imgUrl !== "") {
            this.dialogTableVisible = true;
          }
        });
      }, 500);
    },
  },
  mounted() {
    var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    console.log(isiOS);
    if (isiOS) {
      var ios_ver = parseInt(
        navigator.userAgent
          .toLowerCase()
          .match(/cpu iphone os (.*?) like mac os/)[1]
          .replace(/\_/g, ".")
      );
      if (ios_ver >= 15) {
        if ($("button")) {
          $("button").css("font-family", "PingFangSC-Regular");
        }
      }
    }
  },
};
</script>

<style scpoed>
button {
  position: fixed;
  top: 0;
}
.dialog-img {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>