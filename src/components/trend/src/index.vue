<template>
  <div class="m-trend">
    <div class="text" :style="{ color: type === 'up' ? upTextColor : downTextColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>
        {{ text }}
      </div>
    </div>
    <div class="icon">
      <component :style="{ color: upIconColor }" v-if="type === 'up'" :is="`el-icon-${toLine(upIcon)}`"></component>
      <component :style="{ color: downIconColor }" v-else :is="`el-icon-${toLine(downIcon)}`"></component>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useSlots } from 'vue'
import { toLine } from '../../../utils';
let props = defineProps({
  // 标记趋势：上升 up  下降 down
  type: { type: String, default: 'up' },
  text: { type: String, default: '文字 ' },
  upIconColor: { type: String, default: 'green' },
  downIconColor: { type: String, default: 'red' },
  upTextColor: { type: String, default: 'black' },
  downTextColor: { type: String, default: 'black' },
  upIcon: { type: String, default: 'ArrowUp' },
  downIcon: { type: String, default: 'ArrowDown' },
})

// 判断是否使用了插槽
let slots = useSlots()
console.log('slots =', slots);
</script>
<style lang="scss" scoped>
.m-trend {
  display: flex;
  align-items: center;

  .text {
    margin-right: 4px;
    font-size: 12px;
  }

  .icon {
    svg {
      width: .8rem;
      height: .8rem;
    }
  }
}
</style>