<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
div {
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
