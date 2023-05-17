<template>
  <div>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>
<script lang="ts" setup>
import FullCalendar from 'fullcalendar/vue3'
import dayGridPlugin from 'fullcalendar/daygrid'
import interactionPlugin from 'fullcalendar/interaction'


const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth'
}

</script>
<style lang="scss" scoped></style>