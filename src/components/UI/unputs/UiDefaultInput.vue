<template>
    <label class="relative block" :class="attrs.class">
        <div class="relative">
            <input
                    class="outline-none ring-1 ring-gray-300 rounded-3xl px-3 py-2 w-[calc(100%-8px)] tracking-wide
                    shadow-inner shadow-gray-50 bg-white/70 font-medium placeholder:font-normal
                    caret-gray-700 text-xl text-gray-700 selection:bg-main/20 m-1 placeholder-gray-400"
                    :class="{'invalid': !isValid, 'ring-red-500 placeholder-red-500':!isValid}"
                    v-bind="{...attrs, class: ''}"
                    v-on="attrs"
                    :placeholder="placeholder"
                    :value="modelValue"
                    @input="emit('update:model-value', $event.target.value)"
            >
            <div
                    class="absolute top-1/2 right-3 z-10 w-8 h-8 -translate-y-1/2 flex items-center justify-center"
                    @click="emit('click:inner-icon')"
            >
                <slot name="inner-icon"></slot>
            </div>
        </div>

        <div class="min-h-[28px]" v-if="!hideDetails">
            <p
                class="pl-2 text-red-500 text-lg -mt-1"
                v-for="error in errorMessages?.slice(0, props.maxErrors)"
                :key="error"
            >
                {{ error }}
            </p>
        </div>
    </label>
</template>


<script setup lang="ts">
import {withDefaults, computed, useAttrs} from 'vue'

export interface DefaultInputProps {
    placeholder?: string,
    errorMessages?: string[],
    maxErrors?: number,
    modelValue?: any,
    hideDetails?: boolean
}

const props = withDefaults(defineProps<DefaultInputProps>(), {
    maxErrors: 1,
    errorMessages: () => [],
    hideDetails: false
})

const attrs = useAttrs()

const emit = defineEmits<{
    (e: 'update:model-value', modelValue: any): void,
    (e: 'click:inner-icon'): void,
}>()


const isValid = computed(() => !props.errorMessages.length)


</script>

<script lang="ts">
export default {
    inheritAttrs: false
}
</script>