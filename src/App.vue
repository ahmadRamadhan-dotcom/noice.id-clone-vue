<template>
  <div class="app">
    <Navbar />
    <main>
      <Hero />
      <NewInNoice />
    </main>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import NewInNoice from "./components/NewInNoice.vue";
</script>
