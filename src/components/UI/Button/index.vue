<template>
    <button
            class="button relative inline-flex items-center justify-center"
            :class="[`button-${props.template}`,{'grayscale-[0.3]  cursor-default': props.loading}]"
    >
         <span
                 v-if="props.loading"
                 class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
        </span>
        <span
                v-else
                class="text-xl tracking-wide">
          <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    template: 'base' | 'action' | 'complete',
    loading?: boolean
}>(), {
    template: 'base',
    loading: false
})
</script>