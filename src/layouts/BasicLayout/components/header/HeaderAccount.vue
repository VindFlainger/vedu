<template>
    <Menu v-if="profile.isGetUserInfo">
        <menu-button>
            <div

                    class="flex items-center ml-20 text-xl"
                    :class="{'text-white': isHomeView}"
            >
                <ui-avatar
                        class="ml-3 w-14 h-14"
                        :image-size="64"
                        :images="profile.avatar"
                ></ui-avatar>

                <div class="font-bold ml-3 capitalize">
                    {{ profile.name }}
                </div>

                <chevron-down-icon class="w-5 h-7 ml-2"></chevron-down-icon>

            </div>
        </menu-button>
        <menu-items
                class="absolute right-0 top-[calc(100%-20px)] mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md
                    bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-4 h-40 m-2">
            Hello!
        </menu-items>
    </Menu>
</template>

<script setup lang="ts">
import {Menu, MenuButton, MenuItems} from "@headlessui/vue";
import UiAvatar from "../../../../components/UI/UiAvatar.vue";
import {ChevronDownIcon} from "@heroicons/vue/24/outline";
import {computed} from "vue";
import {useProfileStore} from "../../../../store/modules/profile";
import {useRoute} from "vue-router";

const profile = useProfileStore()
const route = useRoute()

const isHomeView = computed(() => route.name === 'home')
</script>

<style scoped>

</style>