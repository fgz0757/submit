import * as echarts from "echarts";
export default () => {
    var myChart = echarts.init(document.getElementById("pie"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 334, name: "T恤" },
              { value: 278, name: "牛仔裤" },
              { value: 190, name: "连衣裙" },
              { value: 235, name: "毛衣" },
              { value: 260, name: "七分裤" },
              { value: 200, name: "短裤" },
              { value: 141, name: "羽绒服" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
}