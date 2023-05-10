<template>
  <el-form v-bin="$attrs" :model="" :rules="rules">
    <el-form-item :label="item.label" v-for="(item, index) in options" :key="index">
      <component :is="`el-${item.type}`" v-bind="item.attrs" ></component>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { FormOptions } from "./types/types";
const props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  // 操作内容
});

// 可以配置型表单，通过json对象的方式自动生成表单，
// 具备更完善的功能，表单验证，动态删减表单，集成第三方插件
// 用法简单，扩展性强，可维护性强，能够用在更多的场景里，如弹框嵌套表单
</script>
