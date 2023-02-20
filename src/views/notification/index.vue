<template>
  <div>
    <m-notification :value="12"></m-notification>
  </div>
  <div>
    <m-notification :value="50" :max="30"></m-notification>
  </div>
  <div>
    <m-notification :value="50" :max="30" :isDot="true"></m-notification>
  </div>
  <div>
    <m-notification :value="50" :max="30" :isDot="true" icon="chatRound">
    </m-notification>
  </div>
  <div>
    <m-notification :value="50" :max="30" :isDot="true" icon="chatRound">
      <template #default>
        <m-list></m-list>
      </template>
    </m-notification>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss">

</style>