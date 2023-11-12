import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/page1/index.vue",
    component: () => import("@/pages/page1/index.vue"),
  },
  {
    path: "/page2/index.vue",
    component: () => import("@/pages/page2/index.vue"),
  },
];

export const createRouters = () => {
  return createRouter({
    history: import.meta.env.SSR
      ? createMemoryHistory("/test/")
      : createWebHistory("/test/"),
    routes,
  });
};

export default routes;
