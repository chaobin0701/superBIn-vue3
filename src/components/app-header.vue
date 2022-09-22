<template>
  <header>
    <div class="wrapper">
      <div class="push_nav" v-into="['flipInX']">
        <a href="#about">关于我</a>
      </div>
      <div class="push_nav" v-into="['flipInX']">
        <a href="#project">项目展示</a>
      </div>
      <div class="push_nav" v-into="['flipInX']">
        <a href="#contact">联系我</a>
      </div>
    </div>
    <div class="visit-info">
      <div class="push_nav" v-into="['flipInX']">
        <a>{{visit}}</a>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { useWindowScroll } from '@vueuse/core'
  import {inject} from 'vue'
  const visit = inject("visit")
  const { y,x } = useWindowScroll()
  const toTop = () => {
    window.scrollTo(0, 0); 
  }
</script>
<style scoped lang="less">
header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: @primary;
  // 访问数据样式
  .visit-info{
    margin-right: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    .push_nav {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 20px;
      transition: .3s;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
      a{
        font-size: 14px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .wrapper {
    // width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin-left: 20%;
    display: flex;

    .push_nav {
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }

      transition: .3s;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;

      a {
        font-size: 18px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>