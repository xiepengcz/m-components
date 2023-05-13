<template>
  <el-form ref="formRef" v-if="model" v-bind="$attrs" :validate-on-rule-change="false" :model="model" :rules="rules">
    <template v-for="(item, index) in options" :key="index">
      <!-- 单组件 -->
      <el-form-item v-if="!item.children || !item.children.length" :prop="item.prop" :label="item.label">
        <component v-if="item.type !== 'upload'" :is="`el-${item.type}`" v-model="model[item.prop!]" v-bind="item.attrs">
        </component>
        <el-upload v-else v-bind="item.uploadAttrs" :on-preview="onPreview" :on-remove="onRemove" :on-success="onSuccess"
          :on-error="onError" :on-progress="onProgress" :on-change="onChange" :on-exceed="onExceed"
          :before-upload="beforeUpload" :before-remove="beforeRemove">
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
      </el-form-item>
      <!-- 父子组件 -->
      <el-form-item v-if="item.children && item.children.length" :prop="item.prop" :label="item.label">
        <component :is="`el-${item.type}`" v-model="model[item.prop!]" v-bind="item.attrs">
          <component v-for="(child, i) in item.children" :key="i" :is="`el-${child.type}`" :value="child.value"
            :label="child.label" v-bind="child.attrs">
          </component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="action" :form="formRef" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { PropType, onMounted, ref, watch } from "vue";
import { FormOptions } from "./types/types";
import cloneDeep from 'lodash/cloneDeep'
import { ElForm, UploadFile, UploadFiles, UploadProgressEvent, UploadProps, UploadRawFile, UploadRequestOptions, UploadUserFile } from "element-plus";
import { Awaitable } from "element-plus/es/utils";

type FormInstance = InstanceType<typeof ElForm>
const formRef = ref<FormInstance>()
const props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  // 操作内容
});

const model = ref<any>()
const rules = ref<any>()
const formInit = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.forEach(item => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
    console.log('model', model.value);
    console.log('rules', rules.value);
  }
}
onMounted(() => {
  formInit()
})
// 监听父级的options的改变
watch(() => props.options, () => { formInit() }, { deep: true })
// 可以配置型表单，通过json对象的方式自动生成表单，
// 具备更完善的功能，表单验证，动态删减表单，集成第三方插件
// 用法简单，扩展性强，可维护性强，能够用在更多的场景里，如弹框嵌套表单



const onPreview = (uploadFile: UploadFile) => {
  emits('onPreview', uploadFile)
}
const onRemove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('onRemove', { uploadFile, uploadFiles })
}
const onSuccess = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  // 上传图片成功给表单 up load 项目赋值
  let uploadItem = props.options.find(item => item.type === 'upload')!
  model.value[uploadItem.prop!] = { response, uploadFile, uploadFiles }
  emits('onSuccess', { response, uploadFile, uploadFiles })
}
const onError = (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('onError', { error, uploadFile, uploadFiles })

}
const onProgress = (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('onProgress', { evt, uploadFile, uploadFiles })

}
const onChange: UploadProps['onChange'] = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('onRemove', { uploadFile, uploadFiles })

}
const onExceed = (files: File[], uploadFiles: UploadUserFile[]) => {
  emits('onExceed', { files, uploadFiles })
}
const beforeUpload: UploadProps['beforeUpload'] = (rawFile: UploadRawFile) => {
  emits('beforeUpload', { rawFile })
}
const beforeRemove: UploadProps['beforeRemove'] = (uploadFile: UploadFile, uploadFiles: UploadFiles): Awaitable<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    emits('beforeRemove', { uploadFile, uploadFiles })
  })
}

const emits = defineEmits([
  'onPreview',
  'onRemove',
  'onSuccess',
  'onError',
  'onProgress',
  'onChange',
  'onExceed',
  'beforeUpload',
  'beforeRemove',
])
</script>
