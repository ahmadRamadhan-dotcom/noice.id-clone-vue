<template>
  <button
    aria-label="up arrow button"
    v-show="scrollY > 600"
    @click="backToTop"
    class="inline-flex back-to-top fixed sm:bottom-0 sm:right-2 md:bottom-0 md:right-0 lg:bottom-0 lg:right-3 items-center justify-center w-10 h-10 text-base font-medium leading-6 text-black whitespace-no-wrap bg-[#FAD810] hover:bg-white rounded-full shadow-sm"
  >
    <img src="/up-arrow.webp" alt="up arrow" class="xl:w-5" />
  </button>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
      scrollTimer: 0,
      scrollY: 0,
    };
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
