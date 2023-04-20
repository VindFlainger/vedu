<template>
    <div>
        <main-header></main-header>
        <main-content>
            <router-view></router-view>
        </main-content>

        <main-alert-box>

        </main-alert-box>

    </div>
</template>

<script setup lang="ts">
import MainHeader from "./components/special/main/header/MainHeader.vue";
import MainContent from "./components/special/main/MainContent.vue";
import MainAlertBox from "./components/special/main/alerts/MainAlertBox.vue";
import {useProfileStore} from "./stores/modules/profile";
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
