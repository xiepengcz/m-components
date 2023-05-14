<template>
  <div>
    <m-form label-width="100px" size="small" :options="options" ref="formRef" @onPreview="handlePreview" @onRemove="handleRemove"
      @onSuccess="handleSuccess" @onError="handleError" @onProgress="handleProgress" @onChange="handleChange"
      @onExceed="handleExceed" @beforeUpload="handleBeforeUpload" @beforeRemove="handleBeforeRemove">
      <template #uploadArea>
        <el-button type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div>
          jpg/png files with a size less than 500KB.
        </div>
      </template>
      <template #action="scope">
        <el-button @click="submit(scope)">提交</el-button>
        <el-button @click="reset"> 重置</el-button>
      </template>
    </m-form>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { FormOptions } from '../../components/form/src/types/types';
import { RuleItem } from '../../components/form/src/types/rule';
import { ElMessage, FormInstance, UploadFile, UploadFiles, UploadProgressEvent, UploadRawFile, UploadUserFile } from 'element-plus';

let options: FormOptions[] = [
  {
    type: 'input', prop: 'name',
    value: '',
    label: '用户名',
    rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }, { min: 3, max: 10, message: '用户名在3-10个字之间', trigger: 'blur' }],
    attrs: { clearable: true }
  },
  {
    type: 'input', prop: 'password',
    value: '',
    label: '密码',
    rules: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 8, max: 16, message: '密码在8-16个字之间', trigger: 'blur' }],
    attrs: { showPassword: true, clearable: true, placeholder: '请输入密码' }
  },
  {
    type: 'select', prop: 'like',
    value: '2',
    label: '爱好',
    rules: [{ required: true, message: '爱好不能为空', trigger: 'blur' }],
    attrs: { style: { width: '100%' } },
    children: [
      {
        type: 'option',
        value: '1',
        label: '吃饭',
      },
      {
        type: 'option',
        value: '2',
        label: '睡觉',
      },
      {
        type: 'option',
        value: '3',
        label: '打豆豆',
      },
    ]
  },
  {
    type: 'checkbox-group', prop: 'eat',
    value: [], 
    label: '美食',
    rules: [{ required: true, message: '爱好不能为空', trigger: 'change' }], // 单选和多选应该用 change 而不是 blur，因为没有失去焦点这一说 
    attrs: { style: { width: '100%' } },
    children: [
      {
        type: 'checkbox',
        value: '1',
        label: '手撕鸡',
      },
      {
        type: 'checkbox',
        value: '2',
        label: '红烧肉',
      },
      {
        type: 'checkbox',
        value: '3',
        label: '佛跳墙',
      },
    ]
  },
  {
    type: 'radio-group', prop: 'gender',
    value: '',
    label: '性别',
    rules: [{ required: true, message: '性别不能为空', trigger: 'change' }],
    attrs: { style: { width: '100%' } },
    children: [
      {
        type: 'radio',
        value: '1',
        label: '男',
      },
      {
        type: 'radio',
        value: '2',
        label: '女',
      },
      {
        type: 'radio',
        value: '3',
        label: '未知',
      },
    ]
  },
  {
    type: 'upload', prop: 'imgUrl',
    value: '',
    label: '上传图片',
    rules: [{ required: true, message: '图片不能为空', trigger: 'blur' }],
    uploadAttrs: { action: 'https://api.thecatapi.com/v1/images/search?limit=1', limit: 2, multiple: true },
  },
  {
    type: 'editor', prop: 'desc', value: '1231312', label: '描述',
    rules: [{ required: true, message: '描述不能为空', trigger: 'blur' }]
  }

]
const formRef = ref()
const reset = () => {
  formRef.value.resetFields()
}

const handlePreview = (uploadFile: UploadFile) => {
  console.log('handlePreview');
}
const handleRemove = (val: any) => {
  console.log('handleRemove', val);
}
const handleSuccess = (val: any) => {
  console.log('handleSuccess', val);

}
const handleError = (val: any) => {
  console.log('handleError', val);

}
const handleProgress = (val: any) => {
  console.log('handleProgress', val);

}
const handleChange = (val: any) => {
  console.log('handleChange', val);

}
const handleExceed = (val: any) => {
  console.log('handleExceed', val);

}
const handleBeforeUpload = (val: any) => {
  console.log('handleBeforeUpload', val);
}
const handleBeforeRemove = (val: any) => {
  console.log('handleBeforeRemove', val);

}
interface Scope {
  form: FormInstance | undefined;
  model: any
}
const submit = (scope: Scope) => {
  console.log('formEl', scope.form);
  console.log('model', scope.model);
  if (!scope.form) return
  scope.form.validate((valid, fields) => {
    if (valid) {

    } else {
      console.log('fields', fields);
      ElMessage.error('请检查参数填写！')
      return false
    }
  })
}

</script>
<style lang="scss"></style>