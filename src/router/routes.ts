import { AppRouteRecord, TRouteTo } from "@/types";
import VAddTodoViewVue from "@/views/VAddTodoView.vue";
import VHomeViewVue from "@/views/VHomeView.vue";
import VNotFoundViewVue from "@/views/VNotFoundView.vue";
import VTodoViewVue from "@/views/VTodoView.vue";

export const routes = [
  {
    name: "home",
    path: "/",
    component: VHomeViewVue,
  },
  {
    name: "addTodo",
    path: "/add-todo",
    component: VAddTodoViewVue,
    meta: {
      title: "Add Todo",
    },
  },
  {
    name: "todo.id",
    path: "/todo/:id",
    component: VTodoViewVue,
  },
  {
    name: "notFound",
    path: "/:notFound",
    component: VNotFoundViewVue,
    meta: {
      title: "Not Found",
    },
  },
] as const satisfies readonly AppRouteRecord[];

export const route = (to: TRouteTo) => {
  return to;
};
