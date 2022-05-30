<template>
  <div class="wapper">
    <Back></Back>
    <!-- <Go :item="item" :stop="false"></Go> -->
    <v-touch
      v-on:swipeup="swipeup"
      v-on:swipedown="swipedown"
      style="height: 100%; width: 100%"
    >
      <div class="home" id="capture" ref="capture">
        <Title :isan="true"></Title>

        <div class="orlWidth">
          <img src="@/assets/img/orl.png" alt="" />
        </div>
        <div class="three poster">
          <div
            style="
              margin: 0 auto;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <img src="@/assets/img/border.png" alt="" />
            <img
              style="
                position: absolute;
                padding: 15px 10px;
                box-sizing: border-box;
                width: auto;
                height: auto;
                max-width: 100%;
                max-height: 100%;
              "
              crossorigin="anonymous"
              class="img"
              :src="img"
              alt=""
            />
          </div>
          <!-- <div style="width: 100%;padding: 20px 0px 0px 25px;">
            <img style="width:280px;" src="@/assets/img/copytitle.png" alt="" />
          </div> -->
          <img class="yarn" src="@/assets/img/copytitle.png" alt="" />
        </div>
      </div>

      <div class="hb" style="position: fixed; bottom: 0%">
        <img @click="picutne" src="@/assets/img/haibao.png" />
        <h3 style="margin: 16px auto; color: #fff">
          感谢参与，请继续关注会议详情
        </h3>
      </div>
    </v-touch>

    <div class="dialog-img" v-if="dialogTableVisible">
      <div>
        <div>
          <img :src="imgUrl" alt="" />
        </div>
        <div class="font nofont">
          <h3 style="font-size: 12px; font-weight: 550">长按保存图片至相册</h3>
          <h3 style="font-size: 12px">感谢参与，请继续关注会议详情</h3>
        </div>

        <div style="color: #ffffff; font-size: 35px">
          <i @click="dialogTableVisible = false" class="el-icon-close"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Back from "@/components/back.vue";
import Go from "@/components/go.vue";
import Title from "@/components/title.vue";
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      item: "four",
      img: "",
      options: [
        {
          label: "CCM",
          id: 1,
        },
        {
          label: "PGM",
          id: 2,
        },
        {
          label: "KASD",
          id: 3,
        },
        {
          label: "PHMA",
          id: 4,
        },
        {
          label: "LT",
          id: 5,
        },
      ],
      value: "",
      formdata: {
        file: "",
        name: "",
        translate: "",
      },
      dialogTableVisible: false,
      imgUrl: "",
    };
  },
  components: {
    Back,
    Title,
    Go,
  },
  methods: {
    // 生成海报
    picutne() {
      if(!this.img){this.$toast.center("请返回上传图片");return}
      this.$toast.center("正在生成海报");
      let img = this.$refs.capture;
      var aa = document.getElementsByTagName("canvas");
      console.log(aa);
      // 图片高度
      var w = parseInt(window.getComputedStyle(img).width);
      // 图片宽度
      var h = parseInt(window.getComputedStyle(img).height);
      console.log(img.offsetWidth, w);
      let canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";

      setTimeout(() => {
        html2canvas(this.$refs.capture, {
          scale: 1.5,
          // canvas: canvas,
          useCORS: true,
          allowTaint: false,
          height: img.offsetHeight, //注意 下面解决当页面滚动之后生成图片出现白边问题
          width: img.offsetWidth, //注意 下面解决当页面滚动之后生成图片出现白边问题
        }).then((canvas) => {
          let dataURL = canvas.toDataURL("image/png");
          this.imgUrl = dataURL;
          if (this.imgUrl !== "") {
            this.dialogTableVisible = true;
          }
        });
      }, 500);
    },
    swipeup() {
      if (this.dialogTableVisible) {
        return;
      }
      this.$router.push({ name: this.item, params: { img: this.img } });
    },
    swipedown() {
      if (this.dialogTableVisible) {
        return;
      }
      this.$router.go(-1);
    },
  },
  mounted() {
    var imgss = this.$route.params.img || this.$store.state.selfie;
    this.img = imgss;
  },
};
</script>

<style lang="less" scoped>
.poster {
  > div:first-child {
    width: 70%;
    // height: 1500px;
  }
}
.yarn {
  width: 1200px;
  height: 550px;
  padding: 50px 0px 0px 100px;
}
.nofont {
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  opacity: 0.8;
  transform: scale(0.8);
}
.three {
  width: 100%;
  position: fixed;
  top: 0;
  height: 100%;
}
.orlWidth {
  position: absolute;
  // transform: rotate(180deg);
  top: 0%;
}
.yarn {
  position: relative;
}
.wapper {
  width: 100%;
  height: 100%;
}
.dialog-img {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999999;
  top: 0;
  background: #000000ab;
  img {
    border: 50px solid #fff;
    box-sizing: border-box;
  }
  > div {
    padding: 0.5rem;
    position: relative;
  }
  .font {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 2.2rem auto;
    left: 0;
    h3 {
      font-size: 60px;
      color: #ffffff;
      padding: 10px 0;
    }
  }
}
.hb {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  h3 {
    line-height: 10px;
    transform: scale(0.7);
  }
  img {
    width: 400px;
  }
  > button {
    background: #04126e;
    border: 1px solid #ffffff;
    width: 350px;
    height: 350px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    transform: scale(0.85);
    transition: all 0.25s;
    &:active {
      background: #ffffff;
      color: #000000;
    }
  }
}

select {
  width: 80%;
  height: 100%;
  background: transparent !important;
  border: 0;
  color: #eee;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  option {
    color: #000000;
  }
}
.el-select {
  position: relative;
  top: 0.3rem;
  padding: 0 65px;
}
html {
  font-size: 70px !important;
}
</style>
