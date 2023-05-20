<template>
  <el-button @click="handleClick">
    <slot></slot>
  </el-button>
  <el-dialog :before-close="handleClose" :title="props.title" v-model="props.visible">
    <el-scrollbar height="500px">
      <div class="container">
        <div class="item" v-for="(item, index) in Object.keys(ElIcons)" :key="index" @click="copyIcon(item)">
          <div>
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div>{{ item }}</div>
        </div>
      </div>
    </el-scrollbar>
  </el-dialog>
</template>
<script setup lang="ts">
import * as ElIcons from '@element-plus/icons-vue'
import { toLine } from '../../utils';
import { useCopy } from '../../hooks/useCopy/index'
const props = defineProps<{
  title: string,
  visible: boolean
}>()
const emits = defineEmits(['update:visible'])

const handleClick = () => {
  emits('update:visible', !props.visible)
}
const handleClose = () => {
  emits('update:visible', false)
}
const copyIcon = (item: string) => {
  useCopy(`<el-icon-${toLine(item)} />`)
  emits('update:visible', false)
}
</script>
<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  text-align: center;
  width: 25%;
  margin-bottom: 20px;
}

svg {
  width: 2em;
  height: 2em;
}
</style>