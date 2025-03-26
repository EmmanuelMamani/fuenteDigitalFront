<template>
    <div class="bg-sky-950 w-full">
        <el-menu
            :default-active="activeIndex"
            background-color="#082f49"
            text-color="#fff"
            mode="horizontal"
            active-text-color="#eab308"
            class="flex justify-between !w-2/3 !mx-auto"
        >
            <el-menu-item index="1" key="`menuitem-0`">
                <NuxtLink :to="`/`">Novedades</NuxtLink>
            </el-menu-item>

            <template v-for="(section, index) in sections">
                <el-sub-menu   v-if="section.subsections && section.subsections.length > 0"   :index="(index + 2).toString()" :key="`submenu-${index}`" >
                    <template #title>{{ section.name }}</template>
                    <el-menu-item   v-for="(sub, subIndex) in section.subsections"  :key="`subitem-${index}-${subIndex}`" :index="`${index + 2}-${subIndex + 1}`">
                        <NuxtLink :to="`/section/${sub.id}`">{{ sub.name }}</NuxtLink>
                    </el-menu-item>
                </el-sub-menu>

                <el-menu-item  v-else  :index="(index + 2).toString()" :key="`menuitem-${index}`">
                    <NuxtLink :to="`/section/${section.id}`">{{ section.name }}</NuxtLink>
                </el-menu-item>
            </template>

        </el-menu>
    </div>
</template>
<script setup>
const activeIndex = ref('1')
const sections=ref([])
const config = useRuntimeConfig();
async function sectionList() {
  try {
    const response = await $fetch(`${config.public.apiBase}/sections`)
    sections.value = response;
  } catch (err) {
    console.error('Error inesperado:', err);
  }
}
onMounted(sectionList);
</script>