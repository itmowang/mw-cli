import App from './App.vue';
import {router} from "@/router";
import {ViteSSG} from 'vite-ssg'
// import { createApp } from 'vue';

export const createApp = ViteSSG(App,{ 
    routes:router
})