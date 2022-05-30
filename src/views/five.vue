<template>
  <div class="home">
    <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown">
      <Title></Title>
      <Back v-if="isshow"></Back>
      <div class="orlWidth">
        <img src="@/assets/img/orl.png" alt="" />
      </div>
      <div class="five-content">
        <div class="title animate__animated animate__zoomIn">
          <img src="@/assets/img/fiveTitle.png" alt="" />
        </div>
        <div class="content-btn animate__animated animate__zoomIn">
          <div @click="handleTo(1)">
            <img src="../assets/img/t1.png" alt="" />
          </div>
          <div @click="handleTo(2)">
            <img src="../assets/img/t2.png" alt="" />
          </div>
          <div @click="handleTo(3)">
            <img src="../assets/img/t3.png" alt="" />
          </div>
        </div>
      </div>
    </v-touch>
  </div>
</template>

<script>
import Back from "@/components/back.vue";
import Title from "@/components/title.vue";
export default {
  name: "home",
  data() {
    return {
      item: "six",
      isshow: false,
    };
  },
  components: { Back, Title },
  mounted() {
    this.getshow();
  },
  methods: {
    getshow() {
      this.isshow = false;
      setTimeout(() => {
        this.isshow = true;
      }, 1000);
    },
    handleTo(item) {
      console.log(item);
      if(item === 1){
        this.$router.push({ name: this.item });
      }
      if(item == 2){
        window.location.href = 'http://online.bizconfstreaming.com/webcast/ys20211217.html';
        return
      }
      if(item == 3){
        window.location.href = 'http://live.jfoto.cn/gti/208bf112';
        return
      }
    },
    swipeup() {
      // this.$router.push({ name: this.item });
    },
    swipedown() {
      if(!this.isshow){return}
      this.$router.go(-1);
      
    },
  },
};
</script>
<style lang="less" scoped>
#app {
  background-image: none;
}
.five {
  background-size: 100% 100%;
  overflow: hidden;
}
.orlWidth {
  position: absolute;
  top: 0;
  transform: rotate(180deg);
}
</style>