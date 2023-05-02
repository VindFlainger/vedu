<template>
    <div class="avatar">
        <img
                class="absolute w-full h-full"
                :src="src"
        >
    </div>
</template>


<script setup lang="ts">
import defaultAvatar from '@/assets/images/defaults/user.png'


const props = withDefaults(defineProps<
        {
            src?: string
        }>(),
    {
        src: defaultAvatar
    })
</script>
