<template>
  <div style="display: flex;">
    <div style="margin-right: 20px">
      <el-time-select v-bind="$attrs.startOptions"  v-model="startTime" :max-time="endTime" class="mr-4" :placeholder="startPlaceholder"
        :start="startTimeStart" :step="startStep" :end="startTimeEnd" />
    </div>
    <div>
      <el-time-select v-bind="$attrs.endOptions"  v-model="endTime" :min-time="startTime" :placeholder="endPlaceholder" :start="endTimeStart"
        :step="endStep" :end="endTimeEnd" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
let props = defineProps({
  startPlaceholder: {
    type: String,
    default: '请输入开始时间'
  },
  // 开始时间的开始选择
  startTimeStart: {
    type: String,
    default: '08:00'
  },
  // 开始时间的步进
  startStep: {
    type: String,
    default: '00:30'
  },
  // 开始时的结束选择
  startTimeEnd: {
    type: String,
    default: '24:00'
  },
  endPlaceholder: {
    type: String,
    default: '请输入结束时间'
  },
  // 结束时间的开始选择
  endTimeStart: {
    type: String,
    default: '08:00'
  },
  // 结束时间的步进
  endStep: {
    type: String,
    default: '00:30'
  },
  // 结束时间的结束选择
  endTimeEnd: {
    type: String,
    default: '24:00'
  },
})
const startTime = ref('')
const endTime = ref('')

watch(() => startTime.value, val => {
  if (val === '') endTime.value = ''
  else  emits('startChange', { startTime: startTime.value, endTime: endTime.value })
})
watch(() => endTime.value, val => {
  if (val !== '') emits('endChange', { startTime: startTime.value, endTime: endTime.value })
})

const emits = defineEmits(['startChange', 'endChange'])
</script>
<style lang="scss" scoped></style>