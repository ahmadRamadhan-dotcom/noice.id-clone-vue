<template>
  <div
    v-for="(data, index) in featureData"
    :key="index"
    :class="data.id == 4 || data.id == 5 ? 'xl:ml-[90%]' : ''"
    class="w-[76%] h-96 xl:mb-12"
  >
    <img :src="data.image" class="mb-10" alt="" />
    <span class="text-[20px] font-bold text-white">{{ data.title }}</span>
    <p class="text-base mt-3 text-[#c2c2c2]">
      {{ data.content }}
    </p>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    featureData: Array,
  },
};
</script>
