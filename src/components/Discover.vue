<template>
  <div
    class="flex justify-center mt-12 sm:mt-10 xl:mt-12 bg-[#202020] py-10 sm:py-12 xl:pt-10 xl:pb-14"
  >
    <div
      class="w-11/12 sm:w-[530px] md:w-[720px] lg:w-[970px] xl:w-[1140px] 2xl:w-[1160px] xl:mt-4"
    >
      <div class="xl:mt-4">
        <div>
          <div class="lg:flex lg:justify-between">
            <span class="text-2xl text-white font-bold">{{
              $t("discover.title")
            }}</span>
            <font-awesome-icon
              class="text-white lg:hidden ml-3 cursor-pointer"
              icon="fa-solid fa-chevron-right"
            />
            <a
              href="#_"
              class="hidden sm:hidden lg:inline-flex tracking-[0.2rem] xl:mt-4 items-center rounded-md justify-center lg:w-[20%] lg:h-[50px] xl:h-[50px] xl:w-[18%] text-sm font-bold leading-6 text-[#212529] whitespace-no-wrap uppercase bg-[#FAD810]"
            >
              {{ $t("discover.seeAll") }}
              <font-awesome-icon class="ml-2" icon="fa-solid fa-arrow-right" />
            </a>
          </div>
          <p
            class="text-[20px] mt-5 sm:mt-4 lg:mt-0 text-[#c2c2c2] font-normal"
          >
            {{ $t("discover.subTitle") }}
          </p>
        </div>
      </div>
      <SwiperDiscover />
    </div>
  </div>
</template>

<script setup>
import SwiperDiscover from "./SwiperDiscover.vue";
</script>
