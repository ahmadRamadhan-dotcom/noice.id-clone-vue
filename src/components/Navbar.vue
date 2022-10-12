<template>
  <header class="sticky bg-black top-0 z-30 flex justify-center py-3">
    <div
      class="w-full sm:w-full lg:mx-5 xl:mx-0 lg:w-full xl:w-[1140px] 2xl:w-[1160px] relative sm:relative lg:static xl:relative pb-2 flex justify-between"
    >
      <div class="mt-3 grid md:flex lg:justify-evenly">
        <div class="w-36 lg:mt-1">
          <img
            class="w-28 absolute sm:absolute lg:static left-3 top-3 sm:left-3 sm:top-3"
            src="https://www.noice.id/wp-content/themes/zerif-lite/images/logo.svg"
            alt="noice offical logo"
          />
        </div>

        <ul
          class="text-white whitespace-nowrap border-t-[0.5px] sm:border-t-[0.5px] lg:border-none overflow-auto bg-black sm:bg-black w-full absolute sm:absolute lg:static top-[64px] sm:top-[64px] py-3 sm:py-3 md:py-3 lg:py-0 lg:top-0 xl:gap-3"
        >
          <li class="font-semibold inline-block cursor-pointer text-[14px]">
            <button
              aria-label="button for homepage"
              class="bg-[#202020] text-[#FAD810] py-1.5 sm:mx-3 sm:mt-2 lg:mt-1 px-2 rounded-lg"
            >
              Beranda
            </button>
          </li>
          <li
            class="font-semibold ml-4 sm:ml-0 inline-block hover:bg-[#202020] sm:w-32 md:w-36 xl:w-32 text-center p-1 hover:rounded-full relative sm:mt-4 lg:mt-[0px] dropdown cursor-pointer text-[14px]"
          >
            Tentang Noice
          </li>
          <li
            class="font-semibold ml-4 sm:ml-0 inline-block hover:bg-[#202020] sm:w-24 xl:w-24 text-center p-1 hover:rounded-full sm:mt-4 lg:mt-[10px] cursor-pointer text-[14px]"
          >
            Info Terbaru
          </li>

          <li
            class="font-semibold ml-4 sm:ml-0 inline-block hover:bg-[#202020] sm:w-36 md:w-40 xl:w-36 text-center p-1 hover:rounded-full sm:mt-4 lg:mt-[10px] cursor-pointer text-[14px]"
          >
            Noicemaker Studio
          </li>

          <li
            class="font-semibold ml-4 sm:ml-0 inline-block hover:bg-[#202020] sm:w-16 xl:w-16 text-center p-1 hover:rounded-full sm:mt-4 lg:mt-[10px] cursor-pointer text-[14px]"
          >
            Iklan
          </li>
        </ul>
      </div>
      <button
        class="text-[.8rem] leading-9 flex place-items-center uppercase mt-3 mr-2 sm:mt-3 sm:mr-2 px-3 rounded-md bg-[#f8f9fa] font-bold"
        title="Open Noice"
      >
        <font-awesome-icon
          class="bg-transparent icon mr-5"
          icon="fa-solid fa-play"
        />
        <span class="bg-[#f8f9fa] hide tracking-[2px] text-[#212529]">
          putar konten
        </span>
        <span class="bg-[#f8f9fa] lg-hide text-[#212529]"> kunjungi app </span>
      </button>
    </div>
  </header>
</template>

<style scoped>
@media screen and (max-width: 1024px) {
  .hide {
    display: none;
  }
  .icon {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .hide {
    display: block;
  }
  .icon {
    display: block;
  }
  .lg-hide {
    display: none;
  }
}
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
