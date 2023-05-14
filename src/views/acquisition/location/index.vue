<template>
  <div>
    <MapEchart :options="mapOption" height="700px"></MapEchart>
  </div>
</template>

<script setup lang="ts">
import MapEchart from "@/components/echarts/index.vue"
import { getAllStation } from "@/api/weatherStation";
import { ref } from "vue";

let geoCoordMap = ref<any[]>([]);

getAllStation().then(res => {
  const data = res.data
  data.forEach((item: any) => {
    geoCoordMap.value.push({
      name: item.stationName,
      value: [
        item.stationLatitude,
        item.stationLongitude,
        item.stationType,
      ]
    })
  })
})

const mapOption = ref({
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
    },
    emphasis: {
      itemStyle: {
        areaColor: '#e8f2f0',
        borderColor: '#cdcdcd',
      }
    },
  },

  tooltip: {
    trigger: 'item'
  },
  bmap: {
  },
  series: [
    {
      name: 'pm2.5',
      type: 'scatter',
      coordinateSystem: 'bmap',
      data: geoCoordMap.value,
    },
  ]
})
</script>

<style lang="scss" scoped>
#map_container {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
