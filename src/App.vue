<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script setup>
import layout from '@/components/layout.vue'
/* 数据 */ 
import userInfo from './assets/json/userInfo.json'
import mobilePage from './assets/json/mobilePage.json'
import PCPage from './assets/json/PCPage.json'
import other from './assets/json/other.json'

import { reactive, ref,provide} from 'vue'
provide('userInfo',userInfo)
provide('mobilePage',mobilePage)
provide('PCPage',PCPage)
provide('other',other)

</script>
<style lang="less">
</style>