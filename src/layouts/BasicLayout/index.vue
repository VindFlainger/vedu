<template>
    <div>
        <Header></Header>
        <router-view v-slot="{Component, route}">
            <div class="pt-16 lg:pt-24 flex justify-center">
                <div class="pb-20 min-h-screen">
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
        <Footer></Footer>

        <alerts-box></alerts-box>
    </div>
</template>

<script setup lang="ts">
import Header from "./components/header/Header.vue";
import Footer from "./components/Footer.vue";
import AlertsBox from "@/layouts/BasicLayout/components/alerts/AlertsBox.vue";
</script>

