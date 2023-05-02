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
            <alerts-box-item
                    v-for="alert in events.alerts"
                    :key="alert.id"
                    :title="alert.title"
                    :message="alert.message"
                    :type="alert.type"
                    :attitude="alert.attitude"
            ></alerts-box-item>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import AlertsBoxItem from "./AlertsBoxItem.vue";
import {useEventsStore} from "@/store/modules/events";
const events = useEventsStore()

</script>

<style scoped>
</style>