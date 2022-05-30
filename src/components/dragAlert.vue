<template>
  <div class="top-title">
    <el-icon color="#000"><rank /></el-icon>
    <span>拖拽组件 / 拖拽弹框</span>
  </div>
  <div class="count">
    <p>通过指令 v-dialogDrag 使 Dialog 对话框具有可拖拽的功能。</p>
    <el-button type="primary" @click="alertFn">点我弹框</el-button>
    <el-dialog
      v-model="dialogVisible"
      title="拖拽弹框"
      modal
      show-close
      draggable
      center
      width="30%"
    >
      <span>我是一个可以拖拽的对话框</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
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
    let dialogVisible = ref(false);
    function alertFn() {
      dialogVisible.value = true;
    }
    return {
      dialogVisible,
      alertFn,
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
    margin-bottom: 30px;
  }
}
</style>