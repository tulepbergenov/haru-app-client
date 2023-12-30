import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
export { route } from "./routes";

export const router = createRouter({
  routes: routes as unknown as RouteRecordRaw[],
  history: createWebHistory(),
});
