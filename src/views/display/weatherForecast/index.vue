<template>
  <div>
    <el-row>
      <el-col :span="24" style="height: 100%;">
        <Title :title="weatherTitle"></Title>
        <div style="margin: 10px 0;">
          <span style="font-weight: bold;">当前所在地：</span> 江西省 南昌市 青山湖区
          <el-popover placement="bottom" :width="400" trigger="click">
            <template #reference>
              <a @click="ddd">[切换]</a>
            </template>
            <el-table :data="gridData">
              <el-table-column width="150" property="date" label="date" />
              <el-table-column width="100" property="name" label="name" />
              <el-table-column width="300" property="address" label="address" />
            </el-table>
          </el-popover>
        </div>
        <el-tabs v-model="activeName" class="weather-item" @tab-click="handleClick" type="border-card">
          <el-tab-pane :label="oneDay" name="first1">
            <vxe-grid class="reverse-table" v-bind="gridOptions"></vxe-grid>
          </el-tab-pane>
          <el-tab-pane :label="oneDay" name="first2">
            <vxe-grid class="reverse-table" v-bind="gridOptions"></vxe-grid>
          </el-tab-pane>
          <el-tab-pane :label="oneDay" name="first3">
            <vxe-grid class="reverse-table" v-bind="gridOptions"></vxe-grid>
          </el-tab-pane>
          <el-tab-pane :label="oneDay" name="first4">
            <vxe-grid class="reverse-table" v-bind="gridOptions"></vxe-grid>
          </el-tab-pane>
          <el-tab-pane :label="oneDay" name="first5">
            <vxe-grid class="reverse-table" v-bind="gridOptions"></vxe-grid>
          </el-tab-pane>
          <el-tab-pane :label="oneDay" name="first6">
            <vxe-grid class="reverse-table" v-bind="gridOptions"></vxe-grid>
          </el-tab-pane>
          <el-tab-pane :label="oneDay" name="first7">
            <vxe-grid class="reverse-table" v-bind="gridOptions"></vxe-grid>
          </el-tab-pane>
          <div style="margin-top: 20px;">
            <el-descriptions title="当日概况" :column="4" border>
              <el-descriptions-item label="天气现象">多云</el-descriptions-item>
              <el-descriptions-item label="风速风向">微风 西南风</el-descriptions-item>
              <el-descriptions-item label="最高温度">22℃</el-descriptions-item>
              <el-descriptions-item label="最低温度">22℃</el-descriptions-item>
              <el-descriptions-item label="平均温度">22℃</el-descriptions-item>
              <el-descriptions-item label="降水量">0.1</el-descriptions-item>
              <el-descriptions-item label="舒适度指数">温暖</el-descriptions-item>
              <el-descriptions-item label="感冒指数">易发</el-descriptions-item>
            </el-descriptions>
          </div>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus';
import { ref, reactive } from 'vue'
import Title from "@/components/Title.vue"
import type { VxeGridProps } from 'vxe-table';

const weatherTitle = '7日内天气预报（2023/05/09 12:00发布）'
const activeName = ref('first1')
const oneDay = '2023-05-01 星期二'

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const ddd = () => {
  console.log('ddd');

}

interface RowVO {
  col1: string
  col2: string
  col3: string
  col4: string
  col5: string
  col6: string
  col7: string
}

const gridData = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
]

const gridOptions = reactive<VxeGridProps<RowVO>>({
  showOverflow: true,
  showHeader: false,
  columns: [
    { field: 'col1', width: 100, className: 'first-field', align: 'center' },
    { field: 'col2', align: 'center' },
    { field: 'col3', align: 'center' },
    { field: 'col4', align: 'center' },
    { field: 'col5', align: 'center' },
    { field: 'col6', align: 'center' },
    { field: 'col7', align: 'center' },
  ],
  data: [
    { col1: '时间', col2: 'Test1', col3: 'Test2', col4: 'Test3', col5: 'Test4', col6: 'Test5', col7: 'Test6' },
    { col1: '天气', col2: 'Develop', col3: 'PM', col4: 'Designer', col5: 'Test', col6: 'Designer', col7: 'Develop' },
    { col1: '温度', col2: 'Man', col3: 'Women', col4: 'Man', col5: 'Women', col6: 'Man', col7: 'Women' },
    { col1: '降水量', col2: '28', col3: '18', col4: '22', col5: '30', col6: '26', col7: '34' },
    { col1: '风速', col2: 'Shenzhen', col3: 'Guangzhou', col4: 'Shanghai', col5: 'Shenzhen', col6: 'Shanghai', col7: 'Guangzhou' },
    { col1: '风向', col2: 'Shenzhen', col3: 'Guangzhou', col4: 'Shanghai', col5: 'Shenzhen', col6: 'Shanghai', col7: 'Guangzhou' },
    { col1: '气压', col2: 'Shenzhen', col3: 'Guangzhou', col4: 'Shanghai', col5: 'Shenzhen', col6: 'Shanghai', col7: 'Guangzhou' },
    { col1: '湿度', col2: 'Shenzhen', col3: 'Guangzhou', col4: 'Shanghai', col5: 'Shenzhen', col6: 'Shanghai', col7: 'Guangzhou' },
    { col1: '云量', col2: 'Shenzhen', col3: 'Guangzhou', col4: 'Shanghai', col5: 'Shenzhen', col6: 'Shanghai', col7: 'Guangzhou' },
  ]
})
</script>

<style lang="scss" scoped>
.weather-item {
  border-radius: 0 0 4px 4px;
}


</style>
