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
export default {
  name: 'BudgetListControl',
  methods: {
    sortList(type) {
      this.$emit('sortList',type);
    },
    filterList(type) {
      this.$emit('filterList', type)

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
