<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps({
  active: {
    type: String,
    default: 'about'
  }
})
</script>

<template>
  <nav class="flex align-center justify-center w-full fixed z-10 mt-4">
    <ul class="flex gap-4 lg:gap-8 p-3 text-sm lg:text-xl text-white font-bold">
      <RouterLink to="/" v-if="!props.active.includes('work')" class="link-item flex gap-1">
        Work
        <mdicon name="slash-forward-box" />
      </RouterLink>

      <!-- ACTIVE -->
      <RouterLink to="/" v-if="props.active.includes('work')" class="active-item flex gap-1">
        Work
        <mdicon name="slash-forward-box" />
      </RouterLink>

      <RouterLink to="/about" v-if="!props.active.includes('about')" class="link-item"
        >About</RouterLink
      >

      <!-- ACTIVE -->
      <RouterLink to="/about" v-if="props.active.includes('about')" class="active-item">
        About
      </RouterLink>

      <RouterLink to="/contact" v-if="!props.active.includes('contact')" class="link-item"
        >Contact</RouterLink
      >

      <!-- ACTIVE -->
      <RouterLink to="/Contact" v-if="props.active.includes('contact')" class="active-item">
        Contact
      </RouterLink>
    </ul>
  </nav>
</template>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  word-spacing: 0.375rem;
  user-select: none;
}

ul {
  border-radius: 50px;
  background-color: rgba(35, 56, 49, 0.375);
  backdrop-filter: blur(20px) saturate(1.7);
}

.link-item {
  color: rgb(0, 255, 170);
  background-color: rgba(143, 220, 194, 0.125);
  border: transparent 3px solid;
  border-radius: 5rem;
  padding: 0.2rem 1rem;
  transition: all 0.2s;
  cursor: pointer;
}

.link-item:hover {
  color: #ffffff;
  border: transparent 3px solid;
  background-color: rgb(0, 255, 171, 0.5);
  border-radius: 5rem;
  padding: 0.2rem 1.375rem;
  cursor: pointer;
}

.active-item {
  color: #ffffff;
  border: transparent 3px solid;
  background-color: rgb(0, 255, 171, 0.5);
  border-radius: 5rem;
  padding: 0.2rem 1.375rem;
  cursor: pointer;
}
</style>
