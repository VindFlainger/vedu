<template>
    <div>
        <sign-in
                :is-open="action === 'sign-in'"
        ></sign-in>

        <sign-up
                :is-open="action === 'sign-up'"
        ></sign-up>


        <div class="absolute inset-0" style="background: url('/assets/images/backgrounds/home.png') 0 0 / 100% 90% no-repeat"></div>

        <div class="relative z-50">
            <ui-container>
                <app-preview></app-preview>

                <about-project class="mt-4 md:mt-32"></about-project>
            </ui-container>
        </div>


    </div>
</template>

<script setup lang="ts">
import SignIn from "./components/SignIn.vue";
import SignUp from "./components/SignUp.vue";
import {useRouterQuery} from "@/composables/useRouterQuery";
import {QueryAction} from "./model";
import AboutProject from "./components/AboutProject.vue";
import AppPreview from "./components/AppPreview.vue";
import UiContainer from "@/components/UI/layout/UiContainer.vue";




const {query: action} = useRouterQuery<QueryAction>('action')
</script>
