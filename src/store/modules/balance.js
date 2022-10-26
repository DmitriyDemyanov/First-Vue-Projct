import Vue from "vue";

const balanceStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: 'INCOME',
        value: 100,
        comment:  'Some comment',
        id: 1,
      },
      2: {
        type: 'OUTCOME',
        value: -50,
        comment:  'Some outcome comment',
        id: 2,
      }
    },
    filterBy: 'all',
    sortBy: null,
  },
  getters: {
    balanceList(state) {
      let list = Object.values(state.list);

      if (state.filterBy !== 'all') {
        list = list.filter((el) => el.type === state.filterBy.toUpperCase());
      }

      if (state.sortBy === 'asc') {
        return list.sort((a, b) => b.value - a.value);
      }
      if (state.sortBy === 'desc') {
        return list.sort((a, b) => a.value - b.value);
      }

      return list;
    },

    getBalanceById: (state) => {
      return (id) => Object.values(state.list).find(el => el.id === id);
    }
  },
  mutations: {
    ADD_ITEM(state, item) {
      Vue.set(state.list, item.id, item);
    },
    DELETE_ITEM(state, id) {
      Vue.delete(state.list, id);
    },
    SET_FILTER(state, title) {
      state.filterBy = title;
    },
    SET_SORT(state, value) {
      state.sortBy = value;
    }
  },
  actions: {
    addNewItem({ commit }, data) {
      const newItem = { ...data, id: String(Math.random()) };

      commit('ADD_ITEM', newItem);
    },
    deleteItem({ commit }, id) {
      commit('DELETE_ITEM', id)
    },
    setFilterValue({ commit }, title) {
      commit('SET_FILTER', title)
    },
    setSortValue({ commit }, value) {
      commit('SET_SORT', value)
    }

  },
};


export default balanceStore;