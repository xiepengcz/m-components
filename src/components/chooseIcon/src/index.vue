<template>
  <el-button @click="handleClick">
    <slot></slot>
  </el-button>
  <el-dialog :before-close="handleClose" :title="props.title" v-model="props.visible">
    <el-scrollbar height="500px">
      <div class="container">
        <div v-for="(item, index) in Object.keys(ElIcons)" :key="index" @click="copyIcon(item)">
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
import { watch } from 'vue';
import * as ElIcons from '@element-plus/icons-vue'
import { toLine } from '../../../utils';
import {useCopy} from '../../../hooks/useCopy/index'
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
const copyIcon = (item:string) => {
  useCopy(`<el-icon-${toLine(item)} />`)
  emits('update:visible', false)
}
// watch(()=> props.visible,val=>{
//   console.log('val',val);
//   emits('update:visible',val)
// })
</script>
<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;

  >div {
    text-align: center;
    width: 25%;
    margin-bottom: 20px;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>