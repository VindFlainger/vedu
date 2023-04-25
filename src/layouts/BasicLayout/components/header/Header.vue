<template>
    <div class="w-full h-24 flex justify-center items-center fixed top-0 left-0 px-3 z-50"
         :class="{'main': isHomeView, 'bg-main': isHomeView}">
        <div class="container h-24 flex items-center">
            <img src="/assets/images/mainlogo.png" class="h-4/6" alt="Logo">
            <div class="flex-grow"></div>

            <div class="text-2xl text-white flex justify-between flex-grow max-w-lg">
                <router-link :to="{name: 'home'}" class="leading-[48px]">
                    {{ t('header.home') }}
                </router-link>
                <router-link :to="{name: 'courses'}" class="leading-[48px]">
                    {{ t('header.courses') }}
                </router-link>
                <router-link :to="{name: 'blog'}" class="leading-[48px]">
                    {{ t('header.blog') }}
                </router-link>
                <router-link :to="{name: 'about'}" class="leading-[48px]">
                    {{ t('header.about') }}
                </router-link>
            </div>

            <div class="ml-20" v-if="!profile.authed">
                <button
                        class="h-12 bg-white tracking-wider rounded-3xl px-6 text-xl"
                        @click="changeAction('sign-in')"
                >
                    {{ t('header.login') }}
                </button>
                <button
                        class="h-12 bg-white/30 tracking-wider rounded-3xl px-6 text-xl text-white ml-5"
                        @click="changeAction('sign-up')"
                >
                    {{ t('header.sign-up') }}
                </button>
            </div>

            <main-header-account v-else>

            </main-header-account>

        </div>
    </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {useRoute, useRouter} from "vue-router";
import {computed} from "vue";
import {useProfileStore} from "../../../../store/modules/profile";
import MainHeaderAccount from "./HeaderAccount.vue";
import {useRouterQuery} from "../../../../composables/useRouterQuery";
import {QueryAction} from "../../../../views/home/model";

const {t} = useI18n()
const route = useRoute()
const router = useRouter()
const profile = useProfileStore()

const isHomeView = computed(() => route.name === 'home')

const {query: action, changeQuery: changeAction} = useRouterQuery<QueryAction>('action')


</script>

<style scoped>

</style>