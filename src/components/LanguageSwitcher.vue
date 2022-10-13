<template>
  <select
    v-model="$i18n.locale"
    id="countries"
    :class="$i18n.locale === 'en' ? 'sm:ml-1 xl:ml-4' : 'xl:ml-4'"
    class="bg-transparent bg-black text-white cursor-pointer text-sm block w-10"
  >
    <option
      v-for="locale in $i18n.availableLocales"
      class="bg-black cursor-pointer"
      :key="`locale-${locale}`"
      :value="locale"
    >
      {{ locale }}
    </option>
  </select>
</template>
