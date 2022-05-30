<template>
  <div class="top-title">
    <el-icon color="#000"><star /></el-icon>
    <span>自定义图标</span>
  </div>
  <div class="count">
    <h2>使用方法</h2>
    <p>直接点击图标进行复制</p>
    <h2>图标</h2>
    <div class="iconList">
      <div @click="fn">
        <el-icon color="#000" size="30px"><AddLocation /></el-icon>
        <div>位置信息</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><Apple /></el-icon>
        <div>苹果</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><Basketball /></el-icon>
        <div>篮球</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><Bicycle /></el-icon>
        <div>自行车</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><Camera /></el-icon>
        <div>照相机</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><Cherry /></el-icon>
        <div>樱桃</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><ColdDrink /></el-icon>
        <div>果汁</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><Collection /></el-icon>
        <div>收藏</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><Eleme /></el-icon>
        <div>e了么</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><ForkSpoon /></el-icon>
        <div>餐具</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><Grape /></el-icon>
        <div>葡萄</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><Lightning /></el-icon>
        <div>雷电</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><MoonNight /></el-icon>
        <div>月夜</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><Pouring /></el-icon>
        <div>下雨</div>
      </div>
      <div @click="fn">
        <el-icon color="#000" size="30px"><Watch /></el-icon>
        <div>手表</div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import ff from "../commonality/index";
import { ElMessage } from "element-plus";
export default {
  setup() {
    let ss = ref(null);
    let rou = useRoute();
    ff(rou.path, rou.name);
    function fn(e) {
      ss.value = e.currentTarget.firstElementChild;
      ElMessage({
        message: "复制成功",
        duration: 1500,
        type: "success",
      });
    }

    return {
      ss,
      fn,
    };
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
  p {
    margin: 20px 0;
  }
  .iconList {
    width: 60%;
    margin: 20px auto 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    & > div {
      width: 130px;
      height: 100px;
      text-align: center;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      div {
        margin-top: 10px;
      }
    }
  }
}
</style>