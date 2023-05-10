<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-row style="margin-bottom: 20px;">
          <el-col :span="24">
            <el-card class="today-card">
          <template #header>
            <div>
              <span>城市所占气象站点数量统计</span>
            </div>
          </template>
        </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-card class="today-card">
          <template #header>
            <div>
              <span>气象站点类型数量统计</span>
            </div>
          </template>
        </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-card class="today-card">
          <template #header>
            <div>
              <span>气象站点地理位置分布</span>
            </div>
          </template>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="today-card">
          <template #header>
            <div>
              <span>气象站点累计数据量TOP20</span>
            </div>
          </template>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped></style>
