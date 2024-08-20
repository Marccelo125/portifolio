<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <header>
    <HeaderComponent />
  </header>
  <main>
    <h1 class="text-3xl font-bold">Hello im glad to see you!</h1>
    <p>My name is <span class="font-bold text-blue-700">Marcelo Duarte</span></p>
    <div>
      <ol>
        <li>
          <a
            href="https://github.com/marccelo125"
            class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            >Github</a
          >
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/marcelo-duarte1/"
            class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            >LinkedIn</a
          >
        </li>
      </ol>
    </div>
  </main>
</template>
