<template>
  <el-badge style="cursor: pointer;" :value="value" :max="max" :isDot="isDot">
    <component :is="`el-icon-${toLine(icon)}`"></component>
  </el-badge>
</template>
<script lang="ts" setup>
import { toLine } from '../../../utils';

let props = defineProps({
  icon: { type: String, default: 'Bell' },
  value: { type: String || Number, default: '' }, // 通知数量
  max: { type: Number, default: 99 }, // 最大值
  isDot: { type: Boolean, default: false }, // 是否显示小圆点
  hidden: { type: Boolean, default: false }, // 是否隐藏 Badge
})
</script>
<style lang="scss">

</style>