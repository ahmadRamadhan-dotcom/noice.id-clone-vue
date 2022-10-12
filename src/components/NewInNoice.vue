<template>
  <div class="flex justify-center mt-16 sm:mt-12 xl:mt-10">
    <div
      class="sm:w-[550px] md:w-[720px] lg:w-[970px] xl:w-[1140px] 2xl:w-[1160px] 3xl:w-6/12 text-center sm:text-center xl:text-center grid place-content-center place-items-center"
    >
      <span class="text-2xl text-white font-bold">Yang Baru di Noice</span>
      <p
        class="text-[20px] text-[#c2c2c2] font-normal break-words w-[89%] lg:w-[70%] xl:w-2/3 xl:mt-3"
      >
        Temukan semua hal baru seputar Noice, dari update jadwal konten hingga
        beragam konten unggulan.
      </p>
    </div>
  </div>
  <VideoWrapper />
</template>

<script setup>
import VideoWrapper from "./VideoWrapper.vue";
</script>
