<template>
  <div id="app">
    <FormBalance @submitForm="onsubmitform"/>
    <TotalBalance :total='totalBalance'/>
    <BudgetListControl @sortList="onSortList"/>
    <BudgetList :listCollection="listCollection" @deleteItem="onDeleteItem"/>

  </div>
</template>

<script>

import BudgetList from '@/components/BudgetList'
import TotalBalance from '@/components/TotalBalance'
import BudgetListControl from '@/components/BudgetListControl'
import FormBalance from '@/components/FormBalance'

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    FormBalance,
    BudgetListControl,
  },
  data: () => ({
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
    sortBy: null,
  }),
  computed: {
    totalBalance() {
      // цепочка вопрос
      return Object.values(this.list).reduce((acc, item) => acc + item.value,0);
    },
    listCollection() {
      console.log(Object.values(this.list));
      const list = Object.values(this.list);
      if (this.sortBy === 'asc') {
        return list.sort((a, b) => a.value - b.value);
      }
      if (this.sortBy === 'desc') {
        return list.sort((a, b) => b.value - a.value);
      }
      return list;
    },
  },
  methods: {
    onDeleteItem(id) {
      if (confirm('Are you sure')) {
        this.$delete(this.list, id);
      }
    },

    onSortList(sortBy) {
      console.log(sortBy);
      this.sortBy = sortBy;
    },

    onsubmitform(data) {
      if (data.type === 'OUTCOME' && data.value > 0) {
        data.value *= -1;
      }
      const newObj = {
        ...data,
        id: String(Math.random())
      };
      this.$set(this.list, newObj.id, newObj);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


