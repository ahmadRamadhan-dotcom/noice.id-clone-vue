<template>
  <div class="flex justify-center sm:mt-10 xl:mt-16 h-[10000px]">
    <div class="sm:w-[85%] md:w-[95%] lg:w-[93%] xl:w-[85%] text-center">
      <span class="text-2xl text-white font-bold">Berita dan Cerita Noice</span>
      <p class="text-[#c2c2c2] sm:mt-4 xl:mt-2 text-[20px] font-normal">
        Temukan berbagai liputan media tentang bagaimana Noice menginspirasi
        Indonesia
      </p>
      <div
        class="sm:flex sm:flex-wrap sm:justify-center sm:justify-items-center sm:items-center sm:gap-[79px] md:gap-[129px] lg:gap-[45px] sm:mt-12 xl:flex xl:flex-wrap xl:justify-center xl:justify-items-center xl:items-center xl:text-center xl:mx-auto xl:gap-[90px] xl:mt-10"
      >
        <figure
          v-for="(data, index) in newsLogo"
          :key="index"
          class="sm:max-w-1/6 xl:max-w-1/6 items-center"
        >
          <img :src="data.image" alt="" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script setup>
const newsLogo = [
  {
    id: 1,
    name: "Forbes",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456706/forbes_ykkpzt.png",
  },
  {
    id: 2,
    name: "Fortune",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456706/fortune_ck0hot.png",
  },
  {
    id: 3,
    name: "Tech in Asia",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456707/techinasia_rdccah.png",
  },
  {
    id: 4,
    name: "Fimela",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456706/fimela_eicpyb.png",
  },
  {
    id: 5,
    name: "IDN Times",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456707/idn_q04wny.png",
  },
  {
    id: 6,
    name: "Marketeers",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456706/marketers_rablca.png",
  },
  {
    id: 7,
    name: "Kumparan",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456706/kumparan-1_bebwsf.png",
  },
  {
    id: 8,
    name: "THE KEN",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456707/theken_ypgxqu.png",
  },
  {
    id: 9,
    name: "Popbela",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456706/popbela_anvm8z.png",
  },
  {
    id: 10,
    name: "Detik.com",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456706/detik-1_lqbdtx.png",
  },
  {
    id: 11,
    name: "Investor",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456706/investor-1_pa95sn.png",
  },
  {
    id: 12,
    name: "Kompas",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456706/kompas_fu4xky.png",
  },
  {
    id: 13,
    name: "Bisnis.com",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456706/bisniscom_rbpb6n.png",
  },
  {
    id: 14,
    name: "DailySosial",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1665456706/dailysocial_ayaf0d.png",
  },
];
</script>
