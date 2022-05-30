import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import localData from './componentoperation/local'
import A from './until/api'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import Storage from 'vue-ls';
import animated from 'animate.css' // npm install animate.css --save安装，在引入
import "./assets/css/index.less"
import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
import './until/flexible.js'
import 'vue2-toast/lib/toast.css';
import VueTouch from "vue-touch"
import Toast from 'vue2-toast';

import VueKonva from "vue-konva";
import gifler from "gifler";
import Konva from "konva";
Vue.use(VueKonva);
Vue.use(Konva);
Vue.use(gifler);
Vue.use(VueTouch, {name: 'v-touch'})
// Toast

VueTouch.config.swipe = {
  threshold:50  //设置左右滑动的距离
}

Vue.use(Toast);
Vue.use(ElementUI);
Vue.use(animated)
Vue.config.productionTip = false
Vue.prototype.$local = localData
Vue.prototype.$api = A
const options = {
  namespace: '', // key键前缀
  name: 'ls', // 命名Vue变量.[ls]或this.[$ls],
  storage: 'local', // 存储名称: session, local, memory
};
 
Vue.use(Storage, options);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
