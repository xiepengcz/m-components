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
    <m-notification :disabled="true" :value="50" :max="30" :isDot="true" icon="chatRound">
    </m-notification>
  </div>
  <div>
    <m-notification :value="50" :max="30" :isDot="true" icon="chatRound">
      <template #default>
        <m-list
          :list="list"
          @clickItem="clickItem"
          @clickAction="clickAction"
          :actions="actions"
        ></m-list>
      </template>
    </m-notification>
  </div>
</template>
<script lang="ts" setup>
import { ActionOptions, ListItem } from "../../components/list/src/types";
import { list, actions } from "./data";

const clickItem = (item:ListItem) => {
  console.log(item);
};
const clickAction = (item:ActionOptions) => {
  console.log(item);
};
</script>
<style lang="scss">
</style>