<template>
  <div>
    <m-choose-area @change="changeArea"></m-choose-area>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
// import mChooseArea from '../../components/chooseArea/src/index.vue'
const visible = ref<boolean>(false)
const changeArea = (i: any) => {
  console.log(i);
}
</script>
