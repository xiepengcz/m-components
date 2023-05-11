<template>
  <el-form v-if="model" v-bind="$attrs" :validate-on-rule-change="false" :model="model" :rules="rules">
    <template v-for="(item, index) in options" :key="index">
      <!-- 单组件 -->
      <el-form-item v-if="!item.children || !item.children.length" :prop="item.prop" :label="item.label">
        <component v-if="item.type !== 'upload'" :is="`el-${item.type}`" v-model="model[item.prop!]" v-bind="item.attrs">
        </component>
        <el-upload v-else>
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

  </el-form>
</template>
<script lang="ts" setup>
import { PropType, onMounted, ref, watch } from "vue";
import { FormOptions } from "./types/types";
import cloneDeep from 'lodash/cloneDeep'
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
</script>
