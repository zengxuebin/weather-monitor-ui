<template>
  <div>
    <el-row>
      <el-col :span="24" class="today-weather">
        <TodayWeather></TodayWeather>
      </el-col>
    </el-row>
    <el-row justify="space-between">
      <el-col :span="12" style="margin-top: 20px; padding-right: 10px;">
        <el-card class="today-card">
          <template #header>
            <div>
              <span>实时降水预报</span>
            </div>
          </template>
          <TodayEcharts :options="options" height="300px"></TodayEcharts>
        </el-card>
      </el-col>
      <el-col :span="12" style="margin-top: 20px; padding-left: 10px">
        <el-card class="today-card">
          <template #header>
            <div>
              <span>实时空气质量</span>
            </div>
          </template>
          <AirQuality></AirQuality>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import TodayWeather from "@/components/weather/TodayWeather.vue"
import TodayEcharts from "@/components/echarts/index.vue"
import AirQuality from "@/components/weather/AirQuality.vue"
import { getStationByCity } from "@/api/weatherStation"

getStationByCity('赣州市').then(res => {
  console.log(res);
})

const options = {
  title: {
    text: '未来三小时内不会下雨 您可以放心出门',
    subtext: '2023-05-01 00:00:00',
    itemGap: 250,
    left: "center",
    subtextStyle: {
      fontSize: 15,
    }
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    left: 'left'
  },
  xAxis: {
    name: '时间',
    type: 'category',
    boundaryGap: false,
    data: ['现在', '30分钟', '60分钟', '90分钟', '120分钟', '150分钟', '180分钟'
    ],
  },
  yAxis: [
    {
      name: '降水量',
      type: 'value',
      max: 100,
    },
  ],
  series: [
    {
      name: '降水量',
      type: 'line',
      data: [0, 0, 0, 0, 0, 0, 0],
      areaStyle: {},
      showSymbol: false,
    },
  ]
}
</script>

<style lang="scss" scoped>
.today-weather {
  background: url(@/assets/images/weather_bg.jpg);
  height: 300px;
  color: #fff;
  padding: 20px 40px;
  border-radius: 5px;
}
</style>
