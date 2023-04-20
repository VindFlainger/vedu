<template>
    <div class="fixed right-2 bottom-2 max-w-md z-[10000]" >
        <transition-group
            enter-active-class="duration-300"
            enter-from-class="scale-50"
            enter-to-class="scale-100"
            leave-active-class="duration-300"
            leave-from-class="scale-100"
            leave-to-class="scale-0"
        >
            <main-alert-box-item
                    v-for="alert in events.alerts"
                    :key="alert.id"
                    :title="alert.title"
                    :message="alert.message"
                    :type="alert.type"
                    :attitude="alert.attitude"
            ></main-alert-box-item>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import MainAlertBoxItem from "./MainAlertBoxItem.vue";
import {useEventsStore} from "../../../../stores/modules/events";
import {TransitionChild, TransitionRoot} from "@headlessui/vue";

const events = useEventsStore()

</script>

<style scoped>
</style>