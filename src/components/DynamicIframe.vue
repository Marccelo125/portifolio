<script setup lang="ts">
const props = defineProps({
  url: {
    type: String || undefined,
    default: undefined
  }
})
</script>

<template>
  <div class="flex flex-col justify-center aling-center">
    <iframe :src="props.url" class="md:w-[700px] md:h-[350px] lg:w-[1200px] lg:h-[600px]" />
  </div>
</template>
