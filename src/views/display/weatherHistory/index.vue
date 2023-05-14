<template>
  <div>

    <el-row style="margin: 10px 0;">
      <el-col :span="7" style="padding-top: 8px;">
        <span style="font-weight: bold;">当前所在地：</span> 江西省 南昌市
        <el-popover placement="bottom" :width="400" trigger="click">
          <template #reference>
            <a @click="">[切换]</a>
          </template>
          ddd
        </el-popover>
      </el-col>
      <el-col :span="6">
        <el-date-picker v-model="value" type="daterange" start-placeholder="检索开始时间" end-placeholder="检索结束时间" unlink-panels
          :shortcuts="shortcuts" :disabled-date="disabledDate" />
      </el-col>
    </el-row>
    <el-card class="today-card">
      <template #header>
        <div>
          <span>历史天气（数据库天气数据始于2023-01-01）</span>
        </div>
      </template>
      <el-row :gutter="16" style="text-align: center;">
        <el-col :span="4" class="statistic-card">
          <el-statistic :value="98500" value-style="color: #ff501b" :formatter="tempFormat">
            <template #title>
              <div style="display: inline-flex; align-items: center; font-size: 14px;">
                最高温度
                <el-tooltip effect="dark" content="给定时间内的最高温度" placement="top">
                  <el-icon style="margin-left: 4px" :size="12">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
        </el-col>
        <el-col :span="4" class="statistic-card">
          <el-statistic :value="98500" value-style="color: #3097fd" :formatter="tempFormat">
            <template #title>
              <div style="display: inline-flex; align-items: center; font-size: 14px;">
                最低温度
                <el-tooltip effect="dark" content="给定时间内的最低温度" placement="top">
                  <el-icon style="margin-left: 4px" :size="12">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
        </el-col>
        <el-col :span="4" class="statistic-card">
          <el-statistic :value="900" :formatter="precFormat">
            <template #title>
              <div style="display: inline-flex; align-items: center; font-size: 14px;">
                总降水量
                <el-tooltip effect="dark" content="给定时间内的总降水量" placement="top">
                  <el-icon style="margin-left: 4px" :size="12">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
        </el-col>
        <el-col :span="4" class="statistic-card">
          <el-statistic :value="90" :formatter="precFormat">
            <template #title>
              <div style="display: inline-flex; align-items: center; font-size: 14px;">
                日最大降水量
                <el-tooltip effect="dark" content="给定时间内日最大降水量" placement="top">
                  <el-icon style="margin-left: 4px" :size="12">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
        </el-col>
        <el-col :span="4" class="statistic-card">
          <el-statistic :value="maxVisible" value-style="color: #23cc72">
            <template #title>
              <div style="display: inline-flex; align-items: center; font-size: 14px;">
                能见度最高
                <el-tooltip effect="dark" content="给定时间内的能见度最高的指数" placement="top">
                  <el-icon style="margin-left: 4px" :size="12">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
        </el-col>
        <el-col :span="4" class="statistic-card">
          <el-statistic :value="maxWindspeed" value-style="color: #f6bd0e">
            <template #title>
              <div style="display: inline-flex; align-items: center; font-size: 14px;">
                风速最大
                <el-tooltip effect="dark" content="给定时间内的空气最差的指数" placement="top">
                  <el-icon style="margin-left: 4px" :size="12">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px;">
        <el-col>
          <TempEchart :options="tempOptions" height="200px"></TempEchart>
        </el-col>
        <el-col style="margin-top: 10px;">
          <vxe-table size="small" border max-height="250" :row-config="{ isHover: true }" :data="tableData">
            <vxe-column type="seq" width="60"></vxe-column>
            <vxe-column field="name" title="Name" sortable></vxe-column>
            <vxe-column field="sex" title="Sex" align="center"></vxe-column>
            <vxe-column field="age" title="Age"></vxe-column>
            <vxe-column field="address" title="Address" show-overflow></vxe-column>
          </vxe-table>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TempEchart from "@/components/echarts/index.vue"

const tableData = [
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
]

const value = ref<[Date, Date]>([
  new Date(new Date().getTime() - 16 * 24 * 60 * 60 * 1000),
  new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
])

const maxVisible = '19.6'
const maxWindspeed = '18.9'

const disabledDate = (date: Date) => {
  return date.getTime() > new Date().getTime()
}

const tempFormat = (value: number) => {
  return value + '℃'
}

const precFormat = (value: number) => {
  return value + 'mm'
}

const shortcuts = [
  {
    text: '最近7天',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '最近15天',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '最近30天',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
]

const tempOptions = {
  title: {
    text: '温度瀑布图',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    splitLine: { show: false },
    data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other',
      'Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Placeholder',
      type: 'bar',
      stack: 'Total',
      itemStyle: {
        borderColor: 'transparent',
        color: 'transparent'
      },
      data: [0, 1700, 1400, 1200, 300, 0, 0, 1700, 1400, 1200, 300, 0]
    },
    {
      name: 'Life Cost',
      type: 'bar',
      stack: 'Total',
      data: [2900, 1200, 300, 200, 900, 300, 2900, 1200, 300, 200, 900, 300]
    }
  ]
}
</script>

<style lang="scss" scoped>
.right-icon {
  padding: 10px;
  position: relative;
  top: 5px;
  color: gray;
}

.el-dropdown-link {
  position: relative;
  top: 15px;
  margin-right: 10px;
  cursor: pointer;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
  box-shadow: 0 .125rem .125rem -.125rem rgba(31, 27, 45, .08), 0 .25rem .75rem rgba(31, 27, 45, .08) !important;
}
</style>
