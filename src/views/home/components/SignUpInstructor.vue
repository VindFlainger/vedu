<template>
    <form>
        <div class="grid sm:grid-flow-col sm:grid-rows-4 gap-y-2 gap-x-8">
            <Input
                    class="w-full"
                    input-class="bg-white bg-opacity-60 h-11 text-xl outline-grey"
                    v-model="name.value.value"
                    :error-messages="submitCount?name.errors.value:[]"
                    :placeholder="t('auth.name')"
            ></Input>
            <Input
                    class="w-full"
                    input-class="bg-white bg-opacity-60 h-11 text-xl outline-grey"
                    v-model="surname.value.value"
                    :error-messages="submitCount?surname.errors.value:[]"
                    :placeholder="t('auth.surname')"
            ></Input>
            <ui-default-select
                    v-model="gender.value.value"
                    :error-messages="submitCount?gender.errors.value:[]"
                    :items="genders"
                    :placeholder="t('auth.gender')"
            ></ui-default-select>
            <ui-default-select
                    v-model="disciplines.value.value"
                    :items="availableDisciplines"
                    :error-messages="submitCount?disciplines.errors.value:[]"
                    :placeholder="t('auth.disciplines')"
                    multiple
            ></ui-default-select>
            <Input
                    class="w-full"
                    input-class="bg-white bg-opacity-60 h-11 text-xl outline-grey"
                    v-model="email.value.value"
                    :error-messages="submitCount?email.errors.value:[]"
                    :placeholder="t('auth.email')"
            ></Input>
            <PasswordInput
                    class="w-full"
                    input-class="bg-white bg-opacity-60 h-11 text-xl outline-grey"
                    v-model="password.value.value"
                    :error-messages="submitCount?password.errors.value:[]"
                    :placeholder="t('auth.password')"
            ></PasswordInput>
            <PasswordInput
                    class="w-full"
                    input-class="bg-white bg-opacity-60 h-11 text-xl outline-grey"
                    v-model="repeatPassword.value.value"
                    :error-messages="submitCount?repeatPassword.errors.value:[]"
                    type="password"
                    :placeholder="t('auth.repeat-password')"
            ></PasswordInput>
        </div>

        <div class="flex justify-end">
            <Button
                    @click="submit"
                    :loading="loading"
                    :template="'action'"
            >
                {{ t('common.submit') }}
            </Button>
        </div>
    </form>
</template>

<script setup lang="ts">
import Button from '@/components/UI/Button/index.vue'
import Input from '@/components/UI/Input/index.vue'
import UiDefaultSelect from "@/components/UI/unputs/UiDefaultSelect.vue";

import * as yup from 'yup'
import {onMounted, ref} from "vue";

import {useI18n} from "vue-i18n";
import {useField, useForm} from "vee-validate";
import {ResDisciplines} from "@/api/data/model";
import {useRouter} from "vue-router";
import fetchData from '@/api/data'
import fetchAuth from '@/api/auth'
import {useRouterQuery} from "@/composables/useRouterQuery";

import {QueryAction} from "../model";
import PasswordInput from "@/components/UI/Input/PasswordInput.vue";

const index = useRouter()
const {t, locale} = useI18n()
const {changeQuery: changeAction} = useRouterQuery<QueryAction>('action')


// <-- Options -->
const genders = [
    {
        name: t('auth.male'),
        value: 1
    },
    {
        name: t('auth.female'),
        value: 2
    }
]

const availableDisciplines = ref<ResDisciplines>([])
const getAvailableDisciplines = async () => {
    try {
        availableDisciplines.value = await fetchData.disciplines({params: {locale: locale.value}})
    } catch (err) {

    }
}


// <-- Form -->
const {handleSubmit, submitCount, meta} = useForm({
    validationSchema: yup.object({
        name: yup
            .string()
            .required(t('common.field-required', {field: t('auth.name-field')}))
            .test('is-name', t('auth.invalid-name'), v => /^[a-zA-Za-яА-Я]{4,}$/.test(v)),
        surname: yup
            .string()
            .required(t('common.field-required', {field: t('auth.surname-field')}))
            .test('surname', t('auth.invalid-surname'), v => /^[a-zA-Za-яА-Я]{4,}$/.test(v)),
        email: yup
            .string()
            .required(t('common.field-required', {field: t('auth.email-field')}))
            .email(),
        gender: yup
            .number()
            .required(t('common.field-required', {field: t('auth.gender-field')})),
        password: yup
            .string()
            .required(t('common.field-required', {field: t('auth.password-field')}))
            .min(8, t('auth.invalid-password'))
            .test('include-symbols', t('auth.invalid-password'), v => /[!@#$%^&*()_+]/.test(v))
    })
})

const name = useField<string>('name')
const surname = useField<string>('surname')
const email = useField<string>('email')
const password = useField<string>('password')
const repeatPassword = useField<string>('repeatPassword')
const gender = useField<number>('gender')
const disciplines = useField<string[]>('disciplines', {}, {initialValue: []})

const loading = ref(false)
const submit = handleSubmit(async () => {
    if (password.value.value !== repeatPassword.value.value) {
        repeatPassword.resetField()
        repeatPassword.setErrors(t('auth.wrong-repeated-password'))
        return
    }
    try {
        loading.value = true
        await fetchAuth.sign_up_instructor({
            data: {
                name: name.value.value,
                surname: surname.value.value,
                login: email.value.value,
                password: password.value.value,
                gender: gender.value.value,
                disciplines: disciplines.value.value
            },
            options: {
                errorCodeCallback: (code: number) => {
                    if (code === 201) {
                        email.setErrors(t('auth.occupied-email'))
                    }
                },
                successTitle: t('auth.account-created'),
                handleSuccess: true
            }
        })
        changeAction('sign-in')
    } catch (err) {

    } finally {
        loading.value = false
    }
})


onMounted(async () => {
    await getAvailableDisciplines()
})

</script>

<style scoped>

</style>