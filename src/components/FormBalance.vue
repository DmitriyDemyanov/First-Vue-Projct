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
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          this.$emit('submitForm', { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      })
    },
    validateValue(rule, value, cb) {
      if (value === 0) {
        return cb(new Error('Please input a number not a 0'));
      }
      if (value < 0 && this.formData.type === 'INCOME') {
        return cb(new Error('INCOME cant be less 0 !'));
      }
      cb();

      console.log("111111111", rule);
      console.log("22222", value);

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