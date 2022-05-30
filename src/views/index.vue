<template>
  <div class="index">
    <Music></Music>
    <router-view></router-view>
  </div>
</template>

<script>
import Music from "@/components/music.vue"
export default {
  components:{Music}
}
</script>

<style>
.index{
  width: 100%;
  height: 100%;
}
.el-message-box{
    width: 200px !important;
}
</style>