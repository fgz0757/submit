<template>
  <div class="top-title">
    <el-icon color="#000"><chicken /></el-icon>
    <span>国际化产品</span>
  </div>
  <div class="count">
    <div class="title1">
      <p>{{ $t("title") }}</p>
      <el-button type="primary" @click="fn">{{ $t("btn") }}</el-button>
    </div>
    <h2>{{ $t("h1") }}</h2>
    <div class="pList">
      <p>{{ $t("p1") }}</p>
      <p>{{ $t("p2") }}</p>
      <p>{{ $t("p3") }}</p>
    </div>
    <h2>{{ $t("h2") }}</h2>
    <p>
      {{ $t("p4")
      }}<a href="https://blog.csdn.net/arrizo/article/details/119003116">{{
        $t("text")
      }}</a>
    </p>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import ff from "../commonality/index";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    let rou = useRoute();
    ff(rou.path, rou.name);
    const { locale } = useI18n();
    function fn() {
      locale.value = locale.value == "zh" ? "en" : "zh";
    }
    return {
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
  .title1 {
    display: flex;
    align-items: center;
    p {
      margin-right: 10px;
    }
  }
  h2 {
    font-size: 24px;
    margin: 30px 0 5px;
  }
  .pList {
    p {
      margin-bottom: 20px;
    }
  }
  a {
    text-decoration: none;
    color: #409eff;
    margin-left: 5px;
  }
}
</style>