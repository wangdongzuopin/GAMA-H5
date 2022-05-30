<template>
  <div class="home">
    <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown">
      <Back></Back>
      <Title></Title>
      <!-- <Go :item="item"></Go> -->
      <div class="orlWidth">
        <img src="@/assets/img/orl.png" alt="">
      </div>
      <div class="two-main">
        <div class="yuan">
          <img class="animate__animated animate__backInDown" src="../assets/img/yuan.png" alt="" />
          <div class="font animate__animated animate__backInDown">等待每一个小伙伴的到来</div>
        </div>

        <div class="btn animate__animated animate__tada" @click="btn">
          <img src="../assets/img/click.png" alt="" />
        </div>
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
      item: "three",
    };
  },
  components: {
    Back,
    Go,
    Title,
  },
  methods: {
    btn() {
      this.$router.push({ name: this.item });
    },
    swipeup(){

    },
    swipedown(){
      this.$router.go(-1)
    }
  },
};
</script>

<style>
</style>