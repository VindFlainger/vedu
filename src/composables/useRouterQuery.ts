import {ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";


export function useRouterQuery<T>(name: string, init?: T) {
    const route = useRoute()
    const router = useRouter()

    if (init !== undefined && !route.query[name]) {
        router.push({name: route.name as string, params: route.params, query: {...route.query, ...{[name]: init}}})
    }

    const query = ref<T | undefined>(init)


    for (const [key, value] of Object.entries(route.query)) {
        if (key === name) {
            query.value = value
        }
    }

    watch(() => route.query, (newValue) => {
       query.value = newValue[name] as T | undefined
    })


    const changeQuery = ((value?: T)=>{
        router.push({name: route.name as string, params: route.params, query: {...route.query, ...{[name]: value}}})
    })

    return {
        query,
        changeQuery
    }
}