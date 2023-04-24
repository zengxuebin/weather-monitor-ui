<template>
  <div class="container">

    <el-icon size="large" color="#00796a" class="icon">
      <UserFilled />
    </el-icon>
    <span>气象监测中心-管理员</span>
    <div class="user">
      <el-avatar size="small" :src="circleUrl" class="avatar" />
      <el-dropdown class="el-dropdown-container">
        <span class="el-dropdown-link">
          管理员ddddd
          <el-icon>
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">

const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
</script>

<style lang="scss" scoped>
.container {
  height: 40px;
  background-color: #fff;
  border-radius: 5px;
  float: right;
  line-height: 40px;
  padding: 0 20px;
}

.icon {
  margin-right: 5px;
  position: relative;
  top: 2px;
}

.user {
  display: inline;
  float: right;
  margin-left: 10px;
}

.avatar {
  position: relative;
  top: 5px;
}

.el-dropdown-container {
  margin-left: 5px;
  line-height: 40px;
  border: 0;
}

.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}

:focus {
  outline: 0
}
</style>
