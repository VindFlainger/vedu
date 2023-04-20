import TestView from "../views/TestView.vue";
import {RouteRecordRaw} from "vue-router";
import MainView from "../views/MainView.vue";
import HomeView from "../views/home/index.vue";
import BlogView from "../views/BlogView.vue";
import CoursesView from "../views/CoursesView.vue";
import AboutView from "../views/AboutView.vue";

const routes: RouteRecordRaw[] =
    [
        {
            name: 'main',
            path: '/main',
            component: MainView
        },
        {
            name: 'test',
            path: '/test',
            component: TestView
        },
        {
            name: 'home',
            path: '/home',
            component: HomeView
        },
        {
            name: 'blog',
            path: '/blog',
            component: BlogView
        },
        {
            name: 'courses',
            path: '/courses',
            component: CoursesView
        },
        {
            name: 'about',
            path: '/about',
            component: AboutView
        },
        {
            name: 'test',
            path: '/test',
            component: TestView
        },

    ]

export default routes