<template>
  <div>
    <!-- 顶部区域 -->
    <AppHeader class="header-top"></AppHeader>
    <!-- 个人信息区域 -->
    <AppUserInfo class="userInfo" ></AppUserInfo>
    <!-- 个人描述区域 -->
    <AppAboutMe></AppAboutMe>
    <!-- 项目经验区域 -->
    <AppMyProject></AppMyProject>
    <!-- 联系我区域 -->
    <AppContactMe></AppContactMe>
  </div>
</template>

<script setup>
import AppHeader from './app-header.vue'
import AppUserInfo from './app-userInfo.vue'
import AppAboutMe from './app-aboutMe.vue'
import AppMyProject from './app-myProject.vue'
import AppContactMe from './app-contactMe.vue'


</script>
<style scoped lang="less">
.header-top{
  position: fixed;
  top: 0px;
  z-index: 99;
}
.userInfo{
  margin-top: 60px;
}
</style>