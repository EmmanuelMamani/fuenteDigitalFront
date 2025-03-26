
<template>
    <div v-if="post" class="bg-white w-2/3 mx-auto rounded shadow-lg p-6 space-y-3 mt-3">
        <h1 class="text-center text-3xl text-slate-800 font-semibold">{{ post.title }}</h1>

        <div class="flex items-center space-x-2 text-base text-sky-700">
            <Icon name="ic:outline-access-time" class="text-lg" />
            <NuxtTime :datetime="post.created_at" relative />
        </div>

        <el-carousel>
            <el-carousel-item v-for="(file,index) in files" :key="index">
                <img :src="`http://127.0.0.1:8000/storage/${file}`"
                        alt="Post Image"
                    class="w-full h-auto object-cover rounded-lg shadow-md"
                />
            </el-carousel-item>
        </el-carousel>

        <div class="flex items-center space-x-2 text-base text-sky-700 justify-end">
            <el-tag type="primary" v-for="(label,index) in labels" :key="index">{{ label }}</el-tag>
            <Icon name="ic:outline-remove-red-eye" class="text-lg" />
            <span>{{ post.visits + Math.floor(Math.random() * 100) + 1 }}</span>
        </div>

        <div v-html="post.description" class="text-lg text-justify text-slate-600 leading-9"></div>

        <h2 class="text-center text-2xl text-slate-800 font-semibold">Quizas te interese tambien</h2>
        <div class="grid grid-cols-3 w-full gap-4 mt-2 mx-auto">
            <div v-for="relation in relations" :key="relation.id" class="flex flex-col h-full">
                <Post :post="relation" class="flex-1" />
            </div>
        </div>
        <div class="my-3 flex justify-center w-full">
            <el-button v-if="actualPage<=limitPage" text class="!bg-white !text-sky-950 rounded !border-sky-950 !border p-2 !text-xs lg:!text-sm my-3 w-full hover:!bg-sky-950 hover:!text-white lg:w-1/3" :loading="loading" @click="postList" >Ver mas</el-button>
        </div>
    </div>
</template>
<script setup>
    const route = useRoute()
    const config = useRuntimeConfig();
    const idPost= route.params.id
    const post = ref(null)
    const files =ref([])
    const labels=ref([])
    const relations=ref([])
    const limitPage = ref(0)
    const actualPage = ref(1)
    const loading = ref(false)
    async function relationList() {
        try {
            const response = await $fetch(`${config.public.apiBase}/posts/${idPost}/related?page=${actualPage.value}`)
            relations.value = [...relations.value, ...response.data];
            limitPage.value = response.last_page
            actualPage.value++
            console.log(relations.value);
        } catch (err) {
            console.error('Error inesperado:', err);
        }
        loading.value=false
    }
    async function fetchPost() {
        try {
            const response = await $fetch(`${config.public.apiBase}/posts/${idPost}`)
            post.value = response.post
            files.value = response.files
            labels.value = response.labels  
            relationList()
        } catch (err) {
            console.error('Error inesperado:', err);
        }
    }
    onMounted(fetchPost);
</script>