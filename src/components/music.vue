<template>
  <div class="music">
    <img
      :class="{ animate: musicTF }"
      src="@/assets/img/music.png"
      alt=""
      @click="tap"
    />
    <audio style="display:none" ref="audio" id="audio" loop :src="imggif"></audio>
  </div>
</template>

<script>
import urlfile from "../until/ip.js";
const imggif = urlfile + "fly.mp3";
import wx from "weixin-js-sdk";
import url from "../until/base.js";

export default {
  data() {
    return {
      imggif,
      musicTF: false,
      params: {},
    };
  },
  methods: {
    tap() {
      if (!this.musicTF) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause(); //播放
      }
      this.musicTF = !this.musicTF;
    },
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    getwx() {
      let url = window.location.href.split("#")[0];
      this.$api.getSignature(url).then((res) => {
        this.params = res.data;
        this.setwv();
        // this.$refs.audio.play();
      });
    },
    setwv() {
      const { appid, noncestr, signature, timestamp, urlStr } = this.params;
      var that = this;
      wx.config({
        debug: false,
        appId: appid,
        timestamp,
        nonceStr: noncestr,
        signature,
        jsApiList: ["updateAppMessageShareData"],
      });
      wx.ready(function () {
        // this.$refs.audio.play();
        document.getElementById('audio').play()
      });
      wx.error(function (res) {
        alert(JSON.parse(res.errMsg));
      });
    },
    updateed() {
      wx.updateAppMessageShareData({
        title: "協创GAMA元宇宙",
        desc: "2021 GAMA POA",
        link: "http://miniapp.unithought.com/xianjanssen-gama2021/#/",
        imgUrl: "http://miniapp.unithought.com:8099/images/share.png",
      }); //分享给好友
    },
  },
  mounted() {
    this.getwx();
    this.musicTF = false;
    this.$refs.audio.play();
    this.tap();
  },
};
</script>

<style lang="less" scoped>
.music {
  position: absolute;
  bottom: 0;
  z-index: 999990;
  right: 0%;
  margin: 100px 80px;
  .animate {
    transition: all 0.25s;
    animation: musicty 2s linear infinite;
  }
  img {
    width: 150px;
    height: 150px;
  }
}
@keyframes musicty {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>