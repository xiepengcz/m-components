<template>
  <div>
    <m-choose-area></m-choose-area>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
import mChooseArea from '../../components/chooseArea/src/index.vue'
const visible = ref<boolean>(false)
</script>
<style lang="scss">
  
</style>