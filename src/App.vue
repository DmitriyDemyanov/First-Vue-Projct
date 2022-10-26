<template>
  <div id="app">
    <FormBalance />
    <TotalBalance :total='totalBalance'/>
    <BudgetListControl />
    <BudgetList />

  </div>
</template>

<script>

import BudgetList from '@/components/BudgetList';
import TotalBalance from '@/components/TotalBalance';
import BudgetListControl from '@/components/BudgetListControl';
import FormBalance from '@/components/FormBalance';

import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    FormBalance,
    BudgetListControl,
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters('balance', ['balanceList']),
    totalBalance() {
      return this.balanceList.reduce((acc, item) => acc + item.value,0);
    },
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


