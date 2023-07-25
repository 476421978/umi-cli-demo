export default [
  {
    path: "/",
    component: "../layouts/BasicLayout",
    routes: [
      { path: "/", component: "./index" },
      { path: "/list", component: "./list/list" },
    ],
  },
  {
    path: "/user",
    component: "../layouts/SimpleLayout",
    routes: [
      { path: "/user", redirect: "/user/login" },
      { path: "/user/login", component: "./User/Login" },
    ],
  },
]
