<template>
  <swiper
    class="swiper my-20 xl:w-[85%]"
    :modules="modules"
    :grab-cursor="true"
    :slides-per-view="1"
    :space-between="10"
    :pagination="{ clickable: true }"
  >
    <swiper-slide
      v-for="(data, index) in featureData"
      :key="index"
      class="slide"
    >
      <div
        class="flex flex-col justify-center items-center sm:flex sm:flex-col pb-10 sm:pb-20 md:pb-20 sm:justify-center sm:items-center"
      >
        <div
          class="w-10/12 sm:w-10/12 sm:full md:w-10/12 items-center text-center"
        >
          <img :src="data.image" class="mb-10 w-full" alt="" /><span
            class="text-xl sm:text-xl font-bold text-white"
            >{{ data.title }}</span
          >
          <p class="text-xl sm:text-xl mt-3 text-[#c2c2c2]">
            {{ data.content }}
          </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "swiper-feature",
  props: {
    featureData: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
