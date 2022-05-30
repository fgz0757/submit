import * as echarts from "echarts";
export default () => {
    var myChart = echarts.init(document.getElementById("line"));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["家电", "百货", "食品"],
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["6月", "7月", "8月", "9月", "10月"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "家电",
            type: "line",
            data: [114, 138, 200, 235, 190],
          },
          {
            name: "百货",
            type: "line",
            data: [164, 178, 150, 135, 160],
          },
          {
            name: "食品",
            type: "line",
            data: [234, 278, 270, 190, 230],
          },
        ],
      });
}