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

export interface AreaItem {
  name: string;
  code: string;
  children?: AreaItem[]
}

export interface Data {
  name: string;
  code: string;
}

let province = ref('')
let city = ref('')
let area = ref('')

let areas = ref(allArea)

let selectCity = ref<AreaItem[]>([])

let selectArea = ref<AreaItem[]>([])


// 分发事件给父组件
let emits = defineEmits(['change'])

watch(() => province.value, val => {
  if (val) {
    let cities = areas.value.find(item => item.code === province.value)!.children
    selectCity.value = cities
  }
  area.value = ''
  city.value = ''
})
watch(() => city.value, val => {
  if (val) {
    let area = selectCity.value.find(item => item.code === city.value)!.children! // 变量后使用 ！:表示类型推断排除null、undefined
    selectArea.value = area
  }
  area.value = ''
})


watch(() => area.value, val => {
  if (province.value && city.value && area.value) {
    let provinceData: Data = {
      code: province.value,
      name: allArea.find(item => item.code === province.value)!.name
    }
    let cityData: Data = {
      code: city.value,
      name: selectCity.value.find(item => item.code === city.value)!.name
    }
    let areaData: Data = {
      code: city.value,
      name: selectArea.value.find(item => item.code === area.value)!.name
    }
    emits('change', {
      province: provinceData,
      city: cityData,
      area: areaData
    })
  }
})
</script>
<style lang="scss">

</style>