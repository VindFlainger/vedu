<template>
    <button
            class="relative px-8 py-2 selection:bg-none inline-flex justify-center"
            :class="{'pointer-events-none  grayscale-[50%]': props.loading || props.disabled}"
    >
        <span
                v-show="props.loading"
                class="h-7 w-7 absolute left-2 animate-spin">
            <cog-icon></cog-icon>
        </span>
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
import {CogIcon} from "@heroicons/vue/24/outline";

const props = withDefaults(defineProps<{
    loading?: boolean,
    disabled?: boolean
}>(), {
    loading: false,
    disabled: false
})

</script>

<style scoped>

</style>