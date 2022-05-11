<template>
  <div class="more-container">
    <z-row :gutter="12">
      <z-col :span="7">
        <div class="echartList">
          <div class="itemChart">
            <four-angel>
              <gauage-Chart />
            </four-angel>
          </div>
          <div class="itemChart">
            <four-angel> </four-angel>
          </div>
          <div class="itemChart">
            <four-angel> </four-angel>
          </div>
        </div>
      </z-col>
      <z-col :span="10">
        <count-to :value="sum" suffix="万" :speed="20" />
        <div style="width: 100%; height: 85%"></div>
      </z-col>
      <z-col :span="7">
        <div class="echartList">
          <div class="itemChart">
            <four-angel> </four-angel>
          </div>
          <div class="itemChart">
            <four-angel> </four-angel>
          </div>
          <div class="itemChart">
            <four-angel> </four-angel>
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
  gauageChart,
  typeCount,
  wordChart,
  scatterMap,
  funnelChart,
  liquidChart,
  lineChart,
} from "./components";
import fourAngel from "@/components/fourAngel";
export default {
  name: "home-index",
  components: {
    ZRow,
    ZCol,
    gauageChart,
    fourAngel,
    typeCount,
    wordChart,
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
.more-container {
  width: 100%;
  height: 100%;
  position: relative;
  .echartList {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

    .itemChart {
      height: 32.1%;
      width: 100%;
    }
  }
}
</style>