import { createRouter, createWebHistory } from 'vue-router';

const routes = [{ path: '/', component: () => import(/* webpackChunkName: "app" */ '@/App.vue') }];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,

    routes,
});

export default router;
