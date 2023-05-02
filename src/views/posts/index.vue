<template>
    <div>
        <Container class="bg-[#9DCCFF]/50  py-16">
            <!--posts search        -->
            <PostsSearch
                    :active-tag="populatedActiveTag?.name"
                    @change-tag="pickTagDialogVisible = true"
            ></PostsSearch>
            <PickTagDialog
                    :is-open="pickTagDialogVisible"
                    @close="pickTagDialogVisible = false"
                    @changed-subtag="populatedActiveTag = $event; changeActiveTag($event.value)"
            ></PickTagDialog>

            <!--posts list        -->
            <div class="mt-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                <PostsPost
                        v-for="post in posts"
                        :tag="post.tag"
                        :author="post.author"
                        :title="post.title"
                        :content="post.content"
                        :img="post.img"
                        :date="post.date"
                        :views="post.views"
                ></PostsPost>
            </div>

        </Container>

    </div>
</template>

<script setup lang="ts">
import PickTagDialog from '@/components/Reusable/Dialogs/PickTagDialog/index.vue'
import Container from "@/components/UI/Container/index.vue";
import PostsPost from "@/views/posts/components/PostsPost.vue";
import PostsSearch from "@/views/posts/components/PostsSearch.vue";
import {useRouterQuery} from "@/composables/useRouterQuery";
import Input from '@/components/UI/Input/index.vue'
import Button from '@/components/UI/Button/index.vue'

import {ref} from "vue";
import PasswordInput from "@/components/UI/Input/PasswordInput.vue";

const pickTagDialogVisible = ref(false)
const {query: activeTag, changeQuery: changeActiveTag} = useRouterQuery('tag')

const populatedActiveTag = ref<{
    value: string,
    name: string
}>()

const password = ref('')


const posts = ref([
    {
        id: '1',
        tag: {
            name: 'Design',
            icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896646/v7bafrs4titwufdpoucb.png'
        },
        date: '2023-04-30T23:34:40.543Z',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        img: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896483/kgjvqaikuldwb7vlk0fu.bmp',
        author: {
            id: '1',
            name: 'Lina',
            avatar: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876650/i6lcb85bupxrm0ohsrop.bmp'
        },
        views: 213321
    },
    {
        id: '2',
        tag: {
            name: 'Design',
            icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896646/v7bafrs4titwufdpoucb.png'
        },
        date: '2023-04-30T23:34:40.543Z',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        img: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896516/azkllyymfuflz0ziftg6.bmp',
        author: {
            id: '2',
            name: 'Lina',
            avatar: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876650/i6lcb85bupxrm0ohsrop.bmp'
        },
        views: 213321
    },
    {
        id: '3',
        tag: {
            name: 'Design',
            icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896646/v7bafrs4titwufdpoucb.png'
        },
        date: '2023-04-30T23:34:40.543Z',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        img: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896483/kgjvqaikuldwb7vlk0fu.bmp',
        author: {
            id: '1',
            name: 'Lina',
            avatar: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876650/i6lcb85bupxrm0ohsrop.bmp'
        },
        views: 213321
    },
    {
        id: '4',
        tag: {
            name: 'Design',
            icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896646/v7bafrs4titwufdpoucb.png'
        },
        date: '2023-04-30T23:34:40.543Z',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        img: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896516/azkllyymfuflz0ziftg6.bmp',
        author: {
            id: '2',
            name: 'Lina',
            avatar: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876650/i6lcb85bupxrm0ohsrop.bmp'
        },
        views: 213321
    },
    {
        id: '5',
        tag: {
            name: 'Design',
            icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896646/v7bafrs4titwufdpoucb.png'
        },
        date: '2023-04-30T23:34:40.543Z',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        img: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896483/kgjvqaikuldwb7vlk0fu.bmp',
        author: {
            id: '1',
            name: 'Lina',
            avatar: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876650/i6lcb85bupxrm0ohsrop.bmp'
        },
        views: 213321
    },
    {
        id: '6',
        tag: {
            name: 'Design',
            icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896646/v7bafrs4titwufdpoucb.png'
        },
        date: '2023-04-30T23:34:40.543Z',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        img: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896516/azkllyymfuflz0ziftg6.bmp',
        author: {
            id: '2',
            name: 'Lina',
            avatar: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876650/i6lcb85bupxrm0ohsrop.bmp'
        },
        views: 213321
    },
    {
        id: '7',
        tag: {
            name: 'Design',
            icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896646/v7bafrs4titwufdpoucb.png'
        },
        date: '2023-04-30T23:34:40.543Z',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        img: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896483/kgjvqaikuldwb7vlk0fu.bmp',
        author: {
            id: '1',
            name: 'Lina',
            avatar: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876650/i6lcb85bupxrm0ohsrop.bmp'
        },
        views: 213321
    },
    {
        id: '8',
        tag: {
            name: 'Design',
            icon: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896646/v7bafrs4titwufdpoucb.png'
        },
        date: '2023-04-30T23:34:40.543Z',
        title: 'AWS Certified solutions Architect',
        content: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        img: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682896516/azkllyymfuflz0ziftg6.bmp',
        author: {
            id: '2',
            name: 'Lina',
            avatar: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876650/i6lcb85bupxrm0ohsrop.bmp'
        },
        views: 213321
    },
])


</script>