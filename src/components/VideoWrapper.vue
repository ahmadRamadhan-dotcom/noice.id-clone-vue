<template>
  <div class="flex relative justify-center mt-10">
    <div class="sm:w-[85%] xl:w-[85%] relative">
      <img src="/videowrapper-banner.png" alt="" title="Yang Baru di Noice" />
      <span class="absolute top-[50%] left-[50%]">
        <button
          class="cursor-pointer inline-flex items-center justify-center sm:w-[60px] sm:h-[60px] xl:w-[73px] xl:h-[73px] text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#FAD810] rounded-full shadow-sm"
          data-rounded="rounded-md"
        >
          <img
            @click="showModal = !showModal"
            src="/play.png"
            alt=""
            class="sm:w-7 xl:w-9"
          />
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoWrapper",
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
