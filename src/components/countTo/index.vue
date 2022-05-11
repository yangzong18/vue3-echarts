<template>
  <div class="chartNum">
    <span class="label">销售总量</span>
    <div
      class="box-item"
      v-for="(item, index) in endVal.toString()"
      :key="index"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  name: "countTo",
  props: {
    value: {
      tyoe: Number,
      default: 0,
    },
    suffix: {
      type: String,
      default: "",
    },
    speed: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    let endVal = ref(0);

    watchEffect(() => {
      if (props.value === 0) {
        return;
      }

      endVal.value = 0;

      const speed = Math.floor(props.value / props.speed);
      let index = 1;
      if (timer) {
        clearInterval(timer);
      }

      var timer = setInterval(() => {
        //优化最后几帧的效果，如果不加这个判断，那么这个值就会超出输入的值，要等到下一个判断触发时在进入值超出的判断，而且是直接强行赋值，导致效果很僵硬
        if (endVal.value < props.value) {
          if (speed * index > props.value) {
            let step = props.value - speed * (index - 1);
            endVal.value += step;
            clearInterval(timer);
            timer = null;
            return;
          }
          endVal.value = speed * index;
          index++;
        } else {
          endVal.value = props.value;
          clearInterval(timer);
          timer = null;
          return;
        }
      }, props.speed);
    });

    return {
      endVal,
    };
  },
};
</script>

<style lang="scss" scoped>
.chartNum {
  height: 15%;
  widows: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d5dfe8;
  .label {
    font-size: 1rem;
    margin-right: 12px;
    font-family: "黑体";
  }
  .box-item {
    position: relative;
    background: url("~@/assets/image/border.png") no-repeat center center;
    background-size: 100% 100%;
    text-align: center;
    width: 30px;
    height: 40px;
    line-height: 40px;
    font-size: 1.4rem;
    writing-mode: vertical-lr;
    text-orientation: upright;
    margin-right: 6px;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
    span {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      letter-spacing: 10px;
      font-family: "Time Number";
      font-weight: bold;
    }
  }
}
</style>