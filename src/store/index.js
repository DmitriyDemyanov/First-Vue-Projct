import Vue from 'vue';
import Vuex from 'vuex';
import balance from '@/store/modules/balance';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    balance,
  }
})