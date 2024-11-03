<script setup lang="ts">
import DynamicIframe from '@/components/DynamicIframe.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import LanguageSwitch from '@/components/LanguageSwitch.vue'
import TecnologiesList from '@/components/TecnologiesList.vue'
import { ref } from 'vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const actualUrl = ref<string>('')
const iframeSwitch = ref<boolean>(false)
const gHubFront = ref<string>('')
const gHubBack = ref<string>('')

function showIframe(urlDeploy: string, urlFront?: string, urlBack?: string) {
  actualUrl.value = urlDeploy

  if (urlFront != undefined) gHubFront.value = urlFront

  if (urlBack != undefined) gHubBack.value = urlBack

  iframeSwitch.value = true
}

function hideIframe() {
  gHubFront.value = ''
  gHubBack.value = ''
  return (iframeSwitch.value = false)
}

function showDialog() {
  let dialog = document.getElementById('iframeDialog')
  dialog?.classList.remove('hidden')
  dialog?.classList.add('flex')
  setTimeout(() => {
    dialog?.classList.add('opacity-100')
  }, 20)
}

function hideDialog() {
  let dialog = document.getElementById('iframeDialog')
  dialog?.classList.remove('opacity-100')
  setTimeout(() => {
    dialog?.classList.add('hidden')
    dialog?.classList.remove('flex')
  }, 500)
}
</script>

<template>
  <header>
    <HeaderComponent active="work" />
  </header>

  <section class="flex justify-center pt-16 lg:pt-0 lg:justify-start">
    <LanguageSwitch />
  </section>

  <main class="w-full">
    <section class="flex justify-center">
      <div class="flex flex-col w-full lg:w-1/2 m-12 mt-28 justify-center align-center text-center">
        <h1
          class="text-[#00FFAB] text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          style="font-family: Archivo Black; letter-spacing: 0px"
        >
          {{ t('HomeView.hi-im-marcelo') }} <br />
          <span class="hidden text-8xl lg:flex lg:justify-center">{{
            t('HomeView.a-developer')
          }}</span>
        </h1>
        <p class="text-[#b5fce4] my-6 text-md sm:text-lg md:text-xl">
          {{ t('HomeView.im-passionate-about') }}
        </p>
        <div class="font-medium flex flex-col text-lg gap-4 text-white mt-2 mb-8">
          <div class="flex justify-center">
            <button class="btn-downloadcv flex align-center px-10 py-3 rounded-xl gap-2">
              <span
                ><a href="https://marcelo-duarte-cv.tiiny.site/" target="_blank">
                  {{ t('HomeView.download-cv') }}</a
                ></span
              >
              <mdicon name="TrayArrowDown" size="25" />
            </button>
          </div>
        </div>
        <div
          class="tecnologies-known-card text-white py-4 px-0 md:p-4 lg:mx-24 lg:p-6 rounded-3xl text-sm md:text-md lg:text-xl"
        >
          <TecnologiesList data="all" />
        </div>
      </div>
    </section>

    <div>
      <section class="flex mb-4">
        <div class="flex flex-col gap-4 text-center mx-6 w-full">
          <h1
            class="text-[#00FFAB] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            style="font-family: Archivo Black; letter-spacing: 0px"
          >
            {{ t('HomeView.my-projects') }}
          </h1>
        </div>
      </section>

      <!-- MODAL -->
      <div
        @click="hideDialog(), hideIframe()"
        id="iframeDialog"
        class="justify-center items-center fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen transition-opacity duration-200 opacity-0 hidden"
      >
        <div
          @click="(event) => event.stopPropagation()"
          class="bg-[#1e1e24] rounded shadow-md w-[100%] md:w-[90%] lg:w-[70%]"
        >
          <section>
            <article class="flex justify-between align-end">
              <p class="flex text-gray-200 items-center py-3 px-5 m-2 font-medium">
                {{ t('HomeView.site-preview') }}
              </p>
              <button
                @click="hideDialog(), hideIframe()"
                class="py-3 px-5 m-2 rounded text-gray-200 transition-all duration-200 hover:scale-110"
              >
                <mdicon name="close" />
              </button>
            </article>
          </section>

          <section class="bg-white" v-if="iframeSwitch && actualUrl != ''">
            <DynamicIframe :url="actualUrl" />
          </section>

          <section class="bg-white" v-if="iframeSwitch && actualUrl == ''">
            <DynamicIframe :url="'https://guthib.com/'" />
          </section>

          <section class="flex align-center justify-center">
            <a
              v-if="gHubFront"
              :href="gHubFront"
              target="_blank"
              class="flex bg-gray-600 font-medium py-3 px-5 m-4 rounded text-gray-200 shadow-md transition-all duration-200 hover:scale-105"
            >
              GitHub Front-end
            </a>
            <a
              v-if="gHubBack"
              :href="gHubBack"
              target="_blank"
              class="flex bg-gray-600 font-medium py-3 px-5 m-4 rounded text-gray-200 shadow-md transition-all duration-200 hover:scale-105"
            >
              GitHub Back-end
            </a>
            <button
              @click="hideDialog(), hideIframe()"
              class="flex bg-red-600 font-medium py-3 px-5 m-4 rounded text-gray-200 shadow-md transition-all duration-200 hover:scale-105"
            >
              {{ t('HomeView.end-preview') }}
            </button>
          </section>
        </div>
      </div>

      <section class="flex mx-2 md:mx-24 p-4 rounded-3xl">
        <article class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:m-12 w-full">
          <div class="card bg-[#48be6c] rounded-3xl">
            <div
              @click="
                showIframe(
                  '',
                  'https://github.com/Marccelo125/front-library',
                  'https://github.com/Marccelo125/api-library'
                ),
                  showDialog()
              "
            >
              <div class="text-end text-[#0b440e] p-6">
                <p>{{ t('HomeView.in-progress') }}</p>
                <h1
                  class="text-2xl md:text-3xl lg:text-2xl font-bold"
                  style="font-family: Source Sans 3"
                >
                  Library
                </h1>
              </div>
              <div class="pl-8">
                <div
                  class="flex justify-center rounded-s-3xl rounded-br-3xl bg-[#cdffcf]"
                  style="height: 220px; overflow: clip; overflow-clip-margin: content-box"
                >
                  <mdicon class="my-16" name="LibraryOutline" size="80" style="color: #48be6c" />
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-[#be8b48] rounded-3xl">
            <div
              @click="
                showIframe(
                  'https://starbucks-shop-prj.vercel.app/',
                  'https://github.com/Marccelo125/starbucks-shop-prj'
                ),
                  showDialog()
              "
            >
              <div class="text-end text-[#442d0b] p-6">
                <p>Front-end</p>
                <h1
                  class="text-2xl md:text-3xl lg:text-2xl font-bold"
                  style="font-family: Source Sans 3"
                >
                  Starbucks Project
                </h1>
              </div>
              <div class="pl-8">
                <div
                  class="flex justify-center rounded-s-3xl rounded-br-3xl bg-[#ffe8cd]"
                  style="height: 220px; overflow: clip; overflow-clip-margin: content-box"
                >
                  <mdicon class="my-16" name="CoffeeToGoOutline" size="80" style="color: #be8b48" />
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-[#6fbeff] rounded-3xl">
            <div
              @click="
                showIframe(
                  'https://develop.di2dciudu7zky.amplifyapp.com/login',
                  'https://github.com/dev-growdev/growtwitter-front',
                  'https://github.com/dev-growdev/growtwitter-api'
                ),
                  showDialog()
              "
            >
              <div class="text-end text-[#002442] p-6">
                <p>Front-end & Back-end</p>
                <h1
                  class="text-2xl md:text-3xl lg:text-2xl font-bold"
                  style="font-family: Source Sans 3"
                >
                  Growtwitter
                </h1>
              </div>
              <div class="pl-8">
                <div
                  class="flex justify-center rounded-s-3xl rounded-br-3xl bg-[#d9f1ff]"
                  style="height: 220px; overflow: clip; overflow-clip-margin: content-box"
                >
                  <mdicon class="my-16" name="Chat" size="80" style="color: #6fbeff" />
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-[#be487f] rounded-3xl">
            <div
              @click="
                showIframe(
                  'https://growflix-project.vercel.app/',
                  'https://github.com/Marccelo125/growflix'
                ),
                  showDialog()
              "
            >
              <div class="text-end text-[#440b31] p-6">
                <p>Front-end</p>
                <h1
                  class="text-2xl md:text-3xl lg:text-2xl font-bold"
                  style="font-family: Source Sans 3"
                >
                  Growflix
                </h1>
              </div>
              <div class="pl-8">
                <div
                  class="flex justify-center rounded-s-3xl rounded-br-3xl bg-[#ffcde9]"
                  style="height: 220px; overflow: clip; overflow-clip-margin: content-box"
                >
                  <mdicon class="my-16" name="MovieOpen" size="80" style="color: #be487f" />
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-[#c94848] rounded-3xl">
            <div
              @click="
                showIframe(
                  'https://calculadora-fivem.vercel.app/',
                  'https://github.com/Marccelo125/calculadora-fivem'
                ),
                  showDialog()
              "
            >
              <div class="text-end text-[#4e0d0d] p-6">
                <p>Front-end</p>
                <h1
                  class="text-2xl md:text-3xl lg:text-2xl font-bold"
                  style="font-family: Source Sans 3"
                >
                  Calculadora FiveM
                </h1>
              </div>
              <div class="pl-8">
                <div
                  class="flex justify-center rounded-s-3xl rounded-br-3xl bg-[#ffcdcd]"
                  style="height: 220px; overflow: clip; overflow-clip-margin: content-box"
                >
                  <mdicon class="my-16" name="HeartPlusOutline" size="80" style="color: #c94848" />
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-[#5e48be] rounded-3xl">
            <div
              @click="
                showIframe(
                  'https://nikel-project.vercel.app/',
                  'https://github.com/Marccelo125/Nikel'
                ),
                  showDialog()
              "
            >
              <div class="text-end text-[#150b44] p-6">
                <p>Front-end</p>
                <h1
                  class="text-2xl md:text-3xl lg:text-2xl font-bold"
                  style="font-family: Source Sans 3"
                >
                  Nikel
                </h1>
              </div>
              <div class="pl-8">
                <div
                  class="flex justify-center rounded-s-3xl rounded-br-3xl bg-[#e0cdff]"
                  style="height: 220px; overflow: clip; overflow-clip-margin: content-box"
                >
                  <mdicon class="my-16" name="Cash" size="80" style="color: #5e48be" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  </main>

  <FooterComponent />
</template>

<style scoped>
#iframeDialog {
  z-index: 9998;
}

.contact-logo {
  transition: all 0.2s;
  color: rgb(59, 59, 59);
}

.contact-logo:hover {
  transform: scale(1.2);
  color: #00ffab;
}

.btn-downloadcv {
  border: #00ffab 2px solid;
  color: #0c0c0c;
  background-color: #00ffab;
  transition: all 0.2s;
}

.btn-downloadcv:hover {
  color: #ffffff;
  background-color: transparent;
  transform: scale(1.03);
}

.card {
  transition: all 0.2s;
  cursor: pointer;
  z-index: 1;
}

.card:hover {
  transform: scale(1.02);
  box-shadow:
    rgba(0, 0, 0, 0.07) 0px 1px 2px,
    rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px,
    rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px,
    rgba(0, 0, 0, 0.07) 0px 32px 64px;
}

.tecnologies-list:hover {
  display: none;
}

.tecnologies-known-card {
  transition: all 0.3s;
  background-color: #242736;
}

.tecnologies-known-card:hover {
  user-select: none;
  transform: scale(1.01);
}
</style>
