<script>
export default {
  name:"video-card",
  emits: ["click"],
  props: {
    pic: String,
    description: String,
    title: String,
    url: String,
    premium: Boolean,
  },
  data() {
    return {
    }
  },
}
</script>

<template>
  <pv-button
    @click="$emit('click')"
    class="flex w-full h-8rem md:h-3 flex-row gap-3"
  >
    <img
      class="h-full w-6"
      :src="pic"
      :alt="title"
    >
    <div class="flex flex-column justify-content-center h-full w-8 gap-2">
      <h2 class="text-3xl">
        {{ title }}
      </h2>
      <div class="flex flex-row justify-content-center align-items-center gap-2">
        <i :class="'pi ' + (premium ? 'pi-star-fill' : 'pi-star')" />
        <p>{{ premium ? "Premium" : "Free Access" }}</p>
      </div>
    </div>
  </pv-button>
</template>

<style scoped></style>
