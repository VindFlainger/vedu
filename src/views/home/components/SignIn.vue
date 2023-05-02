<template>
    <ui-dialog bg-class="bg-[url('/assets/images/backgrounds/sign-in.svg')] opacity-20" @close="changeAction()">

        <template v-slot:title>
            <p class="text-blue-400 font-black text-4xl">{{ t('auth.sign-in') }}</p>
        </template>

        <template v-slot:text>
            <form class="mt-12">
                <Input
                        v-model="email.value.value"
                        class="w-full"
                        input-class="h-11 text-xl"
                        style="target: above"
                        :placeholder="t('auth.email')"
                        :error-messages="submitCount?email.errors.value:[]"
                        name="email"
                        autocomplete="email"
                ></Input>
                <PasswordInput
                        class="mt-1 w-full"
                        input-class="h-11 text-xl bg-white bg-opacity-80"
                        v-model="password.value.value"
                        :placeholder="t('auth.password')"
                        :error-messages="submitCount?password.errors.value:[]"
                        name="current-password"
                        autocomplete="current-password"
                ></PasswordInput>
            </form>
        </template>

        <template v-slot:actions>
            <div class="flex justify-center mt-6">
                <Button
                    template="action"
                    @click="submit"
                    :loading="loading"
                    class="w-44"
                >
                    {{ t('auth.sign-in') }}
                </Button>
            </div>

            <div class="mt-8">
                <p class="text-center text-gray-500">
                    - {{ t('auth.other-methods') }} -
                </p>
                <div class="flex space-x-6 justify-center mt-4">
                    <button>
                        <img src="/assets/images/buttons/github.png" class="w-12">
                    </button>
                    <button>
                        <img src="/assets/images/buttons/google.png" class="w-12">
                    </button>
                </div>
            </div>

            <div class="mt-10">
                <p class="text-center text-gray-500">
                    {{ t('auth.no-account') }}
                    <span
                            class="text-blue-400 underline underline-offset-2 decoration-2 cursor-pointer"
                            @click="changeAction('sign-up')"
                    >
                        {{ t('auth.create-account') }}
                    </span>
                </p>
            </div>

        </template>
    </ui-dialog>
</template>

<script setup lang="ts">
import UiDialog from "@/components/UI/UiDialog.vue";
import PasswordInput from "@/components/UI/Input/PasswordInput.vue";
import Button from '@/components/UI/Button/index.vue'
import Input from '@/components/UI/Input/index.vue'

import {ref} from "vue";
import * as yup from 'yup'

import {useI18n} from "vue-i18n";
import {useField, useForm} from "vee-validate";
import {useProfileStore} from "@/store/modules/profile";
import {useRouter} from "vue-router";
import {useRouterQuery} from "@/composables/useRouterQuery";

import {QueryAction} from "../model";


const {t} = useI18n()
const profile = useProfileStore()
const router = useRouter()
const {changeQuery: changeAction} = useRouterQuery<QueryAction>('action')


const {handleSubmit, submitCount} = useForm({
    validationSchema: yup.object({
        email: yup.string().required(t('auth.required-email')).email(t('auth.invalid-email')),
        password: yup.string().required(t('auth.required-password')).min(8)
    })
})

const email = useField<string | undefined>('email')
const password = useField<string | undefined>('password')


const loading = ref(false)
const submit = handleSubmit(async () => {
    try {
        loading.value = true
        await profile.signIn(email.value.value as string, password.value.value as string, (code) => {
            switch (code) {
                case 202:
                    email.resetField()
                    password.resetField()
                    email.setErrors(t('auth.unknown-email'))
                    break;
                case 204:
                    password.resetField()
                    password.setErrors(t('auth.wrong-password'))
                    break;
            }
        })
        router.replace({path: 'home'})
    } catch (err) {
    } finally {
        loading.value = false
    }
})


</script>

<style>
</style>
