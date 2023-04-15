<template>
  <div>
    <div
      v-for="comment in comments"
      :key="comment.id"
      class="p-5 border-b-2 border-bg-color hover:bg-bg-color transition-all rounded-lg"
    >
      <h2 class="text-md lg:text-2xl text-white">{{ comment.username }}</h2>
      <p class="text-gray-400 text-sm lg:text-lg">
        {{ comment.comment }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["comments"],
};
</script>
