import {createRouter, createWebHistory} from "vue-router";
import {finalRoutes, routes} from "./router.config";
import {useProfileStore} from "@/store/modules/profile";


export const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

const whitelist = ['blog', 'about', 'courses', 'home', 'test', 'posts' ]

router.beforeEach(async (to, _, next) => {
    const profile = useProfileStore()
    if (profile.isAuthed) {
        if (profile.isGetUserInfo) {
            const maxPrivilege = Math.max(...to.matched.map(route => route.meta.privilege as number | undefined || 0))

            if (profile.privilege < maxPrivilege) {
                next({name: 'donate'})
            } else {
                next()
            }
        } else {
            await profile.getUserInfo()


            const routes = await profile.buildRoutes();


            routes.forEach(route => {
                router.addRoute('app', route)
            })

            finalRoutes.forEach(route => {
                router.addRoute(route)
            })

            next({...to, replace: true});
        }
    } else {
        if (whitelist.includes(to.name as string)) {
            next()
        } else {
            next({
                name: 'home',
                query: {
                    action: 'sign-in'
                }
            })
        }
    }
})

