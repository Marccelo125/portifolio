<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <header>
    <HeaderComponent active="contact" />
  </header>

  <main class="mb-12 pb-0 w-full">
    <section class="flex justify-center">
      <div class="flex flex-col w-full lg:w-1/2 m-12 mt-28 justify-center align-center text-center">
        <h1
          class="text-[#00FFAB] text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          style="font-family: Archivo Black; letter-spacing: 0px"
        >
          Contact.
        </h1>
      </div>
    </section>
  </main>

  <FooterComponent />
</template>
