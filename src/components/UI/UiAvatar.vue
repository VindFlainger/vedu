<template>
    <img
            class="rounded-full"
            :src="image || '/assets/images/user.png'">
</template>

<script setup lang="ts">

import {computed} from "vue";

export interface CroppedImage {
    width: number,
    image: {
        url: string,
        [key: string]: any
    }
}

export interface UIAvatarProps {
    size?: string,
    imageSize: number,
    images?: CroppedImage[]
}

const props = withDefaults(defineProps<UIAvatarProps>(), {
    size: '',
    images: () => []
})

const image = computed(() => {
    return props.images.find(image => image.width === props.imageSize)?.image?.url
})

</script>

<style scoped>

</style>