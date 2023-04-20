<template>
    <div>
        <sign-in
                :is-open="action === 'sign-in'"
        ></sign-in>

        <sign-up
                :is-open="action === 'sign-up'"
        ></sign-up>


        <div class="fixed inset-0 bg-[url('/assets/images/backgrounds/home.svg')] bg-cover">
        </div>

        <div class="relative z-50">

        </div>


    </div>
</template>

<script setup lang="ts">
import SignIn from "./components/SignIn.vue";
import SignUp from "./components/SignUp.vue";
import {useRouterQuery} from "../../composables/useRouterQuery";
import {QueryAction} from "./model";


const {query: action} = useRouterQuery<QueryAction>('action')
</script>
