<template>
  <nav class="flex align-center justify-center w-full fixed z-10 mt-4">
    <ul class="flex gap-8 p-3 text-xl text-white font-bold">
      <li>
        <router-link to="/" class="flex gap-1"
          >Work <mdicon name="slash-forward-box"
        /></router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  word-spacing: 0.375rem;
}

ul {
  border-radius: 50px;
  background-color: rgba(35, 56, 49, 0.3);
  backdrop-filter: blur(20px) saturate(1.7);
}

li {
  color: rgb(0, 255, 170);
  background-color: rgba(143, 220, 194, 0.1);
  border: transparent 3px solid;
  border-radius: 5rem;
  padding: 0.2rem 1rem;
  transition: all 0.2s;
  cursor: pointer;
}

li:hover {
  color: #ffffff;
  border: transparent 3px solid;
  background-color: rgb(0, 255, 171, 0.375);
  border-radius: 5rem;
  padding: 0.2rem 1.375rem;
  cursor: pointer;
}
</style>
