<template>
  <div class="box">
    <div class="strong"><strong>4<span>0</span>4</strong></div>
    <p>啊哦~ 你没有权限访问该页面哦</p>
    <div>
      <el-button type="primary" @click="toHome">返回首页</el-button>
      <el-button type="primary" @click="toPrev">返回上一页</el-button>
    </div>
  </div>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import ff from "../commonality/index";
export default {
  setup() {
    let rou = useRoute();
    let router = useRouter();
    ff(rou.path, rou.name);
    function toHome() {
      router.push({ name: "home" });
    }
    function toPrev() {
      router.go(-1);
    }
    return {
      toHome,
      toPrev,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  text-align: center;
  .strong {
    font-size: 250px;
    color: #2d8cf0;
    span {
      color: #00a854;
    }
  }
  p {
    font-size: 30px;
    color: #777;
    margin-bottom: 30px;
  }
  .el-button {
    margin: 0 50px;
  }
}
</style>