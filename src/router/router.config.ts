import {RouteRecordRaw} from "vue-router";
import BasicLayout from '../layouts/BasicLayout/index.vue'

const constantRoutes: RouteRecordRaw[] = [
    {
        name: 'app',
        path: '/app',
        component: BasicLayout,
        children: [
            {
                name: 'home',
                path: 'home',
                component: () => import('../views/home/index.vue')
            },
            {
                name: 'blog',
                path: 'blog',
                component: () => import('../views/blog/index.vue')
            },
            {
                name: 'about',
                path: 'about',
                component: () => import('../views/about/index.vue')
            },
            {
                name: 'courses',
                path: 'courses',
                component: () => import('../views/courses/index.vue')
            },
        ]
    },
]

export default constantRoutes