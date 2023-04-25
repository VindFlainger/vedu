<template>
    <div>
        <router-view>

        </router-view>
        <main-alert-box>

        </main-alert-box>
    </div>
</template>

<script setup lang="ts">

import MainAlertBox from "./components/special/main/alerts/MainAlertBox.vue";
import {useProfileStore} from "./store/modules/profile";
import {onMounted} from "vue";

const profile = useProfileStore()


onMounted(()=>{
    if (profile.authed) {
        profile.getAuthedData()
    }
})


</script>


<style scoped>


</style>
