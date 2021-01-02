export default {
  actions: {
    async FeatchNumbers(ctx) {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const numbers = await res.json();

      ctx.commit("updateNumber", numbers);
    },
    async removeNumber(ctx, id) {
      ctx.commit("removeNumber", id);
    },
    async EditNumber(ctx, formData) {
      ctx.commit("editNumber", formData);
    },
    async CrateNumber(ctx, formData) {
      ctx.commit("CrateNumber", formData);
    }
  },
  state: {
    numbers: [],
    FilteNumber: []
  },
  mutations: {
    CrateNumber(state, formData) {
      state.numbers.push(formData);
    },
    updateNumber(state, numbers) {
      state.numbers = numbers.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    removeNumber(state, id) {
      state.numbers = state.numbers.filter(c => c.id !== id);
    },
    editNumber(state, formData) {
      return state.numbers.forEach(c => {
        if (c.id === formData.id) {
          c.name = formData.name.trim();
          c.phone = formData.phone;
        }
      });
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
