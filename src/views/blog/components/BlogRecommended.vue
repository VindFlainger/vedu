<template>
    <ui-container
            class="py-20"
            v-if="props.tags.length"
    >

        <p class="font-bold text-3xl text-black/80">
            {{ t('blog.recommended') }}
        </p>

        <div class="flex flex-wrap gap-4 mt-6">
            <router-link
                    class="flex justify-center items-end relative basis-full sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(25%-0.75rem)] bg-black h-72 rounded-3xl overflow-hidden"
                    v-for="tag in props.tags"
                    :key="tag.id"
                    :to="{}"
            >
                <img
                    class="absolute w-full h-full object-cover"
                    :src="tag.img" alt="">
                <p class="relative z-10 w-3/4 text-black/80 rounded-lg bg-white/70 p-3 m-5 text-center text-2xl font-bold">
                    {{ tag.name}}
                </p>
            </router-link>
        </div>
    </ui-container>
</template>

<script setup lang="ts">
import UiContainer from "@/components/UI/layout/UiContainer.vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

const props = withDefaults(defineProps<{
    tags?: {
        name: string,
        img: string,
        id: string
    }[]
}>(), {
    tags: () => []
})

</script>

<style scoped>

</style>