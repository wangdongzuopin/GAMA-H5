<template>
  <div class="four" id="money" ref="money">
    <Title></Title>
    <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown">
      <div v-show="!gifload" class="f-imgback animate__animated animate__zoomIn">
        <img src="@/assets/img/fourback.png" alt="" />
      </div>
      <div class="">
        <Back v-if="ishow"></Back>
        
        <Go :item="item" v-if="ishow"></Go>
        <div
          class="animate__animated"
          :class="{
            positonImg1: curclass == 'positonImg1',
            positonImg2: curclass == 'positonImg2',
            positonImg3: curclass == 'positonImg3',
          }"
        >
          <img v-if="img" style="border-radius: 5px;" class="imgs" :src="img" alt="" />
          <!-- <img  class="imgs" src="@/assets/img/EAMA.png" alt="" /> -->
        </div>

        <div
        v-show="!gifload"
          class="showimgs animate__animated"
          :class="{ animate__fadeIn: showicon }"
        >
          <img src="@/assets/img/EAMA.png" alt="" />
        </div>
        <img
          class="gif"
          v-if="gifload"
          v-show="gifshow"
          @load="loadImage"
          :src="imggif"
          alt=""
        />
      </div>
    </v-touch>
  </div>
</template>
<script>
import Go from "@/components/go.vue";
import Back from "@/components/back.vue";
import Title from "@/components/title.vue";
import urlfile from "../until/ip.js"
const imggif = urlfile+"qwe.gif";

// import datajson from "@/assets/json/zhc2.json";
export default {
  data() {
    return {
      item: "five",
      anclass: ["positonImg1", "positonImg2", "positonImg3"],
      curclass: "",
      img: "",
      showicon: false,
      lotties: "",
      ishow: false,
      imggif: imggif,
      src: null,
      animation: null,
      gifload: false,
      gifshow:true
    };
  },
  name: "home",
  components: { Back, Go, Title },
  methods: {
    loadImage() {
      // this.$toast.top("正在努力加载...");
      var geturl = this.$route.params;
      this.img = geturl.img;
      this.gifshow = true
      if (geturl) {
        setTimeout(() => {
          this.gifload = false;
          this.getfctch();
        }, 2400);
      } else {
        this.gifload = false;
        this.getfctch();
        return;
      }
      // this.initgif();
    },
 
    btn() {
      var num = Math.floor(Math.random() * 3);
      this.curclass = this.anclass[num];
      setTimeout(() => {
        this.timershow();
      }, 2000);
    },
    timershow() {
      this.showicon = true;
      this.img = "";
      this.ishow = true;
      console.log(this.ishow);
    },
    swipeup() {
      if(!this.ishow){return}
      this.$router.push({ name: this.item });
    },
    swipedown() {
      if(!this.ishow){return}
      this.$router.go(-1);
    },
    getfctch() {
      if ( this.img) {
        this.btn();
      } else {
        this.timershow();
      }
    },
  },
  mounted() {
    this.ishow = false;
    this.$toast.top("正在加载...");
    this.gifload = true;
    this.gifshow = false
  },
};
</script>

<style lang="less" scoped>
.gif {
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  height: 100%;
}
// .home {
//   background-image: url("../assets/img/fourback.png");
//   background-size: 100% 100%;
//   overflow: hidden;
//   animation-duration: 2.5s;
// }
</style>