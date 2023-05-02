<template>
    <ui-dialog
            :content-class="`${role?'max-w-6xl':'max-w-md'} overflow-visible`"
            bg-class="bg-[url('/assets/images/backgrounds/sign-up.svg')] bg-cover opacity-40"
            @close="changeAction()"
    >
        <template v-slot:text>
            <div class="grid lg:grid-cols-3">
                <button
                        v-show="role"
                        @click="role=''"
                        class="hidden lg:block absolute top-0 left-0 p-1 rounded-full bg-gray-200/50 z-50"
                >
                    <arrow-left-icon class="w-8 h-8 text-gray-700"></arrow-left-icon>
                </button>

                <div
                        v-if="role"
                        class="relative hidden lg:block"
                >
                    <img
                            v-if="role==='instructor'"
                            src="/assets/images/teacher.png"
                            class="absolute h-full object-cover"
                    >
                    <img
                            v-if="role  === 'student'"
                            src="/assets/images/student.png"
                            class="absolute h-full object-cover"
                    >
                </div>

                <div :class="role?'col-span-2':'col-span-3'">
                    <p class="text-action font-black text-4xl">{{ t('auth.sign-up') }}</p>
                    <sign-up-choose
                            class="mt-5"
                            v-if="!role"
                            v-model="role"
                    ></sign-up-choose>
                    <sign-up-instructor
                            class="mt-5"
                            v-if="role==='instructor'"
                    ></sign-up-instructor>
                    <sign-up-student
                            class="mt-5"
                            v-if="role==='student'"
                    ></sign-up-student>
                </div>

            </div>
        </template>
    </ui-dialog>
</template>

<script setup lang="ts">
import UiDialog from "@/components/UI/UiDialog.vue";
import SignUpChoose from "./SignUpChoose.vue";
import SignUpInstructor from "./SignUpInstructor.vue";
import SignUpStudent from "./SignUpStudent.vue";
import {ArrowLeftIcon} from "@heroicons/vue/24/outline";


import {useI18n} from "vue-i18n";
import {ref} from "vue";
import {useRouterQuery} from "@/composables/useRouterQuery";

import {QueryAction} from "../model";


const {changeQuery: changeAction} = useRouterQuery<QueryAction>('action')

const {t} = useI18n()
const role = ref<'' | 'student' | 'instructor'>('')

</script>

<style scoped>

</style>