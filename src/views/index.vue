<template>
  <div>
    <el-row :gutter="16">
      <el-col :span="6">
        <div class="statistic-card">
          <el-statistic :value="12">
            <template #title>
              <div style="display: inline-flex; align-items: center; font-size: 14px;">
                今日活跃用户数量
                <el-tooltip effect="dark" content="系统中今日登录过的用户数量" placement="top">
                  <el-icon style="margin-left: 4px" :size="14">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item">
              <span>比昨日新增</span>
              <span class="green">
                5
                <el-icon>
                  <CaretTop />
                </el-icon>
              </span>
              人
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="statistic-card">
          <el-statistic :value="123456">
            <template #title>
              <div style="display: inline-flex; align-items: center; font-size: 14px;">
                累计预警条数
                <el-tooltip effect="dark" content="从2023年1月1日至今系统推送的预警信息数量" placement="top">
                  <el-icon style="margin-left: 4px" :size="14">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item">
              <span>比昨日下降</span>
              <span class="red">
                56
                <el-icon>
                  <CaretBottom />
                </el-icon>
              </span>
              条
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="statistic-card">
          <el-statistic :value="123456">
            <template #title>
              <div style="display: inline-flex; align-items: center; font-size: 14px;">
                累计气象站点
                <el-tooltip effect="dark" content="从2023年1月1日至今系统存在的所有气象站点" placement="top">
                  <el-icon style="margin-left: 4px" :size="14">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item">
              <span>比昨日新增</span>
              <span class="red">
                12%
                <el-icon>
                  <CaretBottom />
                </el-icon>
              </span>
              个
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="statistic-card">
          <el-statistic :value="14562">
            <template #title>
              <div style="display: inline-flex; align-items: center; font-size: 14px;">
                累计气象数据总数
                <el-tooltip effect="dark" content="从2023年1月1日至今气象站点采集的所有气象数据总和" placement="top">
                  <el-icon style="margin-left: 4px" :size="14">
                    <Warning />
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item">
              <span>比昨日新增</span>
              <span class="red">
                123
                <el-icon>
                  <CaretBottom />
                </el-icon>
              </span>
              条
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="today-weather" justify="space-between">
      <el-col :span="8">
        <el-card class="today-card">
          <template #header>
            <div>
              <span>今日天气速递</span>
            </div>
          </template>
          <el-descriptions :column="1" border>
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
                  <el-icon><Calendar /></el-icon>
                  今日日期
                </div>
              </template>
              2023-05-01 00:00:00
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon><MostlyCloudy /></el-icon>
                  天气现象
                </div>
              </template>
              多云<i class="vxe-icon-cloudy"></i>
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon><Odometer /></el-icon>
                  平均温度
                </div>
              </template>
              23.75°C
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon><Compass /></el-icon>
                  平均气压
                </div>
              </template>
              83991.87
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon><ToiletPaper /></el-icon>
                  相对湿度
                </div>
              </template>
              0.09%
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon><WindPower /></el-icon>
                  风速风向
                </div>
              </template>
              21.61 东南
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon><Pouring /></el-icon>
                  降水数据
                </div>
              </template>
              0
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <i class="vxe-icon-eye-fill"></i>
                  平均能见度
                </div>
              </template>
              25
            </el-descriptions-item>
          </el-descriptions>
        </el-card></el-col>
      <el-col :span="15">
        <el-card class="today-card" style="height: 99%;">
          <template #header>
            <div>
              <span>今日温度变化曲线图</span>
            </div>
          </template>
          <WeatherEcharts :options="options" height="320px"></WeatherEcharts>
        </el-card></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import WeatherEcharts from '@/components/echarts/index.vue'

const options = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C'
    }
  },
  series: [
    {
      name: 'Highest',
      type: 'line',
      data: [36, 11, 28, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
  ]
};
</script>

<style lang="scss" scoped>
.el-statistic {
  --el-statistic-content-font-size: 30px;
}

.statistic-card {
  border: 1px solid #34776a;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}

.red {
  color: var(--el-color-error);
}

.item {
  margin-bottom: 10px;
}

.today-weather {
  margin-top: 30px;
  overflow: hidden;
  position: relative;
}

.descriptions {
  background-color: red;
}
</style>
