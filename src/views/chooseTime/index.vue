<template>
  <div>
    <m-choose-time :startOptions="startOptions" @startChange="startChange" @endChange="endChange"></m-choose-time>
  </div>
</template>
<script lang="ts" setup>
interface chooseTimeValue {
  startTime:string;
  endTime: string;
}

const startChange = (val:chooseTimeValue) => {
  console.log(val);
}
const endChange = (val: chooseTimeValue) => {
  console.log('endChange', val);
}
const startOptions = {
  size: 'small'
}
</script>
