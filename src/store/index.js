import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
  },
  mutations: {
    loadEvents(state, payload) {
      state.events = payload;
    },
  },
  actions: {
    loadEvents(context, events) {
      context.commit('loadEvents', events);
    },
  },
  getters: {
    getEvents: state => state.events,
  },
  modules: {
  },
});
