<template>
  <div id="app">
    <FormBalance @submitForm="onsubmitform"/>
    <TotalBalance :total='totalBalance'/>
    <BudgetList :list="list" @deleteItem="onDeleteItem"/>
  </div>
</template>

<script>

import BudgetList from '@/components/BudgetList'
import TotalBalance from '@/components/TotalBalance'
import FormBalance from '@/components/FormBalance'

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    FormBalance,
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
    }
  }),
  computed: {
    totalBalance() {
      // цепочка вопрос
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0);
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },
    onsubmitform(data) {
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
