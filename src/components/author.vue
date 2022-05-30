<template>
  <div class="top-title">
    <el-icon color="#000"><chicken /></el-icon>
    <span>支持作者</span>
  </div>
  <div class="count">
    <div class="top">
      如果该框架对你有帮助，那就请作者喝杯饮料吧！加微信号linxin_20探讨问题。
    </div>
    <div class="pic">
      <img src="../assets/img/ewm.jpg" />
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import ff from "../commonality/index";
export default {
  setup() {
    let rou = useRoute();
    ff(rou.path, rou.name);
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
  .pic {
    margin-top: 35px;
    img {
      width: 200px;
      height: 200px;
    }
  }
}
</style>