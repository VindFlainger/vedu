<template>
    <div class="bg-[#9DCCFF]/40">
        <ui-container class="flex flex-wrap justify-between items-center py-16">
            <div class="basis-full md:basis-5/12">
                <p class="text-[#2F327D] font-bold text-4xl">
                    {{ profile.role === UserRole.Instructor ? t('blog.preview.instructor-title'):t('blog.preview.student-title')  }}
                </p>
                <p class="text-grey text-xl mt-4">
                    {{ profile.role === UserRole.Instructor ? t('blog.preview.instructor-text'):t('blog.preview.student-text') }}
                </p>
                <Button template="base" class="mt-4" v-if="profile.role">
                    {{ profile.role === UserRole.Student ? t('blog.preview.read-button') : t('blog.preview.create-button') }}
                </Button>
            </div>
            <div class="max-md:mt-10 basis-full md:basis-6/12">
                <img src="/assets/images/blog/preview.png" alt="">
            </div>
        </ui-container>
    </div>
</template>

<script setup lang="ts">
import UiContainer from "@/components/UI/layout/UiContainer.vue";
import Button from '@/components/UI/Button/index.vue'
import {useProfileStore} from "@/store/modules/profile";
import {UserRole} from "@/api/global.d";
import {useI18n} from "vue-i18n";


const {t} = useI18n()

const profile = useProfileStore()
</script>

<style scoped>

</style>