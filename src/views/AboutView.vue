<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import LanguageSwitch from '@/components/LanguageSwitch.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <header>
    <HeaderComponent active="about" />
    <LanguageSwitch />
  </header>

  <main class="w-full">
    <section class="flex justify-center">
      <div
        class="flex flex-col w-full lg:w-1/2 m-12 mt-36 md:m-12 md:mt-40 justify-center align-center text-center"
      >
        <h1
          class="text-[#00FFAB] text-left md:text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
          style="font-family: Archivo Black; letter-spacing: 0px"
        >
          {{ t('AboutView.im-marcelo') }} <br />
        </h1>
      </div>
    </section>

    <section class="flex justify-center align-center gap-14">
      <article class="hidden lg:block md:w-1/4 lg:w-1/5">
        <img src="../assets/images/profile_photo.jpg" class="rounded-full" alt="" />
      </article>
      <article class="flex flex-col justify-center align-center w-4/5 md:w-2/4 lg:1/3">
        <div class="mt-6">
          <p
            class="text-[#00FFAB] font-bold text-4xl md:text-5xl lg:text-6xl"
            style="font-family: Archivo; letter-spacing: 0px"
          >
            {{ t('AboutView.fullstack-developer') }}
          </p>
        </div>
        <div class="mt-10">
          <span class="text-green-200 text-xl">
            {{ t('AboutView.over-the-past-year') }} <br />
          </span>
          <span class="hidden md:flex text-green-200 text-xl">
            <br />{{ t('AboutView.now-seeking-oportunities') }}
          </span>
        </div>
      </article>
    </section>

    <section class="flex justify-center">
      <div
        class="flex flex-col w-full lg:w-1/2 mt-12 md:mt-28 justify-center align-center text-center"
      >
        <h1
          class="text-[#00FFAB] text-3xl md:text-4xl lg:text-5xl"
          style="font-family: Archivo Black; letter-spacing: 0px"
        >
          {{ t('AboutView.courses-and-degrees') }} <br />
        </h1>
      </div>
    </section>

    <section class="flex justify-center align-center my-12">
      <ol
        class="relative border-s border-gray-200 dark:border-gray-700 w-full mx-12 md:mx-0 md:w-2/5"
      >
        <li class="listItem mb-6 ms-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-700"
          >
            <mdicon
              name="ApplicationBrackets"
              size="14"
              class="text-green-800 dark:text-gray-200"
            />
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Growdev - Web Full Stack
            <span
              class="bg-blue-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-700 dark:text-gray-200 ms-3"
              >{{ t('AboutView.latest') }}</span
            >
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >{{ t('AboutView.growdev-time') }}</time
          >
          <p class="flex mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {{ t('AboutView.growdev-info') }}
          </p>
        </li>
        <li class="listItem mb-6 ms-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-700"
          >
            <mdicon name="FolderPound" size="14" class="text-green-800 dark:text-gray-200" />
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            SENAC - Front End Development
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >{{ t('AboutView.senac-front-time') }}</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            {{ t('AboutView.senac-front-info') }}
          </p>
        </li>
        <li class="listItem mb-6 ms-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-700"
          >
            <mdicon name="FolderPound" size="14" class="text-green-800 dark:text-gray-200" />
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            SENAC - JavaScript Programming and Soft Skills
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >{{ t('AboutView.senac-js-time') }}</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            {{ t('AboutView.senac-js-info') }}
          </p>
        </li>
        <li class="listItem mb-6 ms-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-700"
          >
            <mdicon name="Cogs" size="14" class="text-green-800 dark:text-gray-200" />
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {{ t('AboutView.senai-mech-name') }}
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >{{ t('AboutView.senai-mech-time') }}</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            {{ t('AboutView.senai-mech-info') }}
          </p>
        </li>
        <li class="listItem ms-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-700"
          >
            <mdicon name="School" size="14" class="text-green-800 dark:text-gray-200" />
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {{ t('AboutView.high-school-name') }}
          </h3>
          <time
            class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >{{ t('AboutView.high-school-time') }}</time
          >
          <p class="font-normal text-gray-500 dark:text-gray-400">
            {{ t('AboutView.high-school-info') }}
          </p>
        </li>
      </ol>
    </section>

    <section class="flex justify-center">
      <div
        class="flex flex-col w-full lg:w-1/2 m-6 md:m-28 justify-center align-center text-center"
      >
        <h1
          class="text-[#00FFAB] text-xl sm:text-3xl md:text-4xl lg:text-5xl"
          style="font-family: Archivo Black; letter-spacing: 0px"
        >
          {{ t('AboutView.work-in-progress') }} <br />
        </h1>
      </div>
    </section>
  </main>

  <FooterComponent />
</template>

<style scoped>
.listItem {
  padding: 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  user-select: none;
  width: 100%;
}

.listItem:hover {
  padding: 20px;
  background: #242736;
}

.listItem h3,
.listItem time,
.listItem p {
  transition: transform 0.3s ease;
  word-break: normal;
}

.listItem:hover h3,
.listItem:hover time,
.listItem:hover p {
  transform: scale(1.03);
}
</style>
