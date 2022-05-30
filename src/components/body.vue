<template>
  <div class="body">
    <div class="navs">
      <el-menu class="el-menu-vertical-demo" active-text-color="#ffd04b" background-color="#242f42" text-color="#fff"
        router :default-active="$route.path" :collapse="obj.flg">
        <el-menu-item index="/1">
          <el-icon>
            <home-filled />
          </el-icon>
          <template #title> 系统首页 </template>
        </el-menu-item>
        <el-menu-item index="/2">
          <el-icon>
            <grid />
          </el-icon>
          <template #title>基础表格</template>
        </el-menu-item>
        <el-menu-item index="/3">
          <el-icon>
            <document-copy />
          </el-icon>
          <template #title>tab选项卡</template>
        </el-menu-item>
        <el-sub-menu index="/4">
          <template #title>
            <el-icon>
              <document />
            </el-icon>
            <span>表单相关</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/4/4-1">基本表单</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="/4/4-2" title="Group Two">
            <template #title><span>三级菜单</span></template>
            <el-menu-item index="/4/4-2/4-2-1">富文本编辑器</el-menu-item>
            <el-menu-item index="/4/4-2/4-2-2">Mackdown编辑器</el-menu-item>
          </el-sub-menu>
          <el-menu-item-group>
            <el-menu-item index="/4/4-3">文件上传</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="/5">
          <el-icon>
            <star />
          </el-icon>
          <template #title>自定义图标</template>
        </el-menu-item>
        <el-menu-item index="/6">
          <el-icon>
            <odometer />
          </el-icon>
          <template #title>Echart图表</template>
        </el-menu-item>
        <el-sub-menu index="/7">
          <template #title>
            <el-icon>
              <rank />
            </el-icon>
            <span>拖拽组件</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/7/7-1">拖拽列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="/7/7-2">拖拽弹框</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="/8">
          <el-icon>
            <chicken />
          </el-icon>
          <template #title>国际化功能</template>
        </el-menu-item>
        <el-sub-menu index="/9">
          <template #title>
            <el-icon>
              <rank />
            </el-icon>
            <span>错误处理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/9/9-1">权限测试</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="/9/9-2">404页面</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="/10">
          <el-icon>
            <chicken />
          </el-icon>
          <template #title>支持作者</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="cont">
      <div class="smallBtn" v-if="obj.btns[0]">
        <div v-for="(item, i) in obj.btns" :key="i" class="btn" @click="tzFn(item)">
          {{ item.text }} <span @click="handleClose(item)">X</span>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "Bodys",
  setup() {
    let store = useStore();
    let obj = computed(() => {
      return {
        flg: store.state.flag,
        btns: store.state.btns,
      };
    });
    let router = useRouter();
    function tzFn(val) {
      console.log(val);
      router.push(val.path);
    }
    function handleClose(val) {
      console.log(val);
      store.commit("dele", val.text);
    }
    return {
      obj,
      tzFn,
      handleClose,
    };
  },
};
</script>
<style lang="less" scoped>
.body {
  display: flex;

  .navs {
    .el-menu-vertical-demo {
      height: 100%;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }

  .cont {
    flex: 1;
    height: calc(100vh - 70px);
    background: #f0f0f0;
    padding: 0 10px 30px;
    box-sizing: border-box;
    overflow: scroll;

    .smallBtn {
      height: 30px;
      background: #fff;
      padding-left: 10px;
      display: flex;
      align-items: center;

      .btn {
        height: 26px;
        padding: 0 10px;
        background: rgb(2, 184, 244);
        color: #fff;
        line-height: 26px;
        font-size: 12px;
        border-radius: 5px;
        margin-right: 10px;
        cursor: pointer;

        span {
          margin-left: 3px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>