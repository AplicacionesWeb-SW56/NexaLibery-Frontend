<script>
export default {
  name: "profile-tag",
  props: {
    photo: String,
    name: String,
    visible: Boolean,
  },
};
</script>

<template>
  <div
    class="w-full h-full"
  >
    <router-link
      to="/profile"
      class="w-full h-full flex flex-column align-items-center justify-content-center"
    >
      <img
        :src="photo"
        class="w-full h-full border-circle"
      >
      <p v-if="name" class="text-xl md:text-xs">
        @{{ name }}
      </p>
    </router-link>
  </div>
</template>

<style scoped></style>
