<template>
  <div class="top-title">
    <el-icon color="#000"><rank /></el-icon>
    <span>拖拽组件 / 拖拽排序</span>
  </div>
  <div class="count">
    <div class="top">
      Vue.Draggable：基于 Sortable.js 的 Vue 拖拽组件。 访问地址：<a
        href="https://www.csdn.net/tags/OtTaEg4sNTkxMTMtYmxvZwO0O0OO0O0O.html"
        >Vue.Draggable</a
      >
    </div>
    <div class="cont">
      <div>
        <draggable
          v-model="myArray1"
          group="people"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
        >
          <template #item="{ element }">
            <div class="li color1">{{ element.name }}</div>
          </template>
        </draggable>
      </div>
      <div>
        <draggable
          v-model="myArray2"
          group="people"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
        >
          <template #item="{ element }">
            <div class="li color2">{{ element.name }}</div>
          </template>
        </draggable>
      </div>
      <div>
        <draggable
          v-model="myArray3"
          group="people"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
        >
          <template #item="{ element }">
            <div class="li color3">{{ element.name }}</div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import draggable from "vuedraggable";
import { useRoute } from "vue-router";
import ff from "../commonality/index";
export default {
  components: { draggable },
  setup() {
    let rou = useRoute();
    ff(rou.path, rou.name);
    const data = reactive({
      drag: false,
      myArray1: [
        { id: 1, name: "丽丽" },
        { id: 2, name: "阿龙" },
        { id: 3, name: "小明" },
      ],
      myArray2: [
        { id: 1, name: "花花" },
        { id: 2, name: "小智" },
        { id: 3, name: "小美" },
      ],
      myArray3: [
        { id: 1, name: "小亮" },
        { id: 2, name: "慧慧" },
        { id: 3, name: "张三" },
      ],
    });
    return {
      ...toRefs(data),
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
  .cont {
    height: 300px;
    display: flex;
    justify-content: space-evenly;
    & > div {
      width: 30%;
      padding: 0 20px;
      box-sizing: border-box;
      border-radius: 5px;
      background: #eef1f6;
      overflow: auto;
      .li {
        height: 30px;
        font-size: 22px;
        line-height: 30px;
        background: #fff;
        border: 1px solid #000;
        cursor: pointer;
        text-align: center;
        border-radius: 5px;
        margin-top: 10px;
      }
      .color1 {
        color: red;
      }
      .color2 {
        color: greenyellow;
      }
      .color3 {
        color: #20a0ff;
      }
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>