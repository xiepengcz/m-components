<template>
  <el-form ref="formRef" v-if="model" v-bind="$attrs" :validate-on-rule-change="false" :model="model" :rules="rules">
    <template v-for="(item, index) in options" :key="index">
      <!-- 单组件 -->
      <el-form-item v-if="!item.children || !item.children.length" :prop="item.prop" :label="item.label">
        <component v-if="item.type !== 'upload' && item.type !== 'editor'" :is="`el-${item.type}`"
          v-model="model[item.prop!]" v-bind="item.attrs">
        </component>
        <el-upload v-else-if="item.type === 'upload'" v-bind="item.uploadAttrs" :on-preview="onPreview"
          :on-remove="onRemove" :on-success="onSuccess" :on-error="onError" :on-progress="onProgress"
          :on-change="onChange" :on-exceed="onExceed" :before-upload="beforeUpload" :before-remove="beforeRemove">
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
        <div v-if="item.type === 'editor'" id="editor">
          <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
            :mode="mode" />
          <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
            :mode="mode" @onCreated="handleCreated" @onChange="handleChange" />
        </div>
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
import { PropType, onMounted, ref, watch, nextTick, shallowRef, onBeforeUnmount } from "vue";
import { FormOptions } from "./types/types";
import cloneDeep from 'lodash/cloneDeep'
import { ElForm, UploadFile, UploadFiles, UploadProgressEvent, UploadProps, UploadRawFile, UploadRequestOptions, UploadUserFile } from "element-plus";
import { Awaitable } from "element-plus/es/utils";
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import form from "..";

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

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
// 内容 HTML
const valueHtml = ref('<p>hello</p>')
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
const mode = 'default'


const formInit = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.forEach(item => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
      if (item.type === 'editor') {
        // 初始化富文本
        nextTick(() => {
          // 内容 HTML
          valueHtml.value = item.value
          handleChange = (editor: any) => {
            model.value[item.prop!] = editor.getHtml()
            console.log('change:', editor.getHtml())
          }
        })
      }
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
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
let handleChange: ((editor: any) => void) = () => { }


// 可以配置型表单，通过json对象的方式自动生成表单，
// 具备更完善的功能，表单验证，动态删减表单，集成第三方插件
// 用法简单，扩展性强，可维护性强，能够用在更多的场景里，如弹框嵌套表单

// 重置表单
let resetFields = () => {
  // 重置element-plus 表单
  formRef.value!.resetFields()
  // 重置富文本编辑内容
  if (props.options && props.options.length) {
    let editorItem = props.options.find(item => item.type === 'editor')
    editorRef.value.setHtml(editorItem?.value)
  }
}
defineExpose({ resetFields })



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
