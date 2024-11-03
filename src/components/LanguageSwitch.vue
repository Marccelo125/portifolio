<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, watchEffect } from 'vue'

const { locale } = useI18n()

const storedLang = ref<string | null>('')

const setLanguage = (newLang: string) => {
  locale.value = newLang
  localStorage.setItem('lang', newLang)
}

watchEffect(() => {
  storedLang.value = localStorage.getItem('lang')
  if (storedLang.value) {
    locale.value = storedLang.value
  }
})
</script>

<template>
  <nav class="flex fixed mt-4 mx-6 gap-4 p-4 rounded-3xl">
    <button
      v-if="storedLang != 'pt'"
      @click="setLanguage('pt')"
      class="bg-[#424242] text-[#f1f1f1] py-2 px-4 rounded-3xl"
    >
      Portuguese
    </button>

    <button
      v-if="storedLang === 'pt'"
      @click="setLanguage('pt')"
      class="bg-[#3e8a6a] text-[#f1f1f1] py-2 px-4 rounded-3xl"
    >
      Portuguese
    </button>

    <button
      v-if="storedLang != 'en'"
      @click="setLanguage('en')"
      class="bg-[#424242] text-[#f1f1f1] py-2 px-4 rounded-3xl"
    >
      English
    </button>

    <button
      v-if="storedLang === 'en'"
      @click="setLanguage('en')"
      class="bg-[#3e8a6a] text-[#f1f1f1] py-2 px-4 rounded-3xl"
    >
      English
    </button>
  </nav>
</template>

<style scoped>
nav {
  z-index: 9990;
  background-color: rgba(35, 56, 49, 0.375);
  backdrop-filter: blur(20px) saturate(1.7);
}
</style>
