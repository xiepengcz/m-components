<template>
  <el-table :data="data" v-loading="isLoading" :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner" :element-loading-background="elementLoadingBackground">
    <template v-for="(item, i) in tableOptions" :key="i">
      <el-table-column v-if="!item.slot" :width="item.width" :label="item.label" :prop="item.prop"
        :align="item.align"></el-table-column>
      <el-table-column v-else-if="item.slot" :width="item.width" :label="item.label" :prop="item.prop"
        :align="item.align">
        <template #default="scope">
          <slot :name="item.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
    </template>
    <el-table-column :label="actionOptions?.label" :align="actionOptions?.align">
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { TableOptions } from './types';

let props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },
  data: { type: Array as PropType<any[]>, required: true },
  // loading 显示在加载图标下方的加载文案
  elementLoadingText: { type: String },
  // 自定义加载图标
  elementLoadingSpinner: { type: String },
  // 自定义加载图标svg
  elementLoadingSvg: { type: String },
  // 背景遮罩的颜色
  elementLoadingBackground: { type: String },
})

// 过滤操作选项后的配置
let tableOptions = computed(() => props.options.filter(item => !item.action))
// 获取 action
let actionOptions = computed(() => props.options.find(item => item.action))

// 表格loading
let isLoading = computed(() => !props.data || !props.data.length)
</script>
<style lang="scss" scoped></style>