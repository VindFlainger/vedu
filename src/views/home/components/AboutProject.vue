<template>
    <div class="flex flex-col items-center">


        <div class="max-w-[750px]">
            <p class="text-5xl font-bold text-center">
                {{ t('home.success.title') }}
            </p>
            <p class="text-lg mt-4 text-center">
                {{ t('home.success.text') }}
            </p>
        </div>
        <div class="flex justify-center mt-14 flex-wrap w-full">
            <div
                    class="flex flex-col items-center m-10"
                    v-for="metric in metrics"
                    :key="metric.name"
            >
                <p class="text-8xl bg-[linear-gradient(90deg,_#136CB5_0%,_#49BBBD_100%)] text-transparent bg-clip-text">
                    {{ metric.indicator }}</p>
                <p class="text-3xl text=[#010514] text-center">{{ metric.name }}</p>

            </div>
        </div>


        <div class="mt-28 flex flex-col items-center">
            <p class="text-center">
                <span class="text-[#2F327D] text-3xl font-bold">{{ t('home.features.title-1') }}</span> <span
                    class="text-[#00CBB8] text-3xl font-bold">{{ t('home.features.title-2') }}</span>
            </p>
            <p class="text-2xl text-[#696984] mt-5 text-center w-[80%]">
                {{ t('home.features.subtitle') }}
            </p>
            <div class="flex justify-center flex-wrap mt-32 max-w-6xl">
                <div
                        class="max-w-md md:basis-[40%] xl:basis-[30%] m-3 mt-8 relative min-h-[430px] p-9 shadow-[0_0_15px_rgb(0_0_0_/_0.1)] rounded-2xl"
                        v-for="feature in features"
                        :key="feature.title"
                >
                    <div
                            class="absolute flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 rounded-full -translate-y-1/2 top-0 left-[50%] -translate-x-1/2 "
                            :style="`background-color: ${feature.color}`"
                    >
                        <component
                                class="w-8 h-8 lg:w-12 lg:h-12 text-white"
                                :is="feature.icon"
                        ></component>
                    </div>
                    <div>
                        <p class="text-[#2F327D] text-3xl font-medium text-center mt-20">
                            {{ feature.title }}
                        </p>
                        <p class="mt-6 text-xl text-[#696984] text-center">
                            {{ feature.text }}
                        </p>
                    </div>

                </div>
            </div>
        </div>

        <div class="mt-36 max-w-6xl">
            <p class="text-center">
                <span class="text-[#2F327D] text-3xl font-bold">
                    {{ t('home.about.title-1') }}
                </span> <span class="text-[#00CBB8] text-3xl font-bold">
                    {{ t('home.about.title-2') }}
                </span>
            </p>
            <p class="mt-5 text-center text-[#696984] text-2xl">
                {{ t('home.about.subtitle') }}
            </p>

            <div class="flex  flex-wrap justify-between mt-16">
                <div class="mt-5 relative flex items-center justify-center flex-initial basis-full md:basis-5/12  h-[300px] rounded-3xl overflow-hidden bg-black">
                    <img class="absolute h-full w-full object-cover opacity-60"
                         src="/assets/images/home-instructors.png"
                         alt="">
                    <div class="flex flex-col items-center relative z-10 ">
                        <p class="text-3xl font-bold text-white">
                            {{ t('home.about.for-instructors') }}
                        </p>
                        <button class="mt-4 outline-none ring-1 ring-white p-6 rounded-full font-medium text-xl text-white">
                            {{ t('home.about.start-class') }}
                        </button>
                    </div>
                </div>
                <div class="mt-5 relative flex items-center justify-center basis-full md:basis-5/12 h-[300px] rounded-3xl overflow-hidden bg-black">
                    <img class="absolute h-full w-full object-cover opacity-60" src="/assets/images/home-students.png"
                         alt="">
                    <div class="flex flex-col items-center relative z-10 ">
                        <p class="text-3xl font-bold text-white">
                            {{ t('home.about.for-students') }}
                        </p>
                        <button class="mt-4 outline-none bg-sky-400/60 p-6 rounded-full font-medium text-xl text-white">
                            {{ t('home.about.start-class') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap items-center justify-between mt-32 max-w-5xl">
            <div class="md:basis-6/12 max-md:mt-4">
                <p class="text-3xl font-medium">
                        <span class="text-[#2F327D]">
                            {{ t('home.about.compare-title-1') }}
                        </span> <span class="text-[#00CBB8]">
                            {{ t('home.about.compare-title-2') }}
                         </span>
                </p>
                <p class="mt-8 text-[#696984]">
                    {{ t('home.about.compare-text') }}
                </p>
                <router-link class="inline-block underline text-[#696984] mt-8" to="to>">
                    {{ t('home.about.learn-more') }}
                </router-link>
            </div>
            <div class="relative max-md:order-first md:basis-5/12">
                <img class="indent-0" src="/assets/images/home-class.png" alt="">
            </div>
        </div>

        <div>

        </div>
    </div>

</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import {DocumentTextIcon, CalendarDaysIcon, UserGroupIcon} from "@heroicons/vue/24/outline";

const {t} = useI18n()

const metrics = ref([
    {
        indicator: '15K+',
        name: t('home.success.metrics.students')
    },
    {
        indicator: '75%',
        name: t('home.success.metrics.success')
    },
    {
        indicator: '35',
        name: t('home.success.metrics.questions')
    },
    {
        indicator: '26',
        name: t('home.success.metrics.experts')
    },
    {
        indicator: '16',
        name: t('home.success.metrics.experience')
    }
])


const features = ref([
    {
        icon: DocumentTextIcon,
        title: t('home.features.items.item-1-title'),
        text: t('home.features.items.item-1-text'),
        color: '#5B72EE'
    },
    {
        icon: CalendarDaysIcon,
        title: t('home.features.items.item-2-title'),
        text: t('home.features.items.item-2-text'),
        color: '#00CBB8'
    },
    {
        icon: UserGroupIcon,
        title: t('home.features.items.item-3-title'),
        text: t('home.features.items.item-3-text'),
        color: '#29B9E7'
    }
])

</script>

<style scoped>


</style>