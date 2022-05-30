<template>
  <div class="top-title">
    <el-icon color="#000"><document /></el-icon>
    <span>表单 / 图片上传</span>
  </div>
  <div class="count">
    <p class="title">支持拖拽</p>
    <div class="top">
      Element UI自带上传组件。 访问地址：<a
        href="https://element-plus.org/zh-CN/component/upload.html"
        >Element UI Upload</a
      >
    </div>
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>
    <p class="title">支持裁剪</p>
    <div class="box">
      <img src="../assets/img/img.jpg" class="pic" />
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
      >
        <el-button type="primary">选择图片</el-button>
      </el-upload>
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
  .upload-demo {
    margin-top: 25px;
  }
  .title {
    font-size: 22px;
    margin: 25px 0;
  }
  .box {
    display: flex;
    align-items: center;
    .pic {
      margin-right: 20px;
    }
  }
}
</style>