<template>
    <div class="bg-[#9DCCFF]/40">
        <ui-container class="py-16 flex justify-center">
            <div class="relative 2xl:text-2xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-7xl">

                <p class="text-2xl md:text-3xl font-medium text-black/80">
                    {{ t('blog.hot') }}
                </p>
                <router-link :to="{}" class="absolute right-0 top-0 text-md md:text-xl text-[#49BBBD] font-bold">
                    {{ t('blog.see-all') }}
                </router-link>

                <Carousel
                        class="-m-4 mt-10"
                        ref="carousel"
                        :items-to-show="onBreakpoint({sm: 1, md: 2})"
                        :items-to-scroll="1"
                        snapAlign="start">
                    <Slide
                            class="p-5"
                            v-for="post in props.posts"
                            :key="post.id"
                    >
                        <div class="bg-white p-4 sm:p-8 rounded-3xl">
                            <img class="rounded-3xl" :src="post.img" alt="">

                            <p class="mt-3 text-left text-xl md:text-2xl font-medium text-black/80">
                                {{ post.title }}
                            </p>


                            <div class="ml-3 mt-4 flex items-center">
                                <Avatar class="h-12 w-12 md:h-16 md:w-16" :src="post.author.avatar"></Avatar>
                                <p class="ml-3 font-bold text-lg">{{ post.author.name }}</p>
                            </div>

                            <p
                                    class="max-md:text-sm mt-3 md:mt-6 text-grey text-justify line-clamp-3"
                                    v-html="post.content"
                            ></p>

                            <div class="flex justify-between mt-6 md:mt-11">
                                <router-link :to="{}" class="text-grey underline">{{
                                    t('blog.read-more')
                                    }}
                                </router-link>
                                <p class="flex items-center">
                                    <EyeIcon class="inline-block w-5 h-5 text-[#49BBBD]"></EyeIcon>
                                    <span class="inline-block ml-3 text-grey">{{ post.views }}</span>
                                </p>
                            </div>
                        </div>
                    </Slide>
                    <template #addons="slider">
                        <div class="p-5 flex justify-end items-center">
                            <button
                                    class="p-1 md:p-3 bg-[#49BBBD] rounded-2xl"
                                    :class="{'bg-opacity-40  cursor-default': !slider.currentSlide}"
                                    @click="carousel.prev()">
                                <ChevronLeftIcon class="text-white w-8"></ChevronLeftIcon>
                            </button>
                            <button
                                    class="ml-3 p-1 md:p-3 bg-[#49BBBD] rounded-2xl"
                                    :class="{'bg-opacity-40  cursor-default': slider.currentSlide === slider.maxSlide}"
                                    @click="carousel.next()"
                            >
                                <ChevronRightIcon class="text-white w-8"></ChevronRightIcon>
                            </button>
                        </div>
                    </template>

                </Carousel>
            </div>
        </ui-container>
    </div>
</template>

<script setup lang="ts">
import UiContainer from "@/components/UI/layout/UiContainer.vue";
import {useI18n} from "vue-i18n";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from 'vue3-carousel'
import Avatar from '@/components/UI/Avatar/index.vue'
import {useBreakpoint} from "@/composables/useBreakpoint";
import {EyeIcon, ChevronRightIcon, ChevronLeftIcon} from "@heroicons/vue/24/outline";
import {ref} from "vue";

const carousel = ref(null)
const {onBreakpoint} = useBreakpoint()

const props = withDefaults(defineProps<{
    posts?: {
        id: string,
        title: string,
        content: string,
        img: string,
        views: number,
        author: {
            name: string,
            avatar?: string
        }
    }[]
}>(), {
    posts: () => []
})


const {t} = useI18n()


</script>

<style scoped>

</style>