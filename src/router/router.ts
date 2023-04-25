import {createRouter, createWebHistory} from "vue-router";
import routes from "./router.config";


const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

router.beforeEach(async ()=>{

})


export default router

