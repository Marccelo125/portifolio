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
  <div class="flex justify-end gap-6">
    <button @click="setLanguage('pt')" class="bg-[#9c2c28] text-[#f1f1f1] p-2 rounded-lg">
      Portuguese
    </button>
    <button @click="setLanguage('en')" class="bg-[#2b3586] text-[#f1f1f1] p-2 rounded-lg">
      English
    </button>
  </div>
</template>
