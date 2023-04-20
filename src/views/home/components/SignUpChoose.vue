<template>
    <radio-group>
        <h3 class="font-bold text-4xl text-center text-gray-800">
            {{ t('auth.pick-role') }}
        </h3>

        <div class="mt-6 space-y-3">

            <radio-group-option
                    v-slot="{checked}"
                    value="instructor"
                    class="appearance-none outline-none"
            >
                <div class="flex items-center p-3 rounded-xl h-25 font-bold text-3xl cursor-pointer bg-yellow-500/50 text-white ring-black ring-offset-2 hover:ring-2">
                    <img class="w-20" src="/assets/images/buttons/instructor.png">
                    <p class="ml-2">{{ t('auth.instructor') }}</p>
                </div>
            </radio-group-option>

            <radio-group-option
                    v-slot="{checked}"
                    value="student"
                    class="appearance-none outline-none"
            >
                <div class="flex items-center p-3 rounded-xl h-25 font-bold text-3xl cursor-pointer bg-purple-500/50 text-white ring-black ring-offset-2 hover:ring-2">
                    <img class="w-20" src="/assets/images/buttons/student.png">
                    <p class="ml-2">{{ t('auth.student') }}</p>
                </div>
            </radio-group-option>

        </div>
    </radio-group>

</template>

<script setup lang="ts">
import {RadioGroup, RadioGroupOption} from "@headlessui/vue";

import {useI18n} from "vue-i18n";

const {t} = useI18n()


</script>
