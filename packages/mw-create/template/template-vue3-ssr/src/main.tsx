import { createSSRApp } from "vue";
import { createRouters } from "@/router";
import App from "./App.vue";

export const createApp = () => {
  const app = createSSRApp(App);
  const router = createRouters();
  return { app, router };
};
