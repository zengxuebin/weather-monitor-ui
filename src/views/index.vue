<template>
  <div>
    <button @click="test">ddd</button>
    <my-echarts :options="options" height="400px" width="100%"></my-echarts>
  </div>
</template>

<script setup lang="ts">
import MyEcharts from '@/components/echarts/index.vue'
import { reactive } from 'vue'

const options = reactive({
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '70%',
      data: [
        { value: 120, name: '金区' },
        { value: 735, name: '木区' },
        { value: 600, name: '水区' },
        { value: 484, name: '火区' },
        { value: 300, name: '土区' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})

const test = () => {
  console.log(options.series[0].data[0].value);
  options.series[0].data[0].value=500
  console.log(options.series[0].data[0].value);
  
  console.log('ddd');
  
}
</script>

<style lang="scss" scoped></style>
