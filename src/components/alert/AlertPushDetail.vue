<template>
  <div>
    <el-card :body-style="{ padding: '0px' }" style="margin-bottom: 20px; border: #00796a 1px solid;">
      <div style="padding:0 20px">
        <el-row :gutter="20">
          <el-col :span="12">
            <div style="display: flex; align-items: center;">
              <el-icon size="32" color="#00796a">
                <List />
              </el-icon>
              <span class="alert-time">推送时间：2023-05-01 00:00:00</span>
            </div>
          </el-col>
          <el-col :span="6" :offset="6" style="line-height: 32px;">
            <div class="alert-status">
              <span style="padding-right: 3px; color: #00796a;">●</span>已推送
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="50">
          <el-col :span="24">
            <div class="main-container">
              <el-row :gutter="50" class="detail">
                <el-col :span="6">
                  <span>
                    预警标题：
                  </span>
                  雷电黄色预警
                </el-col>
                <el-col :span="6">
                  <span>
                    预警单位：
                  </span>
                  国家气象预警中心
                </el-col>
                <el-col :span="4">
                  <span>
                    预警类型：
                  </span>
                  雷电
                </el-col>
                <el-col :span="4">
                  <span>
                    预警级别：
                  </span>
                  黄色
                </el-col>
                <el-col :span="6">
                  <span>
                    影响区域：
                  </span>
                  九江、南昌、宜春等
                </el-col>
                <el-col :span="7">
                  <span>
                    预警开始时间：
                  </span>
                  2023-05-01 00:00:00
                </el-col>
                <el-col :span="7">
                  <span>
                    预警结束时间：
                  </span>
                  2023-05-01 00:00:00
                </el-col>
                <el-col :span="7">
                  <span>
                    预警发布时间：
                  </span>
                  2023-05-01 00:00:00
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="24" style="text-indent: 2em">
                  赣州市气象台2023年05月06日13时50分发布暴雨黄色预警信号：过去3小时内我市南康区、崇义县、大余县的部分乡镇已出现50毫米以上的降水，预计未来6小时内，章贡区、经开区、蓉江新区、赣县区、南康区、上犹县、大余县、信丰县、崇义县、于都县的部分地区降水可达50毫米以上，局地伴有短时强降水、雷电等强对流天气，请注意防范强降雨可能引发的城乡内涝、中小河流洪水、山洪和地质灾害。
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="bottom">
        <span style="cursor: pointer;" @click="handleAlertDetails(alertId)">
          <el-icon>
            <HelpFilled />
          </el-icon>
          查看详情
        </span>
      </div>
    </el-card>
      <el-drawer v-model="detailDrawer" size="60%" :show-close="false" style="position: absolute">
        <template #header>
          <span class="detail-title">
            <el-icon>
              <HelpFilled />
            </el-icon>
            查看详情
          </span>
        </template>
        <template #default>
          <el-container style="height: 100%; overflow: hidden;">
            <el-main style="padding: 0;">
              <div class="sub-title">关联预警规则</div>
              <div class="detail-main">正文部分</div>
              <div class="sub-title">关联预警规则</div>
              <div class="detail-main">正文部分</div>
              <div class="sub-title">关联预警规则</div>
              <div class="detail-main">正文部分</div>
              <div class="sub-title">关联预警规则</div>
              <div class="detail-main">正文部分</div>
              <div class="sub-title">关联预警规则</div>
              <div class="detail-main">正文部分</div>
              <div class="sub-title">关联预警规则</div>
              <div class="detail-main">正文部分</div>
              <div class="sub-title">关联预警规则</div>
              <div class="detail-main">正文部分</div>
              <div class="sub-title">关联预警规则</div>
              <div class="detail-main">正文部分</div>
              <div class="sub-title">关联预警规则</div>
              <div class="detail-main">正文部分</div>
              <div class="sub-title">关联预警规则</div>
              <div class="detail-main">正文部分</div>
            </el-main>
            <el-aside width="200px"><el-timeline>
                <el-timeline-item v-for="(activity, index) in activities" :key="index" :color="activity.color"
                  size="large" :timestamp="activity.timestamp">
                  {{ activity.content }}
                  <div v-if="activities.length > 0">
                    <slot name="solt" v-if="activity.content === 'test'">
                      <span>审批不通过</span>
                    </slot>
                  </div>
                </el-timeline-item>
              </el-timeline></el-aside>
          </el-container>

        </template>
      </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const alertId = ref()
const detailDrawer = ref(false)

const handleAlertDetails = (id: any) => {
  detailDrawer.value = true
}

const activities = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46:00',
    color: '#00796a',
  },
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46:00',
    color: '#00796a',
  },
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46:00',
  },
  {
    content: 'test',
    timestamp: '2018-04-12 20:46:00',
  },
]
</script>

<style lang="scss" scoped>
.bottom {
  border-top: 1px solid #333;
  padding: 7px 0;
  text-align: center;
}

.alert-time {
  padding-left: 5px;
  font-weight: bold;
  font-size: 16px;
}

.alert-status {
  background: repeating-linear-gradient(to right, #408b7f, #fff);
  border-radius: 20px 0 0 20px;
  float: right;
  width: 85px;
  text-align: right;
  color: #00796a;
}

.el-row {
  margin: 10px 0;
}

.main-container {
  background-color: #c9d9d6;
  border-radius: 5px;
  padding: 10px;
}

.detail .el-col {
  margin: 5px 0;
  border-right: 2px solid #333;

  & span {
    font-weight: bold;
  }
}

.detail-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
}

.sub-title {
  border-left: #00796a solid 5px;
  padding: 5px;
  background-color: #c9d9d6;
  font-size: 16px;
  margin-bottom: 10px;
}

.detail-main {
  margin-bottom: 20px;
}
</style>
