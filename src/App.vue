<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <div class="mapload" v-if="show">
      <img src="@/assets/gif/load.gif" alt="" />
    </div> -->
    <Index></Index>
  </div>
</template>

<script>
var swidth = document.documentElement.clientWidth;
import Index from "./views/index.vue";
export default {
  components: { Index },
  data() {
    return {
    };
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    shishiClick() {
      let el = document.documentElement;
      // 不同浏览器兼容方法调用
      if (el.requestFullScreen) {
        el.requestFullScreen();
      } else if (el.webkitRequestFullScreen) {
        el.webkitRequestFullScreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.msRequestFullScreen) {
        el.msRequestFullScreen();
      }
    },
  },
  mounted() {

    // if (!this._isMobile()) {
    //   this.$router.push({ name: "phone" });
    //   this.$toast.bottom("建议使用手机浏览此网页");
    // } else {
    //   this.$router.push({ name: "home" });
    // }
    if (
      document.fullscreenElement ||
      document.webkitFullScreenElement ||
      document.mozFullScreenElement ||
      document.msFullScreenElement
    ) {
      // alert("当前是全屏");
    } else {
      // alert("当前非全屏");
    }
  },
};
</script>

<style scoped>
.mapload{
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  z-index: 9999;
}
img{
    height:900px;
  }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>>


