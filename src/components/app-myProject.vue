<template>
  <div class="wrapper">
    <MyTitle text="项目展示" id="project"></MyTitle>
    <div class="breadcrumb">
      <div :class="{active:active == 'all'}" @click="change('all')">所有项目</div>
      <div :class="{active:active == 'pc'}" @click="change('pc')">PC端项目</div>
      <div :class="{active:active == 'mobile'}" @click="change('mobile')">移动端项目</div>
    </div>
    <div class="project">
      <ProjectItem v-for="(item) in PCPage" :data="item" :key="item.link" v-show="active === 'all' || active == 'pc'">
      </ProjectItem>
      <ProjectItem v-for="(item) in mobilePage" :data="item" :key="item.link"
        v-show="active === 'all' || active == 'mobile'"></ProjectItem>
    </div>
  </div>
</template>

<script setup>
import { ref,inject} from 'vue'
import MyTitle from './library/my-title.vue'
import ProjectItem from './library/project-item.vue'
const PCPage = inject('PCPage')
const mobilePage = inject('mobilePage')
const active = ref('all')
const change = (key) =>{
  active.value = key
}

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

  .breadcrumb {
    display: flex;
    margin-bottom: 20px;

    div {
      font-size: 20px;
      margin: 0px 30px;
      padding: 0px 10px;
      padding-bottom: 20px;
      opacity: .3;
      color: #000;
      border-bottom: 2px #000 solid;
      transition: .7s all;
      cursor: pointer;
    }

    div:hover {
      color: #000;
      opacity: 1;
      border-bottom: 2px @primary solid;
    }

    div.active {
      color: #000;
      opacity: 1;
      border-bottom: 2px @primary solid;
    }
  }

  .project {
    width: 100%;
    padding: 0 10%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;

    .project-item {}
  }
}
</style>