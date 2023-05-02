<template>
    <router-link
        class="p-5 bg-white rounded-3xl shadow-[0_0_10px_black] shadow-black/20 hover:scale-105 duration-300"
        :to="{}"
    >
        <img class="rounded-3xl overflow-hidden" :src="img" alt="">
        <div class="flex justify-between mt-3">
            <div>
                <img
                        class="w-5 h-5 inline-block"
                        :src="props.tag.icon" alt="">
                <span class="ml-2 text-grey text-sm">
                    {{ props.tag.name }}
                </span>
            </div>
            <div>
                <ClockIcon class="w-5 h-5 inline-block"></ClockIcon>
                <span class="ml-1 text-grey text-sm">
                    3 Month
                </span>
            </div>
        </div>
        <p class="mt-5 text-2xl font-medium">
            {{ props.title }}
        </p>
        <p class="mt-5 text-lg text-grey" v-html="props.content"></p>
        <div class="flex justify-between items-center mt-5">
            <div class="flex items-center">
                <Avatar class="h-12 w-12" :src="props.author.avatar"></Avatar>
                <span class="ml-3 font-bold">
                    {{ props.author.name }}
                 </span>
            </div>
            <p class="flex items-center">
                <EyeIcon class="inline-block w-5 h-5 text-[#49BBBD]"></EyeIcon>
                <span class="inline-block ml-3 text-grey">{{ props.views }}</span>
            </p>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import {ClockIcon, EyeIcon} from "@heroicons/vue/24/outline";
import Avatar from '@/components/UI/Avatar/index.vue'

const props = withDefaults(defineProps<
    {
        tag: {
            name: string,
            icon: string
        },
        date: string,
        title: string,
        content: string,
        img: string,
        author: {
            id: string,
            name: string,
            avatar: string
        },
        views: number
    }
>(), {})

</script>

<style scoped>

</style>