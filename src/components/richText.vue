<template>
  <div class="top-title">
    <el-icon color="#000"><document /></el-icon>
    <span>表单 / 文本编辑器</span>
  </div>
  <div class="count">
    <div class="top">
      Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。 访问地址：<a
        href="http://jsdawn.gitee.io/vue3-tinymce"
        >vue-quill-editor</a
      >
    </div>
    <div class="cont">
      <vue3-tinymce v-model="content" :setting="setting" />
    </div>
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
    const state = reactive({
      content: "hello vue3-tinymce!",
      // editor 配置项
      setting: {
        height: 400, // editor 高度
        toolbar:
          "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
        toolbar_drawer: "sliding",
        quickbars_selection_toolbar:
          "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
        plugins: "link image media table lists fullscreen quickbars",
        fontsize_formats: "12px 14px 16px 18px",
        default_link_target: "_blank",
        link_title: false,
        nonbreaking_force_tab: true,
        // 以中文简体为例
        language: "zh_CN",
        language_url:
          "https://unpkg.com/@jsdawn/vue3-tinymce@1.1.6/dist/tinymce/langs/zh_CN.js",
      },
    });
    return {
      ...toRefs(state),
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