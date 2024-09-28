<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <header>
    <HeaderComponent active="about" />
  </header>

  <main class="w-full">
    <section class="flex justify-center">
      <div class="flex flex-col w-full lg:w-1/2 m-28 mt-48 justify-center align-center text-center">
        <h1
          class="text-[#00FFAB] text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
          style="font-family: Archivo Black; letter-spacing: 0px"
        >
          I'm Marcelo. <br />
        </h1>
      </div>
    </section>

    <section class="flex justify-center align-center gap-14">
      <article class="w-1/3 md:w-1/4 lg:w-1/5">
        <img src="../assets/images/profile_photo.jpg" class="rounded-full" alt="" />
      </article>
      <article class="flex flex-col justify-center align-center w-1/3">
        <div class="mt-6">
          <p
            class="text-[#00FFAB] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            style="font-family: Archivo; letter-spacing: 0px"
          >
            I'm a Full Stack Web Developer studing remotely from Brazil.
          </p>
        </div>
        <div class="mt-10">
          <span class="text-green-200 text-xl">
            Over the past year, I refined my skills at Growdev with the support of Sicredi Pioneira,
            while gaining experience in diverse environments that helped me develop both soft and
            hard skills. <br />

            <br />

            I'm now seeking opportunities to work alongside top professionals, where I can continue
            to grow and deliver high-quality projects ahead of schedule.
          </span>
        </div>
      </article>
    </section>

    <section class="flex justify-center">
      <div class="flex flex-col w-full lg:w-1/2 mt-28 justify-center align-center text-center">
        <h1
          class="text-[#00FFAB] text-xl sm:text-3xl md:text-4xl lg:text-5xl"
          style="font-family: Archivo Black; letter-spacing: 0px"
        >
          Courses and Degrees <br />
        </h1>
      </div>
    </section>

    <section class="flex justify-center align-center my-12">
      <ol class="relative border-s border-gray-200 dark:border-gray-700 w-1/3">
        <li class="mb-10 ms-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-800"
          >
            <mdicon name="TrayArrowDown" size="14" class="text-green-800 dark:text-gray-200" />
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Growdev - Web Full Stack
            <span
              class="bg-blue-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-800 dark:text-gray-200 ms-3"
              >Latest</span
            >
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >From September 2023 to September 2024</time
          >
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            This is where I developed my programming skills, learning design patterns to clean code
            principles. I gained hands-on experience with technologies like Vue.js, Laravel (PHP),
            as well as frameworks such as Bootstrap and Vuetify.
          </p>
        </li>
        <li class="mb-10 ms-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-800"
          >
            <mdicon name="TrayArrowDown" size="14" class="text-green-800 dark:text-gray-200" />
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            SENAC - Front End Development
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >From October 2023 to November 2023</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            This advanced course will enhance our JavaScript web development skills and improve
            teamwork and problem-solving abilities. With guidance from experienced professionals, we
            will work on real projects, preparing us for real-world challenges and ensuring we are
            ready to confidently enter the Front-End development field.
          </p>
        </li>
        <li class="mb-10 ms-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-800"
          >
            <mdicon name="TrayArrowDown" size="14" class="text-green-800 dark:text-gray-200" />
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            SENAC - JavaScript Programming and Soft Skills
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >From August 2023 to September 2023</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            This Introduction to Developer course with JavaScript and Soft Skills at Senac provides
            an exciting start for beginners in programming and web development. We will learn
            JavaScript to create websites while developing teamwork and problem-solving skills. With
            hands-on experience in real projects and guidance from professionals, we'll be ready to
            confidently enter the web development field.
          </p>
        </li>
        <li class="mb-10 ms-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-800"
          >
            <mdicon name="TrayArrowDown" size="14" class="text-green-800 dark:text-gray-200" />
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            SENAI - Industrial Machinery Maintenance
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >From September 2021 to April 2023</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            This Maintenance Mechanics course at SENAI offers comprehensive training in industrial
            mechanics, focusing on diagnosing, repairing, and maintaining mechanical equipment.
            Experienced instructors emphasize interpersonal skills, preparing students for in-demand
            roles in manufacturing, oil, automotive, and energy sectors.
          </p>
        </li>
        <li class="ms-6">
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-800"
          >
            <mdicon name="TrayArrowDown" size="14" class="text-green-800 dark:text-gray-200" />
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            High School Education
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >Finished in December 2022</time
          >
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Completed High School Education, gaining foundational knowledge and skills in various
            subjects, preparing for further academic and professional opportunities.
          </p>
        </li>
      </ol>
    </section>

    <section class="flex justify-center">
      <div class="flex flex-col w-full lg:w-1/2 m-28 justify-center align-center text-center">
        <h1
          class="text-[#00FFAB] text-xl sm:text-3xl md:text-4xl lg:text-5xl"
          style="font-family: Archivo Black; letter-spacing: 0px"
        >
          This portfolio is a work in progress. <br />
        </h1>
      </div>
    </section>
  </main>

  <FooterComponent />
</template>

<style scoped>
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
