<template>
  <div class="chart-wrapper" ref="gaugeChart"></div>
</template>

<script>
import * as echarts from "echarts";
import useResize from "@/componentApi/useResize";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { debounce } from "@/utils/index.js";
import { selectCityData } from "@/api/chart";
export default {
  name: "gaugeChart",
  setup() {
    let { abcode, year, routerChange, parentInfo } = useResize();
    const gaugeChart = ref(null);

    let myChart = null;

    const resizeHandler = debounce(() => {
      if (myChart) {
        myChart.resize();
      }
    }, 200);
    onMounted(() => {
      initEcharts();
      window.addEventListener("resize", resizeHandler);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", resizeHandler);
    });

    //渲染echarts图
    const initEcharts = (xData, yData) => {
      myChart = echarts.init(gaugeChart.value);
      const value = 85;
      myChart.setOption(
        {
          title: {
            show: true,
            top: "center",
            left: "center",
            text: value + "%",
            textStyle: {
              color: "#0AFCE0",
              fontSize: 20,
            },
          },
          series: [
            {
              type: "gauge",
            },
          ],
        },
        true
      );
    };

    return {
      gaugeChart,
    };
  },
};
</script>
