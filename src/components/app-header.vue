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
    <div class="to-top">
      <div class="push_nav" :class="{active:y < 400}" @click="toTop"> 
        <a>回到顶部 ↑</a>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { useWindowScroll } from '@vueuse/core'
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

  .to-top {
    margin-right: 20%;
    height: 100%;
    display: flex;
    align-items: center;

    .push_nav {
      height: 100%;
      opacity: 1;
      transform: all 1.5s ease;

      &.active {
        opacity: 0;
      }

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