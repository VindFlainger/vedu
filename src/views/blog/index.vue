<template>
    <div>
        <blog-preview></blog-preview>
        <blog-recommended :tags="recommendedTags"></blog-recommended>
        <blog-hot :posts="hotPosts"></blog-hot>
    </div>
</template>

<script setup lang="ts">
import BlogPreview from "./components/BlogPreview.vue";
import {ref} from "vue";
import BlogRecommended from "./components/BlogRecommended.vue";
import BlogHot from "./components/BlogHot.vue";

const recommendedTags = ref([
    {
        name: "UX/UI",
        img: "https://res.cloudinary.com/dl8gweeqh/image/upload/v1682867783/k4cdyg7gnudfvkbboafs.bmp",
        id: "1"
    },
    {
        name: "React",
        img: "https://res.cloudinary.com/dl8gweeqh/image/upload/v1682867783/k4cdyg7gnudfvkbboafs.bmp",
        id: "2"
    },
    {
        name: "PHP",
        img: "https://res.cloudinary.com/dl8gweeqh/image/upload/v1682867783/k4cdyg7gnudfvkbboafs.bmp",
        id: "3"
    },
    {
        name: "JavaScript",
        img: "https://res.cloudinary.com/dl8gweeqh/image/upload/v1682867783/k4cdyg7gnudfvkbboafs.bmp",
        id: "4"
    }
])

const hotPosts = ref([
    {
        id: '1',
        title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
        content: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
        views: 251232,
        img: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876786/v6dyjzk7s2vmrjrburj7.bmp',
        author: {
            name: 'Lina',
            avatar: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876650/i6lcb85bupxrm0ohsrop.bmp'
        },
    },
    {
        id: '2',
        title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
        content: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
        views: 251232,
        img: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876786/v6dyjzk7s2vmrjrburj7.bmp',
        author: {
            avatar: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876650/i6lcb85bupxrm0ohsrop.bmp',
            name: 'Lina'
        },
    },
    {
        id: '3',
        title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
        content: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
        views: 251232,
        img: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876786/v6dyjzk7s2vmrjrburj7.bmp',
        author: {
            avatar: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876650/i6lcb85bupxrm0ohsrop.bmp',
            name: 'Lina'
        },
    },
    {
        id: '4',
        title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
        content: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
        views: 251232,
        img: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876786/v6dyjzk7s2vmrjrburj7.bmp',
        author: {
            avatar: 'https://res.cloudinary.com/dl8gweeqh/image/upload/v1682876650/i6lcb85bupxrm0ohsrop.bmp',
            name: 'Lina'
        },
    }
])

</script>

<style scoped>

</style>