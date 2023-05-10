<template>
  <div>
    <m-form label-width="100px" :options="options"></m-form>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { FormOptions } from '../../components/form/src/types/types';
import { RuleItem } from '../../components/form/src/types/rule';

let options: FormOptions[] = [
  {
    type: 'input',
    value: '',
    label: '用户名',
    rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }, { min: 3, max: 10, message: '用户名在3-10个字之间', trigger: 'blur' }],
    attrs: { clearable: true }
  },
  {
    type: 'input',
    value: '',
    label: '密码',
    rules: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 8, max: 16, message: '密码在8-16个字之间', trigger: 'blur' }],
    attrs: { showPassword: true, clearable: true }
  },

]

</script>
<style lang="scss"></style>