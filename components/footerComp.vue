<template>
      <footer class="bg-[#03306A] text-white py-8 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">

   
      <div class="flex justify-center md:justify-start gap-4">
        
      </div>

      <div class="flex flex-col items-center text-center">
        <div class="font-bold text-xl mb-2">FUENTE DIGITAL</div>
        <p class="font-semibold">Tu fuente confiable, en un mundo de dudas<br/></p>
            <div class="flex justify-center mt-4 gap-4">
                <Icon name="logos:facebook" class='text-sky-500 text-4xl' />
                <Icon name="logos:tiktok-icon" class='text-sky-500 text-4xl' />
                <Icon name="logos:whatsapp-icon" class='text-sky-500 text-4xl' />
                <Icon name="logos:instagram-icon" class='text-sky-500 text-4xl' />
                <Icon name="logos:youtube-icon" class='text-sky-500 text-4xl' />
             
            </div>
        </div>

     
      <div class="space-y-2 ml-auto    w-full sm:w-auto">
        <NuxtLink to="/sobreNosotros" class="hover:underline cursor-pointer text-sm">
  Quiénes Somos
</NuxtLink>
        <p class="hover:underline cursor-pointer">Aviso Legal</p>
        <p class="hover:underline cursor-pointer">Política de privacidad</p>
        <p class="hover:underline cursor-pointer">Política de cookies</p>
      </div>

    </div>
  </footer>
</template>
