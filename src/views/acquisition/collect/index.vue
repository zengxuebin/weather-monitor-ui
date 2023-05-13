<template>
  <div style="overflow: hidden; width: 100%; height: 100%;">
    <vxe-grid ref='xGrid' v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { VXETable, VxeGridInstance, VxeGridProps } from 'vxe-table'
import XEUtils from 'xe-utils'

const xGrid = ref<VxeGridInstance>()

const gridOptions = reactive<VxeGridProps>({
  border: true,
  // 行斑马色
  stripe: true,
  // 设置表头所有内容过长时显示为省略号
  showHeaderOverflow: true,
  // 设置所有内容过长时显示为省略号（如果是固定列建议设置该值，提升渲染速度）
  showOverflow: true,
  height: 'auto',
  // 导出配置项
  exportConfig: {},
  // 行配置信息
  rowConfig: {
    // 自定义行数据唯一主键的字段名（默认自动生成）
    keyField: 'dataId',
    // 当鼠标移到行时，是否要高亮当前行
    isHover: true
  },
  // 列配置信息
  columnConfig: {
    // 每一列是否启用列宽调整
    resizable: true
  },
  // 排序配置项
  sortConfig: {
    trigger: 'cell',
    // 所有列是否使用服务端筛选，如果设置为 true 则不会对数据进行处理
    remote: true
  },
  // 分页配置项
  pagerConfig: {
    pageSize: 10,
    pageSizes: [5, 10, 15, 20, 50, 100],
    layouts: [
      "PrevJump",
      "PrevPage",
      "JumpNumber",
      "NextPage",
      "NextJump",
      "Sizes",
      "FullJump",
      "Total",
    ], //自定义布布局
    // 带背景颜色
    background: true,
  },
  formConfig: {
    titleAlign: 'right',
    //是否显示标题冒号
    titleColon: true,
    // 标题内容过长时显示为省略号
    titleOverflow: true,
    items: [
      {
        field: 'name',
        title: '站点名称',
        span: 6,
        itemRender: {
          name: '$select',
          options: [],
          props: { placeholder: '请选择站点名称' },
        }
      },
      {
        field: 'windDirection',
        title: '风向',
        span: 6,
        itemRender: {
          name: '$select',
          options: [],
          props: { placeholder: '请选择风向' },
        }
      },
      {
        field: 'dataCollectDate',
        title: '采集时间',
        span: 6,
        itemRender: {
          name: '$input',
          props: {
            type: "date",
            placeholder: "选择时间",
            disabledMethod: disabledDate,
          },
        }
      },
      // 功能
      {
        span: 6,
        align: 'center',
        itemRender: {
          name: '$buttons', children: [
            {
              props: {
                type: 'submit',
                content: '查询',
                status: 'primary'
              }
            },
            {
              props: {
                type: 'reset',
                content: '重置'
              }
            }
          ]
        }
      }
    ]
  },
  toolbarConfig: {
    buttons: [
      {
        status: 'primary',
        name: '采集'
      },
      {
        status: 'primary',
        name: '编辑'
      },
      // 删除选中行；会自动触发 ajax.delete 方法
      {
        code: 'delete',
        status: 'primary',
        name: '删除'
      },
    ],
    refresh: true, // 显示刷新按钮
    export: true, // 显示导出按钮
    zoom: true, // 显示全屏按钮
    custom: true // 显示自定义列按钮
  },
  proxyConfig: {
    seq: true, // 启用动态序号代理，每一页的序号会根据当前页数变化
    sort: true, // 启用排序代理，当点击排序时会自动触发 query 行为
    filter: true, // 启用筛选代理，当点击筛选时会自动触发 query 行为
    form: true, // 启用表单代理，当点击表单提交按钮时会自动触发 reload 行为
    props: {
      // 对应响应结果 Promise<>
      result: 'records', // 配置响应结果列表字段
      total: 'total' // 配置响应结果总页数字段
    },
    // 接收 Promise API
    ajax: {
      // 当点击工具栏查询按钮或者手动提交指令 query或reload 时会被触发
      query: ({ page, sorts, filters, form }) => {
        return new Promise(resolve => {
          setTimeout(() => {
            const queryParams: any = Object.assign({}, form)
            // 处理排序条件
            const firstSort = sorts[0]
            if (firstSort) {
              queryParams.sort = firstSort.field
              queryParams.order = firstSort.order
            }
            // 处理筛选条件
            filters.forEach(({ field, values }) => {
              queryParams[field] = values.join(',')
            })
            // return Promise
            const list = [
              {
                id: 100, dataCollectTime: '2023-11-11 00:00:00', temperature: '38', humidity: 0.12, pressure: 840.4,
                windSpeed: 13, windDirection: '西南', precipitation: 102, clouds: 29, visibility: 7000, aqi: 72, pm25: 52,
                pm10: 76, no2: 12, o3: 43, co: 1
              },
              {
                id: 101, dataCollectTime: '2023-11-11 00:00:00', temperature: '38', humidity: 0.12, pressure: 840.4,
                windSpeed: 13, windDirection: '西南', precipitation: 102, clouds: 29, visibility: 7000, aqi: 72, pm25: 52,
                pm10: 76, no2: 12, o3: 43, co: 1
              },
              {
                id: 102, stationNo: '江西省南昌市景德镇站', dataCollectTime: '2023-11-11 00:00:00', temperature: '38', humidity: 0.12, pressure: 840.4,
                windSpeed: 13, windDirection: '西南', precipitation: 102, clouds: 29, visibility: 7000, aqi: 72, pm25: 52,
                pm10: 76, no2: 12, o3: 43, co: 1
              },
              {
                id: 103, dataCollectTime: '2023-11-11 00:00:00', temperature: '38', humidity: 0.12, pressure: 840.4,
                windSpeed: 13, windDirection: '西南', precipitation: 102, clouds: 29, visibility: 7000, aqi: 72, pm25: 52,
                pm10: 76, no2: 12, o3: 43, co: 1
              },
              {
                id: 104, dataCollectTime: '2023-11-11 00:00:00', temperature: '38', humidity: 0.12, pressure: 840.4,
                windSpeed: 13, windDirection: '西南', precipitation: 102, clouds: 29, visibility: 7000, aqi: 72, pm25: 52,
                pm10: 76, no2: 12, o3: 43, co: 1
              },
              {
                id: 105, dataCollectTime: '2023-11-11 00:00:00', temperature: '38', humidity: 0.12, pressure: 840.4,
                windSpeed: 13, windDirection: '西南', precipitation: 102, clouds: 29, visibility: 7000, aqi: 72, pm25: 52,
                pm10: 76, no2: 12, o3: 43, co: 1
              },
              {
                id: 106, dataCollectTime: '2023-11-11 00:00:00', temperature: '38', humidity: 0.12, pressure: 840.4,
                windSpeed: 13, windDirection: '西南', precipitation: 102, clouds: 29, visibility: 7000, aqi: 72, pm25: 52,
                pm10: 76, no2: 12, o3: 43, co: 1
              },
              {
                id: 107, dataCollectTime: '2023-11-11 00:00:00', temperature: '38', humidity: 0.12, pressure: 840.4,
                windSpeed: 13, windDirection: '西南', precipitation: 102, clouds: 29, visibility: 7000, aqi: 72, pm25: 52,
                pm10: 76, no2: 12, o3: 43, co: 1
              },
              {
                id: 108, dataCollectTime: '2023-11-11 00:00:00', temperature: '38', humidity: 0.12, pressure: 840.4,
                windSpeed: 13, windDirection: '西南', precipitation: 102, clouds: 29, visibility: 7000, aqi: 72, pm25: 52,
                pm10: 76, no2: 12, o3: 43, co: 1
              },
              {
                id: 109, dataCollectTime: '2023-11-11 00:00:00', temperature: '38', humidity: 0.12, pressure: 840.4,
                windSpeed: 13, windDirection: '西南', precipitation: 102, clouds: 29, visibility: 7000, aqi: 72, pm25: 52,
                pm10: 76, no2: 12, o3: 43, co: 1
              },
            ]
            resolve({
              records: list,
              total: page.pageSize * 20
            })
          }, 500)
        })
      },
      delete: ({ body }) => {
        return new Promise((resolve, reject) => {

        })
      },
    }
  },
  columns: [
    {
      type: 'checkbox',
      width: 60,
      align: "center",
      fixed: 'left'
    },
    {
      type: 'seq',
      title: '序号',
      align: "center",
      width: 60
    },
    {
      field: 'stationNo',
      title: '气象站点',
      align: "center",
      width: 180,
    },
    {
      field: 'dataCollectTime',
      title: '数据采集时间',
      align: "center",
      width: 180,
      sortable: true,
    },
    {
      field: 'temperature',
      title: '温度',
      align: "center",
      width: 100,
    },
    {
      field: 'humidity',
      title: '湿度',
      align: "center",
      width: 100,
    },
    {
      field: 'pressure',
      title: '气压',
      align: "center",
      width: 100,
    },
    {
      field: 'windSpeed',
      title: '风速',
      align: "center",
      width: 100,
    },
    {
      field: 'windDirection',
      title: '风向',
      align: "center",
      width: 100,
    },
    {
      field: 'precipitation',
      title: '降水量',
      align: "center",
      width: 100,
    },
    {
      field: 'clouds',
      title: '云量',
      align: "center",
      width: 100,
    },
    {
      field: 'visibility',
      title: '能见度',
      align: "center",
      width: 100,
    },
    {
      field: 'precipitation',
      title: '降水量',
      align: "center",
      width: 100,
    },
    {
      field: 'aqi',
      title: 'AQI',
      align: "center",
      width: 100,
    },
    {
      field: 'pm25',
      title: 'PM2.5',
      align: "center",
      width: 100,
    },
    {
      field: 'pm10',
      title: 'PM10',
      align: "center",
      width: 100,
    },
    {
      field: 'no2',
      title: 'NO2',
      align: "center",
      width: 100,
    },
    {
      field: 'o3',
      title: 'O3',
      align: "center",
      width: 100,
    },
    {
      field: 'co',
      title: 'CO',
      align: "center",
      width: 100,
    },
  ],
  checkboxConfig: {
    reserve: true,
    highlight: true,
    range: true
  },
})



onMounted(() => {
  const sexList = [
    { label: '东北风', value: '东北风' },
    { label: '东风', value: '东风' },
    { label: '东南风', value: '东南风' },
    { label: '南风', value: '南风' },
    { label: '西南风', value: '西南风' },
    { label: '西风', value: '西风' },
    { label: '西北风', value: '西北风' },
    { label: '北风', value: '北风' },
  ]
  const { formConfig } = gridOptions

  if (formConfig && formConfig.items) {
    const sexItem = formConfig.items[1]
    if (sexItem && sexItem.itemRender) {
      sexItem.itemRender.options = sexList
    }
  }

})

function disabledDate({ date }: any) {
  return date.getTime() > new Date().getTime()
}
</script>

<style lang="scss" scoped></style>
