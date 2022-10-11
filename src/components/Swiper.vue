<template>
  <swiper
    :slidesPerView="4"
    :centeredSlides="true"
    :spaceBetween="30"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide> </swiper-slide>
    <swiper-slide class="w-[9999900px]">
      <div class="w-[18%] border-8">
        <img src="/series-couple.png" alt="" />
      </div> </swiper-slide
    ><swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide
    ><swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide
    ><swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide
    ><swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      discoverData: [
        {
          id: 1,
          title: "audio series",
          tooltip: "Audio Series",
          image:
            "https://www.noice.id/wp-content/uploads/2022/06/series-couple.png",
        },
        {
          id: 2,
          title: "live",
          tooltip: "Live",
          image:
            "https://www.noice.id/wp-content/uploads/2022/06/live-couple.png",
        },
        {
          id: 3,
          title: "noice podcast",
          tooltip: "Noice Podcast",
          image:
            "https://www.noice.id/wp-content/uploads/2022/06/podcast-curly.png",
        },
        {
          id: 4,
          title: "radio",
          tooltip: "Radio",
          image:
            "https://www.noice.id/wp-content/uploads/2022/06/radio-boy.png",
        },
        {
          id: 5,
          title: "audio book",
          tooltip: "Audio Book",
          image:
            "https://www.noice.id/wp-content/uploads/2022/06/audiobook-girl.png",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
