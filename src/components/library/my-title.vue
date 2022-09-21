<template>
  <div class="title" :id="id" ref="title" v-into="['isIn']">
    <h3 v-into="['flipInX']">
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
const into = ref(false)


</script>
<style scoped lang="less">
.title {
  margin-bottom: 30px;

  &.isIn ::before,
  &.isIn ::after {
    animation: mymove 1.5s ease;
    animation-fill-mode: forwards;
  }

  ::before {
    width: 120px;
    border: 4px double #c2c2c2;
    display: inline-block;
    content: "";
    margin: 9px 10px;
    box-sizing: border-box;
  }

  ::after {
    width: 120px;
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
    transform: scaleX(0);
    opacity: .0;
  }

  to {
    transform: scaleX(1);
    opacity: 1;
  }
}
</style>