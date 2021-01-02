export default {
  state: {
    token: null
  },
  actions: {
    async login({ commit, dispatch }, formData) {
      try {
        const token = await new Promise(resolve => {
          setTimeout(() => {
            resolve("moke-token");
          }, 2000);
        });
        dispatch("FeatchNumbers");
        dispatch("setToken", token);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    logout({ commit }) {
      commit("clearToken");
    },
    setToken({ commit }, token) {
      commit("setToken", token);
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    }
  },
  getters: {
    isAuthenticated: state => Boolean(state.token)
  }
};
