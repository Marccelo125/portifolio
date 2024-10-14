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
    <ul class="flex align-center justify-center flex-wrap gap-2 text-xl">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=contato.marccelo125@gmail.com"
        target="_blank"
        v-if="props.data.includes('gmail') || props.data.includes('all')"
      >
        <li class="flex font-semibold gap-1 bg-[#dd634e] text-[#fff]" style="border-color: #dd634e">
          <mdicon name="Gmail" size="25" />
          Gmail
        </li>
      </a>
      <a
        href="https://www.linkedin.com/in/marcelo-duarte1/"
        target="_blank"
        v-if="props.data.includes('linkedin') || props.data.includes('all')"
      >
        <li class="flex font-semibold gap-1 bg-[#55adff] text-[#fff]" style="border-color: #55adff">
          <mdicon name="Linkedin" size="25" />
          LinkedIn
        </li>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5551999995918&text=Ol%C3%A1%20tudo%20bom?%20Vim%20pelo%20seu%20portif%C3%B3lio!"
        target="_blank"
        v-if="props.data.includes('whatsapp') || props.data.includes('all')"
      >
        <li class="flex font-semibold gap-1 bg-[#47da6c] text-[#fff]" style="border-color: #47da6c">
          <mdicon name="whatsapp" size="25" />
          Whatsapp
        </li>
      </a>
    </ul>
  </div>
</template>

<style scoped>
li {
  border: 1px solid;
  border-radius: 8px;
  padding: 0.3rem 0.675rem;
  transition: all 0.2s;
}

li:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
