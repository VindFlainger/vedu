<template>
    <ui-base-button
            class="rounded-3xl border border-transparent bg-action
            text-xl text-white hover:bg-action/60 outline-none hover:ring-2
            ring-action/90 ring-offset-2 tracking-wide font-bold"
    >

        <template
                v-for="(_, slot) of slots"
                v-slot:[slot]="scope">
            <slot :name="slot" v-bind="scope"/>
        </template>
    </ui-base-button>
</template>
<script setup lang="ts">
import UiBaseButton from "./UiBaseButton.vue";
import {useSlots} from "vue";

const slots = useSlots()


</script>