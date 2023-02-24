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

</script>
