import * as echarts from "echarts";
export default () => {
    var myChart = echarts.init(document.getElementById("loop"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 330, name: "vue" },
              { value: 330, name: "react" },
              { value: 330, name: "angular" },
            ],
          },
        ],
      });
}