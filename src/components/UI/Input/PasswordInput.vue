<template>
    <Input
            :type="visible?'text':'password'"
            @click:inner-icon="visible=!visible"
            @blur="visible=false"
    >
        <template #inner-icon>
            <EyeIcon v-if="visible" class="cursor-pointer"></EyeIcon>
            <EyeSlashIcon v-else class="cursor-pointer"></EyeSlashIcon>
        </template>
    </Input>
</template>

<script setup lang="ts">
import Input from './index.vue'
import {EyeIcon, EyeSlashIcon} from "@heroicons/vue/24/outline";
import {ref} from "vue";

const visible = ref(false)

</script>

<style scoped>

</style>