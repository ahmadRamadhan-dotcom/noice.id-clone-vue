<template>
  <div class="app">
    <Navbar />
    <main class="">
      <Hero />
      <NewInNoice />
      <BackToTop />
      <Discover />
      <Feature />
      <EcoSystem />
      <NewsAndStory />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import NewInNoice from "./components/NewInNoice.vue";
import BackToTop from "./components/BackToTop.vue";
import Discover from "./components/Discover.vue";
import Feature from "./components/Feature.vue";
import EcoSystem from "./components/EcoSystem.vue";
import NewsAndStory from "./components/NewsAndStory.vue";
import Footer from "./components/Footer.vue";
import SwiperFeature from "./components/SwiperFeature.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    NewInNoice,
    Discover,
    Feature,
    EcoSystem,
    BackToTop,
    NewsAndStory,
    Footer,
    SwiperFeature,
  },
};
</script>

<style scoped>
.back-to-top {
  transition: background-color 1s, opacity 1s, visibility 1s;
}
</style>
