<template>
  <div>
    <!-- 顶部区域 -->
    <AppHeader></AppHeader>
    <!-- 个人信息区域 -->
    <AppUserInfo></AppUserInfo>
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

import { reactive, ref } from 'vue'

</script>
<style scoped lang="less">
</style>