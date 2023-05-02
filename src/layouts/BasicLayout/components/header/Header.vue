<template>
    <header class="w-full flex justify-center items-center fixed top-0 left-0 px-3 z-[10000] group"
         :class="[isHomeView?'home absolute':'fixed bg-white']">
        <div class="container h-16 lg:h-24 p-2 lg:p-3 flex items-center">
            <img src="/assets/images/mainlogo.png" class="h-4/6" alt="Logo">
            <div class="flex-grow"></div>

            <div class="hidden lg:flex text-2xl group-[.home]:text-white justify-between flex-grow max-w-lg font-light">
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

            <div class="hidden lg:flex ml-20" v-if="!profile.isAuthed">
                <button
                        class="h-12 group-[.home]:bg-white bg-gray-200 tracking-wider rounded-3xl px-6 text-xl"
                        @click="route.name === 'home'?changeAction('sign-in'):router.push({name: 'home', query: {action: 'sign-in'}})"
                >
                    {{ t('header.login') }}
                </button>
                <button
                        class="h-12 group-[.home]:bg-white/30 bg-main  tracking-wider rounded-3xl px-6 text-xl text-white ml-5"
                        @click="route.name === 'home'?changeAction('sign-up'):router.push({name: 'home', query: {action: 'sign-up'}})"
                >
                    {{ t('header.sign-up') }}
                </button>
            </div>

            <main-header-account v-else>

            </main-header-account>

        </div>
    </header>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {useRoute, useRouter} from "vue-router";
import {computed} from "vue";
import {useProfileStore} from "@/store/modules/profile";
import MainHeaderAccount from "./HeaderAccount.vue";
import {useRouterQuery} from "@/composables/useRouterQuery";
import {QueryAction} from "@/views/home/model";

const {t} = useI18n()
const route = useRoute()
const router = useRouter()
const profile = useProfileStore()

const isHomeView = computed(() => route.name === 'home')

const {query: action, changeQuery: changeAction} = useRouterQuery<QueryAction>('action')


</script>

<style scoped>

</style>