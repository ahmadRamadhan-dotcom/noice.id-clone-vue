<template>
  <div class="flex justify-center bg-[#202020]">
    <div
      class="w-11/12 sm:w-[530px] md:w-[720px] lg:w-[970px] xl:w-[1140px] 2xl:w-[1160px] py-16"
    >
      <div
        class="flex flex-col-reverse justify-center sm:flex sm:justify-center sm:flex-col-reverse lg:flex lg:gap-10 lg:justify-between lg:flex-row lg:items-center xl:flex xl:justify-between sm:items-start"
      >
        <img
          src="/ecosystem.webp"
          alt="grid image ecosystem"
          class="mt-7 sm:mt-7"
        />
        <div class="xl:w-6/12 text-center lg:text-start">
          <span class="text-white text-2xl font-bold">{{
            $t("ecosystem.title")
          }}</span>
          <p
            class="text-[#c2c2c2] break-words xl:w-[90%] xl:mt-4 text-[20px] font-normal"
          >
            {{ $t("ecosystem.subTitle") }}
          </p>
          <a
            href="#_"
            class="inline-flex tracking-[0.2rem] mt-5 sm:mt-4 xl:mt-4 items-center rounded-md justify-center w-[70%] h-[42px] sm:w-[40%] sm:h-12 lg:w-[53%] xl:h-[50px] xl:w-[38%] text-sm font-bold leading-6 text-[#212529] whitespace-no-wrap uppercase bg-[#FAD810]"
          >
            {{ $t("ecosystem.seeDetail") }}
            <font-awesome-icon class="ml-2" icon="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
