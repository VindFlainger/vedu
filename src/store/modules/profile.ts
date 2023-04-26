import {defineStore} from "pinia";
import {RemovableRef, useLocalStorage} from "@vueuse/core";

import fetchAuth from '../../api/auth'
import fetchProfile from '../../api/profile'
import {ResUserInfoImage} from "../../api/profile/model";
// @ts-ignore
import {UserGender, UserPrivilege, UserRole} from "../../api/global.d.ts";
import {authedRoutes, instructorRoutes} from "../../router/router.config";


export interface ProfileState {
    refreshToken: RemovableRef<string>,
    accessToken: RemovableRef<string>,
    userId: RemovableRef<string>,
    expiresIn: number,
    sessionRefreshing: boolean,

    isGetUserInfo: boolean
    name: string,
    surname: string,
    avatar: ResUserInfoImage[],
    gender: UserGender,
    role: UserRole,
    privilege: UserPrivilege,
}

export const useProfileStore = defineStore('profile', {
    state: (): ProfileState => ({
        refreshToken: useLocalStorage<string>('refresh_token', ''),
        accessToken: useLocalStorage<string>('access_token', ''),
        userId: useLocalStorage<string>('user_id', ''),
        expiresIn: 0,
        sessionRefreshing: false,

        isGetUserInfo: false,
        name: '',
        surname: '',
        avatar: [],
        gender: 0,
        role: 0,
        privilege: 0
    }),
    getters: {
        isAuthed(): boolean {
            return !!this.refreshToken
        },
        isSessionActive() {
            return () => !!this.expiresIn && Date.now() >= this.expiresIn
        },
        isStudent(): boolean {
            return this.role === UserRole.Student
        },
        isInstructor(): boolean {
            return this.role === UserRole.Instructor
        }
    },
    actions: {
        async signIn(login: string, password: string, errorCodeCallback: (code: number) => void) {
            try {
                const response = await fetchAuth.sign_in(
                    {
                        data: {
                            password,
                            login,
                            fingerprint: window.navigator.userAgent
                        },
                        options: {
                            errorCodeCallback: errorCodeCallback,
                            ignoreError: true
                        }
                    }
                )

                this.$patch({
                    refreshToken: response.refreshToken,
                    accessToken: response.accessToken,
                    userId: response.id,
                })

            } catch (err) {
                throw err
            }

        },
        signOut() {
            this.refreshToken = ''
            this.accessToken = ''
            this.userId = ''
        },
        async getUserInfo() {
            try {
                const response = await fetchProfile.user_info()
                this.$patch({
                    name: response.name,
                    surname: response.surname,
                    gender: response.gender,
                    role: response.role,
                    avatar: response.avatar,
                    privilege: response.privilege,
                })

                this.isGetUserInfo = true
            } catch (err) {

            }
        },
        async buildRoutes() {
            const routes = []
            if (this.isStudent) {
                routes.push(...instructorRoutes)
            }
            if (this.isInstructor) {
                routes.push(...instructorRoutes)
            }
            if (this.isAuthed) {
                routes.push(...authedRoutes)
            }

            return routes
        }
    }
})