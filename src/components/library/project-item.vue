<template>
  <div class="project-item" ref="project" v-into="['zoomIn']">
    <div class="img">
      <img :src="require(`@/assets/project-images/${data.data.imgSrc}`)" alt="" />
    </div>
    <div class="desc">
      <!-- 链接 -->
      <a :href="computedUrl" target="_blank">
        <p class="tltle">{{ data.title }} ></p>
      </a>
      <ul class="describe">
        <li class="describe-item">
          <span class="des-title">项目简介：</span>
          <span class="brief">{{ data.data.brief }}</span>
        </li>
        <li class="describe-item">

          <span class="des-title">开发时间：</span>
          <span class="developmentTime">{{ data.data.developmentTime }}</span>
        </li>
        <li class="describe-item des">
          <span class="des-title">技术使用：</span>
          <span class="item-describe" v-for="(x, index) in data.data.describe.split('/')" :key="index"
            :style="{ backgroundColor: `${color[colorChoose[index]]}` }">{{ x.trim() }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { IsURL } from '@/utils/handle.js'
import { ref, defineProps, inject, computed } from 'vue'
let into = ref(false)
const color = ['rgba(252,151,175,.5)', 'rgba(135,247,207,.5)', 'rgba(247,244,148,.5)', 'rgba(114,204,255,.5)',
  'rgba(247,197,160,.5)', 'rgba(212,164,235,.5)', 'rgba(210,245,166,.5)', 'rgba(43,130,29,.5)',
  'rgba(63,177,227,.5)']
const { data } = defineProps(['data'])
const other = inject('other')
// 随机选择颜色
const colorChoose = computed(() => {
  let res = []
  for (let i = 0; i < 20; i++) {
    res.push(Math.floor(Math.random() * color.length))
  }
  return res
})
const computedUrl = computed(() => {
  // 判断这个url是否为完整的链接
  // 如果是完整的链接就直接返回,如果不是就拼接固定地址之后返回
  if (IsURL(data.link)) {
    return data.link
  } else {
    return other.mainPath + data.link
  }
})  
</script>
<style scoped lang="less">
.project-item {
  &:hover {
    box-shadow: 0px 0px 15px rgba(37, 171, 190, .4);

  }

  box-shadow: 0px 0px 5px rgba(0, 0, 0, .1);
  background: #fff;
  transition: all .5s;
  border-radius: 10px;
  display: flex;
  min-height: 200px;
  width: 48%;
  justify-content: center;
  align-items: center;
  margin: 1%;

  .img {
    padding: 20px;
    width: 200px;
    height: 200px;
    overflow: hidden;

    img {
      transition: all 1s;
    }

    img:hover {
      transform: scale(1.5);

    }
  }

  .desc {
    flex: 1;
    padding-left: 20px;
    border-left: 1px #ccc solid;
    height: 100%;
    display: flex;
    flex-direction: column;

    .tltle {
      font-size: 20px;
      font-weight: bolder;
      color: @primary;
      line-height: 56px;
      cursor: pointer;
    }

    .describe {
      flex: 1;
      display: flex;
      flex-direction: column;

      .describe-item {
        line-height: 30px;
        display: flex;

        .des-title {
          color: @primary;
          font-weight: bold;
          width: 70px;
        }

        .brief {
          // 项目简介
          flex: 1;

        }

        .developmentTime {
          // 开发时间
          flex: 1;

        }

        .item-describe {
          // 技术使用
          margin-bottom: 10px;
          margin-left: 10px;
          padding: 0 10px;
          line-height: 25px;
        }
      }
    }

    .describe-item.des {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>