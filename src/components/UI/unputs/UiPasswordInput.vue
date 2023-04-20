<template>
    <ui-default-input
        :type="visible?'text':'password'"
        @click:inner-icon="visible=!visible"
        @blur="visible=false"
    >
        <template v-slot:inner-icon>
            <EyeIcon v-if="visible" class="cursor-pointer"></EyeIcon>
            <EyeSlashIcon v-else class="cursor-pointer"></EyeSlashIcon>
        </template>
    </ui-default-input>
</template>

<script lang="ts" setup>
import UiDefaultInput from "./UiDefaultInput.vue";
import {EyeIcon, EyeSlashIcon} from "@heroicons/vue/24/outline";
import {ref} from "vue";

const visible = ref(false)

</script>

<style scoped>

</style>