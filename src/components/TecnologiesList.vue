<script setup lang="ts">
const props = defineProps({
  data: {
    type: String,
    default: 'all'
  }
})
</script>

<template>
  <div>
    <ul class="flex align-center justify-center flex-wrap gap-1 text-md">
      <li
        v-if="props.data.includes('dotnet') || props.data.includes('all')"
        class="flex font-semibold gap-1 bg-[#5C2D91] text-white"
        style="border-color: #5c2d91"
      >
        <mdicon name="DevTo" />
        .NET
      </li>
      <li
        v-if="props.data.includes('vuejs') || props.data.includes('all')"
        class="flex font-semibold gap-1 bg-[#00ffab] text-[#124b38]"
        style="border-color: #00ffab"
      >
        <mdicon name="Vuejs" />
        VueJS
      </li>
      <li
        v-if="props.data.includes('nuxt') || props.data.includes('all')"
        class="flex font-semibold gap-1 bg-[#1a5c46] text-[#ffffff]"
        style="border-color: #1a5c46"
      >
        <mdicon name="Nuxt" />
        Nuxt
      </li>
      <li
        v-if="props.data.includes('laravel') || props.data.includes('all')"
        class="flex font-semibold gap-1 bg-[#d1491f] text-[#ffffff]"
        style="border-color: #d1491f"
      >
        <mdicon name="Laravel" />
        Laravel
      </li>
      <li
        v-if="props.data.includes('typescript') || props.data.includes('all')"
        class="flex font-semibold gap-1 bg-[#244bb6] text-[#ffffff]"
        style="border-color: #244bb6"
      >
        <mdicon name="LanguageTypescript" />
        TypeScript
      </li>
      <li
        v-if="props.data.includes('csharp') || props.data.includes('all')"
        class="flex font-semibold gap-1 bg-[#7355f5] text-[#ffffff]"
        style="border-color: #7355f5"
      >
        <mdicon name="LanguageCsharp" />
        C Sharp
      </li>
      <li
        v-if="props.data.includes('php') || props.data.includes('all')"
        class="flex font-semibold gap-1 bg-[#4f35c2] text-[#ffffff]"
        style="border-color: #5f40e6"
      >
        <mdicon name="LanguagePhp" />
        Php
      </li>
      <li
        v-if="props.data.includes('javascript') || props.data.includes('all')"
        class="flex font-semibold gap-1 bg-[#f0f324] text-[#685215]"
        style="border-color: #f0f324"
      >
        <mdicon name="language-javascript" />
        JavaScript
      </li>
      <li
        v-if="props.data.includes('vuetify') || props.data.includes('all')"
        class="flex font-semibold gap-1 bg-[#4492a9] text-[#f7f7f7]"
        style="border-color: #4492a9"
      >
        <mdicon name="vuetify" />
        Vuetify
      </li>
      <li
        v-if="props.data.includes('tailwind') || props.data.includes('all')"
        class="flex font-semibold gap-1 bg-[#24a7f3] text-[#152468]"
        style="border-color: #24a7f3"
      >
        <mdicon name="Tailwind" />
        Tailwind
      </li>
      <li
        v-if="props.data.includes('bootstrap') || props.data.includes('all')"
        class="flex font-semibold gap-1 bg-[#8b35ec] text-[#f7f7f7]"
        style="border-color: #8b35ec"
      >
        <mdicon name="bootstrap" />
        Bootstrap
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  border: 1px solid;
  border-radius: 50px;
  padding: 0.3rem 0.675rem;
  transition: all 0.2s;
}

li:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
