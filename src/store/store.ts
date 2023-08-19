import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    search: "",
    types: []
  },

  mutations: {
    setSearch(state, newVal) {
      state.search = newVal;
    },
    setTypes(state, newVal) {
      state.types = newVal;
    }
  },

  getters: {
    name: (state) => {
      return state.search
    },
    types: (state) => {
      return state.types
    }
  }
});