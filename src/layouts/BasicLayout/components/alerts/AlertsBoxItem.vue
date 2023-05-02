<template>
    <div
            class="group"
            :class="{'error': type === AlertType.Error, 'warn': type === AlertType.Warn, 'success': type === AlertType.Success}">
        <div
                class="flex items-center p-2 ring-4 rounded-xl bg-white/90 px-3 group-[.error]:ring-red-500 group-[.success]:ring-green-500 group-[.warn]:ring-orange-500 m-3">
            <div>
                <exclamation-circle-icon
                        v-if="type === AlertType.Error"
                        class="w-10 h-10 mr-3 group-[.error]:text-red-700"
                ></exclamation-circle-icon>
                <exclamation-triangle-icon
                        v-if="type === AlertType.Warn"
                        class="w-10 h-10 mr-3 group-[.warn]:text-orange-700"
                ></exclamation-triangle-icon>
                <check-circle-icon
                        v-if="type === AlertType.Success"
                        class="w-10 h-10 mr-3 group-[.success]:text-green-700"
                ></check-circle-icon>
            </div>
            <div>
                <h4 class="font-extrabold text-2xl group-[.error]:text-red-700  group-[.warn]:text-orange-700  group-[.success]:text-green-700">
                    {{ props.title || t(`events.${AlertType[props.type].toLowerCase()}`) }}
                </h4>
                <h4 class="text-md text-gray-800 leading-5">{{ props.message }}</h4>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import {AlertAttitude, AlertType} from "@/store/modules/events";

import {
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon
} from "@heroicons/vue/24/outline";
import {useI18n} from "vue-i18n";

const props = defineProps<{
    title?: string,
    message: string,
    type: AlertType,
    attitude: AlertAttitude
}>()

const {t} = useI18n()

</script>

<style scoped>

</style>