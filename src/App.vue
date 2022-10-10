<template>
  <div class="app">
    <Navbar />
    <main class="">
      <Hero />
      <NewInNoice />
      <button
        v-show="scrollY > 600"
        @click="backToTop"
        class="inline-flex back-to-top fixed sm:bottom-0 sm:right-2 md:bottom-0 md:right-0 lg:bottom-0 lg:right-3 items-center justify-center w-10 h-10 text-base font-medium leading-6 text-black whitespace-no-wrap bg-[#FAD810] rounded-full shadow-sm"
      >
        <img src="/up-arrow.png" alt="" class="xl:w-5" />
      </button>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import NewInNoice from "./components/NewInNoice.vue";

export default {
  name: "App",
  data() {
    return {
      scrollTimer: 0,
      scrollY: 0,
    };
  },
  components: {
    Navbar,
    Hero,
    NewInNoice,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scrollTimer) return;
      this.scrollTimer = setTimeout(() => {
        this.scrollY = window.scrollY;
        clearTimeout(this.scrollTimer);
        this.scrollTimer = 0;
      }, 300);
    },
    backToTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.back-to-top {
  transition: background-color 1s, opacity 1s, visibility 1s;
}
</style>
