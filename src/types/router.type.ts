import { routes } from "@/router/routes";
import { RouteParams, RouteRecordRaw } from "vue-router";

export type AppRouteRecord = Omit<RouteRecordRaw, "name" | "children"> & {
  name: string;
  children?: readonly AppRouteRecord[];
};

export type GetRouteName<T extends AppRouteRecord> = T extends {
  children: readonly AppRouteRecord[];
}
  ? T["name"] | GetRoutesNames<T["children"]>
  : T["name"];

type TRoutes = typeof routes;
type TRoutesNames = GetRoutesNames<TRoutes>;

export type TRouteTo = {
  name: TRoutesNames;
  params?: RouteParams;
};

export type GetRoutesNames<T extends readonly AppRouteRecord[]> = GetRouteName<
  T[number]
>;
