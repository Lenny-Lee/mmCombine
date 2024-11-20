/*
 * @Author: Lenny
 * @Date: 2024-11-15 11:44:11
 * @FilePath: /umijs4332/.umirc.ts
 * @Description:
 */
import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "yarn",
  fastRefresh: true,  // 默认启用 React Fast Refresh 
  mfsu: false,
  mako: {},
  theme: {
    "primary-color": "rgba(92,106,158,1)",
    "@primary-hover": "#c4ebd4",
    "@primary-color-hover": "#c4ebd4",
    "@primary-select": "#bfd4f3",
  },
});
