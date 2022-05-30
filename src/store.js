import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selfie:''
  },
  mutations: {
    SETSELFIE(state,data){
      state.selfie = data
    }
  },
  actions: {

  }
})
