<template>
  <div class="top-title">
    <el-icon color="#000"><Grid /></el-icon>
    <span>基础表格</span>
  </div>
  <div class="cont">
    <div class="btnList">
      <el-button type="primary" @click="allDele">
        <el-icon color="#fff"><Delete /></el-icon>
        <span>批量删除</span>
      </el-button>
      <el-input v-model="search" placeholder="用户名" />
    </div>
    <div class="tables">
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        @selection-change="checks"
      >
        <el-table-column type="selection" width="50px" align="center" />
        <el-table-column prop="id" label="ID" width="50px" align="center" />
        <el-table-column
          prop="user"
          label="用户名"
          width="100px"
          align="center"
        />
        <el-table-column
          prop="price"
          label="账户余额"
          width="120px"
          align="center"
        />
        <el-table-column label="头像(查看大图)" align="center">
          <template v-slot="scope">
            <img :src="scope.row.src" class="pic" />
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址" />
        <el-table-column label="状态" width="150px" align="center">
          <template v-slot="scop">
            <div v-if="scop.row.flg" class="res">成功</div>
            <div v-else class="err">失败</div>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="注册时间" />
        <el-table-column label="操作" align="center">
          <template v-slot="scope">
            <span style="color: #409eff" @click="putFn(scope.row.id)">
              <el-icon color="#409eff"><EditPen /></el-icon>
              编辑
            </span>
            <span
              style="color: #ff0052"
              class="dele"
              @click="dele(scope.row.id)"
            >
              <el-icon><Delete color="#ff0052" /></el-icon>
              删除
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  <el-dialog v-model="dialogVisible" title="编辑" width="30%">
    <div class="box1">
      <span>用户名</span>
      <input type="text" v-model="user" />
    </div>
    <div class="box1">
      <span>地址</span>
      <input type="text" v-model="address" />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="subFn">确定</el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="flag" title="删除" width="30%">
    <span>是否确定删除？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="flag = false">取消</el-button>
        <el-button type="primary" @click="subDele">确定</el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="userCont" title="查找" width="30%">
    <div class="alertCont" :key="el.id" v-for="el in userLists">
      <img :src="el.src" />
      <span>{{ el.user }}</span>
      <span>{{ el.address }}</span>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="userCont = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, toRefs, reactive, watch } from "vue";
import ff from "../commonality/index";
export default {
  setup() {
    let rou = useRoute();
    ff(rou.path, rou.name);
    let store = useStore();
    let tableData = computed(() => store.state.userList);
    let cont = reactive({
      dialogVisible: false,
      user: "",
      address: "",
      id: "",
      flag: false,
      search: "",
      userCont: false,
      userLists: "",
      arr: "",
    });
    // 点击编辑进行弹框
    function putFn(val) {
      cont.id = val;
      cont.dialogVisible = true;
      let el = tableData.value.find((value) => value.id == val);
      cont.user = el.user;
      cont.address = el.address;
    }
    //提交修改内容
    function subFn() {
      store.commit("putList", {
        i: cont.id,
        name: cont.user,
        address: cont.address,
      });
      cont.dialogVisible = false;
      cont.user = "";
      cont.address = "";
      cont.id = "";
    }
    //点击删除

    function dele(i) {
      cont.flag = true;
      cont.id = i;
    }
    //点击确定进行后台删除
    function subDele() {
      store.commit("deleList", cont.id);
      cont.flag = false;
      cont.id = "";
    }
    //查看当前已选中的元素
    function checks(arr) {
      cont.arr = arr;
    }
    //点击删除多个元素
    function allDele() {
      store.commit("allDele", cont.arr);
    }
    //监听输入框变化，查找匹配人物数据
    watch(
      () => cont.search,
      (newvalue, oldvalue) => {
        if (newvalue) {
          let arr = tableData.value.filter(
            (val) => val.user.indexOf(newvalue) != -1
          );
          cont.userLists = arr;
          cont.userCont = true;
        } else {
          cont.userCont = false;
        }
      }
    );
    return {
      tableData,
      ...toRefs(cont),
      putFn,
      subFn,
      dele,
      subDele,
      checks,
      allDele,
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
.cont {
  height: 456px;
  background: #fff;
  padding: 30px;
  box-sizing: border-box;
  .btnList {
    display: flex;
    .el-input {
      width: 300px;
      margin: 0 10px;
    }
  }
  .tables {
    margin-top: 20px;
    .pic {
      width: 40px;
      height: 40px;
    }
    .res,
    .err {
      width: 50%;
      border-radius: 5px;
      margin: 0 auto;
    }
    .res {
      background: #f0f9eb;
      color: #67c23a;
    }
    .err {
      background: #fef0f0;
      color: #f56c82;
    }
    .dele {
      margin-left: 10px;
    }
  }
}
.box1 {
  width: 100%;
  padding-left: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  margin-bottom: 10px;
  input {
    width: 80%;
    height: 26px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
  }
}
.alertCont {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;
  img {
    width: 50px;
    height: 50px;
  }
}
</style>