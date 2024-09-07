<script setup lang="ts">
import DynamicIframe from '@/components/DynamicIframe.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import TecnologiesList from '@/components/TecnologiesList.vue'
import { ref } from 'vue'

const actualUrl = ref<string>('')
const iframeSwitch = ref<boolean>(false)

function showIframe(url: string) {
  actualUrl.value = url
  iframeSwitch.value = true
}

function hideIframe() {
  return (iframeSwitch.value = false)
}
</script>

<template>
  <header>
    <HeaderComponent active="work" />
  </header>
  <main class="mb-12 pb-0 w-full">
    <section class="flex justify-center">
      <div class="flex flex-col w-full lg:w-1/2 m-12 mt-28 justify-center align-center text-center">
        <h1
          class="text-[#00FFAB] text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          style="font-family: Archivo Black; letter-spacing: 0px"
        >
          Hi. I'm Marcelo. <br />
          <span>A Developer.</span>
        </h1>
        <p class="text-[#b5fce4] mb-10 mt-6 text-sm sm:text-md md:text-xl">
          I'm passionate about creating experiences with programming, <br />
          web development and technology.
        </p>
        <div class="flex font-medium text-lg justify-center gap-4 text-white mt-2 mb-8">
          <button class="btn-hireme px-10 py-3 rounded-xl">
            <a href="https://www.linkedin.com/in/marcelo-duarte1/" target="_blank">Hire me</a>
          </button>
          <button class="btn-downloadcv flex px-10 py-3 rounded-xl gap-2">
            <span
              ><a href="https://marcelo-duarte-cv.tiiny.site/" target="_blank">Download CV</a></span
            >
            <mdicon name="TrayArrowDown" size="25" />
          </button>
        </div>
        <div
          class="tecnologies-known-card text-white p-0 md:p-4 lg:mx-24 lg:p-6 rounded-3xl text-sm md:text-md lg:text-xl"
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
            MY WORKS
          </h1>
        </div>
      </section>

      <!-- BANNER MODEL 01 -->
      <!-- <section>
        <div class="grid grid-rows-3 grid-cols-3 gap-4 mx-4 md:mx-40 lg:mx-80">
          <div class="card col-span-2 rounded-md md:rounded-3xl">
            <a href="https://github.com/Marccelo125/starbucks-shop-prj" target="_blank">
              <img
                src="@/assets/images/library.png"
                class="bg-cover rounded-md md:rounded-3xl h-full w-full"
                alt=""
              />
            </a>
          </div>

          <div class="card rounded-md md:rounded-3xl">
            <a href="https://github.com/Marccelo125/starbucks-shop-prj" target="_blank">
              <img
                src="@/assets/images/card-images/calculator-fivem.png"
                class="h-full rounded-md md:rounded-3xl"
                alt=""
              />
            </a>
          </div>

          <div class="card rounded-md md:rounded-3xl">
            <a href="https://github.com/Marccelo125/starbucks-shop-prj" target="_blank">
              <img
                src="@/assets/images/card-images/grow-flix.png"
                class="h-full rounded-md md:rounded-3xl"
                alt=""
              />
            </a>
          </div>

          <div class="card col-span-2 rounded-md md:rounded-3xl">
            <a href="https://github.com/Marccelo125/starbucks-shop-prj" target="_blank">
              <img
                src="@/assets/images/card-images/growtwitter.png"
                class="rounded-md md:rounded-3xl h-full w-full"
                alt=""
              />
            </a>
          </div>

          <div class="card col-span-3 rounded-md md:rounded-3xl">
            <a href="https://github.com/Marccelo125/starbucks-shop-prj" target="_blank">
              <img
                src="@/assets/images/starbucks-prj-img.png"
                class="rounded-md md:rounded-3xl"
                alt=""
              />
            </a>
          </div>
        </div>
      </section> -->

      <!-- BANNER MODEL 02 -->
      <section v-if="iframeSwitch">
        <div class="flex justify-center aling-center">
          <DynamicIframe class="rounded-lg" :url="actualUrl" />
        </div>
        <div class="flex">
          <button
            @click="hideIframe()"
            class="bg-[#cf5a5a] mx-64 my-0 lg:mx-[22rem] w-full font-medium text-white text-lg text-center py-4 px-8"
          >
            Encerrar visualização
          </button>
        </div>
      </section>

      <section class="flex mx-2 md:mx-24 p-4 rounded-3xl">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:m-12 w-full">
          <div class="card bg-[#48be6c] rounded-3xl">
            <a href="https://github.com/Marccelo125/starbucks-shop-prj" target="_blank">
              <div class="text-end text-[#0b440e] p-6">
                <p>Front-end & Back-end</p>
                <h1
                  class="text-md sm:text-xl md:text-2xl lg:text-2xl font-bold"
                  style="font-family: Source Sans 3"
                >
                  Library
                </h1>
              </div>
              <div class="pl-8">
                <div
                  class="flex justify-center rounded-s-3xl rounded-br-3xl bg-white"
                  style="height: 220px; overflow: clip; overflow-clip-margin: content-box"
                >
                  <mdicon class="my-16" name="LibraryOutline" size="80" style="color: #48be6c" />
                </div>
              </div>
            </a>
          </div>

          <div
            @click="showIframe('https://starbucks-shop-prj.vercel.app/')"
            class="card bg-[#be8b48] rounded-3xl"
          >
            <div>
              <div class="text-end text-[#442d0b] p-6">
                <p>Front-end</p>
                <h1
                  class="text-md sm:text-xl md:text-2xl lg:text-2xl font-bold"
                  style="font-family: Source Sans 3"
                >
                  Starbucks Project
                </h1>
              </div>
              <div class="pl-8">
                <div
                  class="flex justify-center rounded-s-3xl rounded-br-3xl bg-white"
                  style="height: 220px; overflow: clip; overflow-clip-margin: content-box"
                >
                  <mdicon class="my-16" name="CoffeeToGoOutline" size="80" style="color: #be8b48" />
                </div>
              </div>
            </div>
          </div>

          <div class="card bg-[#5e48be] rounded-3xl">
            <a href="https://github.com/Marccelo125/starbucks-shop-prj" target="_blank">
              <div class="text-end text-[#150b44] p-6">
                <p>Front-end & Back-end</p>
                <h1
                  class="text-md sm:text-xl md:text-2xl lg:text-2xl font-bold"
                  style="font-family: Source Sans 3"
                >
                  Growtwitter
                </h1>
              </div>
              <div class="pl-8">
                <div
                  class="flex justify-center rounded-s-3xl rounded-br-3xl bg-white"
                  style="height: 220px; overflow: clip; overflow-clip-margin: content-box"
                >
                  <mdicon class="my-16" name="Chat" size="80" style="color: #5e48be" />
                </div>
              </div>
            </a>
          </div>

          <div
            @click="showIframe('https://growflix-project.vercel.app/')"
            class="card bg-[#be487f] rounded-3xl"
          >
            <div>
              <div class="text-end text-[#440b31] p-6">
                <p>Front-end</p>
                <h1
                  class="text-md sm:text-xl md:text-2xl lg:text-2xl font-bold"
                  style="font-family: Source Sans 3"
                >
                  Growflix
                </h1>
              </div>
              <div class="pl-8">
                <div
                  class="flex justify-center rounded-s-3xl rounded-br-3xl bg-white"
                  style="height: 220px; overflow: clip; overflow-clip-margin: content-box"
                >
                  <mdicon class="my-16" name="MovieOpen" size="80" style="color: #be487f" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>

  <FooterComponent />
</template>

<style scoped>
.btn-hireme {
  background-color: #2727e7;
  border: #2727e7 2px solid;
  transition: all 0.2s;
}

.btn-hireme:hover {
  border: #2727e7 2px solid;
  background-color: transparent;
  transform: scale(1.03);
}

.btn-downloadcv {
  border: #2727e7 2px solid;
  color: #ffffff;
  background-color: transparent;
  transition: all 0.2s;
}

.btn-downloadcv:hover {
  color: #ffffff;
  background-color: #2727e7;
  transform: scale(1.03);
}

.card {
  transition: all 0.2s;
  cursor: pointer;
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

main {
  background: linear-gradient(109deg, #111111, #161620, #1c1e29, #242736);
  background-size: 100% 1000%;

  -webkit-animation: bgDegradeAnimation 7s infinite;
  -moz-animation: bgDegradeAnimation 7s infinite;
  animation: bgDegradeAnimation 7s infinite;
}

@-webkit-keyframes bgDegradeAnimation {
  0% {
    background-position: 73% 0%;
  }
  50% {
    background-position: 28% 100%;
  }
  100% {
    background-position: 73% 0%;
  }
}
@-moz-keyframes bgDegradeAnimation {
  0% {
    background-position: 73% 0%;
  }
  50% {
    background-position: 28% 100%;
  }
  100% {
    background-position: 73% 0%;
  }
}
@keyframes bgDegradeAnimation {
  0% {
    background-position: 73% 0%;
  }
  50% {
    background-position: 28% 100%;
  }
  100% {
    background-position: 73% 0%;
  }
}
</style>
