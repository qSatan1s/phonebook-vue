export default {
  actions: {
    async FeatchNumbers(ctx) {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const numbers = await res.json();

      ctx.commit("updatePost", numbers);
    }
  },
  state: {
    numbers: [],
    FilteNumber: []
  },
  mutations: {
    updatePost(state, numbers) {
      state.numbers = numbers.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    removeNumber(state, id) {
      state.numbers = state.numbers.filter(c => c.id !== id);
    }
  },
  getters: {
    allNumbers(state) {
      return state.numbers;
    },
    FilteNumbers(state) {
      var d = {};

      state.numbers.forEach(function(value) {
        if (typeof d[value.name[0]] == "undefined") d[value.name[0]] = [];

        d[value.name[0]].push(value);
      });

      var c = Object.keys(d).map(function(key) {
        return d[key];
      });
      return (state.FilteNumber = c);
    }
  }
};
