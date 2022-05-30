<template>
  <div class="top-title">
    <el-icon color="#000"><odometer /></el-icon>
    <span>echart图表</span>
  </div>
  <div class="count">
    <div class="top">
      vue-echart：vue.js封装sChart.js的图表组件。 访问地址：
      <a href="https://echarts.apache.org/zh/index.html">vue-echart</a>
    </div>
    <div class="eachartList">
      <p>柱状图</p>
      <div>
        <strong>最近一周各品类销售图</strong>
        <div id="column"></div>
      </div>
      <p>折线图</p>
      <div>
        <strong>最近几个月各品类销售趋势图</strong>
        <div id="line"></div>
      </div>
      <p>饼状图</p>
      <div>
        <strong>服装品类销售饼状图</strong>
        <div id="pie"></div>
      </div>
      <p>环形图</p>
      <div>
        <strong>环形三等分</strong>
        <div id="loop"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import ff from "../commonality/index";
import Column from "../hook/columnEcharts";
import Line from "../hook//lineEacharts";
import Pie from "../hook/pieEcharts";
import Loop from "../hook/loopEcharts";
export default {
  setup() {
    let rou = useRoute();
    ff(rou.path, rou.name);
    onMounted(() => {
      Column();
      Line();
      Pie();
      Loop();
    });
    return {};
  },
};
</script>
<style lang="less" scoped>
.top-title {
  margin: 10px 0;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
}
.count {
  padding: 30px;
  background: #fff;
  .top {
    padding: 30px 10px;
    background: #eef1f6;
    a {
      text-decoration: none;
      color: #20a0ff;
    }
  }
  .eachartList {
    width: 50%;
    p {
      font-size: 24px;
      margin: 50px 0 20px;
    }
    & > div {
      height: 400px;
      background: #fbfbfb;
      text-align: center;
      strong {
        font-size: 18px;
        line-height: 36px;
      }
      div {
        height: 100%;
      }
    }
  }
}
</style>