<template>
  <div class="home">
    <v-touch v-on:swipeup="swipeup">
      <Go :item="item" v-if="ishow"></Go>
      <Title></Title>
      <div class="orlWidth animate__animated animate__pulse">
        <img src="../assets/img/orl.png" alt="">
      </div>
      <div class="main-font">
        <img class="animate__animated animate__backInLeft" src="../assets/img/font1.png" alt="" />
        <img class="animate__animated animate__backInRight" src="../assets/img/xie.png" alt="" />
      </div>
    </v-touch>
  </div>
</template>

<script>
import Go from "@/components/go.vue";
import Back from "@/components/back.vue";
import Title from "@/components/title.vue";
export default {
  data() {
    return {
      item: "two",
      ishow: false,
    };
  },
  components: {
    Back,
    Go,
    Title,
  },
  methods: {
    swipeup(){
      this.$router.push({ name: this.item });
    }
  },
  mounted() {
    this.ishow = false;
    setTimeout(() => {
      this.ishow = true;
    }, 2000);
  },
};
</script>

<style>
</style>