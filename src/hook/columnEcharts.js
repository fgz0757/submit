import * as echarts from "echarts";
export default ()=> {
    var myChart = echarts.init(document.getElementById("column"));
    myChart.setOption({
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ["product", "家电", "百货", "食品"],
        source: [
          { product: "周一", 家电: 234, 百货: 164, 食品: 144 },
          { product: "周二", 家电: 278, 百货: 178, 食品: 198 },
          { product: "周三", 家电: 270, 百货: 190, 食品: 150 },
          { product: "周四", 家电: 190, 百货: 135, 食品: 235 },
          { product: "周五", 家电: 230, 百货: 160, 食品: 120 },
        ],
      },
      xAxis: { type: "category" },
      yAxis: {},
      series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
    });
}