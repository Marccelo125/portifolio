<script setup lang="ts">
const props = defineProps({
  url: {
    type: String || undefined,
    default: undefined
  }
})
</script>

<template>
  <div>
    <iframe :src="props.url" class="w-full h-[350px] md:h-[400px] lg:h-[600px]" />
  </div>
</template>
