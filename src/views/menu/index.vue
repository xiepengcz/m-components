<template>
  <div>
    <m-menu defaultActive="2" :data="data1">123</m-menu>
    <!-- 自定义键名 -->
    <m-menu defaultActive="2" name="a" index="b" icon="c" children="d" :data="data3">123</m-menu>
    <div style="width:400px">
      <m-infinite-menu :data="data2">123</m-infinite-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MenuItem } from '../../components/menu/src/types';
let data1 = [
  { name: '导航1', index: '1', icon: 'Check' },
  { name: '导航2', index: '2', icon: 'Check' },
  {
    name: '导航3', index: '3', icon: 'Check',
    children: [{ name: '导航4', index: '4', icon: 'Check' },
    { name: '导航5', index: '5', icon: 'Check' }]
  }
]
let data3 = [
  { a: '导航1', b: '1', c: 'Check' },
  { a: '导航2', b: '2', c: 'Check' },
  {
    a: '导航3', b: '3', c: 'Check',
    d: [{ a: '导航4', b: '4', c: 'Check' },
    { a: '导航5', b: '5', c: 'Check' }]
  }
]
let data2 = [
  { name: '导航1', index: '1', icon: 'Check' },
  { name: '导航2', index: '2', icon: 'Check' },
  {
    name: '导航3', index: '3', icon: 'Check',
    children: [
      { name: '导航3-1', index: '3-1', icon: 'Check' },
      {
        name: '导航3-2', index: '3-2', icon: 'Check',
        children: [
          {
            name: '导航3-2-1', index: '3-2-1', icon: 'Check',
            children: [
              { name: '导航3-2-1-1', index: '3-2-1-1', icon: 'Check' },
              {
                name: '导航3-2-1-2', index: '3-2-1-2', icon: 'Check', children: [
                  { name: '导航3-2-1-2-1', index: '3-2-1-2-1', icon: 'Check' },]
              }
            ]
          },
          { name: '导航3-2-2', index: '3-2-2', icon: 'Check' }
        ]
      }]
  }
]
</script>

<style lang="scss" scoped>

</style>