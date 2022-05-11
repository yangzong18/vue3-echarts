<template>
  <div class="chart-wrapper" ref="wordChart"></div>
</template>

<script>
import * as echarts from "echarts";
require("echarts-wordcloud");
import { onMounted, ref, onBeforeUnmount, watch } from "vue";
import { debounce } from "@/utils/index.js";
import useResize from "@/componentApi/useResize";
import { selectWordData } from "@/api/mockChart";
export default {
  name: "wordChart",
  setup() {
    let { abcode, year, parentInfo, routerChange } = useResize();

    const wordChart = ref(null);

    let myChart = null;

    const resizeHandler = debounce(() => {
      if (myChart) {
        myChart.resize();
      }
    }, 200);

    onMounted(() => {
      getWordData();
      window.addEventListener("resize", resizeHandler);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", resizeHandler);
    });

    //模拟接口，获取echarts数据
    const getWordData = async () => {
      const { data } = await selectWordData({
        abcode: abcode.value,
        year: year.value,
      });

      initEcharts(data);
    };

    const initEcharts = (data) => {
      const colorList = ["#28CAD8", "#E5A214", "#01D2D1", "#F69F73", "#39E569"];
      myChart = echarts.init(wordChart.value);
      myChart.setOption(
        {
          color: colorList,
          title: [
            {
              show: data.length === 0,
              top: "center",
              left: "center",
              text: "暂无数据",
              textStyle: {
                color: "rgb(179, 239, 255)",
                fontSize: 12,
              },
            },
          ],
          tooltip: {
            trigger: "item",
            formatter: "销量 <br/>{b} : {c} 万",
            textStyle: {
              fontSize: 12,
            },
          },
          toolbox: {
            feature: {
              dataView: {
                show: false,
              },
              magicType: {
                show: false,
              },
              restore: {
                show: false,
              },
              saveAsImage: {
                show: true,
                name: year + "销售品牌",
                pixelRatio: 2,
              },
            },
            iconStyle: {
              normal: {
                borderColor: "#1990DA",
              },
            },
            top: 0,
            right: 5,
          },
          series: [
            {
              type: "wordCloud",
              sizeRange: [12, 45],
              rotationRange: [0, 180],
              textStyle: {
                color: () => {
                  return colorList[
                    Math.floor(Math.random() * colorList.length)
                  ];
                },
              },
              data: data,
            },
          ],
        },
        true
      );

      myChart.getZr().off("click");
      myChart.getZr().on("click", (params) => {
        const pointInPixel = [params.offsetX, params.offsetY];
        if (myChart.containPixel("series", pointInPixel) || data.length === 0) {
          routerChange("/more");
        }
      });
    };
    watch(
      year,
      () => {
        getWordData();
      },
      { lazy: false }
    );
    watch(
      parentInfo,
      () => {
        getWordData();
      },
      { lazy: false, deep: true }
    );
    return {
      wordChart,
    };
  },
};
</script>