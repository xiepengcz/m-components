<template>
  <m-menu :data="data" router :defaultActive="$route.path"></m-menu>
</template>

<script setup lang="ts">
const data = [
  {icon: 'HomeFilled',name: '首页', index: '/'},
  {icon: 'Check',name: '图标选择器', index: '/chooseIcon'},
  {icon: 'Location',name: '省市区选择', index: '/chooseArea'},
  {icon: 'DCaret',name: '趋势标记', index: '/trend'},
  {icon: 'Timer',name: '时间选择器', index: '/chooseTime'},
  {icon: 'Bell',name: '通知菜单', index: '/notification'},
  {icon: 'Menu',name: '导航菜单', index: '/menu'},
  {icon: 'OfficeBuilding',name: '城市选择器', index: '/chooseCity'},
  {icon: 'Discount',name: '进度条', index: '/progress'},
  {icon: 'Calendar',name: '日历', index: '/calendar'},
  {icon: 'Tickets',name: '表单', index: '/form'},
  {icon: 'Document',name: '表格', index: '/table'},
  ]
</script>

<style lang="scss">

</style>