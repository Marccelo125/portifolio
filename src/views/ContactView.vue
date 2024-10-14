<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ContactsComponent from '@/components/ContactsComponent.vue'
</script>

<template>
  <header>
    <HeaderComponent active="contact" />
  </header>

  <main class="mb-0 md:mb-12 pb-0 w-full">
    <section class="flex justify-center mb-12">
      <div
        class="flex flex-row w-full lg:w-1/2 mx-12 mt-28 justify-center align-center gap-4 md:gap-12 text-start"
      >
        <article>
          <h1
            class="text-[#00FFAB] text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
            style="font-family: Archivo; letter-spacing: 0px"
          >
            Let's start a <br />
            project together.
          </h1>
          <p class="text-[#b5fce4] my-6 text-sm sm:text-md md:text-xl">
            There are several ways to contact me, try any of the ones below
          </p>
          <article class="flex justify-start align-center gap-4 md:gap-12 text-start">
            <ContactsComponent />
          </article>
        </article>
        <article class="hidden sm:block w-1/3 min-w-32 md:w-1/4 md:min-w-44 lg:mw-1/4 lg:min-w-60">
          <img src="../assets/images/profile_photo.jpg" class="rounded-full" alt="" />
        </article>
      </div>
    </section>

    <section class="flex justify-center bg-[#1b1b20] md:bg-transparent">
      <div
        class="flex flex-row w-full justify-start lg:w-1/2 align-cente gap-4 md:gap-24 text-start"
      >
        <article class="flex justify-start">
          <img
            class="px-0 xl:px-16 size-full w-4/5 md:w-3/4 lg:w-full"
            src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif"
            alt=""
          />
        </article>
        <article>
          <h2 class="mb-2 text-md font-semibold uppercase text-gray-500">Contact</h2>
          <ul class="text-white font-medium">
            <li class="mb-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contato.marccelo125@gmail.com"
                target="_blank"
                class="hover:underline"
                >Contato.marccelo125@gmail.com</a
              >
            </li>
            <li class="mb-2">
              <a
                href="https://api.whatsapp.com/send?phone=5551999995918"
                target="_blank"
                class="hover:underline"
                >+55 51 9 9999-5918</a
              >
            </li>
          </ul>
          <h2 class="mt-8 mb-2 text-md font-semibold uppercase text-gray-500">
            Additional Information
          </h2>
          <ul class="text-white font-medium">
            <li class="mb-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contato.marccelo125@gmail.com"
                target="_blank"
                class="hover:underline"
                >Location: Brazil</a
              >
            </li>
          </ul>
        </article>
      </div>
    </section>
  </main>

  <FooterComponent />
</template>
