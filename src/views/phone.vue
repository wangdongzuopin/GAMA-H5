<template>
  <div>
    <h1>请在手机端浏览当前网页</h1>
  </div>
</template>

<script>
export default {
  methods:{
     _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
  mounted() {
    if (!this._isMobile()) {
      return
    } else {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style lang="less" scoped>
h1 {
  color: #ffffff;
}
</style>