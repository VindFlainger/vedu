import {RouteRecordRaw} from "vue-router";
import BasicLayout from '../layouts/BasicLayout/index.vue'
// @ts-ignore
import {UserPrivilege} from "../api/global.d.ts";

export const routes: RouteRecordRaw[] = [
    {
        name: 'app',
        path: '/app',
        component: BasicLayout,
        children: [
            {
                name: 'home',
                path: 'home',
                component: () => import('../views/home/index.vue'),
                meta: {
                    disableAnimation: true
                }
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
    }
]

export const finalRoutes: RouteRecordRaw[] = [
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
    },
    {
        path: '/404',
        component: () => import('../views/404.vue'),
    },
]

export const authedRoutes: RouteRecordRaw[] = [
    {
        name: 'donate',
        path: 'donate',
        component: () => import('../views/donate/index.vue'),
    }
]

export const studentRoutes: RouteRecordRaw[] = [
    {
        name: 'classroom',
        path: 'classroom',
        component: () => import('../views/student/classroom/index.vue')
    }
]

export const instructorRoutes: RouteRecordRaw[] = [
    {
        name: 'classroom',
        path: 'classroom',
        component: () => import('../views/student/classroom/index.vue'),
        meta: {
            privilege: UserPrivilege.AdvancedPlus
        }
    }
]

