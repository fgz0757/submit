<template>
  <div class="top-title">
    <el-icon color="#000"><DocumentCopy /></el-icon>
    <span>tab选项卡</span>
  </div>
  <div class="cont">
    <ul>
      <li
        v-for="(el, i) in tab.title"
        :key="i"
        :class="i == x ? 'active' : ''"
        @click="fn(i)"
      >
        {{ el }}
      </li>
    </ul>
    <div>
      <div v-if="x == 0">
        <div class="box" v-for="el in tab.cont.unread" :key="el.id">
          <p>{{ el.text }}</p>
          <div>
            <span>{{ el.timer }}</span>
            <el-button @click="unreadFn(el.id)">标为已读</el-button>
          </div>
        </div>
        <div class="mar-t">
          <el-button type="primary" @click="unreadAllFn"
            >全部标为已读</el-button
          >
        </div>
      </div>
      <div v-if="x == 1">
        <div class="box" v-for="el in tab.cont.read" :key="el.id">
          <p>{{ el.text }}</p>
          <div>
            <span>{{ el.timer }}</span>
            <el-button type="danger" @click="deleFn(el.id)">删除</el-button>
          </div>
        </div>
        <div class="mar-t">
          <el-button type="danger" @click="deleAllFn">全部删除</el-button>
        </div>
      </div>
      <div v-if="x == 2">
        <div class="box" v-for="el in tab.cont.dele" :key="el.id">
          <p>{{ el.text }}</p>
          <div>
            <span>{{ el.timer }}</span>
            <el-button @click="restoreFn(el.id)">还原</el-button>
          </div>
        </div>
        <div class="mar-t">
          <el-button type="danger" @click="clearFn">清空回收站</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, reactive, toRefs } from "vue";
import ff from "../commonality/index";
export default {
  setup() {
    let store = useStore();
    let rou = useRoute();
    ff(rou.path, rou.name);
    let obj = reactive({
      x: 0,
    });
    let tab = computed(() => store.state.tab);
    function fn(i) {
      obj.x = i;
    }
    //标为已读
    function unreadFn(id) {
      console.log(id);
      store.commit("unread", id);
    }
    //全部标为已读
    function unreadAllFn() {
      store.commit("unreadAll");
    }
    //删除某条数据
    function deleFn(id) {
      console.log(id);
      store.commit("deleTab", id);
    }
    function deleAllFn() {
      store.commit("deleAllTab");
    }
    //还原某条数据
    function restoreFn(id) {
      store.commit("restoreTab", id);
    }
    //清空回收站
    function clearFn() {
      store.commit("clearTab");
    }
    return {
      tab,
      ...toRefs(obj),
      fn,
      unreadFn,
      unreadAllFn,
      deleFn,
      deleAllFn,
      restoreFn,
      clearFn,
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
  padding: 30px;
  background: #fff;
  ul {
    display: flex;
    border-bottom: 3px solid #ccc;
    li {
      list-style: none;
      height: 50px;
      margin-right: 30px;
      line-height: 50px;
      position: relative;
      cursor: pointer;
    }
    .active {
      color: #409eff;
      &:before {
        content: "";
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        border-bottom: 3px solid #409eff;
      }
    }
  }
  .box {
    height: 50px;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: #409eff;
    }
    .el-button {
      margin-left: 30px;
    }
  }
  .mar-t {
    margin-top: 20px;
  }
}
</style>