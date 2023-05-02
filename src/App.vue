<template>
    <div>
        <router-view>

        </router-view>
    </div>
</template>

<script setup lang="ts">

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
