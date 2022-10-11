<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      id="modal-mask"
      class="fixed z-[9999] top-0 left-0 w-full h-full flex justify-center items-center"
    >
      <div id="modal-container" class="sm:w-full lg:w-11/12 xl:w-[72%]">
        <div id="modal-body" class="">
          <iframe
            class="w-full sm:h-[370px] lg:h-[450px] xl:h-[500px]"
            src="https://www.youtube.com/embed/sxf7kgjtqoU"
            title="Saatnya untuk Berani Bareng Noice !!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div
          id="close-modal"
          class="absolute sm:top-8 sm:right-1 xl:top-8 xl:right-60"
        >
          <button
            class="modal-default-button text-white"
            @click="$emit('close')"
          >
            <font-awesome-icon icon="fa-solid fa-xmark" size="lg" />
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
#modal-mask {
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s ease-in-out;
}

#modal-container {
  /* width: 500px; */
  /* margin: 0px auto; */
  /* padding: 20px 30px; */
  /* background-color: #fff; */
  /* border-radius: 2px; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

iframe {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  background: #000;
}
</style>
