<template>
  <div class="top-title">
    <el-icon color="#000"><document /></el-icon>
    <span>表单 / 基本表单</span>
  </div>
  <div class="count">
    <el-form :model="form" label-width="120px">
      <el-form-item label="表单名称">
        <el-input v-model="name" />
      </el-form-item>
      <el-form-item label="选择器">
        <el-select v-model="region" placeholder="请选择">
          <el-option label="步步高" value="步步高" />
          <el-option label="小天才" value="小天才" />
          <el-option label="imoo" value="imoo" />
        </el-select>
      </el-form-item>
      <el-form-item label="日期时间">
        <el-col :span="11">
          <el-date-picker
            v-model="date1"
            type="date"
            placeholder="选择日期"
            style="width: 100%"
          />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="date2"
            placeholder="选择时间"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="选择开关">
        <el-switch v-model="delivery" />
      </el-form-item>
      <el-form-item label="多选框">
        <el-checkbox-group v-model="type">
          <el-checkbox label="步步高" name="type" />
          <el-checkbox label="小天才" name="type" />
          <el-checkbox label="imoo" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="单选框">
        <el-radio-group v-model="resource">
          <el-radio label="步步高" />
          <el-radio label="小天才" />
          <el-radio label="imoo" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文本框">
        <el-input v-model="desc" type="textarea" rows="5" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">表单提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import ff from "../commonality/index";
export default {
  setup() {
    let rou = useRoute();
    ff(rou.path, rou.name);
    let form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
    });
    return {
      ...toRefs(form),
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
  .el-form {
    width: 50%;
  }
  .text-center {
    text-align: center;
    font-weight: 700;
  }
}
</style>