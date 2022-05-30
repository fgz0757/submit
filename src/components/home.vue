<template>
  <div class="box">
    <div class="top">
      <div class="top-l">
        <div class="userCont">
          <div class="user-t">
            <img src="../assets/img/img.jpg" />
            <div class="user-r">
              <h3>admin</h3>
              <span>普通用户</span>
            </div>
          </div>
          <div class="timer">
            <div>
              <span>上次登录时间:</span>
              <span>2022-02-25</span>
            </div>
            <div>
              <span>上次登陆地点:</span>
              <span>厦门</span>
            </div>
          </div>
        </div>
        <div class="lang">
          <div class="title">语言详情</div>
          <div class="progress">
            <div>
              <p>Vue</p>
              <el-progress :percentage="71.3" color="#42b983" />
            </div>
            <div>
              <p>JavaScript</p>
              <el-progress :percentage="24.1" color="#f1e05a" />
            </div>
            <div>
              <p>CSS</p>
              <el-progress :percentage="13.7" />
            </div>
            <div>
              <p>HTML</p>
              <el-progress :percentage="5.9" color="#f56c6c" />
            </div>
          </div>
        </div>
      </div>
      <div class="top-r">
        <div class="numS">
          <div>
            <div class="bg1 bg">
              <el-icon color="#fff" size="50px"><user /></el-icon>
            </div>
            <div>
              <h3 style="color: #2d8cf0">1234</h3>
              <p>用户访问量</p>
            </div>
          </div>
          <div class="alt">
            <div class="bg2 bg">
              <el-icon color="#fff" size="50px"><bell /></el-icon>
            </div>
            <div>
              <h3 style="color: #2d8cf0">321</h3>
              <p>系统消息</p>
            </div>
          </div>
          <div>
            <div class="bg3 bg">
              <el-icon color="#fff" size="50px"><goods /></el-icon>
            </div>
            <div>
              <h3 style="color: #f25e43">5000</h3>
              <p>数量</p>
            </div>
          </div>
        </div>
        <div class="noCont">
          <div class="no-t">
            <span>待办事项</span>
            <span class="add" @click="addFn">添加</span>
          </div>
          <div class="noList">
            <ul>
              <li :key="el.id" v-for="el in arr">
                <div>
                  <el-checkbox v-model="el.is" />
                  <p :class="el.is ? 'aa' : ''">{{ el.text }}</p>
                </div>
                <el-icon color="#000" @click="dele(el.id)"><delete /></el-icon>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div>
        <h3>最近一周各品类销售图</h3>
        <div id="main"></div>
      </div>
      <div class="btm-r">
        <h3>最近几个月各品类销售趋势图</h3>
        <div id="circle"></div>
      </div>
    </div>
  </div>
  <el-dialog
    v-model="dialogVisible"
    title="添加数据"
    width="30%"
    modal
    close-on-click-modal
  >
    <div class="dialog">
      <span>请输入内容:</span>
      <input type="text" v-model="value" />
    </div>
    <template #footer>
      <span>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addVal">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import * as echarts from "echarts";
import ff from "../commonality/index";
export default {
  setup() {
    let store = useStore();
    let rou = useRoute();
    ff(rou.path, rou.name);
    //待办事项的数据
    let arr = computed(() => store.state.arr);
    console.log(arr);
    //删除待办事项
    function dele(x) {
      store.commit("deles", x);
    }
    //点击添加弹出对话框
    let dialogVisible = ref(false);
    function addFn() {
      dialogVisible.value = true;
    }
    let value = ref("");
    //添加待办事项
    function addVal() {
      let val = value.value;
      store.commit("addArr", val);
      dialogVisible.value = false;
      value.value = "";
    }
    //柱状图
    function ss() {
      let myChart = echarts.init(document.getElementById("main"));
      myChart.setOption({
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "家电", "百货", "食品"],
            ["周一", 234, 164, 144],
            ["周二", 278, 178, 198],
            ["周三", 270, 190, 150],
            ["周四", 190, 135, 235],
            ["周五", 230, 160, 120],
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
      });
    }
    //折线图
    function cc() {
      let myChart = echarts.init(document.getElementById("circle"));
      myChart.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {},
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["6月", "7月", "8月", "9月", "10月"],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}",
          },
        },
        series: [
          {
            name: "家电",
            type: "line",
            data: [74, 118, 200, 235, 90],
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
          },
          {
            name: "百货",
            type: "line",
            data: [164, 178, 150, 135, 160],
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
          },
          {
            name: "食品",
            type: "line",
            data: [234, 278, 270, 190, 230],
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
            },
          },
        ],
      });
    }
    onMounted(() => {
      ss();
      cc();
    });
    return {
      arr,
      dele,
      dialogVisible,
      addFn,
      value,
      addVal,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  padding-top: 10px;
}
.top {
  height: 528px;
  display: flex;
  .top-l,
  .top-r {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top-l {
    width: 402px;
    .userCont {
      height: 252px;
      background: #fff;
      padding: 20px;
      box-sizing: border-box;
      .user-t {
        display: flex;
        align-items: center;
        img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
        }
        .user-r {
          margin-left: 50px;
          h3 {
            font-size: 30px;
          }
          span {
            font-size: 14px;
            color: #999;
          }
        }
      }
      .timer {
        margin-top: 20px;
        border-top: 1px solid #999;
        padding-top: 20px;
        color: #ccc;
        div {
          display: flex;
          font-size: 14px;
          span {
            flex: 1;
          }
        }
      }
    }
    .lang {
      height: 254px;
      background: #fff;
      .title {
        height: 58px;
        line-height: 58px;
        font-size: 16px;
        padding-left: 20px;
        border-bottom: 1px solid #999;
      }
      .progress {
        padding: 20px;
        padding-bottom: 0;
        div {
          margin-bottom: 5px;
          p {
            font-size: 16px;
          }
        }
      }
    }
  }
  .top-r {
    flex: 1;
    margin-left: 20px;
    .numS {
      height: 100px;
      display: flex;
      justify-content: space-between;
      & > div {
        flex: 1;
        background: #fff;
        display: flex;
        align-items: center;
        .bg {
          flex-basis: 100px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bg1 {
          background: #2d8cf0;
        }
        .bg2 {
          background: #64d572;
        }
        .bg3 {
          background: #f25e43;
        }
        div {
          width: calc(100% - 100px);
          text-align: center;
          h3 {
            font-size: 30px;
          }
          p {
            font-size: 14px;
            color: #999;
          }
        }
      }
      .alt {
        margin: 0 20px;
      }
    }
    .noCont {
      height: 403px;
      background: #fff;
      .no-t {
        padding: 0 20px;
        height: 58px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #999;
        .add {
          color: blue;
          font-size: 12px;
          cursor: pointer;
        }
      }
      .noList {
        height: 345px;
        overflow: hidden;
        ul {
          padding: 20px 20px 0;
          li {
            height: 50px;
            border-bottom: 1px solid #999;
            display: flex;
            justify-content: space-between;
            align-items: center;
            div {
              display: flex;
              align-items: center;
              p {
                font-size: 12px;
                margin-left: 50px;
              }
              .aa {
                text-decoration: line-through;
                color: #ccc;
              }
            }
          }
        }
      }
    }
  }
}
.bottom {
  height: 340px;
  margin-top: 20px;
  display: flex;

  & > div {
    height: 100%;
    background: #fff;
    flex: 1;
    h3 {
      text-align: center;
      line-height: 50px;
    }
    & > div {
      height: 290px;
    }
  }
  .btm-r {
    margin-left: 20px;
  }
}
.dialog {
  input {
    width: 60%;
    margin-left: 30px;
    height: 25px;
    outline: none;
    border: 1px solid #ccc;
  }
}
</style>