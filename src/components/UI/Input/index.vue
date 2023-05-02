<template>
    <label
            class="input relative block overflow-hidden" :class="attrs.class">
        <div class="relative m-2">
            <input
                    class="input__input"
                    :class="[{'invalid': !isValid, 'placeholder-red-500':!isValid}, props.inputClass]"
                    :style="isValid?'':'outline-color: #f87171 '"
                    v-bind="{...attrs, class: ''}"
                    v-on="attrs"
                    :placeholder="placeholder"
                    :value="modelValue"
                    @input="emit('update:model-value', $event.target.value)"
            >
            <div
                    v-if="slots['inner-icon']"
                    class="absolute bg-white pl-1 top-1/2 right-3 z-10 w-8 h-8 -translate-y-1/2 flex items-center justify-center"
                    :class="{'text-red-400':!isValid}"
                    @click="emit('click:inner-icon')"
            >
                <slot
                        name="inner-icon"
                ></slot>
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
import {withDefaults, computed, useAttrs, useSlots} from 'vue'

const props = withDefaults(defineProps<{
    placeholder?: string,
    errorMessages?: string[],
    maxErrors?: number,
    modelValue?: any,
    hideDetails?: boolean,
    template?: 'default',
    inputClass?: string
}>(), {
    maxErrors: 1,
    errorMessages: () => [],
    hideDetails: false,
    template: 'default'
})

const attrs = useAttrs()
const slots = useSlots()

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