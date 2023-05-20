<template>
  <div class="header" @click="toggle">
    <el-icon-expand v-if="props.collapse"></el-icon-expand>
    <el-icon-fold v-else></el-icon-fold>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean
}>()
let emits = defineEmits(['update:collapse'])
let toggle = () => {
  console.log('ttt');
  // 修改父级数据
  emits('update:collapse', !props.collapse)
}
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

svg {
  width: 1em;
  height: 1em;
}
</style>