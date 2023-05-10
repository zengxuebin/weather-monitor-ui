<template>
  <div>
    <el-row>
      <el-col :span="18" class="weather-location">
        <el-icon>
          <LocationFilled />
        </el-icon>
        <div class="location-item">江西省</div>
        <div class="location-item">
          <el-dropdown trigger="click" @command="handleCity">
            <span class="el-dropdown-link">
              南昌市<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="Action 1">Action 1</el-dropdown-item>
                <el-dropdown-item command="Action 2">Action 2</el-dropdown-item>
                <el-dropdown-item command="Action 3">Action 3</el-dropdown-item>
                <el-dropdown-item command="Action 4">Action 4</el-dropdown-item>
                <el-dropdown-item command="Action 1">Action 1</el-dropdown-item>
                <el-dropdown-item command="Action 2">Action 2</el-dropdown-item>
                <el-dropdown-item command="Action 3">Action 3</el-dropdown-item>
                <el-dropdown-item command="Action 4">Action 4</el-dropdown-item>
                <el-dropdown-item command="Action 1">Action 1</el-dropdown-item>
                <el-dropdown-item command="Action 2">Action 2</el-dropdown-item>
                <el-dropdown-item command="Action 3">Action 3</el-dropdown-item>
                <el-dropdown-item command="Action 4">Action 4</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="location-item">
          <el-dropdown trigger="click" ref="cityDropdown">
            <span class="el-dropdown-link">
              青山湖区<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 1</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="6" class="update-time">
        2023-05-01 00:00:00更新
      </el-col>
    </el-row>
    <el-row>

      <el-col :span="24" class="weather-temp">
        <el-tooltip content="体感温度"><span>38.6<sup>℃</sup></span></el-tooltip>
        <span class="status">晴</span>
      </el-col>
    </el-row>
    <el-row justify="space-around" class="weather-item">
      <el-col :span="5">
        <el-icon>
          <Compass />
        </el-icon>
        831.87hPa<el-tooltip effect="dark" content="气压" placement="top">
          <el-icon style="margin-left: 4px" :size="18">
            <Warning />
          </el-icon>
        </el-tooltip>
      </el-col>
      <el-col :span="5">
        <el-icon>
          <WindPower />
        </el-icon>
        微风 东南风<el-tooltip effect="dark" content="风速风向" placement="top">
          <el-icon style="margin-left: 4px" :size="18">
            <Warning />
          </el-icon>
        </el-tooltip>
      </el-col>
      <el-col :span="5">
        <el-icon>
          <Pouring />
        </el-icon>
        无降水<el-tooltip effect="dark" content="降水量" placement="top">
          <el-icon style="margin-left: 4px" :size="18">
            <Warning />
          </el-icon>
        </el-tooltip>
      </el-col>
      <el-col :span="5">
        <el-icon>
          <Orange />
        </el-icon>
        空气优 33<el-tooltip effect="dark" content="空气质量" placement="top">
          <el-icon style="margin-left: 4px" :size="18">
            <Warning />
          </el-icon>
        </el-tooltip>
      </el-col>
    </el-row>
    <el-row justify="space-around" class="weather-item">
      <el-col :span="5">
        <i class="vxe-icon-indicator"></i>
        最弱<el-tooltip effect="dark" content="紫外线" placement="top">
          <el-icon style="margin-left: 4px" :size="18">
            <Warning />
          </el-icon>
        </el-tooltip>
      </el-col>
      <el-col :span="5">
        <el-icon>
          <Sunset />
        </el-icon>
        温暖<el-tooltip effect="dark" content="舒适度" placement="top">
          <el-icon style="margin-left: 4px" :size="18">
            <Warning />
          </el-icon>
        </el-tooltip>
      </el-col>
      <el-col :span="5">
        <i class="vxe-icon-eye-fill"></i>
        25km<el-tooltip effect="dark" content="能见度" placement="top">
          <el-icon style="margin-left: 4px" :size="18">
            <Warning />
          </el-icon>
        </el-tooltip>
      </el-col>
      <el-col :span="5">
        <el-icon>
          <ToiletPaper />
        </el-icon>
        61%<el-tooltip effect="dark" content="湿度" placement="top">
          <el-icon style="margin-left: 4px" :size="18">
            <Warning />
          </el-icon>
        </el-tooltip>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  height: {
    type: String,
    default: '100%'
  },
  width: {
    type: String,
    default: '100%'
  },
})

const cityDropdown = ref()

const handleCity = (item: any) => {
  console.log(item);
  if (!cityDropdown.value) return
  cityDropdown.value.handleOpen()
}
</script>

<style lang="scss" scoped>
.weather-location {
  font-size: 32px;
}

.update-time {
  text-align: right;
  font-size: 14px;
}

.location-item {
  padding-left: 20px;
  padding-right: 20px;
  border-right: 2px solid #fff;
  display: inline-block;
  cursor: pointer;
}

.weather-temp {
  text-align: center;
  font-size: 100px;
  margin: 15px auto;
}

.weather-item {
  text-align: center;
  font-size: 24px;
  margin-bottom: 15px;
}

.status {
  font-weight: lighter;
  margin-left: 10px;
  font-size: 50px;
}

.el-dropdown-link {
  color: #fff;
  font-size: 32px;
}
</style>
