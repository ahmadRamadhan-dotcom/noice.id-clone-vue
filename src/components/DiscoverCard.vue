<template>
  <div
    v-for="(discover, index) in discoverData"
    :key="index"
    :class="{
      'bg-[#AF1484]': discover.id === 1,
      'bg-[#1DB551]': discover.id === 2,
      'bg-[#B51D1D]': discover.id === 3,
      'bg-[#1D3EB5]': discover.id === 4,
      'bg-[#341C69]': discover.id === 5,
    }"
    :title="discover.tooltip"
    class="w-[17.5%] relative cursor-pointer xl:mt-4 py-2 flex flex-wrap justify-center h-[410px]"
  >
    <div class="flex justify-between xl:mt-2 xl:w-10/12">
      <span
        class="text-[14px] xl:w-[45%] break-words tracking-[0.1rem] text-white uppercase font-bold leading-[26px]"
        >{{ discover.title }}</span
      >
      <button
        class="inline-flex items-center justify-center w-9 h-9 text-base font-medium xl:mt-2 leading-6 text-black whitespace-no-wrap bg-white rounded-full shadow-sm"
      >
        <img src="/play-silver.svg" alt="" class="xl:w-10" />
      </button>
    </div>
    <img
      :src="discover.image"
      class="xl:h-[190px] w-full absolute bottom-0"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "DiscoverCard",
  props: {
    discoverData: Array,
  },
};
</script>
