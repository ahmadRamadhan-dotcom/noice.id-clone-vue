<script setup lang="ts">
const discoverData = [
  {
    id: 1,
    title: "audio series",
    tooltip: "Audio Series",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456235/series-couple_sp47vd.png",
  },
  {
    id: 2,
    title: "live",
    tooltip: "Live",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456235/live-couple_n7pexk.png",
  },
  {
    id: 3,
    title: "noice podcast",
    tooltip: "Noice Podcast",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456235/podcast-curly_cznw0p.png",
  },
  {
    id: 4,
    title: "radio",
    tooltip: "Radio",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456235/radio-boy_elpic2.png",
  },
  {
    id: 5,
    title: "audio book",
    tooltip: "Audio Book",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456235/audiobook-girl_glsdtn.png",
  },
];
</script>

<template>
  <swiper
    class="swiper sm:w-[85%] md:w-[95%] lg:w-[93%] xl:w-full mt-10"
    :modules="modules"
    :grab-cursor="true"
    :slides-per-view="1"
    :space-between="10"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      '1280': {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }"
  >
    <swiper-slide
      v-for="(data, index) in discoverData"
      :key="index"
      class="slide"
    >
      <div
        :class="{
          'bg-[#AF1484]': data.id === 1,
          'bg-[#1DB551]': data.id === 2,
          'bg-[#B51D1D]': data.id === 3,
          'bg-[#1D3EB5]': data.id === 4,
          'bg-[#341C69]': data.id === 5,
        }"
        class="sm:w-full md:w-[95%] xl:w-full relative cursor-pointer xl:mt-4 py-2 sm:flex sm:flex-wrap sm:justify-center md:justify-start h-[410px]"
        :title="data.tooltip"
      >
        <div
          class="sm:flex sm:flex-col sm:w-[90%] lg:justify-center lg:flex-row md:mx-auto sm:mt-3 xl:flex xl:justify-between xl:mt-2 xl:w-10/12"
        >
          <span
            class="text-[14px] xl:w-[45%] break-words tracking-[0.1rem] text-white uppercase font-bold leading-[26px]"
            >{{ data.title }}</span
          ><button
            class="inline-flex sm:mx-8 md:mx-auto sm:mt-2 items-center justify-center sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-9 xl:h-9 border-8 text-base font-medium xl:mt-2 leading-6 text-black whitespace-no-wrap bg-white rounded-full shadow-sm"
          >
            <img src="/play-silver.svg" alt="" class="xl:w-10" />
          </button>
        </div>
        <img
          :src="data.image"
          class="sm:h-[200px] lg:h-[190px] xl:h-[190px] sm:w-full md:w-9/12 lg:w-full absolute bottom-0"
          alt=""
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

export default defineComponent({
  title: "Responsive breakpoints",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
});
</script>
