<template>
  <div class="home-container">
    <z-row :gutter="15">
      <z-col :span="7">
        <div class="echartList">
          <div class="chart-item">
            <box-container :boxTitle="year + '年销售额度排名'">
              <city-count />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年销售种类占比'">
              <type-count />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年销售品牌占比'">
              <word-chart />
            </box-container>
          </div>
        </div>
      </z-col>
      <z-col :span="10">
        <count-to :value="sum" suffix="万" :speed="20" />
        <div style="width: 100%; height: 85%">
          <scatter-map />
        </div>
      </z-col>
      <z-col :span="7">
        <div class="echartList">
          <div class="chart-item">
            <box-container :boxTitle="year + '年客户年龄分布'">
              <funnel-chart />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年公司市值'">
              <liquid-chart />
            </box-container>
          </div>
          <div class="chart-item">
            <box-container :boxTitle="year + '年销售品牌占比'">
              <line-chart />
            </box-container>
          </div>
        </div>
      </z-col>
    </z-row>
  </div>
</template>

<script>
import { ZRow, ZCol } from "@UI/components";
import useResize from "@/componentApi/useResize";
import {
  cityCount,
  typeCount,
  wordChart,
  scatterMap,
  funnelChart,
  liquidChart,
  lineChart,
} from "./components";
import boxContainer from "@/components/boxContainer";
import countTo from "@/components/countTo/index";
export default {
  name: "home-index",
  components: {
    ZRow,
    ZCol,
    cityCount,
    boxContainer,
    typeCount,
    wordChart,
    countTo,
    scatterMap,
    funnelChart,
    liquidChart,
    lineChart,
  },
  setup() {
    const { year, sum } = useResize();
    return {
      year,
      sum,
    };
  },
};
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  position: relative;

  .echartList {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

    .chart-item {
      height: 32.1%;
      width: 100%;
      .four-container {
        width: 100%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
        background: rgba(75, 139, 247, 0.05);
        box-shadow: inset 1px 1px 16px #7ccef4;
      }
    }
  }
}
</style>