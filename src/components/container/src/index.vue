<template>
  <el-container>
    <el-aside width="auto">
      <nav-side v-model:collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main style="background:#eee">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavHeader from './navHeader/index.vue'
import NavSide from './navSide/index.vue'
let isCollapse = ref(false)
</script>
<style lang="scss">
.el-header{
  padding: 0;
}
</style>

