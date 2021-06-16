import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    persons: [
      { id: 1, name: "Swan Pyae Sone", age: 18, city: "YGN" },
      { id: 2, name: "Luwix", age: 12, city: "YGN" },
      { id: 3, name: "Khant Phone", age: 18, city: "MDY" },
      { id: 4, name: "Si Thu", age: 19, city: "MDY" },
    ],
  },
  mutations: {
    addPerson(state, payload) {
      state.persons.push(payload);
    },
  },
  actions: {
    addPerson(context, payload) {
      context.commit("addPerson", payload);
    },
  },
  getters: {
    persons: (state) => {
      return state.persons;
    },
  },
  modules: {},
});
