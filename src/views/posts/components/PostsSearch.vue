<template>
    <div class="flex justify-between items-center px-3 h-16 bg-white rounded-3xl shadow-[0_0_5px_black] shadow-black/20 overflow-hidden">
        <div class="flex">
            <button @click="emit('change-tag')">Click</button>
            <p class="ml-4">{{ activeTag }}</p>
        </div>
        <div class="flex items-center">
            <Input hide-details input-class="h-10 outline-gray-700 text-xl text-gray-700"></Input>
            <MagnifyingGlassIcon class="text-gray-700 ml-2 inline-block h-8 w-8 cursor-pointer"></MagnifyingGlassIcon>
        </div>
    </div>
</template>

<script setup lang="ts">
import {MagnifyingGlassIcon} from "@heroicons/vue/24/outline";
import Input from '@/components/UI/Input/index.vue'

const props = defineProps<{
    activeTag?: string
}>()

const emit = defineEmits<{
    (e: 'change-tag'): void
}>()

</script>

<style scoped>

</style>