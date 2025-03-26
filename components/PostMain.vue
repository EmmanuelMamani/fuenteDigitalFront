<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white rounded-lg shadow-lg">
    
    <div class="space-y-2  md:space-y-4">

      <div class="flex items-center space-x-2  text-xs md:text-base text-sky-700">
        <Icon name="ic:outline-access-time" class="text-lg" />
        <NuxtTime :datetime="props.post.created_at" relative />
      </div>

      <div class="font-bold text-base md:text-3xl text-slate-800 tracking-tight">
        {{ props.post.title }}
      </div>
      <div class="text-slate-600 text-sm md:text-lg mt-2 line-clamp-4" v-html="props.post.description"></div>

      <div class="flex justify-end">
        <NuxtLink :to="`/post/${props.post.id}`">
          <el-button type="primary">Leer mas...</el-button>
        </NuxtLink>
      </div>

      <div class="flex items-center space-x-2 text-base text-sky-700 justify-end">
        <Icon name="ic:outline-remove-red-eye" class="text-lg" />
        <span>{{ props.post.visits + Math.floor(Math.random() * 100) + 1 }}</span>
      </div>

    </div>

    <div class="md:col-span-2 flex justify-center items-center">
      <img v-if="props.post.portada"
           :src="`http://127.0.0.1:8000/storage/${props.post.portada}`"
            alt="Post Image"
           class="w-full h-auto object-cover rounded-lg shadow-md"
      />
      <p v-else class="text-gray-500">No hay imagen disponible</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object
});

</script>
