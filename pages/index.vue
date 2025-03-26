<template>
    <div>
        <PostMain v-if="posts.length>0" :post="posts[0]" class="w-11/12 md:w-4/5 mx-auto mt-3" ></PostMain>

        <div class="grid grid-cols-2 md:grid-cols-4 w-11/12 md:w-4/5 gap-2 md:gap-4 mt-2 mx-auto" v-if="posts.length > 1">
            <div v-for="post in posts.slice(1)" :key="post.id" class="flex flex-col h-full">
                <Post :post="post" class="flex-1" />
            </div>
        </div>
        <div class="my-3 flex justify-center w-full">
            <el-button v-if="actualPage<=limitPage" text class="!bg-white !text-sky-950 rounded !border-sky-950 !border p-2 !text-xs lg:!text-sm my-3 w-full hover:!bg-sky-950 hover:!text-white lg:w-1/3" :loading="loading" @click="postList" >Ver mas</el-button>
        </div>
    </div>
</template>
<script setup>
    const posts=ref([])
    const config = useRuntimeConfig();
    const limitPage = ref(0)
    const actualPage = ref(1)
    const loading = ref(false)
    async function postList() {
        try {
            const response = await $fetch(`${config.public.apiBase}/posts?page=${actualPage.value}`)
            posts.value = [...posts.value, ...response.data];
            limitPage.value = response.last_page
            actualPage.value++
        } catch (err) {
            console.error('Error inesperado:', err);
        }
        loading.value=false
    }
    onMounted(postList);
</script>