<template>
  <div class="header">
    <div class="header-l">
      <div class="icons" @click="toggle">
        <el-icon v-if="flg" color="#fff" size="22px"><expand /></el-icon>
        <el-icon v-else color="#fff" size="22px"><fold /></el-icon>
      </div>
      <h3>后台管理系统</h3>
    </div>
    <div class="header-r">
      <el-icon color="#fff" size="22px" @click="full"><full-screen /></el-icon>
      <el-icon color="#fff" size="22px"><bell /></el-icon>
      <img src="../assets/img/img.jpg" alt="" />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{ user }}
          <el-icon color="#fff" size="14px"><caret-bottom /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>项目仓库</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import screenfull from "screenfull";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Header",
  setup() {
    let store = useStore();
    const user = JSON.parse(localStorage.getItem("use"));
    let flg = computed(() => store.state.flag);
    function toggle() {
      store.commit("ff", !store.state.flag);
    }
    function full() {
      screenfull.toggle();
    }
    return {
      user,
      flg,
      toggle,
      full,
    };
  },
};
</script>
<style lang="less" scoped>
.header {
  height: 70px;
  padding: 0 30px;
  box-sizing: border-box;
  background: #242f42;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-l,
  .header-r {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .header-l {
    h3 {
      font-size: 22px;
      margin-left: 21px;
    }
  }
  .header-r {
    .el-icon {
      margin-right: 10px;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .el-dropdown-link {
      color: #fff;
    }
  }
}
</style>
