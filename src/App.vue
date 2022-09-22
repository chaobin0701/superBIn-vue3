<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script setup>
import axios from '@/utils/request'
import layout from '@/components/layout.vue'
/* 数据 */ 
import userInfo from './assets/json/userInfo.json'
import mobilePage from './assets/json/mobilePage.json'
import PCPage from './assets/json/PCPage.json'
import other from './assets/json/other.json'

import { ref,onMounted,provide} from 'vue'
let visit = ref("23112")
onMounted (() => {
  axios('/visit','get').then(data=>{
    visit.value = data
  },err=>{
    visit.value = "记录访客接口出现错误"
    console.log(err)
  })
})

provide('userInfo',userInfo)
provide('mobilePage',mobilePage)
provide('PCPage',PCPage)
provide('other',other)
provide('visit',visit)

</script>
<style lang="less">
</style>