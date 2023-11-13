import { createRouter,createWebHistory,RouteLocationRaw, RouteRecord, RouteRecordRaw } from "vue-router";
import Index from '@/views/Index.vue'
import Home from '@/views/Home.vue'

export const router:RouteRecordRaw[] = [{
    path: "/",
    name: "Index",
    component: Index,
},
{
    path: "/Home",
    name: "Home",
    component: Index,
}
]


// export default createRouter({
//     history: import.meta.env.SSR ? undefined : createWebHistory(),
//     routes,
// })