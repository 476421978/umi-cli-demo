import pageRoutes from "./router.config"

const plugins = [
  [
    "umi-plugin-react",
    {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: "runtime-routes-appjs",
      dll: true,
      routes: {
        exclude: [],
      },
      hardSource: true,
    },
  ],
]

export default {
  plugins,
  // 路由配置
  routes: pageRoutes,
}
