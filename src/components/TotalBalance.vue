
<template>
  <div :class="changeColor" class="total-value">
    Balance : {{total}}

  </div>
</template>


<script>
export default {
  name: 'TotalBalance',
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    changeColor(value) {
      return {'color-red': value.total < 0, 'color-green': value.total  > 0, 'color-black': value.total  === 0}
    }
  }
}
</script>



<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
}

.color-black {
  color: rgb(0, 102, 255);
}

.color-red {
  color: red;
}

.color-green {
  color: green;
}

.color-black {
  color:black;
}

</style>
