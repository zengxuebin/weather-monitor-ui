<template>
  <div>
    <MapEchart :options="mapOption" height="700px"></MapEchart>
  </div>
</template>

<script setup lang="ts">
import MapEchart from "@/components/echarts/index.vue"

const mapOption = {
  geo: {
    map: 'JiangXi',
    top: 0,
    bottom: 0,
    label: {
      show: true,
      color: '#549c8e',
    },
    itemStyle: {
      areaColor: '#e8f2f0',
      emphasis: {
        areaColor: '#e8f2f0',
        borderColor: '#cdcdcd',
      },
    },
  },
}
</script>

<style lang="scss" scoped>
#map_container {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
