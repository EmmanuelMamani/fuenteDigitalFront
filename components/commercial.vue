<template>
    <div class="w-full p-3 mt-3 bg-white rounded shadow-lg flex md:block space-x-2 md:space-x-0">
        <img v-for="(commercial,index) in commercials" :key="index"
            :src="`http://127.0.0.1:8000/storage/${commercial}`"
                alt="Commercial"
            class=" w-1/5 md:w-5/6 mx-auto h-auto object-cover"
        />
    </div>
</template>
<script setup>
const commercials=ref([])
const config = useRuntimeConfig();
async function sectionList() {
  try {
    const response = await $fetch(`${config.public.apiBase}/commercials`)
    commercials.value = response;
  } catch (err) {
    console.error('Error inesperado:', err);
  }
}
onMounted(sectionList);
</script>