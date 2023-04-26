<template>
    <div>
        <Header></Header>
        <router-view v-slot="{Component, route}">
            <div class="pt-24 flex justify-center px-3">
                <div class="container">
                    <transition
                            :css="!route.meta.disableAnimation"
                            appear
                            enter-active-class="transition-all duration-300"
                            enter-from-class="opacity-0"
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

