import { useStore } from "vuex";
export default function (x, y) {
    let store = useStore();
    switch (y) {
        case "zy": y="系统首页";
            break;
        case "table": y="基础表格";
            break;
        case "tab": y = "tab选项卡";
            break;
        case "jbForm": y = "基本表单";
            break;
        case "text": y = "富文本编辑器";
            break;
        case "mark": y = "MackDodw编辑器";
            break;
        case "fail": y = "文件上传";
            break;
        case "icon": y = "自定义图标";
            break;
        case "echart": y = "echart图表";
            break;
        case "tzList": y = "拖拽列表";
            break;
        case "tzAlert": y = "拖拽弹框";
            break;
        case "lang": y = "国际化功能";
            break;
        case "qx": y = "权限测试";
            break;
        case "page": y = "404页面";
            break;
        case "user": y = "支持作者";
            break;
    }
    store.commit("addBtn", { path: x, text: y });
}