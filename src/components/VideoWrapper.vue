<template>
  <div class="flex relative justify-center mt-10">
    <div
      class="w-11/12 sm:w-[530px] md:w-[720px] lg:w-[970px] cursor-pointer xl:w-[1140px] 2xl:w-[1160px] relative"
    >
      <img src="/videowrapper-banner.webp" alt="" title="Yang Baru di Noice" />
      <span class="absolute top-[50%] left-[50%] mx-auto">
        <button
          aria-label="button for display a modal"
          @click="showModal = true"
          class="inline-flex items-center justify-center w-14 h-14 sm:w-[60px] sm:h-[60px] xl:w-[73px] xl:h-[73px] text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#FAD810] rounded-full shadow-sm"
          data-rounded="rounded-md"
        >
          <img src="/play.webp" alt="" class="w-5 sm:w-7 xl:w-9" />
        </button>
      </span>
    </div>
  </div>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal
      :show="showModal"
      @click.self="showModal = false"
      @close="showModal = false"
    >
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  name: "VideoWrapper",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
