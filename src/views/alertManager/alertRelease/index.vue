<template>
  <div style="overflow: hidden; width: 100%; height: 100%;">
    <vxe-grid ref='xGrid' v-bind="gridOptions" v-on="gridEvent">
      <template #alertStatus="{ row }">
        <el-tag size='large' type="warning">待发布</el-tag>
      </template>
    </vxe-grid>
    <el-dialog v-model="dialogVisible" title="预警详情" width="50%" align-center>
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <span class="titleClass">预警详情</span>
        </div>
      </template>
      <el-row :gutter="20" style="margin-bottom: 10px;">
        <el-col :span="16">
          <span class="title">高温橙色预警</span>
        </el-col>
        <el-col :span="8" style="text-align: right;">
          2023-01-01 00:00:00
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="main">
          你好在干嘛呢你好在干嘛呢你好在干嘛呢你好在干嘛呢你好在干嘛呢你好你好在干嘛呢你好在干嘛呢你好在干嘛呢在干嘛呢你好在干嘛呢你好在干嘛呢你好在干嘛呢你好在干嘛呢你好在干嘛呢你好在干嘛呢你好在干嘛呢你好在干嘛呢你好在干嘛呢
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { VXETable, VxeGridInstance, VxeGridListeners, VxeGridProps } from 'vxe-table'
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
    keyField: 'alertId',
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
        field: 'alertTitle',
        title: '预警标题',
        span: 6,
        itemRender: {
          name: '$input',
          props: {
            placeholder: '请输入预警信息标题'
          }
        }
      },
      {
        field: 'alertType',
        title: '预警类型',
        span: 6,
        itemRender: {
          name: '$select',
          options: [],
          props: {
            placeholder: '请选择预警类型'
          }
        }
      },
      {
        field: 'alertStatus',
        title: '预警状态',
        span: 6,
        itemRender: {
          name: '$select',
          options: [
            { label: '待发布', value: '0' }
          ],
          props: {
            placeholder: '请选择预警状态',
          },
          defaultValue: '0'
        }
      },
      {
        field: 'alertLevel',
        title: '预警级别',
        span: 6,
        folding: true,
        itemRender: {
          name: '$select',
          options: [
            { label: '白色', value: 'level_01' },
            { label: '蓝色', value: 'level_02' },
            { label: '黄色', value: 'level_03' },
            { label: '橙色', value: 'level_04' },
            { label: '红色', value: 'level_05' },
          ],
          props: {
            placeholder: '请选择预警状态',
          },
        }
      },
      {
        field: 'alertLevel',
        title: '预警规则',
        span: 6,
        folding: true,
        itemRender: {
          name: '$select',
          options: [
            { label: '台风', value: 'type_01' },
            { label: '暴雨', value: 'type_02' },
            { label: '暴雪', value: 'type_03' },
            { label: '寒潮', value: 'type_04' },
            { label: '大风', value: 'type_05' },
            { label: '沙尘暴', value: 'type_06' },
            { label: '高温', value: 'type_07' },
            { label: '干旱', value: 'type_08' },
            { label: '雷电', value: 'type_09' },
            { label: '冰雹', value: 'type_10' },
            { label: '霜冻', value: 'type_11' },
            { label: '大雾', value: 'type_12' },
            { label: '霾', value: 'type_13' },
            { label: '雷雨大风', value: 'type_14' },
            { label: '空气重污染', value: 'type_15' },
          ],
          props: {
            placeholder: '请选择预警状态',
          },
        }
      },
      {
        field: 'alertSource',
        title: '预警来源',
        span: 6,
        folding: true,
        itemRender: {
          name: '$select',
          options: [
            { label: '国家预警信息发布中心', value: '国家预警信息发布中心' }
          ],
          props: {
            placeholder: '请选择预警来源',
          },
          defaultValue: '国家预警信息发布中心'
        }
      },
      {
        field: 'alertArea',
        title: '影响区域',
        span: 6,
        folding: true,
        itemRender: {
          name: '$select',
          options: [
            { label: '', value: '' }
          ],
          props: {
            placeholder: '请选择影响区域',
          },
        }
      },
      // 功能
      {
        span: 6,
        align: 'center',
        collapseNode: true,
        itemRender: {
          name: '$buttons', children: [
            {
              props: {
                type: 'submit',
                content: '查询',
                status: 'primary',
                icon: 'vxe-icon-search',
              }
            },
            {
              props: {
                type: 'reset',
                content: '重置',
                icon: 'vxe-icon-repeat'
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
        name: '发布',
        icon: 'vxe-icon-send'
      },
      {
        status: 'warning',
        name: '忽略',
        icon: 'vxe-icon-undo'
      },
      {
        status: 'primary',
        name: '编辑',
        icon: 'vxe-icon-edit'
      },
      // 删除选中行；会自动触发 ajax.delete 方法
      {
        code: 'delete',
        status: 'danger',
        name: '删除',
        icon: 'vxe-icon-delete'
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
                alertId: 10001, alertTitle: '高温橙色预警', triggerValue: '41.2', alertType: '天气预警',
                alertDesc: 'test', alertRuleId: '12', alertLevel: '橙色', alertAreaId: '南昌',
                triggerTime: '2022-01-01 00:00:00', startTime: '2022-01-01 00:00:00',
                endTime: '2022-01-01 00:00:00', alertStatus: '0', alertSource: '国家预警信息发布中心',
              },
              {
                alertId: 10002, alertTitle: '高温橙色预警', triggerValue: '41.2', alertType: '天气预警',
                alertDesc: 'test', alertRuleId: '12', alertLevel: '橙色', alertAreaId: '南昌',
                triggerTime: '2022-01-01 00:00:00', startTime: '2022-01-01 00:00:00',
                endTime: '2022-01-01 00:00:00', alertStatus: '0', alertSource: '国家预警信息发布中心',
              },
              {
                alertId: 10003, alertTitle: '高温橙色预警', triggerValue: '41.2', alertType: '天气预警',
                alertDesc: 'test', alertRuleId: '12', alertLevel: '橙色', alertAreaId: '南昌',
                triggerTime: '2022-01-01 00:00:00', startTime: '2022-01-01 00:00:00',
                endTime: '2022-01-01 00:00:00', alertStatus: '0', alertSource: '国家预警信息发布中心',
              },
              {
                alertId: 10004, alertTitle: '高温橙色预警', triggerValue: '41.2', alertType: '天气预警',
                alertDesc: 'test', alertRuleId: '12', alertLevel: '橙色', alertAreaId: '南昌',
                triggerTime: '2022-01-01 00:00:00', startTime: '2022-01-01 00:00:00',
                endTime: '2022-01-01 00:00:00', alertStatus: '0', alertSource: '国家预警信息发布中心',
              },
              {
                alertId: 10005, alertTitle: '高温橙色预警', triggerValue: '41.2', alertType: '天气预警',
                alertDesc: 'test', alertRuleId: '12', alertLevel: '橙色', alertAreaId: '南昌',
                triggerTime: '2022-01-01 00:00:00', startTime: '2022-01-01 00:00:00',
                endTime: '2022-01-01 00:00:00', alertStatus: '0', alertSource: '国家预警信息发布中心',
              },
              {
                alertId: 1006, alertTitle: '高温橙色预警', triggerValue: '41.2', alertType: '天气预警',
                alertDesc: 'test', alertRuleId: '12', alertLevel: '橙色', alertAreaId: '南昌',
                triggerTime: '2022-01-01 00:00:00', startTime: '2022-01-01 00:00:00',
                endTime: '2022-01-01 00:00:00', alertStatus: '0', alertSource: '国家预警信息发布中心',
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
      title: '序号',
      type: 'seq',
      align: "center",
      width: 60
    },
    {
      field: 'alertTitle',
      title: '预警信息标题',
      align: "center",
      width: 150,
      className: 'cell-click',
    },
    {
      field: 'alertRuleId',
      title: '关联预警规则',
      align: "center",
      width: 150,
      className: 'cell-click'
    },
    {
      field: 'triggerValue',
      title: '触发预警监测值',
      align: "center",
      width: 150,
    },
    {
      field: 'alertStatus',
      title: '预警状态',
      align: "center",
      width: 120,
      slots: {
        default: 'alertStatus',
      },
    },
    {
      field: 'alertType',
      title: '预警类型',
      align: "center",
      width: 120,
    },
    {
      field: 'alertLevel',
      title: '预警级别',
      align: "center",
      width: 120,
    },
    {
      field: 'alertAreaId',
      title: '影响区域',
      align: "center",
      width: 120,
    },
    {
      field: 'alertSource',
      title: '预警来源',
      align: "center",
      width: 180,
    },
    {
      field: 'triggerTime',
      title: '预警触发时间',
      align: "center",
      width: 180,
    },
    {
      field: 'startTime',
      title: '预警开始时间',
      align: "center",
      width: 180,
    },
    {
      field: 'endTime',
      title: '预警结束时间',
      align: "center",
      width: 180,
    },
  ],
  checkboxConfig: {
    reserve: true,
    highlight: true,
    range: true
  },
})

const dialogVisible = ref(false)

const gridEvent: VxeGridListeners = {
  cellClick({ row, column }) {
    console.log(row)
    console.log(column)
    if (column.field === 'alertTitle') {
      dialogVisible.value = true
      console.log(dialogVisible.value);

    }
  },
}

onMounted(() => {
  const typeList = [
    { label: '天气预警', value: '天气预警' },
    { label: '环境预警', value: '环境预警' },
  ]
  const { formConfig } = gridOptions

  if (formConfig && formConfig.items) {
    const sexItem = formConfig.items[1]
    if (sexItem && sexItem.itemRender) {
      sexItem.itemRender.options = typeList
    }
  }
})
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  padding: 10px 0;
  color: #000;
}

.titleClass {
  font-size: 30px;
  font-weight: lighter;
  color: #000;
}

.main {
  line-height: 25px;
  text-indent: 2em;
  font-size: 16px;
}
</style>
