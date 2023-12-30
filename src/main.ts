import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import VApp from "./VApp.vue";
import { router } from "./router";

createApp(VApp).use(router).mount("#app");
