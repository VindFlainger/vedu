import {AxiosRequestConfig} from "axios/index";
import axios from 'axios'
import {useRoute, useRouter} from "vue-router";
import {useProfileStore} from "../../../store/modules/profile";
import {axiosBase} from "./axiosBase";

interface AxiosRequestDataConfig extends AxiosRequestConfig {
    needAuth?: boolean
}

export const axiosPipeline = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_HOST
})

export const addAuthInterceptor = function () {
    const profile = useProfileStore()

    const router = useRouter()
    const route = useRoute()


    // @ts-ignore
    axiosPipeline.interceptors.request.use(async (config: AxiosRequestDataConfig) => {
        return new Promise((resolve, reject) => {
            if (config?.needAuth && !profile.isSessionActive()) {
                if (profile.sessionRefreshing) {
                    const callback = () => {
                        if (!profile.sessionRefreshing) {
                            if (profile.isSessionActive()) resolve(config)
                            else reject()
                        } else {
                            setTimeout(callback, 100)
                        }
                    }
                    setTimeout(callback, 100)
                } else {
                    profile.sessionRefreshing = true

                    axiosBase.post('/auth/refresh', {
                        refreshToken: profile.refreshToken,
                        fingerprint: window.navigator.userAgent
                    })
                        .then(resp => {
                            profile.expiresIn = Date.now() + (resp.data.expiresIn * 0.8)
                            profile.refreshToken = resp.data.refreshToken
                            resolve(config)
                        })
                        .catch(err => reject(err))
                        .finally(() => {
                            profile.sessionRefreshing = false
                        })
                }
            } else {
                resolve(config)
            }
        })
            .catch((err) => {
                if (err?.response) {
                    if (err.response.data.code === 104) {
                        profile.signOut()
                        if (!route.query.redirect) router.push({
                            name: 'home',
                            query: {redirect: route.fullPath}
                        })
                    } else {
                        /* store.dispatch(addAlert, {
                             type: 'request',
                             ignoreMute: true,
                             content: {
                                 type: 'error',
                                 error: {
                                     code: err.response.data.code,
                                     message: err.response.data.message
                                 }
                             }
                         })*/
                    }
                }
            })
    })
}

