<template>
  <div class="flex justify-center mt-16 sm:mt-16 lg:mt-6">
    <div
      class="sm:w-[530px] md:w-[720px] lg:w-[970px] xl:w-[1140px] 2xl:w-[1160px] bg-[#141414] sm:bg-[#141414] lg:bg-[#202020] pb-8 sm:pt-6 sm:pb-5 md:pt-4 md:pb-4 lg:pt-16 lg:pb-14 sm:rounded-xl md:rounded-none lg:rounded-xl flex justify-center"
    >
      <div
        class="grid place-content-center text-center sm:grid sm:place-content-center sm:place-items-center lg:flex w-[88%] lg:justify-center md:items-center"
      >
        <div
          class="sm:grid sm:place-content-center sm:place-items-center sm:text-center lg:text-left lg:grid lg:place-content-start lg:place-items-start"
        >
          <h1 class="mt-7 sm:mt-0 text-white font-bold text-[34px]">
            Rumah Konten Audio Indonesia
          </h1>
          <span
            class="text-[#d6d6d6] text-[16px] mt-2 sm:w-[95%] lg:w-[95%] xl:w-[80%] break-words"
          >
            Nikmati ragam Podcast, Radio, Audiobook, dan Original Series yang
            seru dalam satu aplikasi konten audio karya anak bangsa.
          </span>
          <button
            aria-label="hero button for listening now"
            href="#_"
            class="relative mt-4 sm:mt-3 md:mt-7 sm:mb-3 flex items-center rounded-md justify-center py-[15px] pl-10 sm:pl-4 w-10/12 mx-auto sm:mx-0 sm:w-[56%] md:w-[40%] lg:w-[58%] xl:w-[53%] font-bold bg-[#FAD810] text-[#212529]"
          >
            <span class="absolute right-7 sm:right-8">
              <svg
                class="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>

            <span
              class="relative w-full text-left text-sm uppercase tracking-[0.2em]"
              >dengar sekarang</span
            >
          </button>
          <p class="hidden sm:hidden lg:block text-[#d6d6d6] mt-8">
            Tersedia juga di
          </p>
          <div class="hidden sm:hidden lg:flex xl:flex gap-1 mt-7">
            <a
              href="https://play.google.com/store/apps/details?id=noice.app"
              target="_blank"
              title="Google Play"
            >
              <img src="../assets/google-play-icon.svg" class="h-12" alt="" />
            </a>
            <a
              href="https://apps.apple.com/us/app/noice-radio-music-podcast/id1484372791?ls=1"
              target="_blank"
              title="App Store"
            >
              <img src="../assets/appstore-icon.svg" class="h-12" alt="" />
            </a>
          </div>
        </div>
        <img
          src="/home-1.webp"
          alt="hero banner"
          class="mt-6 sm:mt-0 lg:w-96 xl:w-full"
          title="Banner Header"
        />
      </div>
    </div>
  </div>
</template>
