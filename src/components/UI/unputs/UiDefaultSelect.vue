<template>
    <Listbox
            :multiple="props.multiple"
            @update:model-value="$emit('update:model-value', $event)"
            :model-value="modelValue"
            v-slot="{value}"
            as="div"
    >
        <div class="relative">
            <ListboxButton class="relative outline-none ring-1 ring-gray-300 rounded-3xl px-3 py-2 w-[calc(100%-8px)] tracking-wide
                    shadow-inner shadow-gray-50 bg-white/70 font-medium placeholder:font-normal text-start
                    caret-gray-700 text-xl text-gray-700 selection:bg-main/20 m-1 placeholder-gray-400 h-11 pr-10"
            >
                <span v-if="Array.isArray(value) && value.length" class="line-clamp-1">
                   {{ value.map(v => cmpItems.find(item => item.value === v).name).join(', ') }}
                </span>

                <span v-else-if="value && !multiple" class="line-clamp-1">
                    {{ cmpItems.find(item => item.value === value).name }}
                </span>

                <span v-else-if="props.placeholder" class="line-clamp-1 font-normal text-gray-400">{{
                    props.placeholder
                    }}</span>

                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 ">
                        <ChevronUpDownIcon class="h-10 w-10 text-gray-400"/>
                </span>
            </ListboxButton>

            <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
            >
                <ListboxOptions class="absolute mt-1 max-h-60 w-full overflow-auto rounded-3xl bg-white py-1 text-base
                    shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50"
                >
                    <ListboxOption
                            as="li"
                            v-slot="{ active, selected }"
                            v-for="item in cmpItems"
                            :key="item.value"
                            :value="item.value"
                    >
                        <li
                                class="text-lg"
                                :class="[active ? 'bg-action/30' : 'text-gray-900','relative cursor-default select-none py-2 pl-10 pr-4']"
                        >
                            <span :class="[selected ? 'font-medium' : 'font-normal','block truncate',]">{{
                                item.name
                                }}</span>
                            <span v-if="selected"
                                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
            <div class="min-h-[18px]" v-if="!hideDetails">
                <p
                        class="pl-2 text-red-500 text-lg -mt-1"
                        v-for="error in errorMessages?.slice(0, props.maxErrors)"
                        :key="error"
                >
                    {{ error }}
                </p>
            </div>
        </div>
    </Listbox>
</template>

<script setup lang="ts">

import {computed} from "vue";
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/vue/20/solid'

const props = withDefaults(defineProps<{
    multiple?: boolean,
    items?: ({ name: string, value: string | number | object } | string | number)[],
    hideDetails?: boolean,
    errorMessages?: string[],
    maxErrors?: number,
    placeholder?: string,
    modelValue?: any
}>(), {
    multiple: false,
    items: () => [],
    hideDetails: false,
    errorMessages: () => [],
    maxErrors: 1
})


const cmpItems = computed(() => {
    return props.items.map(item => {
        if (typeof item === 'string' || typeof item === 'number') return {name: item, value: item}
        return item
    })
})





</script>
