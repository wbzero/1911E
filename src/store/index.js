import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show:false
  },
  mutations: {
    addShow(state,val){
      state.show = val
    },
    addBack(state,val){
      state.show = val
    }
  },
  actions: {
    addShow(context,val){
      context.commit('addShow',val)
    },
    addBack(context,val){
      context.commit('addBack',val)
    }
  },
  modules: {
  }
})
