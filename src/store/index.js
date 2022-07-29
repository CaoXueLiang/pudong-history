import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sectionIndex: 0,
  },
  getters: {},
  mutations: {
    setSetionIndex(state, num) {
      state.sectionIndex = num;
    },
  },
  actions: {},
  modules: {},
});
