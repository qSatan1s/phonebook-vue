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
    },
    async searchNumber(ctx, value) {
      ctx.commit("searchNumber", value);
    }
  },
  state: {
    numbers: [],
    FilteNumber: [],
    value: ""
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
    searchNumber(state, value) {
      state.value = value.toLowerCase();
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
      let nummber = state.numbers;
      if (state.value) {
        nummber = nummber.filter(
          data =>
            data.name.toLowerCase().indexOf(state.value) !== -1 ||
            data.phone.toLowerCase().indexOf(state.value) !== -1
        );
      }
      var d = {};
      nummber.forEach(function(user) {
        if (typeof d[user.name[0]] == "undefined") d[user.name[0]] = [];

        d[user.name[0]].push(user);
      });

      var c = Object.keys(d).map(function(key) {
        return d[key];
      });
      return (state.FilteNumber = c);
    }
  }
};
