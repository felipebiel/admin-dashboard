import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "layout" */ '@/layouts/LayoutBase.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,

    routes,
});

export default router;
