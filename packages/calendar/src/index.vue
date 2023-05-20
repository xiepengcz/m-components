<template>
  <FullCalendar :options='calendarOptions'>
    <template v-slot:eventContent='arg'>
      <b>{{ arg.timeText }}</b>
      <i>{{ arg.event.title }}</i>
    </template>
  </FullCalendar>
</template>
<script lang='ts' setup>
import { defineComponent, ref, reactive, PropType } from 'vue'
import { CalendarOptions, EventApi, DateSelectArg, EventClickArg } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import { EventItem } from './types'


let props = defineProps({
  // 日历显示的语言
  local: {
    type: String,
    default: 'zh-cn'
  },
  // 视图模式
  initialView: {
    type: String,
    default: 'dayGridMonth'
  },
  // 按钮文字
  buttonText: {
    type: Object,
    default: () => {
      return {
        today: '今天',
        month: '月',
        week: '周',
        day: '日',
        prevYear: '上一年',
        nextYear: '下一年',
        prev: '上一月',
        next: '下一月'
      }
    }
  },
  // 头部工具栏
  headerToolbar: {
    type: Object,
    default: () => {
      return {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }
    }
  },
  // 底部工具栏
  footerToolbar: {
    type: Object
  },
  // 日历事件
  events: {
    type: Array as PropType<EventItem[]>,
    default: () => []
  },
  // 自定义渲染内容方法
  eventContent: {
    type: Function
  }
})



const handleDateSelect = (selectInfo: DateSelectArg) => {

  // let title = prompt('Please enter a new title for your event')
  // let calendarApi = selectInfo.view.calendar

  // calendarApi.unselect() // clear date selection

  // if (title) {
  //   calendarApi.addEvent({
  //     id: new Date().getTime().toString(),
  //     title,
  //     start: selectInfo.startStr,
  //     end: selectInfo.endStr,
  //     allDay: selectInfo.allDay
  //   })
  // }
}
const handleEventClick = (clickInfo: EventClickArg) => {
  console.log('handleEventClick', clickInfo);
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove()
  }
}
const handleEvents = (events: EventApi[]) => {
  currentEvents.value = events
}
// 点击日历的某一天
const dateClick = (info: DateClickArg) => {
  emits('date-click', info)
}
// 点击日历上的时间
const eventClick = (info: EventClickArg) => {
  emits('event-click', info)
}
const calendarOptions = reactive({
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin // needed for dateClick
  ],
  headerToolbar: props.headerToolbar,  // 头部工具栏
  footerToolbar: props.footerToolbar,// 底部工具栏
  locale: props.local,
  buttonText: props.buttonText,
  initialView: props.initialView,
  initialEvents: props.events, // alternatively, use the `events` setting to fetch from a feed
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  displayEventEnd: true,// 显示事件的结束时间
  select: handleDateSelect,
  eventClick,
  dateClick,
  eventsSet: handleEvents,

  /* you can update a remote database when these fire:
  eventAdd:
  eventChange:
  eventRemove:
  */
}) as CalendarOptions
const currentEvents = ref([] as EventApi[])


const emits = defineEmits(['date-click', 'event-click'])
</script>
<style lang='scss' scoped>
svg {
  width: 1em;
  height: 1em;
}
</style>