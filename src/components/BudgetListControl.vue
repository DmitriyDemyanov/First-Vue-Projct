<template>

  <div class="control-wrap">
    <i class="control-btn el-icon-caret-top" @click="sortList('asc')"></i>
    <i class="control-btn el-icon-caret-bottom" @click="sortList('desc')"></i>
    <ElButton type="success" size="mini" plain round @click="filterList('income')">Income</ElButton>
    <ElButton type="danger" size="mini" plain round @click="filterList('outcome')">Outcome</ElButton>
    <ElButton type="warning" size="mini" plain round @click="filterList('all')">All</ElButton>

  </div>

</template>





<script>
import { mapActions } from 'vuex';
export default {
  name: 'BudgetListControl',
  methods: {
    ...mapActions('balance',['setFilterValue', 'setSortValue']),
    sortList(value) {
      this.setSortValue(value);
    },
    filterList(title) {
      this.setFilterValue(title)

    }
  },


}
</script>

<style scoped>

.control-wrap {
  max-width: 500px;
  margin: auto;
  min-height: 50px;
  background-color:blanchedalmond;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.control-btn {
  cursor: pointer;
  font-size: 30px;
}

</style>
