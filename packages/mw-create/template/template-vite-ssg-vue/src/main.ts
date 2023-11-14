import App from "./App.vue";
import { router } from "@/router";
import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import { RouteRecordRaw } from "vue-router";
// import { createApp } from 'vue';

export const createApp = ViteSSG(
  App,
  {
    routes: router,
  },
  ({ app, router, initialState }) => {
    const pinia = createPinia();
    app.use(pinia);
    // 设置  build 时间
    if(import.meta.env.SSR){
        initialState.pinia = pinia.state.value;
    }else{
        pinia.state.value = initialState.pinia || {}
    }

    // 访问路由对象
    router.beforeEach((to, from, next) => {
        next();
    })
  }
);

// 生成静态页面
export const includedRoutes = (paths:string[],routes:RouteRecordRaw[])=>{
    // build time
    return Promise.all(
        routes.map(async(route)=>{
            return route.path;
        })
    )
}