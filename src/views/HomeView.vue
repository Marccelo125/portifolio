<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <header>
    <HeaderComponent />
  </header>
  <main class="bg-[#1E1E24] pt-24">
    <section>
      <div class="flex">
        <div class="w-4/6 bg-[#222831] m-16 p-8 rounded-md">
          <h1
            class="text-[#00FFAB] text-7xl"
            style="font-family: Archivo Black; letter-spacing: 0px"
          >
            Hi. I'm Marcelo. <br />
            <span>A Developer.</span>
          </h1>
          <p class="mt-6 text-white text-xl">
            I'm a a passionate about programming, web development and technology.
          </p>
        </div>
        <div class="w-2/6 m-8 p-8">
          <img src="@/assets/images/foto_perfil_linkedin.jpg" class="flex rounded-md w-5/6" />
        </div>
      </div>
    </section>

    <section class="grid grid-cols-3">
      <div class="bg-blue-100"></div>
      <div class="bg-blue-700">1</div>
      <div class="bg-blue-900"></div>
    </section>
  </main>

  <footer>
    <img src="@/assets/images/foto_perfil_linkedin.jpg" alt="" />
    <div class="flex">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum id rerum voluptatum adipisci
      iusto ducimus esse, amet eaque ipsam vero quos ea fuga sapiente sequi hic, necessitatibus
      alias accusamus est?
    </div>
  </footer>
</template>
