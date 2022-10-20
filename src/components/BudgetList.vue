<template>

  <div class="budget-list-wrap">

    <ElCard :header="header">
      <template v-if="isListExist">
        <BudgetListItem v-for="(zapis, key) in list" :key="key" :item="zapis" @deleteItem="deleteItem"/>
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false"/>
    </ElCard>

  </div>

</template>

<script>
import BudgetListItem from '@/components/BudgetListItem'

export default {
  name: 'BudgetList',
  components: {
    BudgetListItem,
  },
  props: {
    list: Object,
    default: () => ({}),
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'EMPTY LIST',
  }),
  computed: {
    isListExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    }
  }
};

</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}


</style>