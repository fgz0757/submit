import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "Login",
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/home",
    name: "home",
    redirect: "/1",
    component: () => import("../views/HomeView.vue"),
    children: [
      { path: "/1", name: "zy", component: () => import("../components/home.vue") },
      { path: "/2", name: "table", component: () => import("../components/table.vue") },
      { path: "/3", name: "tab", component: () => import("../components/tab.vue") },
      {
        path: "/4", name: "form", redirect: "4-1", component: () => import("../components/forms.vue"),
        children: [
          { path: "4-1", name: "jbForm", component: () => import("../components/form.vue") },
          {
            path: "4-2", name: "threeForm", component: () => import("../components/formItems.vue"),
            children: [
              { path: "4-2-1", name: "text", component: () => import("../components/richText.vue") },
              { path: "4-2-2", name: "mark", component: () => import("../components/markDown.vue") },
            ]
          },
          { path: "4-3", name: "fail", component: () => import("../components/textFiles.vue") },
        ]
      },
      { path: "/5", name: "icon", component: () => import("../components/icon.vue") },
      { path: "/6", name: "echart", component: () => import("../components/echart.vue") },
      {
        path: "/7", name: "tz", component: () => import("../components/draggble.vue"),
        children: [
          { path: "7-1", name: "tzList", component: () => import("../components/dragList.vue") },
          { path: "7-2", name: "tzAlert", component: () => import("../components/dragAlert.vue") },
        ]
      },
      { path: "/8", name: "lang", component: () => import("../components/lang.vue") },
      {
        path: "/9", name: "cw", component: () => import("../components/cwPage.vue"),
        children: [
          { path: "9-1", name: "qx", component: () => import("../components/jurisdiction.vue") },
          { path: "9-2", name: "page", component: () => import("../components/page.vue") },
        ]
      },
      { path: "/10", name: "user", component: () => import("../components/author.vue") },
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
