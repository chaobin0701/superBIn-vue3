<template>
  <header>
    <div class="wrapper">
      <div class="push_nav">
        <a href="#about">关于我</a>
      </div>
      <!-- <div>工作经验</div> -->
      <div class="push_nav">
        <a href="#project">项目展示</a>
      </div>
      <div class="push_nav">
        <a href="#contact">联系我</a>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>
<style scoped lang="less">
header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: @primary;

  .wrapper {
    width: 100%;
    height: 20px;
    box-sizing: border-box;
    margin: 0 20%;
    display: flex;

    .push_nav a {
      margin-left: 30px;
      font-size: 18px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>