<template>
  <div class='echart' ref="chartRef" :style="{ width: width, height: height }"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
import customTheme from './custom-theme.json'

const chartRef = ref<HTMLElement>()
const myChart = ref();
const props = defineProps({
  options: {
    type: Object,
    default: {},
    required: true,
  },
  height: {
    type: String,
    default: '100%'
  },
  width: {
    type: String,
    default: '100%'
  },
})

echarts.registerTheme('customTheme', customTheme)
const resizeChart = () => {
  try {
    myChart.value.resize();
  } catch (error) {
    console.error('Resize chart error:', error);
  }
}

onMounted(() => {
  const chartDom = chartRef.value
  if (chartDom) {
    myChart.value = echarts.init(chartDom, customTheme)
  }
  myChart.value.setOption(props.options, true)
  myChart.value.off('resize') // 先解绑 resize 事件
  myChart.value.on('resize', resizeChart) // 重新绑定 resize 事件
  window.addEventListener('resize', resizeChart)
})
watch(() => props.options, (newOptions) => {
  myChart.value.setOption(newOptions)
}, {
  deep: true
})
</script>

<style lang="scss" scoped></style>
