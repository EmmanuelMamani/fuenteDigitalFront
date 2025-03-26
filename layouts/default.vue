<!-- layouts/default.vue -->
<template>
    <div class="w-full bg-slate-200 min-h-screen ">
      <headerComp></headerComp>
      <div class="flex flex-col-reverse md:flex-row">
        <NuxtPage class="w-full md:w-5/6" />
        <commercial class="md:fixed md:top-16 md:right-0 md:h-[80vh] w-full md:w-1/6 md:mr-3"></commercial>
      </div>

    </div>
  </template>
  

  