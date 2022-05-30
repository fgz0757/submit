<template>
  <div class="box">
    <div class="subBox">
      <h3>后台登陆管理系统</h3>
      <el-form :model="ruleForm" :rules="rules">
        <el-form-item prop="name">
          <div class="con">
            <el-icon color="#000" size="28px"><user /></el-icon>
            <el-input v-model="ruleForm.name" />
          </div>
        </el-form-item>
        <el-form-item prop="psd">
          <div class="con">
            <el-icon color="#000" size="28px"><lock /></el-icon>
            <el-input v-model="ruleForm.psd" type="password" />
          </div>
        </el-form-item>
        <el-button type="success" @click="subfn">Success</el-button>
      </el-form>
      <p class="p">用户名与密码随便输入！</p>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
export default {
  setup() {
    let ruleForm = reactive({
      name: "admin",
      psd: 123456,
    });
    let rules = reactive({
      name: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
        { min: 5, max: 7, message: "长度为5到7个字符", trigger: "blur" },
      ],
      psd: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
        { min: 5, max: 7, message: "长度为5到7个字符", trigger: "blur" },
      ],
    });
    let router = useRouter();
    function subfn() {
      if (ruleForm.name == "admin" && ruleForm.psd == 123456) {
        ElMessage({
          message: "登陆成功",
          type: "success",
          duration: 1500,
          onClose: () => {
            router.push({ name: "home" });
          },
        });
        localStorage.setItem("use", JSON.stringify(ruleForm.name));
      } else {
        ElMessage({
          message: "登陆失败",
          type: "error",
        });
      }
    }
    return {
      ruleForm,
      rules,
      subfn,
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  background: url("../assets/img/login-bg.jpg") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  .subBox {
    width: 400px;
    padding: 25px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    h3 {
      font-size: 26px;
      margin-bottom: 30px;
    }
    .el-form-item {
      text-align: center;
      .con {
        display: flex;
        align-items: center;
        .el-input {
          width: 250px;
          margin-left: 20px;
        }
      }
    }
    .el-button {
      width: 100%;
    }
    .p {
      font-size: 13px;
      margin-top: 20px;
      text-align: left;
    }
  }
}
</style>
