import { appTitle } from "@/helpers";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
export { route } from "./routes";

export const router = createRouter({
  routes: routes as unknown as RouteRecordRaw[],
  history: createWebHistory(),
});

router.beforeEach((to, _from, next) => {
  document.title = to.meta?.title
    ? appTitle(to.meta.title as string)
    : appTitle();

  next();
});
