<template>
  <div>
    <m-menu defaultActive="2" :data="data1">123</m-menu>
    <m-infinite-menu defaultActive="2" :data="data2">123</m-infinite-menu>
  </div>
</template>

<script lang="ts" setup>
import { MenuItem } from '../../components/menu/src/types';
let data1 = [
  { name: '导航1', index: '1', icon: 'document' },
  { name: '导航2', index: '2', icon: 'document' },
  {
    name: '导航3', index: '3', icon: 'document',
    children: [{ name: '导航4', index: '4', icon: 'document' },
    { name: '导航5', index: '5', icon: 'document' }]
  }
]
let data2 = [
  { name: '导航1', index: '1', icon: 'document' },
  { name: '导航2', index: '2', icon: 'document' },
  {
    name: '导航3', index: '3', icon: 'document',
    children: [
      { name: '导航3-1', index: '3-1', icon: 'document' },
      {
        name: '导航3-2', index: '3-2', icon: 'document',
        children: [
          {
            name: '导航3-2-1', index: '3-2-1', icon: 'document',
            children: [
              { name: '导航3-2-1-1', index: '3-2-1-1', icon: 'document' },
              { name: '导航3-2-1-2', index: '3-2-1-2', icon: 'document' }
            ]
          },
          { name: '导航3-2-2', index: '3-2-2', icon: 'document' }
        ]
      }]
  }
]
</script>

<style lang="scss" scoped>
</style>