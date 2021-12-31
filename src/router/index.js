import { createRouter, createWebHistory } from 'vue-router';

const routes = [{ path: '/', name: 'Home', component: () => import(/* webpackChunkName: "home" */ '@/App.vue') }];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,

    routes,
});

export default router;
