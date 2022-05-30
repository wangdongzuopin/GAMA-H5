<template>
  <div class="home">
    <v-touch v-on:swipeup="swipeup" v-on:swipedown="swipedown">
      <Title></Title>
      <Back></Back>
      <div class="three animate__animated animate__zoomIn">
        <div style="height: 255px">
          <img src="../assets/img/border.png" alt="" />
          <div class="text">
            <div v-if="!img">
              <div>点击上传图片</div>
              <div>释放能量</div>
            </div>
            <input
              type="file"
              class="input"
              accept="image/*"
              @change="takePhoto($event)"
            />
            <img v-show="img" class="img" :src="img" alt="" />
          </div>
        </div>

        <!-- 输入姓名 -->
        <div
          class="textfont name animate__animated animate__zoomIn"
          style="margin-top: 15px"
        >
          <div>
            <img src="@/assets/img/name.png" alt="" />
          </div>
          <!-- 姓名 -->
          <div class="wapper-input">
            <input
              class="wappin"
              placeholder="请输入"
              v-model="formdata.name"
              type="text"
              maxlength="12"
            />
          </div>
        </div>
        <!-- 选择部门 -->
        <div class="textfont name animate__animated animate__zoomIn">
          <div>
            <img src="@/assets/img/grade.png" alt="" />
          </div>
          <!-- 部门 -->
          <div class="wapper-input wapper-grade">
            <!-- <input type="text"> -->
            <select
              style="padding: 0 4px; font-size: 0.4rem"
              v-model="formdata.translate"
              @change="selectClass($event)"
            >
              <option value="">未选择</option>
              <option
                v-for="item in options"
                :key="item.id"
                :value="item.label"
              >
                {{ item.label }}
              </option>
            </select>
          </div>
        </div>

        <div class="textfont btnupload animate__animated animate__zoomIn">
          <div>
            <img @click="handleup" src="@/assets/img/uploadsure.png" alt="" />
          </div>
          <div>
            <div class="uploaddd">
              <input
                type="file"
                class="input"
                accept="image/*"
                @change="takePhoto($event)"
              />
              重新上传
            </div>
            <img src="@/assets/img/reupload.png" alt="" />
          </div>
        </div>

        <div
          class="textfont animate__animated animate__zoomIn"
          style="margin: 20px 0 0 0"
        >
          <p>凝聚我们的无限能量</p>
          <p>協创GAMA元宇宙</p>
        </div>
        <!-- <div
          class="textfont animate__animated animate__zoomIn"
          style="margin: 20px 0 0 0"
        >
          <p class="classbook" @click="poster">
            去生成海报<i class="wapper-right el-icon-right"></i>
          </p>
        </div> -->
      </div>
    </v-touch>
  </div>
</template>

<script>
import Back from "@/components/back.vue";
import Title from "@/components/title.vue";
import axios from "axios";
import url from "../until/base.js";
export default {
  data() {
    return {
      item: "poster",
      img: "",
      options: [
        {
          label: "Council",
          id: 1,
        },
        {
          label: "CGM",
          id: 2,
        },
        {
          label: "MAS",
          id: 3,
        },
        {
          label: "NRMA",
          id: 4,
        },
        {
          label: "PHMA",
          id: 5,
        },
        {
          label: "SRMA",
          id: 6,
        },
        {
          label: "PAPE",
          id: 7,
        },
      ],
      value: "",

      formdata: {
        file: "",
        name: "",
        translate: "",
      },
    };
  },
  components: {
    Back,
    Title,
  },
  methods: {
    poster() {
      if(!this.img){this.$toast.center("请上传图片");return}
      this.$router.push({ name: "poster", params: { img: this.img } });
    },
    selectClass(event) {
      this.formdata.translate = event.target.value;
    },
    swipeup() {},
    swipedown() {
      this.$router.go(-1);
    },
    takePhoto(e) {
      if (this.img) {
        this.img = "";
      }
      var that = this;
      var file = e.target.files[0]; //获取文件对象
      that.formdata.file = file;
      var reader = new FileReader();
      //正式读取文件
      reader.readAsDataURL(file);
      // 添加请求头
      reader.onloadend = function (e) {
        that.img = e.target.result;
        that.setstore(that.img);
      };
    },
    setstore(item) {
      this.$store.commit("SETSELFIE", item);
    },
    // 确认上传
    handleup() {
      if (this.isok()) {
        this.uploadLice();
      }
    },
    isok() {
      var flag = true;
      if (!this.formdata.translate) {
        this.$toast.center("请选择部门");
        flag = false;
      }
      if (!this.formdata.name.trim()) {
        this.$toast.center("请输入姓名");
        flag = false;
      }
      if (!this.img) {
        this.$toast.center("请上传图片");
        flag = false;
      }

      return flag;
    },
    // 上传图片
    uploadLice() {
      let param = new FormData(); // 创建form对象
      param.append("file", this.formdata.file); // 通过append向form对象添加数据
      param.append("name", this.formdata.name); // 添加form表单中其他数据
      param.append("translate", this.formdata.translate); // 添加form表单中其他数据
      var that = this;
      let config = {
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      };
      this.$toast.center("正在上传...");
      this.$router.push({ name: this.item, params: { img: that.img } });
      return
      axios.post(url + "file/uploadfiles1", param, config).then((res) => {
        if (res.data.code == 500) {
          this.$toast.center(res.data.msg);
          return;
        }
        if (res.data.code === 20000) {
          that.img = res.data.msg;
          this.$toast.center("上传成功");
          setTimeout(() => {
            this.$router.push({ name: this.item, params: { img: that.img } });
          }, 1000);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
select {
  width: 80%;
  height: 100%;
  background: transparent !important;
  border: 0;
  color: #eee;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  option {
    color: #000000;
  }
}
.el-select {
  position: relative;
  top: 0.3rem;
  padding: 0 65px;
}
html {
  font-size: 70px !important;
}
</style>
