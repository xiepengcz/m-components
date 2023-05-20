<template>
  <m-calendar :events="events"></m-calendar>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { EventItem } from '../../components/calendar/src/types';

let events = ref<EventItem[]>([
  {
    title: '购物',
    start: '2021-11-11 10:00:00',
    end: '2021-11-11 12:00:00',
    editable: true
  },
  {
    title: '学习',
    start: '2021-11-15 08:00:00',
    end: '2021-11-15 16:00:00'
  }
])
</script>