<template>
    <div class="h-[calc(100vh-96px)]">
        <div class="flex items-center h-[80%]">
            <div>
                <p class="text-3xl leading-10 max-w-sm sm:max-w-2xl sm:text-5xl sm:leading-[4.5rem] font-bold text-white">
                    <span class="text-[#F48C06]">{{ t('home.preview-title-studying')}}</span>
                    {{t('home.preview-title')}}
                </p>
                <p class="mt-8 text-black text-lg max-w-[300px] sm:max-w-xl sm:text-2xl">
                    {{t('home.preview-subtitle')}}
                </p>

                <div class="mt-12 flex max-md:flex-col items-start max-w-[600px] justify-between">
                    <Button template="complete" class="bg-main-light px-20 py-3 md:px-9 md:py-6 font-bold text-2xl">
                        <router-link :to="{}">
                            {{ t('home.join-button')}}
                        </router-link>
                    </Button>

                    <div class="flex items-center max-md:mt-10">
                        <router-link :to="{}">
                            <div class="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
                                <PlayIcon class="w-8 h-8 md:w-12 md:h-12 text-[#23BDEE]"></PlayIcon>
                            </div>
                        </router-link>
                        <p class="ml-8 text-2xl">{{t('home.watch-button')}}</p>
                    </div>
                </div>

            </div>
            <div>
                <img
                        class="hidden h-[800px] w-[600px] object-contain lg:block"
                        src="/assets/images/home-student.png">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {PlayIcon} from "@heroicons/vue/24/solid";
import Button from '@/components/UI/Button/index.vue'
import {useI18n} from "vue-i18n";

const {t} = useI18n()
</script>

<style scoped>

</style>