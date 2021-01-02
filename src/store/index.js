import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth.store";
import layout from "./layout.store";
import numberPhone from "./numberPhone.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth,
    layout,
    numberPhone
  }
});
