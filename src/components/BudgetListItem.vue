<template>
  <div class="list-item">
    <span class="budget-comment">{{item.comment}}</span>
    <span :class="changeColorValue" class="budget-value">{{item.value}}</span>
    <i :class="[iconArrow, 'item-icon']"></i>
    <ElButton type="danger" size="mini" @click="deleteItem(item.id)">Delete</ElButton>
  </div>
</template>





<script>
export default {
  name: 'BudgetListItem',
  props: {
    item: Object,
    default: () => ({})
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
  },
  computed: {
    iconArrow() {
      return this.item.value > 0 ? 'el-icon-top' : 'el-icon-bottom';
    },
    changeColorValue() {
      return { 'color-green' :  this.item.value > 0, 'color-red' : this.item.value < 0}
    }
  }
};

</script>






<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}

.el-icon-top {
  color: green;

}

.el-icon-bottom {
  color: red;
}

.item-icon {
  font-size: 22px;
  margin-right: 10px;
}
.color-red {
  color: red;
}
.color-green {
  color: green;
}


</style>