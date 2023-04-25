<template>
    <div>
        <Header></Header>
        <router-view v-slot="{Component, route}">
            <div class="pt-24 flex justify-center px-3">
                <div class="container">
                    <transition
                        enter-active-class="duration-400"
                        enter-from-class="opacity-10"
                        enter-to-class="opacity-100"
                    >
                        <div :key="route.name">
                            <component :is="Component"></component>
                        </div>
                    </transition>
                </div>
            </div>
        </router-view>
    </div>
</template>

<script setup lang="ts">
import Header from "./components/header/Header.vue";

</script>

