<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type..." value="INCOME">
          <ElOption label="Income" value="INCOME"/>
          <ElOption label="Outcome" value="OUTCOME"/>
        </ElSelect>
      </ElFormItem>


      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment"/>
      </ElFormItem>

      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value"/>
      </ElFormItem>

        <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>

  </ElCard>
</template>



<script>
import { mapActions } from 'vuex';

export default {

  name: "FormBalance",

  data() {
    return {
      formData: {
        type: 'INCOME',
        comment: '',
        value: null,
      },
      rules: {
        type: [
          { required: true, message: 'Please select type', trigger: 'blur' },
        ],
        comment: [
          { required: true, message: 'Please input type', trigger: 'blur' }
        ],
        value: [
          { required: true, message: 'Please input value', trigger: 'blur' },
          { type: 'number', message: 'Value mast be a number', trigger: 'change' },
          { validator: this.validateValue, trigger: 'blur' }
        ]
      }
    }

  },
  methods: {
    ...mapActions('balance', ['addNewItem']),
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          this.submitForm({ ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      })
    },
    submitForm(data) {
      if (data.type === 'OUTCOME' && data.value > 0) {
        data.value *= -1;
      }
      this.addNewItem(data);
    },
    validateValue(rule, value, cb) {
      if (value === 0) {
        return cb(new Error('Please input a number not a 0'));
      }
      if (value < 0 && this.formData.type === 'INCOME') {
        return cb(new Error('INCOME cant be less 0 !'));
      }
      cb();

    }
  }


};
</script>




<style scoped>
.form-card{
  max-width: 500px;
  margin: auto;
}

.type-select {
  width: 100%;
}

</style>