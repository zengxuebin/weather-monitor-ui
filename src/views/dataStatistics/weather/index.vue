<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="9">
        <el-card class="today-card">
          <template #header>
            <div>
              <span>城市所占气象站点数量统计</span>
            </div>
          </template>
          <StationEchart :options="StationOption" height="250px"></StationEchart>
        </el-card>
      </el-col>
      <el-col :span="6" style="border: 1px solid;">
        <MapEchart :options="mapOption" height="340px"></MapEchart>
      </el-col>
      <el-col :span="9">
        <el-card class="today-card">
          <template #header>
            <div>
              <span>气象站点类型统计</span>
            </div>
          </template>
          <StationEchart :options="typeOption" height="250px"></StationEchart>
        </el-card>
      </el-col>
    </el-row>
    <el-card class="today-card" style="margin-top: 22px;">
      <template #header>
        <div>
          <span>天气统计</span>
          <span style="float: right;">江西省南昌市</span>
        </div>
      </template>
      <div class="progress">
        <el-progress type="circle" :percentage="3" color="#00796a">
          <el-row>
            <el-col>
              <el-text>雪</el-text>
            </el-col>
            <el-col style="margin-top: 5px;">
              <el-text>1天</el-text>
            </el-col>
          </el-row>
        </el-progress>
        <el-progress type="circle" :percentage="3" color="#00796a">
          <el-row>
            <el-col>
              <el-text>雪</el-text>
            </el-col>
            <el-col style="margin-top: 5px;">
              <el-text>1天</el-text>
            </el-col>
          </el-row>
        </el-progress>
        <el-progress type="circle" :percentage="3" color="#00796a">
          <el-row>
            <el-col>
              <el-text>雪</el-text>
            </el-col>
            <el-col style="margin-top: 5px;">
              <el-text>1天</el-text>
            </el-col>
          </el-row>
        </el-progress>
        <el-progress type="circle" :percentage="3" color="#00796a">
          <el-row>
            <el-col>
              <el-text>雪</el-text>
            </el-col>
            <el-col style="margin-top: 5px;">
              <el-text>1天</el-text>
            </el-col>
          </el-row>
        </el-progress>
        <el-progress type="circle" :percentage="3" color="#00796a">
          <el-row>
            <el-col>
              <el-text>雪</el-text>
            </el-col>
            <el-col style="margin-top: 5px;">
              <el-text>1天</el-text>
            </el-col>
          </el-row>
        </el-progress>
        <el-progress type="circle" :percentage="3" color="#00796a">
          <el-row>
            <el-col>
              <el-text>雪</el-text>
            </el-col>
            <el-col style="margin-top: 5px;">
              <el-text>1天</el-text>
            </el-col>
          </el-row>
        </el-progress>
        <el-progress type="circle" :percentage="3" color="#00796a">
          <el-row>
            <el-col>
              <el-text>雪</el-text>
            </el-col>
            <el-col style="margin-top: 5px;">
              <el-text>1天</el-text>
            </el-col>
          </el-row>
        </el-progress>
      </div>
      <el-descriptions :column="3" border :title="dateRange">
        <el-descriptions-item class="descriptions">
          <template #label>
            <div class="cell-item">
              <el-icon>
                <Location />
              </el-icon>
              所在地点
            </div>
          </template>
          江西省南昌市
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon>
                <Calendar />
              </el-icon>
              今日日期
            </div>
          </template>
          2023-05-01 00:00:00
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon>
                <MostlyCloudy />
              </el-icon>
              天气现象
            </div>
          </template>
          多云<i class="vxe-icon-cloudy"></i>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon>
                <Odometer />
              </el-icon>
              平均温度
            </div>
          </template>
          23.75°C
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon>
                <Odometer />
              </el-icon>
              平均温度
            </div>
          </template>
          23.75°C
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon>
                <Odometer />
              </el-icon>
              平均温度
            </div>
          </template>
          23.75°C
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import MapEchart from "@/components/echarts/index.vue"
import StationEchart from "@/components/echarts/index.vue"
import XEUtils from 'xe-utils'
import { onMounted, ref } from "vue"
const dateRange = '数据自2023-01-01至' + XEUtils.toDateString(new Date(), 'yyyy-MM-dd')

const nowCity = ref('南昌市')

const mapOption = {
  geo: {
    map: 'JiangXi',
    selectedMode: 'single',
    itemStyle: {
      areaColor: '#e8f2f0',
      color: '#fff',
    },
    select: {
      itemStyle: {
        areaColor: '#00796a',
        color: '#fff',
      },
    },
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    regions: [{
      name: nowCity.value,
      selected: true
    }]
  },
}

const StationOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: '0',
    left: '0',
    right: '3%',
    bottom: '0',
    containLabel: true
  },
  xAxis: {
    type: 'value',
  },
  yAxis: {
    type: 'category',
    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World', 'Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
  },
  series: [
    {
      name: '2011',
      type: 'bar',
      data: [123, 132, 13, 243, 154, 190, 123, 132, 13, 243, 154, 190]
    },
  ]
}

const typeOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
      ],
    }
  ]
}

</script>

<style lang="scss" scoped>
.progress {
  text-align: center;
  margin-bottom: 10px;

  & .el-progress--circle {
    margin-right: 30px;
  }
}
</style>
