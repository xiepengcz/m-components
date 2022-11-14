<template>
  <el-menu :collapse="props.collapse" class="el-menu-vertical-demo" default-active="2">
    <el-menu-item index="1">
      <el-icon>
        <el-icon-location />
      </el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <el-icon-location />
      </el-icon>
      <template #title>图标</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <el-icon-location />
      </el-icon>
      <template #title>趋势</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean
}>()
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>