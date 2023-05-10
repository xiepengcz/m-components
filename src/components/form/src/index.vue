<template>
  <div>
    form
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { ActionOptions, ListOptions, ListItem } from "./types";
import { toLine } from "../../../utils";
const props = defineProps({
  // 列表内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  // 操作内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
});

// 可以配置型表单，通过json对象的方式自动生成表单，
// 具备更完善的功能，表单验证，动态删减表单，集成第三方插件
// 用法简单，扩展性强，可维护性强，能够用在更多的场景里，如弹框嵌套表单
</script>
