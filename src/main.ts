import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import VApp from "./VApp.vue";
import { router } from "./router";
import { store } from "./store";

createApp(VApp).use(store).use(router).mount("#app");
