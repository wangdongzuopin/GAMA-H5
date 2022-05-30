<template>
  <div class="home six">
    <Back></Back>
    <Title></Title>
    <!-- <Go :item="item"></Go> -->
    <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown">
      <div class="orlWidth">
        <img src="@/assets/img/orl.png" alt="" />
      </div>
      <div class="five-content">
        <div class="title animate__animated animate__zoomIn">
          <img src="../../assets/img/fiveTitle.png" alt="" />
        </div>
        <div class="content-btn animate__animated animate__zoomIn">
          <div class="six-content" style="height: 360px;">
            <div class="content" style="padding-top: 75px">
              <div
                class="wapper-for"
                v-for="(item, index) in Schedules"
                :key="index"
                style="font-size: 12px"
              >
                <div>{{ item.time }}</div>
                <div class="wapper">
                  <div class="w-font" v-if="index == 8">一线团队分享</div>
                  <div class="w-font" v-if="index == 9">中央团队分享</div>
                  <div v-for="(ele, ind) in item.cons" :key="ind">
                    {{ ele }}
                  </div>
                </div>
                <div class="wapper">
                  <div class="w-font" style="height:17px" v-if="index == 8"> </div>
                  <div class="w-font" style="height:17px" v-if="index == 9"> </div>
                  <div v-for="(ele, ind) in item.spe" :key="ind">{{ ele }}</div>
                </div>
              </div>
            </div>
          </div>
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
      Schedules: [],
    };
  },
  components: {
    Back,
    Go,
    Title,
  },
  methods: {
    getSchedule() {
      this.$api.getSchedule().then((res) => {
        if (res.code !== 20000 || !res.data.length || res.data.length == 0) {
          this.$toast.bottom(res.message);
        }
        this.Schedules = res.data;
        this.Schedules = res.data.map((element) => {
          var cons = element.content.split("，");
          var spe = null;
          if (element.speaker) {
            spe = element.speaker.split("，");
          }
          return { ...element, cons, spe };
        });
        console.log(this.Schedules);
      });
    },
    swipeup() {
      // this.$router.push({ name: this.item });
    },
    swipedown() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.getSchedule();
  },
};
</script>
<style lang="less" scoped>
#app,
.home {
  background-size: 100% 100%;
  overflow: hidden;
}
.orlWidth {
    position: absolute;
    top: 6rem;
    transform: rotate(101deg);
    left: -0.2rem;
}
.w-font {
  font-weight: bold;
  position: relative;
  top: -5px;
}
</style>