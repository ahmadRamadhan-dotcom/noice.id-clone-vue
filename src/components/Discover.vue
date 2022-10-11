<template>
  <div class="flex justify-center xl:mt-12 bg-[#202020] xl:py-10">
    <div class="xl:w-[85%] xl:mt-4">
      <div class="flex justify-between xl:mt-4">
        <div>
          <span class="text-2xl text-white font-bold"
            >Pilih yang Kamu Suka dan Dengerin Semuanya!</span
          >
          <p class="text-[20px] xl:mt-3 text-[#c2c2c2] font-normal">
            Temukan beragam konten audio yang bisa dinimkati kapan aja, dimana
            aja
          </p>
        </div>
        <a
          href="#_"
          class="inline-flex tracking-[0.2rem] xl:mt-4 items-center rounded-md justify-center xl:h-[50px] xl:w-[18%] text-sm font-bold leading-6 text-[#212529] whitespace-no-wrap uppercase bg-[#FAD810]"
        >
          lihat semua
          <font-awesome-icon class="ml-2" icon="fa-solid fa-arrow-right" />
        </a>
      </div>
      <div class="flex justify-around">
        <DiscoverCard :discoverData="discoverData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import DiscoverCard from "./DiscoverCard.vue";
import Swiper from "./Swiper.vue";
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
