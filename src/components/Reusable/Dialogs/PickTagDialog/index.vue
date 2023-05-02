<template>
    <Dialog
            content-class="max-w-3xl selection:bg-none"
            bg-class="bg-[url('@/assets/images/backgrounds/pick-tag-dialog-background.svg')] opacity-10"
            @close="emit('close')"
    >
        <template #title>
            <p class="font-bold">
                <span class="text-[#2E317C]">{{ t('dialogs.pick-tag.title-1') }}</span> <span
                    class="text-[#00CBB8]">{{ t('dialogs.pick-tag.title-2') }}</span>
            </p>
        </template>
        <template #text>
            <div class="flex flex-nowrap">
                <div
                        v-if="activeTag"
                        class="mr-5 basis-1/3 min-w-[240px]"
                >
                    <div class="mt-5 space-y-2 w-full transition-all">

                        <div
                                class="group"
                                v-for="(subtag, index) in activeTag.subtags"
                                :key="subtag.value"
                                :style="`--duration: ${index*150 + 200}ms`"
                        >
                            <transition
                                    appear
                                    enter-active-class="subtag-duration"
                                    enter-from-class="-translate-x-full"
                                    enter-to-class="translate-x-0"
                            >
                                <div
                                        class="py-1 px-4 ring-1 ring-black cursor-pointer text-xl font-bold text-black/80  rounded-3xl"
                                        :key="subtag.value"
                                        @click="emit('changed-subtag', subtag); emit('close')"
                                >
                                    <span class="group-odd:text-[#00CBB8] group-even:text-[#2E317C]">#</span>
                                    {{ subtag.name }}
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
                <div class="flex-grow grid  md:grid-cols-4 place-content-start place-items-center gap-4">
                    <div
                            class="flex flex-col w-24 h-24 items-center p-5 rounded-3xl cursor-pointer"
                            :class="{'bg-sky-100/70': activeTag?.value === tag.value}"
                            v-for="tag in tags"
                            :key="tag.value"
                            @click="activeTag = tag"
                    >
                        <img
                                class="w-10 h-10"
                                :src="tag.icon"
                        >
                        <p class="text-center text-black/80 font-bold mt-2 leading-5">
                            {{ tag.name }}
                        </p>
                    </div>
                </div>
            </div>
        </template>
    </Dialog>
</template>

<script setup lang="ts">
import Dialog from '@/components/UI/Dialog/index.vue'
import {useI18n} from "vue-i18n";
import {ref} from "vue";


const {t} = useI18n()

interface SubTag {
    value: string,
    name: string
}

interface Tag {
    value: string,
    name: string,
    icon: string,
    subtags: SubTag[]
}


const emit = defineEmits<{
    (e: 'changed-subtag', k: SubTag): void,
    (e: 'close'): void
}>()


const activeTag = ref<Tag | undefined>()

const tags = ref<Tag[]>([
    {
        value: "design",
        name: 'Design',
        icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1683025260/emed47nv1oht56r4tvgz.png',
        subtags: [
            {
                name: 'UI/UX',
                value: 'ui/ux'
            }, {
                name: 'Motion',
                value: 'motion'
            }, {
                name: 'Web',
                value: 'web',
            }, {
                name: 'Classic',
                value: 'classic'
            },
        ]
    },
    {
        value: "math",
        name: 'Math',
        icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1683025260/mf2rf4gt7hl6zohqvvaq.png',
        subtags: [{
            name: 'Algebra',
            value: 'algebra'
        }, {
            name: 'Geometry',
            value: 'geometry'
        }, {
            name: 'Statistic',
            value: 'statistic',
        }, {
            name: 'Discrete Math',
            value: 'discrete Math'
        }]
    },
    {
        value: "backend",
        name: 'Backend',
        icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1683025260/ibfeiqsucp0lzprfjib9.png',
        subtags: [{
            name: 'UI/UX',
            value: 'ui/ux'
        }, {
            name: 'Motion',
            value: 'motion'
        }, {
            name: 'Web',
            value: 'web',
        }, {
            name: 'Classic',
            value: 'classic'
        }]
    },
    {
        value: "frontend",
        name: 'Frontend',
        icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1683025261/syzokhcprbsqrvlwmptg.png',
        subtags: [{
            name: 'UI/UX',
            value: 'ui/ux'
        }, {
            name: 'Motion',
            value: 'motion'
        }, {
            name: 'Web',
            value: 'web',
        }, {
            name: 'Classic',
            value: 'classic'
        }]
    },
    {
        value: "languages",
        name: 'Languages',
        icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1683025260/u0yoxab0emnpqesdi403.png',
        subtags: [{
            name: 'English',
            value: 'english'
        }, {
            name: 'France',
            value: 'france'
        }, {
            name: 'Spain',
            value: 'spain',
        }, {
            name: 'Italian',
            value: 'italian'
        }]
    },
    {
        value: "economic",
        name: 'Economic',
        icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1683025260/ztmvdekimjorajt66ot5.png',
        subtags: [{
            name: 'UI/UX',
            value: 'ui/ux'
        }, {
            name: 'Motion',
            value: 'motion'
        }, {
            name: 'Web',
            value: 'web',
        }, {
            name: 'Classic',
            value: 'classic'
        }]
    },
    {
        value: "modeling",
        name: 'Modeling',
        icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1683025761/mj1glwqmoekq182kxqv9.png',
        subtags: [{
            name: 'UI/UX',
            value: 'ui/ux'
        }, {
            name: 'Motion',
            value: 'motion'
        }, {
            name: 'Web',
            value: 'web',
        }, {
            name: 'Classic',
            value: 'classic'
        }]
    }
])


</script>

<style lang="scss">


.subtag-duration {
  transition-duration: var(--duration);
}
</style>