<template>
    <TransitionRoot appear :show="props.isOpen" as="template" class="z-[60]">
        <Dialog as="div" @close="emit('close')" class="relative z-10">
            <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black bg-opacity-25"/>
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel
                                class="relative w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex-grow"
                                :class="props.contentClass"
                        >
                            <div :class="bgClass" class="absolute inset-0 z-0"></div>

                            <div class="relative z-10">
                                <DialogTitle v-if="slots.title" as="h3" class="text-3xl font-bold leading-6 text-gray-900">
                                    <slot name="title"></slot>
                                </DialogTitle>

                                <div :class="{'mt-8': slots.title}">
                                    <slot name="text" v-bind="close"></slot>
                                </div>

                                <div class="mt-6" v-if="slots.actions">
                                    <slot name="actions" v-bind="close"></slot>
                                </div>
                            </div>



                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import {useSlots} from "vue";

export interface DialogProps {
    isOpen: boolean,
    contentClass?: string,
    bgClass?: string
}

const slots = useSlots()


const props = withDefaults(defineProps<DialogProps>(), {
    contentClass: 'max-w-md'
})

const emit = defineEmits<{
    (e: 'close'): void
}>()

const close = () => {
    emit('close')
}


</script>
