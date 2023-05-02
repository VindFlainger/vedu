<template>
    <div class="flex flex-col items-center bg-[#252641] py-4">
        <div class="relative mt-20 flex items-center w-80">
            <img class="h-16" src="/assets/images/mainlogo.png" alt="">
            <div class="w-1  bg-white"></div>
            <p class="relative ml-10 text-white font-bold text-xl before:content-['']
                      before:absolute before:h-full before:w-px before:bg-[#626381] before:-left-10"
            >
                {{ t('footer.virtual-class') }}
            </p>
        </div>
        <p class="text-[#B2B3CF] font-medium text-2xl mt-24 text-center">
            {{ t('footer.subscribe-title') }}
        </p>

        <div class="mt-5 flex max-md:flex-col items-center justify-between md:min-w-[500px]">
            <input
                    class="pl-4 bg-transparent ring-1 ring-[#83839A] rounded-full p-3 outline-none text-xl text-white"
                    type="text"
                    :placeholder="t('footer.email')"
            >
            <Button template="complete" class="outline-none py-3 max-md:mt-3 px-8">
                {{ t('footer.subscribe') }}
            </Button>
        </div>

        <div class="flex max-sm:flex-col md:space-x-5 mt-24">
            <router-link
                    class="relative text-[#B2B3CF] max-md:text-center max-md:before:hidden text-xl first:before:hidden before:absolute before:h-full before:w-px before:bg-[#626381] before:-left-2"
                    v-for="link in links"
                    :key="link.name"
                    :to="link.to"
            >
                {{ link.name }}
            </router-link>
        </div>
        <p class="mt-5 text-[#B2B3CF] text-xl text-center">
            {{ t('footer.copyright') }}
        </p>
    </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";
import Button from '@/components/UI/Button/index.vue'

const {t} = useI18n()

const links = [
    {
        to: {},
        name: t('footer.links.careers')
    },
    {
        to: {},
        name: t('footer.links.privacy-policy')
    },
    {
        to: {},
        name: t('footer.links.team-and-conditions')
    }
]

</script>

<style scoped>

</style>