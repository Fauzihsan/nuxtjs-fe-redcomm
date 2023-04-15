<template>
  <button
    v-if="!loading && keywords === '' && hasMore"
    @click="showMore"
    class="p-3 rounded-xl lg:w-1/6 md:w-1/2 w-full bg-primary-color text-white mx-auto text-sm lg:text-md"
  >
    LOAD MORE
  </button>
</template>

<script>
export default {
  props: ["loading", "keywords", "hasMore", "showMore"],
};
</script>
