<template>
  <footer
    class="flex justify-center mt-12 sm:mt-10 xl:mt-16 bg-[#141414] pt-14 pb-52 sm:pt-14 sm:pb-48 lg:pt-10 lg:pb-32 xl:pt-14 xl:pb-32"
  >
    <div class="w-11/12 sm:w-[85%] lg:w-[95%] xl:w-[80%] 2xl:w-7/12 3xl:w-6/12">
      <div class="lg:flex xl:flex xl:justify-start">
        <div class="">
          <figure>
            <img src="/logo-footer.svg" alt="noice official logo" />
          </figure>
          <div
            class="flex sm:justify-between mt-7 sm:mt-8 xl:mt-7 gap-4 sm:gap-0 lg:gap-5 xl:gap-6"
          >
            <a
              aria-label="google play icon"
              href="https://play.google.com/store/apps/details?id=noice.app"
              target="_blank"
            >
              <img
                src="../assets/google-play-icon.svg"
                class="lg:h-8 xl:h-8"
                alt="google play icon"
              />
            </a>
            <a
              aria-label="apple store icon"
              href="https://apps.apple.com/us/app/noice-radio-music-podcast/id1484372791?ls=1"
              target="_blank"
            >
              <img
                src="../assets/appstore-icon.svg"
                class="lg:h-8 xl:h-8"
                alt="apple store icon"
              />
            </a>
          </div>
          <p
            class="hidden sm:hidden lg:block lg:mt-10 xl:mt-10 text-[13px] font-normal text-[#a3a3a3]"
          >
            © Noice 2022
          </p>
        </div>
        <div
          class="lg:flex lg:justify-center lg:w-11/12 lg:gap-10 xl:flex mt-12 sm:mt-10 lg:mt-0 xl:w-10/12 xl:justify-center xl:gap-[50px]"
        >
          <div
            class="relative mb-7 sm:mb-8"
            v-for="(data, index) in footerData"
            :key="index"
          >
            <span
              class="text-white cursor-pointer font-bold text-xl sm:text-[20px] lg:text-[15px] xl:text-[18px]"
              >{{ data.title }}</span
            >
            <ul
              v-for="(content, index) in data.content"
              :key="index"
              class="sm:mt-0 xl:mt-5"
            >
              <li>
                <a href="#" class="xl:text-[16px] flex text-[#e0e0e0]">
                  <font-awesome-icon
                    v-if="data.id === 4"
                    class="sm:mt-1 lg:mt-2 mr-2"
                    icon="fa-solid fa-envelope"
                  />
                  <span
                    class="sm:leading-[30px] text-lg sm:text-[16px] md:leading-9"
                    :class="{ 'text-[#fad810]': data.id === 4 }"
                  >
                    {{ content }}
                  </span>
                  <div v-if="data.id === 4" class="mt-20 absolute">
                    <span class="sm:text-xl xl:text-[17px] text-white font-bold"
                      >Ikuti Kami</span
                    >
                    <div class="flex gap-5 sm:gap-6 lg:gap-3 xl:gap-6">
                      <a
                        v-for="(data, index) in socialMediaData"
                        :key="index"
                        :href="data.link"
                        target="_blank"
                        class="mt-5 text-center hover:bg-[#fad810] bg-white text-black w-8 h-8 sm:w-7 sm:h-7 lg:w-7 lg:h-7 rounded-full grid place-content-center place-items-center items-center"
                      >
                        <font-awesome-icon :icon="data.icon" />
                      </a>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerData = [
  {
    id: 1,
    title: "Aturan yang Berlaku",
    content: ["Ketentuan Konten", "Syarat & Ketentuan", "Kebijakan Privasi"],
  },
  {
    id: 2,
    title: "Tentang Noice",
    content: ["Tentang Noice", "Produk Kami", "Karir"],
  },
  {
    id: 3,
    title: "Kerjasama dan Media",
    content: ["Info Terbaru", "Noicemaker Studio", "Iklan"],
  },
  { id: 4, title: "Hubungi Kami", content: ["support@noice.id"] },
];

const socialMediaData = [
  {
    id: 1,
    name: "instagram",
    link: "https://www.instagram.com/noice.id/",
    icon: "fa-brands fa-instagram",
  },
  {
    id: 2,
    name: "facebook",
    link: "https://www.facebook.com/noice.id",
    icon: "fa-brands fa-facebook",
  },
  {
    id: 3,
    name: "youtube",
    link: "https://www.youtube.com/c/NOICEYouTube",
    icon: "fa-brands fa-youtube",
  },
  {
    id: 4,
    name: "twitter",
    link: "https://twitter.com/noice_id",
    icon: "fa-brands fa-twitter",
  },
  {
    id: 5,
    name: "tiktok",
    link: "https://www.tiktok.com/@noice.id",
    icon: "fa-brands fa-tiktok",
  },
];
</script>
