<template>
  <m-table :data="tableData" :options="options" :elementLoadingText="loadingText">
    <template #name="{ scope }">
      <span style="color:red">{{ scope.row.name }}</span>
    </template>
    <template #action="{ scope }">
      <div>
        <el-button @click="edit(scope.row)">编辑</el-button>
        <el-button>删除</el-button>
      </div>
    </template>
  </m-table>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { TableOptions } from '../../components/table/src/types';

interface TableData {
  date: string;
  name: string;
  address: string
}
const tableData = ref<TableData[]>([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',

  },
])
setTimeout(() => {
  tableData.value = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',

    },
  ]
}, 3000)
// 表格配置
let options: TableOptions[] = [
  { label: '日期', prop: 'date', align: 'center', editable: true },
  { label: '姓名', prop: 'name', align: 'center', slot: 'name', editable: true },
  { label: '地址', prop: 'address', align: 'center', width: '400' },
  { label: '操作', action: true, align: 'center', width: '400' },
]
let loadingText = "加载中 请稍候"

const edit = (row: any) => { console.log(row); }
</script>
<style lang="scss" scoped></style>