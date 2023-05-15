<template>
  <el-table :data="tableData" v-loading="isLoading" :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner" :element-loading-background="elementLoadingBackground"
    @row-click="rowClick">
    <template v-for="(item, i) in tableOptions" :key="i">
      <el-table-column :width="item.width" :label="item.label" :prop="item.prop" :align="item.align">
        <template #default="scope">
          <template v-if="(scope.$index + scope.column.id) === currentEdit">
            <div style="display: flex;align-items: center;">
              <el-input size="small" v-model="scope.row[item.prop!]"></el-input>
              <div @click="clickEditCell">
                <slot name="editCell" v-if="$slots.editCell" :scope="scope"></slot>
                <div v-else>
                  <el-icon-check class="icon" style="margin-right: 12px; color:green" @click="confirm(scope)">
                  </el-icon-check>
                  <el-icon-close class="icon" style="color:red" @click="cancel(scope)"></el-icon-close>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
            <span v-else>{{ scope.row[item.prop!] }}</span>
            <component @click="clickEdit(scope)" v-if="item.editable" class="icon" :is="`el-icon-${toLine(editIcon)}`">
            </component>
          </template>
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
import { ref, PropType, computed, onMounted, watch } from 'vue';
import { TableOptions } from './types';
import { toLine } from '../../../utils';
import cloneDeep from 'lodash/cloneDeep'

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
  // 编辑单元格的图标
  editIcon: { type: String, default: 'edit' },
  // 是否可编辑行
  isEditRow: { type: Boolean, default: false },
  // 父级编辑行按钮的index
  editRowIndex: { type: String, default: '' }
})

// 过滤操作选项后的配置
let tableOptions = computed(() => props.options.filter(item => !item.action))
// 获取 action
let actionOptions = computed(() => props.options.find(item => item.action))

// 表格loading
let isLoading = computed(() => !props.data || !props.data.length)

// 当前点击的单元格
const currentEdit = ref<string>('')
const clickEdit = (scope: any) => {
  console.log(scope);
  // 获取单元格的唯一标识
  currentEdit.value = scope.$index + scope.column.id
}
const clickEditCell = () => {
  currentEdit.value = ''
}

// 点击行的事件
const rowClick = (row: any, column: any) => {
  console.log(row, column);
  // 判断当前点击是否是操作项的内容
  if (column.label === actionOptions.value?.label) {
    // 编辑行操作
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex){
      
    }
  }
}



const confirm = (scope: any) => {
  emits('confirm', scope)
}
const cancel = (scope: any) => {
  emits('cancel', scope)
}

// 编辑行
// 拷贝表格数据
let tableData = ref<any[]>(cloneDeep(props.data))
// 拷贝一份按钮index
let cloneEditRowIndex = ref<string>(props.editRowIndex)

watch(() => props.data, val => {
  tableData.value = cloneDeep(val)
  tableData.value.map(item => {
    item.rowEdit = false // 代表当前是否是可编辑状态
  })
}, { deep: true })
watch(() => props.editRowIndex, val => {
  if (val) cloneEditRowIndex.value = val
})


onMounted(() => {
  tableData.value.map(item => {
    item.rowEdit = false // 代表当前是否是可编辑状态
  })
})
const emits = defineEmits(['confirm', 'cancel'])
</script>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  left: 2px;
  cursor: pointer;
}
</style> 