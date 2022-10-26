<template>

  <div class="budget-list-wrap">

    <ElCard :header="header">
      <template v-if="isListExist">
        <BudgetListItem v-for="(zapis, idx) in balanceList" :key="idx" :item="zapis"/>
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
    </ElCard>

  </div>

</template>

<script>
import BudgetListItem from '@/components/BudgetListItem';
import { mapGetters } from 'vuex';

export default {
  name: 'BudgetList',
  components: {
    BudgetListItem,
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'EMPTY LIST',
  }),
  computed: {
    ...mapGetters('balance', ['balanceList']),
    isListExist() {
      return Boolean(this.balanceList.length);
    },
  }
};

</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}


</style>