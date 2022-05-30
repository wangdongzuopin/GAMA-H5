<template>
  <div
    class="back-img animate__animated"
    :class="{'animate__fadeInDown':!isan}"
    style="height: 60px;padding:15px;"
  >
    <div style="position: relative; top: 5px">
      <img style="width: 48px;
    height: 20px;" src="@/assets/img/GAMA@2x.png" alt="" />
    </div>
    <div><img style="width:52px;height:22px;" src="@/assets/img/hanssen.png" alt="" /></div>
  </div>
</template>

<script>
export default {
  props:["isan"]
};
</script>

<style lang="less" scoped>
.back-img {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  > div {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // > div:first-child {
  //   width: 300px;
  //   height: 150px;
  // }
  // > div:last-child {
  //   width: 300px;
  //   height: 150px;
  // }
}
</style>