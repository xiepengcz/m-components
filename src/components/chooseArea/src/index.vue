<template>
  <div>
    <el-select v-model="province" placeholder="请选择省">
      <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select :disabled="!province" v-model="city" placeholder="请选择市">
      <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select :disabled="!province || !city" v-model="area" placeholder="请选择区">
      <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import allArea from '../lib/pca-code.json'
let province = ref('')
let city = ref('')
let area = ref('')

let areas = ref(allArea)

let selectCity = ref<any>([])

let selectArea = ref<any>([])

watch(() => province.value, val => {
  if (val) {
    let cities = areas.value.find(item => item.code === province.value)!.children
    selectCity.value = cities
    city.value = ''
    area.value = ''
  }
})
watch(() => city.value, val => {
  if (val) {
    let area = selectCity.value.find(item => item.code === city.value)!.children
    selectArea.value = area
    area.value = ''
  }
})
</script>
<style lang="scss">

</style>