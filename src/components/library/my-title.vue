<template>
  <div class="title" :id="id" ref="title" :class="{isIn:into}">
    <h3 :class="{flipInX:into,animated:into}">
      {{ text }}
    </h3>
  </div>
</template>

<script setup>
import { reactive, ref ,defineProps} from 'vue'
const props = defineProps({
  text:{
    type: String,
    default: '标题'
  },
  id: {
        type: String,
        default: ''
    }
})
const info = ref(false)


</script>
<style scoped lang="less">
.title {
  margin-bottom: 30px;

  &.isIn ::before,
  &.isIn ::after {
    width: 300px;
    animation: mymove 2s ease;
    animation-fill-mode: forwards;
  }

  ::before {
    border: 4px double #c2c2c2;
    display: inline-block;
    content: "";
    margin: 9px 10px;
    box-sizing: border-box;
  }

  ::after {
    border: 4px double #c2c2c2;
    display: inline-block;
    content: "";
    margin: 9px 10px;
    box-sizing: border-box;
  }

  h3 {
    color: @primary;
    font-size: 35px;
    text-align: center;
    text-transform: uppercase;
  }
}


@keyframes mymove {
  from {
    width: 0px;
    opacity: 0;
  }

  to {
    width: 120px;
    opacity: 1;
  }
}
</style>