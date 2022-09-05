<template>
  <div class="wrapper" ref="about">
    <MyTitle text="关于我" id="about"></MyTitle>
    <div class="my-des" :class="{fadeInDown:into,animated:into,slow:into}">
      <p>我的github： <a :href="other.github" target="_blank">点击跳转</a></p>
      <p>我的笔记(语雀)： <a :href="other.yuque" target="_blank">点击跳转</a></p>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import MyTitle from './library/my-title.vue'
const other = inject('other')
let into = ref(false)

</script>
<style scoped lang="less">
.wrapper {
  padding: 40px 0 30px 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 5px @border solid;

  .my-des {
    width: 60%;

    p {
      width: 100%;
      text-align: center;
      line-height: 30px;
      color: @primary;

      span {
        color: #000;
      }
    }
  }
}
</style>