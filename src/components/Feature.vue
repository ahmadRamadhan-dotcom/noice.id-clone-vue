<template>
  <div class="flex xl:mt-10 xl:pt-5 justify-center">
    <div
      class="w-11/12 sm:w-[530px] md:w-[720px] lg:w-[970px] xl:w-[1140px] 2xl:w-[1160px] 3xl:w-6/12 mt-12 sm:mt-12 text-center"
    >
      <span class="text-white text-2xl font-bold"
        >Banyak Fitur Bikin Kamu Terhibur</span
      >
      <div
        class="hidden sm:hidden lg:grid lg:grid-cols-3 lg:place-content-center lg:place-items-center lg:mt-10"
      >
        <FeatureCard :featureData="featureData" />
      </div>
      <SwiperFeature class="lg:hidden" :featureData="featureData" />
    </div>
  </div>
</template>

<script setup>
import FeatureCard from "./FeatureCard.vue";
import SwiperFeature from "./SwiperFeature.vue";
const featureData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456085/ribuan_ckhf0z.png",
    title: "Ribuan Konten Audio, Gratis",
    content:
      "Mulai dari podcast, radio, audiobook hingga original series semua ada di Noice!",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456084/interaction_hejosn.png",
    title: "Comment, Share, Like",
    content:
      "Berinteraksi bareng kreator dan pendengar lain melalui fitur comment, share, dan like di konten favoritmu",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456084/download_pgwseu.png",
    title: "Download",
    content: "Download konten dan dengerin nanti walau tanpa koneksi",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456084/clips_fwe4lc.png",
    title: "Clips",
    content: "Cuplikan terbaik sebelum dengerin versi komplit",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456084/anywhere_qx05zo.png",
    title: "Di Mana Pun, Kapan Pun",
    content:
      "Pas lagi nge-gym, masak, belajar, atau lagi di jalan, Noice akan nemenin kamu di mana pun dan kapan pun",
  },
];
</script>
