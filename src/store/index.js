import Vue from 'vue'
import Vuex from 'vuex'
import state from "@/store/root.state"
import actions from "@/store/root.action"
import mutations from "@/store/root.mutations"
import modules from "@/store/modules"

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
})
