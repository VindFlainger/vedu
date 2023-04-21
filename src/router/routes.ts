import {RouteRecordRaw} from "vue-router";


const routes: RouteRecordRaw[] =
    [
        {
            name: 'main',
            path: '/main',
            component: () => import("../views/MainView.vue")
        },
        {
            name: 'test',
            path: '/test',
            component: () => import("../views/TestView.vue")
        },
        {
            name: 'home',
            path: '/home',
            component: () => import("../views/home/index.vue")
        },
        {
            name: 'blog',
            path: '/blog',
            component: () => import("../views/blog/index.vue")
        },
        {
            name: 'courses',
            path: '/courses',
            component: () => import("../views/CoursesView.vue")
        },
        {
            name: 'about',
            path: '/about',
            component: () => import("../views/AboutView.vue")
        },
        {
            name: 'test',
            path: '/test',
            component: () => import("../views/TestView.vue")
        },

    ]

export default routes