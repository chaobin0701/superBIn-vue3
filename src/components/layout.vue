<template>
  <div>
    <!-- 顶部区域 -->
    <AppHeader class="header-top"></AppHeader>
    <!-- 个人信息区域 -->
    <AppUserInfo class="userInfo"></AppUserInfo>
    <!-- 个人描述区域 -->
    <AppAboutMe></AppAboutMe>
    <!-- 项目经验区域 -->
    <AppMyProject></AppMyProject>
    <!-- 联系我区域 -->
    <AppContactMe></AppContactMe>
    <!-- 返回顶部按钮 -->
    <div class="to-top">
      <div class="push_nav" :class="{active:y < 400}" @click="toTop">
        ↑
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import AppHeader from './app-header.vue'
import AppUserInfo from './app-userInfo.vue'
import AppAboutMe from './app-aboutMe.vue'
import AppMyProject from './app-myProject.vue'
import AppContactMe from './app-contactMe.vue'

const { y, x } = useWindowScroll()
const toTop = () => {
  window.scrollTo(0, 0);
}


</script>
<style scoped lang="less">
.header-top {
  position: fixed;
  top: 0px;
  z-index: 99;
}

.userInfo {
  margin-top: 60px;
}

// 回到顶部按钮样式
.to-top {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 60px;
  bottom: 100px;
  .push_nav {
    cursor: pointer;
    font-size: 18px;
    color: #fff;
    height: 100%;
    opacity: 1;
    transform: all 1.5s ease;
    background: rgba(16, 167, 175, .5);
    border-radius: 50%;

    &.active {
      opacity: 0;
    }

    &:hover {
      background: rgba(16, 167, 175, 1);
    }

    transition: .7s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }
}
</style>