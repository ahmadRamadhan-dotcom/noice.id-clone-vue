<template>
  <header class="sticky bg-black top-0 z-30 flex justify-center py-2">
    <div
      class="sm:w-full lg:mx-5 xl:mx-0 lg:w-full xl:w-[85%] sm:relative lg:static pb-2 flex justify-between"
    >
      <div class="mt-3 grid md:flex lg:justify-evenly">
        <div class="w-36 lg:mt-1">
          <img
            class="w-28 sm:absolute lg:static sm:left-3 sm:top-3"
            src="https://www.noice.id/wp-content/themes/zerif-lite/images/logo.svg"
            alt=""
          />
        </div>

        <ul
          class="text-white sm:border-t-[0.5px] lg:border-none sm:bg-black w-full sm:absolute lg:static sm:top-[64px] sm:py-3 md:py-0 lg:top-0 flex gap-7"
        >
          <li class="font-semibold cursor-pointer text-[14px]">
            <button
              class="bg-[#202020] text-[#FAD810] py-1.5 sm:mx-3 sm:mt-2 lg:mt-1 px-2 rounded-lg"
            >
              Beranda
            </button>
          </li>
          <li
            class="font-semibold sm:mt-4 lg:mt-[10px] dropdown cursor-pointer text-[14px]"
          >
            Tentang Noice
          </li>
          <li
            class="font-semibold sm:mt-4 lg:mt-[10px] cursor-pointer text-[14px]"
          >
            Info Terbaru
          </li>
          <li
            class="font-semibold sm:mt-4 lg:mt-[10px] cursor-pointer text-[14px]"
          >
            Noicemaker Studio
          </li>
          <li
            class="font-semibold sm:mt-4 lg:mt-[10px] cursor-pointer text-[14px]"
          >
            Iklan
          </li>
        </ul>
      </div>

      <button
        class="text-[.8rem] leading-9 flex place-items-center uppercase sm:mt-3 sm:mr-2 px-3 rounded-md bg-[#f8f9fa] font-bold"
      >
        <font-awesome-icon
          class="bg-transparent mr-5 sm:hidden lg:block"
          icon="fa-solid fa-play"
        />
        <span
          class="bg-[#f8f9fa] tracking-[2px] sm:hidden lg:block text-[#212529]"
        >
          putar konten
        </span>
        <span class="bg-[#f8f9fa] tracking-[2px] lg:hidden text-[#212529]">
          kunjungi app
        </span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.fas {
  font-family: "Font-Awesome 5 Free";
}

.dropdown::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

header {
  box-shadow: 0px 1px 1px rgba(255, 255, 255, 10%);
}
</style>
