<template>
  <div class="top-title">
    <el-icon color="#000"><document /></el-icon>
    <span>表单 / MackDown编辑器</span>
  </div>
  <div class="count">
    <div class="top">
      Vue-Quill-Editor：基于Vue的markdown编辑器。访问地址：<a
        href="https://www.jb51.net/article/213205.htm"
        >mavonEditor</a
      >
    </div>
    <div class="cont">
      <v-md-editor v-model="text" height="400px"></v-md-editor>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import ff from "../commonality/index";
export default {
  setup() {
    let rou = useRoute();
    ff(rou.path, rou.name);
    const text = ref("");
    return {
      text,
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
  .top {
    padding: 30px 10px;
    background: #eef1f6;
    margin-bottom: 20px;
    a {
      text-decoration: none;
      color: #20a0ff;
    }
  }
}
</style>