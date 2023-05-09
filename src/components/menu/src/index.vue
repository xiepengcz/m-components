<template>
  <!-- @open="handleOpen" @close="handleClose" -->
  <el-menu class="el-menu-vertical-demo" :defaultActive="defaultActive" :router="router" v-bind="$attrs">
    <template v-for="(item, i) in data" :key="i">
      <el-menu-item v-if="!item[children] || !item[children].length" :index="item[index]">
        <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      <el-sub-menu index="1" v-if="item[children] && item[children].length" :index="item[index]">
        <template #title>
          <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
          <span>{{ item[name] }}</span>
        </template>
        <el-menu-item v-for="(item1, index1) in item[children]" :key="index1">
          <component v-if="item1[icon]" :is="`el-icon-${toLine(item1[icon])}`"></component>
          <span>{{ item1[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { toLine } from "../../../utils";
import { MenuItem } from "./types";
let props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  // 默认选中的菜单
  defaultActive: {
    type: String,
    default: ''
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: ''
  },
  // 键名
  name: { type: String, default: 'name' },
  children: { type: String, default: 'children' },
  icon: { type: String, default: 'icon' },
  index: { type: String, default: 'index' }
});
console.log(props);
</script>
<style lang="scss" scoped>
svg {
  margin-right: 4px;
  width: 1em;
  height: 1em;

}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>