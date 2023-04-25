import {defineStore} from "pinia";
import {useLocalStorage} from "@vueuse/core";

import fetchAuth from '../../api/auth'
import fetchProfile from '../../api/profile'
import {UserRole} from "../../api/global";


export const useProfileStore = defineStore('profile', {
    state: () => ({
        login: useLocalStorage<string>('login', ''),
        refreshToken: useLocalStorage<string>('refresh_token', ''),
        accessToken: useLocalStorage<string>('access_token', ''),
        userId: useLocalStorage<string>('user_id', ''),
        role: useLocalStorage<UserRole>('role', 0),
        expiresIn: 0,
        sessionRefreshing: false,
        name: '',
        surname: '',
        avatar: [],
        gender: 0
    }),
    getters: {
        authed: (state) => state.refreshToken,
        isSessionActive: (state) => {
            return () => !!state.expiresIn && Date.now() >= state.expiresIn
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
                    login: response.login,
                    refreshToken: response.refreshToken,
                    accessToken: response.accessToken,
                    userId: response.id,
                    role: response.role
                })
            } catch (err) {
                throw err
            }

            await this.getAuthedData()
        },
        signOut() {
            this.login = ''
            this.refreshToken = ''
            this.accessToken = ''
            this.userId = ''
        },
        async getAuthedData() {
            try {
                const response = await fetchProfile.info_instructor()
                this.$patch({
                    name: response.name,
                    surname: response.surname,
                    gender: response.gender
                })
            } catch (err) {

            }
        }
    }
})